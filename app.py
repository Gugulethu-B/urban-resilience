from flask import Flask, request, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from twilio.rest import Client
import os
import time
from datetime import datetime
# Remove sqlite3 import
# import sqlite3

app = Flask(__name__)
CORS(app)

# Determine the base directory
basedir = os.path.abspath(os.path.dirname(__file__))

# Configure MySQL database
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+pymysql://root:@localhost/urbanresilience'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# Twilio credentials - Load from environment variables
TWILIO_ACCOUNT_SID = os.environ.get('TWILIO_ACCOUNT_SID', 'ACa402270d62f2c08960c5d05700e9da95')
TWILIO_AUTH_TOKEN = os.environ.get('TWILIO_AUTH_TOKEN', 'ee88de27f6b068e178eef2e4e9cf33e5')
TWILIO_PHONE_NUMBER = os.environ.get('TWILIO_PHONE_NUMBER', '+15074185631')

if not all([TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER]):
    raise ValueError("Twilio credentials are not set in environment variables.")

client = Client(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN)

def send_sms(to, body):
    client.messages.create(
        body=body,
        from_=TWILIO_PHONE_NUMBER,
        to=to
    )

# Define the Subscriber model to match the alerts table
class Subscriber(db.Model):
    __tablename__ = 'alerts'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(255), nullable=False)
    phone_number = db.Column(db.String(15), nullable=False)
    location = db.Column(db.String(255), nullable=False)

# Create database tables within the app context
with app.app_context():
    db.create_all()

# Store recent levels in memory (for the chart)
recent_levels = []
MAX_LEVELS = 20

# Routes for main pages
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/admin')
def admin_dashboard():
    return render_template('AdminDashboard.html')

@app.route('/carbon')
def carbon_tracker():
    return render_template('CarbonTracker.html')

@app.route('/user')
def user_dashboard():
    return render_template('UserDashboard.html')

@app.route('/heat')
def heat_detection():
    return render_template('HeatDetection.html')

@app.route('/waste')
def waste_gamification():
    return render_template('WasteGamification.html')

@app.route('/flood')
def flood_page():
    return render_template('flood/flood.html')

@app.route('/flood/alerts')
def flood_alerts():
    return render_template('FloodAlerts.html')

# Flood API endpoints
@app.route('/api/flood/subscribe', methods=['POST'])
def subscribe():
    try:
        data = request.get_json()
        name = data.get('name')
        phone_number = data.get('phone_number')
        location = data.get('location')
        
        if not name or not phone_number or not location:
            return jsonify({'error': 'Name, phone number, and location required'}), 400
        
        # Check for existing subscriber
        if Subscriber.query.filter_by(phone_number=phone_number).first():
            return jsonify({'error': 'Phone number already subscribed'}), 400
        
        sub = Subscriber(name=name, phone_number=phone_number, location=location)
        db.session.add(sub)
        db.session.commit()
        
        return jsonify({'message': 'Subscribed successfully', 'phone_number': phone_number})
        
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': f'Database error: {str(e)}'}), 500

@app.route('/api/flood/sensor-data', methods=['POST'])
def sensor_data():
    data = request.get_json()
    level = data.get('level')
    threshold = 5.0
    
    if level is None:
        return jsonify({'error': 'Level value required'}), 400
        
    try:
        level = float(level)
    except ValueError:
        return jsonify({'error': 'Level must be a number'}), 400
        
    # Add timestamp in HH:MM:SS format
    timestamp = datetime.now().strftime('%H:%M:%S')
    recent_levels.append({'timestamp': timestamp, 'level': level})
    
    if len(recent_levels) > MAX_LEVELS:
        recent_levels.pop(0)
    
    # Check if alert should be triggered
    if level >= threshold:
        alert_message = f'Flood warning: River level is {level}m (threshold: {threshold}m). Please take precautions!'
        results = []
        
        for sub in Subscriber.query.all():
            try:
                message = client.messages.create(
                    body=alert_message,
                    from_=TWILIO_PHONE_NUMBER,
                    to=sub.phone_number
                )
                results.append({'phone_number': sub.phone_number, 'status': 'sent'})
            except Exception as e:
                results.append({'phone_number': sub.phone_number, 'status': 'failed', 'error': str(e)})
        
        return jsonify({
            'alert_triggered': True,
            'message': alert_message,
            'results': results
        }), 200
    
    return jsonify({
        'alert_triggered': False,
        'message': f'Level {level}m is below threshold {threshold}m.'
    }), 200

@app.route('/api/flood/latest-levels', methods=['GET'])
def get_latest_levels():
    return jsonify({'levels': recent_levels})

@app.route('/api/update_river_level', methods=['POST'])
def update_river_level():
    data = request.get_json()
    level = data.get('level')
    timestamp = datetime.utcnow().isoformat()
    # conn = sqlite3.connect('flood_alert.db') # This line is removed as per the new_code
    # c = conn.cursor() # This line is removed as per the new_code
    # c.execute('INSERT INTO river_levels (timestamp, level) VALUES (?, ?)', (timestamp, level)) # This line is removed as per the new_code
    # conn.commit() # This line is removed as per the new_code
    # conn.close() # This line is removed as per the new_code
    # Check and alert subscribers if necessary # This line is removed as per the new_code
    # check_and_alert(level) # This line is removed as per the new_code
    
    return jsonify({'success': True})

# def check_and_alert(level): # This function is removed as per the new_code
#     threshold = 5.0  # Set your threshold # This line is removed as per the new_code
#     if level > threshold: # This line is removed as per the new_code
#         conn = sqlite3.connect('flood_alert.db') # This line is removed as per the new_code
#         c = conn.cursor() # This line is removed as per the new_code
#         c.execute('SELECT phone FROM subscribers') # This line is removed as per the new_code
#         phones = [row[0] for row in c.fetchall()] # This line is removed as per the new_code
#         conn.close() # This line is removed as per the new_code
#         for phone in phones: # This line is removed as per the new_code
#             send_sms(phone, f"Flood Alert! River level is {level}m, exceeding safe threshold.") # This line is removed as per the new_code

if __name__ == '__main__':
    app.run(debug=True, port=5000)
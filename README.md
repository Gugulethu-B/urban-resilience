# Green City Hack Dashboard

## Features

- Interactive data visualization for urban resilience
- AI-powered waste classification (EcoSort)
- Carbon tracking and public transport CO₂ savings
- Heat island detection using satellite data
- Flood alerts and sensor integration
- User authentication and management
- Real-time updates and notifications
- Customizable dashboard widgets

## Getting Started

### Prerequisites

- Python 3.8+
- pip (Python package manager)
- MySQL server (for database)
- (Optional) Node.js for frontend asset management

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/green-leaf-dashboard-flow.git
   cd green-leaf-dashboard-flow
   ```

2. **Create and activate a virtual environment:**
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```

3. **Install Python dependencies:**
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure MySQL database:**
   - Create a database named `urbanresilience`.
   - Update `app.py` with your MySQL username and password if needed.

5. **Set environment variables (Twilio, etc.):**
   - Create a `.env` file or set variables in your shell:
     ```
     TWILIO_ACCOUNT_SID=your_sid
     TWILIO_AUTH_TOKEN=your_token
     TWILIO_PHONE_NUMBER=your_number
     ```

### Running the Application Locally

Start the Flask development server:
```bash
python app.py
```
By default, the dashboard will be available at [http://127.0.0.1:5000](http://127.0.0.1:5000).

#### Accessing from a Different Machine

1. Find your local IP address (e.g., `192.168.1.10`).
2. Start the Flask server with host binding:
   ```bash
   python app.py --host=0.0.0.0 --port=5000
   ```
3. On another machine, open a browser and go to:
   ```
   http://<your-local-ip>:5000
   ```
   Replace `<your-local-ip>` with your actual IP address.

> **Note:** Ensure firewalls allow connections to port 5000.

### Building for Production

For production, use a WSGI server like Gunicorn:

```bash
gunicorn app:app --bind 0.0.0.0:8000
```

- Set up a reverse proxy (e.g., Nginx) for HTTPS and static file serving.
- Ensure environment variables and database credentials are set securely.

## Folder Structure

- `app.py` - Main Flask backend
- `templates/` - HTML templates
- `static/` - Static assets (CSS, JS, images)
- `ecosort.py` - AI waste classifier (mock/demo or ML model)
- `requirements.txt` - Python dependencies
- `README.md` - Project documentation

## Contributing

Contributions are welcome! Please open issues or submit pull requests for improvements.

## License

This project is licensed under the MIT License.

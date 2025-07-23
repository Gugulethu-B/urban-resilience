import time
import requests
import random

BACKEND_URL = 'http://127.0.0.1:5000/api/flood/sensor-data'
INTERVAL_SECONDS = 30

print(f"Simulating river level sensor. Sending data every {INTERVAL_SECONDS} seconds...")

while True:
    try:
        level = round(random.uniform(4.0, 6.5), 2)
        print(f"Sending river level: {level}m")
        
        response = requests.post(BACKEND_URL, json={'level': level})
        if response.ok:
            data = response.json()
            if data.get('alert_triggered'):
                print('ALERT TRIGGERED! SMS sent to subscribers.')
            else:
                print('Data sent successfully')
        else:
            print(f'Failed to send data: {response.status_code} {response.text}')
    except Exception as e:
        print(f'Error sending data: {e}')
    
    time.sleep(INTERVAL_SECONDS)
import requests
import random
import time

def get_simulated_level():
    """Simulate getting a river level."""
    return random.uniform(0, 100)

def simulate_river_level():
    while True:
        level = get_simulated_level()
        requests.post('http://localhost:5000/api/update_river_level', json={'level': level})
        time.sleep(5)  # Adjust the frequency of updates as needed

if __name__ == "__main__":
    simulate_river_level()
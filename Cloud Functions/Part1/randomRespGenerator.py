import json
import time
import random
import requests

# Sample log messages
sample_logs = [
    {"level": "INFO", "message": "User logged in", "user_id": 1},
    {"level": "DEBUG", "message": "Query executed", "user_id": 3},
]

error_logs = [
    {"level": "ERROR", "message": "Failed to connect to database", "user_id": 2},
    {"level": "ERROR", "message": "Permission denied", "user_id": 4},
]


AZURE_FUNCTION_ENDPOINT = "https://miniprojet1yh.azurewebsites.net/api/HttpTriggerMiniProjet?code=ohlhNB3zGNE5swq72Q6vL9fG1iLz1WtQUfLn8jUY_-hEAzFuUGhfmA%3D%3D"

# Function to send log to Azure Function
def send_log_to_cloud_function(log):
    try:
        response = requests.post(AZURE_FUNCTION_ENDPOINT, json=log)
        if response.status_code == 200:
            print(f"Sent log: {log}")
        else:
            print(f"Failed to send log: {log}. Status code: {response.status_code}")
    except Exception as e:
        print(f"Error sending log: {log}. Error: {e}")

# Simulate log generation and send it to the Cloud Function
def simulate_log_stream():
    while True:
        # 10% chance of generating an error log
        if random.random() < 0.1:
            log = random.choice(error_logs)
        else:
            log = random.choice(sample_logs)

        send_log_to_cloud_function(log)
        # Sleep for a random time between 0.5 and 3 seconds
        time.sleep(random.uniform(0.5, 3))

if __name__ == "__main__":
    simulate_log_stream()

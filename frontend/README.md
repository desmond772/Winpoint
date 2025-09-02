# Trading Automation Tool with Floating Bar

This project is a trading automation tool featuring a React Native floating bar UI and a Python backend that automates trades based on Telegram signals, using a Martingale strategy and randomized automation.

## Features

- **Floating Bar UI:** Buy/Sell, timeframes, amount controls, signal buttons, drag-and-drop, red tide/pot active spot.
- **Telegram Integration:** Extracts signals from up to 5 channels, auto timezone conversion.
- **Martingale Strategy:** Channel-specific limits, automated trade amount adjustment.
- **Randomized Automation:** Random delays and clicks to avoid detection.
- **API-Driven:** APK communicates with Python backend via HTTP.

## File Structure

- `backend/automation.py`: Trading & Martingale logic.
- `backend/telegram.py`: Telegram signal extraction.
- `backend/config.py`: Config for channels and settings.
- `backend/api.py`: FastAPI backend.
- `backend/requirements.txt`: Python dependencies.
- `frontend/App.js`: Main React Native app.
- `frontend/FloatingBar.js`: Floating bar component.
- `frontend/FeatureButton.js`: Feature button.
- `frontend/DragDropArea.js`: Drag and drop area.
- `frontend/styles.js`: Theme/colors.
- `README.md`: This file.

## Setup

### Backend

1. Install dependencies:
    ```
    pip install -r backend/requirements.txt
    ```
2. Run the API:
    ```
    uvicorn backend.api:app --reload
    ```

### Frontend (React Native)

1. Install dependencies:
    ```
    cd frontend
    npm install
    ```
2. Build and run APK:
    ```
    npx react-native run-android
    ```

## Deployment

- **Backend:** Deploy `backend` to Zeabur or any cloud/server. Make sure the API is publicly accessible.
- **Frontend:** Build APK and install on Android device. Configure the API endpoint URL if needed.

## Notes

- The backend must be running and accessible to the APK for full functionality.
- The APK alone does **not** handle Telegram or browser automation.

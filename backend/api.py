from fastapi import FastAPI
from backend.automation import perform_trade, martingale_strategy
from backend.config import CHANNEL_SETTINGS

app = FastAPI()

@app.post("/trade/")
def trade(action: str, amount: float, timeframe: str):
    perform_trade(action, amount, timeframe)
    return {"status": "success"}

@app.post("/martingale/")
def martingale(channel: str, last_result: str, current_amount: float):
    new_amount = martingale_strategy(channel, last_result, current_amount)
    return {"new_amount": new_amount}

@app.get("/channels/")
def get_channels():
    return {"channels": list(CHANNEL_SETTINGS.keys())}

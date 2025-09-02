from telethon import TelegramClient, events
from datetime import datetime, timedelta
from backend.config import TELEGRAM_API_ID, TELEGRAM_API_HASH, TELEGRAM_CHANNELS

client = TelegramClient('trading_tool', TELEGRAM_API_ID, TELEGRAM_API_HASH)

def convert_timezone(signal_time, target_offset):
    # Converts UTC to desired timezone offset
    return signal_time + timedelta(hours=target_offset)

async def extract_signals(callback):
    @client.on(events.NewMessage(chats=TELEGRAM_CHANNELS))
    async def handler(event):
        msg = event.message.message
        # Example: Extract CADUSD signals
        if "CADUSD" in msg:
            signal_time = datetime.utcnow()
            local_time = convert_timezone(signal_time, target_offset=-4)  # Example offset
            callback({'signal': 'CADUSD', 'time': local_time})
    await client.start()
    await client.run_until_disconnected()

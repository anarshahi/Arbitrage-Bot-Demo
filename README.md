# Arbitrage Trading Bot for DEX (Full Version)

This advanced arbitrage trading bot is designed for automatic detection and execution of profitable trades between multiple decentralized exchanges (DEX) such as PancakeSwap, ApeSwap, Biswap, SushiSwap, and 1inch.  
It operates on the Binance Smart Chain (BSC) and supports both testnet and mainnet environments.

## Key Features

### 1. Automatic Arbitrage Opportunity Detection
- Real-time price monitoring across multiple DEX.  
- Compares token rates to identify profitable price differences.  
- Calculates potential profit considering gas fees.  

### 2. Multi-Pair Support
- Pre-configured pairs: WBNB/USDT, ETH/USDT, BTC/USDT, BUSD/WBNB, CAKE/USDT, USDC/USDT, DOGE/USDT.  
- Easy addition of new pairs without modifying core code.  

### 3. Slippage Control
- Dynamic slippage adjustment based on volatility and trade volume.  
- Protection against price fluctuations during transactions.  

### 4. Gas Fee Optimization
- Real-time gas price monitoring.  
- Limits maximum gas costs for transactions.  
- Auto-cancellation of trades if gas fees exceed the set limit.  

### 5. Risk Management System
- Stop-loss and take-profit strategies.  
- Limits the number of simultaneous trades (default: 3).  
- Balance monitoring and automatic shutdown if funds drop below the threshold.  

### 6. Reverse Swap Mechanism
- Automatic conversion back to the base currency after completing arbitrage trades.  
- Protection against locked funds in illiquid tokens.  

### 7. Address Validation
- Verifies contract and token addresses to prevent errors.  

### 8. Logging and Error Tracking
- Logs all actions and transactions for analysis.  
- Records errors with detailed transaction data for debugging.  

### 9. Telegram Integration
- Full control and monitoring through Telegram commands:  
  - `/start` - Launch the bot and view available commands.  
  - `/balance` - Check wallet balance.  
  - `/arbitrage` - Manually trigger the arbitrage algorithm.  
  - `/profit` - View profit reports.  
  - `/history` - View transaction history.  
  - `/sell` - Sell tokens and stop operations.  
- Real-time notifications for transactions and errors.  

### 10. Flexible Configuration via .env File
- Easy parameter updates without modifying code.  
- Supports testnet for strategy testing without risking funds.  

### 11. Testing and Diagnostics
- Built-in scripts to check network connections and contract operations.  
- Diagnostic tools for debugging and performance analysis.  

### 12. Security
- Secure storage of API keys using .env files.  
- File permissions to restrict unauthorized access.  

## Supported DEX
- PancakeSwap  
- ApeSwap  
- Biswap  
- SushiSwap  
- 1inch  

Scalable to support additional DEX upon request.  

## Technical Specifications

- **Programming Language:** JavaScript (Node.js)  
- **Libraries:** ethers.js, node-telegram-bot-api, dotenv  
- **Network:** Binance Smart Chain (BSC)  
- **System Requirements:**  
  - RAM: 2 GB  
  - Disk Space: 5 GB  
  - OS: Ubuntu 20.04 or newer  

## Installation

1. Clone the repository:  
   ```bash
   git clone <repository-url>
Install dependencies:
npm install
Create a .env file with the following parameters:
INFURA_API_KEY=<your_api_key>
PRIVATE_KEY=<your_private_key>
TELEGRAM_BOT_TOKEN=<your_telegram_bot_token>
Start the bot:
node telegram.js

Pricing and Licensing
Demo Version: $80 (Testnet only).
Full Version (without support): $2700.
Licensed under MIT License (see LICENSE file).
Contact
For more details or custom solutions, please contact us:
📧 Email: aladeiash@gmail.com
📱 Telegram: @botcreater77

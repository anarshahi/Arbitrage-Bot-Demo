# Arbitrage Trading Bot for DEX (Information and Demo Access)

This repository contains information about our advanced arbitrage trading bot designed for decentralized exchanges (DEX) such as PancakeSwap, ApeSwap, Biswap, SushiSwap, and 1inch.  
The bot operates on the Binance Smart Chain (BSC) and supports both testnet and mainnet environments.

---

## Important Notice:
The demo code for this bot is stored in a **private repository** for security reasons.  
Access to the demo code is available **only after payment**.  

### **Price List:**
- **Demo Version (Testnet Only):** $80  
- **Full Version (without support):** $2700  

---

## How to Get Access:
1. Contact us via email or Telegram:  
   - 📧 **Email:** aladeiash@gmail.com  
   - 📱 **Telegram:** @botcreater77  
2. After payment, we will invite you to the **private repository** containing the demo code.  
3. The private repository link will be shared after payment confirmation.  

---

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
- Authorization key and expiry date for demo version protection.  
- Allowed user IDs for Telegram access.

---

## Supported DEX
- PancakeSwap  
- ApeSwap  
- Biswap  
- SushiSwap  
- 1inch  

Scalable to support additional DEX upon request.  

---

## Technical Specifications

- **Programming Language:** JavaScript (Node.js)  
- **Libraries:** ethers.js, node-telegram-bot-api, dotenv  
- **Network:** Binance Smart Chain (BSC)  
- **System Requirements:**  
  - RAM: 2 GB  
  - Disk Space: 5 GB  
  - OS: Ubuntu 20.04 or newer  

---

## Installation and Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd arbitrage_bot_code_demo
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create and Configure the `.env` File
```bash
nano .env
```

**Add the following parameters:**
```plaintext
AUTH_KEY=securekey123
INFURA_API_KEY=http://127.0.0.1:8545
PRIVATE_KEY=<Ganache_Private_Key>
TELEGRAM_BOT_TOKEN=<Your_Telegram_Bot_Token>
```

### 4. Start Ganache
```bash
ganache --chain.chainId 97 --miner.gasLimit 30000000
```

### 5. Test Connection
```bash
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' -H "Content-Type: application/json" http://127.0.0.1:8545
```

### 6. Run the Bot
```bash
node telegram_demo.js
```

### 7. Telegram Commands
- `/status` - Check wallet balance.  
- `/simulate` - Simulate trade.  
- `/help` - List all commands.  

---

## Troubleshooting
- **Ganache RPC Issues:**  
  Restart Ganache if errors occur and ensure the correct network ID is used.  
- **Balance Errors:**  
  Double-check the private key and testnet settings.  

---

## Licensing
- **Demo Version (Testnet Only):** $80  
- **Full Version (without support):** $2700  
- Licensed under **MIT License** (see LICENSE file).  

---

## Contact
For more details or custom solutions, please contact us:  
📧 **Email:** aladeiash@gmail.com  
📱 **Telegram:** @botcreater77


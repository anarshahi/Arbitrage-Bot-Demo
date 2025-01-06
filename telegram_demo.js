
require('dotenv').config();
const { Telegraf } = require('telegraf');
const ethers = require('ethers');

// Environment variables
const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN || 'demo_token';
const INFURA_URL = process.env.INFURA_URL || 'https://bsc-testnet.infura.io/v3/demo';
const WALLET_PRIVATE_KEY = process.env.PRIVATE_KEY || 'demo_private_key';

// Initialize Telegram bot
const bot = new Telegraf(BOT_TOKEN);

// Setup provider and wallet for Binance Smart Chain Testnet
const provider = new ethers.JsonRpcProvider(INFURA_URL);
const wallet = new ethers.Wallet(WALLET_PRIVATE_KEY, provider);

// Bot Commands
bot.start((ctx) => ctx.reply('Welcome to the Demo Arbitrage Bot! Full functionality is available in the premium version.'));
bot.command('status', async (ctx) => {
    try {
        const balance = await provider.getBalance(wallet.address);
        const formattedBalance = ethers.formatEther(balance);
        ctx.reply(`Current balance: ${formattedBalance} BNB (testnet)`);
    } catch (error) {
        ctx.reply('Error retrieving balance. Please check your configuration.');
    }
});

bot.command('simulate', async (ctx) => {
    const tokenA = '0xTokenA'; // Demo token
    const tokenB = '0xTokenB';
    const priceA = Math.random() * 100; // Simulated price
    const priceB = Math.random() * 100;

    const profit = priceB - priceA;
    if (profit > 0) {
        ctx.reply(`Simulation: Profitable trade detected! Profit: ${profit.toFixed(2)} USDT`);
    } else {
        ctx.reply('Simulation: Trade is not profitable.');
    }
});

bot.command('help', (ctx) => {
    ctx.reply('/status - Check balance\n/simulate - Simulate trade\n/help - Get help');
});

// Error handling
bot.catch((err, ctx) => {
    console.error(`Error: ${err}`);
    ctx.reply('An error occurred. Please try again later.');
});

// Launch bot
bot.launch();
console.log('Demo bot started!');

// Graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));

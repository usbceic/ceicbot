const Telegraf = require('telegraf')

/**
 * Si estamos en ambiente de desarrollo, necesitamos cargar las
 * variables de entorno del archivo .env
 */
if (process.env.NODE_ENV === 'env') require('dotenv').config()

/**
 * Inicializamos el bot
 */
const bot = new Telegraf(process.env.BOT_TOKEN)

bot.use(
  require('./handlers/middlewares'),
  require('./handlers/commands')
)

bot.startPolling()

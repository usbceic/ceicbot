const Telegraf = require('telegraf')
const session = require('telegraf/session')
const Stage = require('telegraf/stage')

/**
 * Si estamos en ambiente de desarrollo, necesitamos cargar las
 * variables de entorno del archivo .env
 */
if (process.env.NODE_ENV === 'env') require('dotenv').config()

/**
 * Inicializamos el bot
 */
const bot = new Telegraf(process.env.BOT_TOKEN)

/**
 * Pedimos las escenas
 */
const newPoll = require('./scenes/newpoll')
const stage = new Stage()

stage.register(newPoll)

bot.use(
  session(),
  stage.middleware(),
  require('./handlers/middlewares'),
  require('./handlers/commands')
)

bot.startPolling()

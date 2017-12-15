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

/**
 * El uso del bot es solo para los miembros de la JD-CEICUSB
 */
const allowedUsers = [
  'AbelardoSalazar',
  'Allicenteno',
  'CientificoHumanista',
  'Davidrod',
  'ElDeLosReales',
  'germanrobayo33',
  'giacomo096',
  'gus_kst',
  'JaqueFarrach',
  'JBadBunny',
  'ManuelGuillermoGil',
  'MariaGCafarelli',
  'Maridevalery',
  'NeilVillamizar',
  'yuniquintero'
]

const checkUsername = (userid) => allowedUsers.indexOf(userid) !== -1

bot.start((ctx) => {
  const {username, first_name: firstName} = ctx.from
  return ctx.reply(checkUsername(username)
    ? `Bienvenido ${firstName}
Usa /help para ver la lista de comandos`
    : `El bot es de uso privado de la JD-CEICUSB`)
})

bot.startPolling()

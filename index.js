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

/**
 * Middleware para que primero se verifique si el usuario es valido o no
 */
bot.use((ctx, next) => {
  if (!ctx.from.username || !checkUsername(ctx.from.username)) {
    ctx.reply('El bot es de uso privado de la JD-CEICUSB')
    return
  }
  next()
})

/**
 * Comando `/start`
 * Solo saluda al usuario
 */
bot.start(ctx => {
  return ctx.reply(`Bienvenido ${ctx.from.first_name}
Usa /help para ver la lista de comandos`)
})

/**
 * Comando `/help`
 * Muestra los comandos disponibles del bot
 */
bot.command('help', ctx => {
  const comandos = `La lista de comandos es:

- /help Muestra esta lista de comandos
- /miembros Lista los usernames de los miembros de la JD-CEICUSB`
  ctx.reply(comandos)
})

/**
 * Comando `/miembros`
 * Lista los usernames de los miembros de la JD-CEICUSB
 */
bot.command('miembros', ctx => {
  ctx.reply(`Los miembros de la JD-CEICUSB 2017-2018 son:

${allowedUsers.map(user => `- @${user}`).join('\n')}`)
})


bot.startPolling()

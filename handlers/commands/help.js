/**
 * Comando `/help`
 * Muestra los comandos disponibles del bot
 */

module.exports = ctx => {
  const comandos = `La lista de comandos es:

- /help Muestra esta lista de comandos
- /miembros Lista los usernames de los miembros de la JD-CEICUSB`
  ctx.reply(comandos)
}

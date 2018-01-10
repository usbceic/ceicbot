const config = require('../../bot.config')

/**
 * Comando `/miembros`
 * Lista los usernames de los miembros de la JD-CEICUSB
 */
module.exports = ({ reply }) => {
  reply(`Los miembros de la JD-CEICUSB son:

${config.allowedUsers.map(user => `- @${user}`).join('\n')}`)
}

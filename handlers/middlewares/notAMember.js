const config = require('../../bot.config')

const checkUsername = (userid) => config.allowedUsers.indexOf(userid) !== -1

const notAMember = (ctx, next) => {
  const username = ctx.from.username
  if (!username || !checkUsername(username)) {
    return ctx.reply('El bot es de uso privado de la JD-CEICUSB')
  }
  return next()
}

module.exports = notAMember

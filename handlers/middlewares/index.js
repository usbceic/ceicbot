const { Composer } = require('telegraf')

const composer = new Composer()
const notAMember = require('./notAMember')

composer.use(notAMember)

module.exports = composer

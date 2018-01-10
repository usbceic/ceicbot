const Stage = require('telegraf/stage')
const Scene = require('telegraf/scenes/base')
const { leave } = Stage

/**
 * Escena para la creacion de newpolls
 */
const newPolls = new Scene('newpoll')

newPolls.enter(ctx => {
  console.log(ctx.scene.state)
  ctx.reply('hola')
})

newPolls.hears(/bye/, leave())

module.exports = newPolls

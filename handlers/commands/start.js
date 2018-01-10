module.exports = ctx => {
  console.log(ctx.match)
  return ctx.reply(`Bienvenido ${ctx.from.first_name}
Usa /help para ver la lista de comandos`)
}

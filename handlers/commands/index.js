/**
 * En este archivo se combinaran todos los middlewares de cada comando en un
 * solo middleware
 */
const { Composer } = require('telegraf')

const composer = new Composer()

const memberHandler = require('./miembros')
const helpHandler = require('./help')
const startHandler = require('./start')
const pollHandler = require('./newpoll')

/**
 * `composer` es un objeto del que extiende `telegraf`, todos los metodos para
 * handling de data de `Telegraf` vienen de `composer`. Asi, podemos usar
 * composer.on, composer.command, etc.
 */
composer.hears(/\/start ?(.*)?/, startHandler)
composer.command('miembros', memberHandler)
composer.command('help', helpHandler)
composer.command('newpoll', pollHandler)

module.exports = composer

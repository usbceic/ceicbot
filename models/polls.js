const { Schema, model } = require('mongoose')

const pollsSchema = Schema({
  title: String,
  options: Array,
  owner: String,
  url: String,
  usersWhoVote: Array
})

const Polls = model('Polls', pollsSchema)

const createPoll = (newPoll) => {

}

module.exports = Polls
module.exports.createPoll = createPoll

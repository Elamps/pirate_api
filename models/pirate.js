const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pirateSchema = new Schema({
  name: {type: String, default: `Robot3`},
  weapon: {type: String, default: 'None3'},
  phrase: {type: String, default: 'Arrr3'}
},{
  timestamps: true
});

module.exports = mongoose.model('Pirate', pirateSchema);
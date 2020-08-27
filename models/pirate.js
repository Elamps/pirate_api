const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pirateSchema = new Schema({
  name: {type: String, required: true},
  weapon: {type: String, default: 'None'},
  age: {type: Number, default: 18}
},{
  timestamps: true
});

module.exports = mongoose.model('Pirate', pirateSchema);
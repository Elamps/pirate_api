const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pirateSchema = new Schema({
    name: { type: String, required: true},
  weapon: {type: String, default: "None" },
  phrase: {type: String, default:"Arrr"}
},{
  timestamps: true
});

module.exports = mongoose.model('Pirate', pirateSchema);
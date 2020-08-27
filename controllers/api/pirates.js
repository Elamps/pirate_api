const Pirate = require('../../models/pirate');

module.exports = {
  index,
  show,
  create,
  delete: deleteOne,
  update
};

function update(req, res) {
  Pirate.findByIdAndUpdate(req.params.id, req.body, {new: true})
  .then(function(pirate) {
    res.status(200).json(pirate);
  });
}

function deleteOne(req, res) {
  Pirate.findByIdAndRemove(req.params.id).then(function(pirate) {
    res.status(200).json(pirate);
  });
}

function show(req, res) {
  Pirate.findById(req.params.id).then(function(pirate) {
    res.status(200).json(pirate);
  });
}

function create(req, res) {
  Pirate.create(req.body).then(function(pirate) {
    res.status(201).json(pirate);
  });
}

function index(req, res) {
  Pirate.find({}).then(function(pirates) {
    res.status(200).json(pirates);
  });
}
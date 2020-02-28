//Controller for Note model

var db = require("../models");

module.exports = {
    findNote: function (req, res) {
        db.Note
            .find({Article: req.params.id})
            .then(function (dbResult) {
                res.json(dbResult);
            });
    },
    createNote: function (req, res) {
        db.Note
            .create(req.body)
            .then(function (dbResult) {
                res.json(dbResult);
            });
    },
    deleteNote: function (req, res) {
        db.Note
            .remove({_id : req.params.id})
            .then(function (dbResult) {
                res.json(dbResult);
            });
    },
};  

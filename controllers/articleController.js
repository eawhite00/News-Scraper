//Controller for Article model

var db = require("../models");

module.exports = {
    getAll: function (req, res) {
        db.Article
            .find()
            .sort({ date: -1 })
            .then(function (dbResult) {
                res.json(dbResult);
            });
    },
    getAllUnsaved: function (req, res) {
        db.Article
            .find({saved: false})
            .sort({ date: -1 })
            .then(function (dbResult) {
                res.json(dbResult);
            });
    },
    getAllSaved: function (req, res) {
        db.Article
            .find({saved: true})
            .sort({ date: -1 })
            .then(function (dbResult) {
                res.json(dbResult);
            });
    },
    deleteAll: function (req, res) {
        db.Note
            .remove({}).then(function () {
                return db.Article.remove({})            })
            .then(function (){
                res.json({done: true});
            })
    },
    saveArticle: function (req, res) {
        db.Article
            .findOneAndUpdate({ _id: req.params.id }, { saved: true }, { new: true })
            .then(function(dbResponse) {
                console.log(dbResponse);
                res.json(dbResponse);
            })
    },
    unsaveArticle: function (req, res) {
        db.Article
            .findOneAndUpdate({ _id: req.params.id }, { saved: false }, { new: true })
            .then(function(dbResponse) {
                console.log(dbResponse);
                res.json(dbResponse);
            })
    }
};  

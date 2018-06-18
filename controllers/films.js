const films = require('../models/films')();
const Film = require('../models/film');
const Review = require('../models/review');
const express = require('express');
const filmRouter = new express.Router();

filmRouter.get('/:id', function(req, res){
    const index = req.params.id;
    res.json({AllFilms: films[index]})
});

filmRouter.put('/:id', function(req, res){
    const index = req.params.id;
})

filmRouter.get('/', function(req, res){
    res.json({AllFilms: films})
})

filmRouter.delete('/:id', function(req, res){
    const index = req.params.id;
    films.splice(index, 1);
    res.json({data: films});
});

filmRouter.post('/', function(req, res){
    const newFilm = new Film(req.body);
})


module.exports = filmRouter;
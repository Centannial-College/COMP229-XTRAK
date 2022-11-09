import movieModel from '../models/movies.js';

import { UserDisplayName } from '../utils/index.js';

export function DisplayIncidentList(req, res, next){
    movieModel.find(function(err, moviesCollection) {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Incident List', page: 'incident/list', movies: moviesCollection, displayName: UserDisplayName(req)});
    })
}

export function DisplayIncidentAddPage(req, res, next){
    res.render('index', { title: 'Add Incident', page: 'incident/edit', movie: {}, displayName: UserDisplayName(req) });
}

export function ProcessIncidentAddPage(req, res, next){
    
    let newMovie = movieModel({
        name: req.body.name,
        year: req.body.year,
        director: req.body.director,
        genre: req.body.genre,
        runtime: req.body.runtime
    });

    movieModel.create(newMovie, (err, Movie) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/incident-list')
    } )
}

export function DisplayIncidentEditPage(req, res, next){
    let id = req.params.id;

    movieModel.findById(id, (err, movie) => {
        if(err){
            console.error(err);
            res.end(err);
        }

        res.render('index', { title: 'Edit Incident', page: 'incident/edit', movie: movie, displayName: UserDisplayName(req) });
    });    
}

export function ProcessIncidentEditPage(req, res, next){

    let id = req.params.id;
    
    let newMovie = movieModel({
        _id: req.body.id,
        name: req.body.name,
        year: req.body.year,
        director: req.body.director,
        genre: req.body.genre,
        runtime: req.body.runtime
    });

    movieModel.updateOne({_id: id }, newMovie, (err, Movie) => {
        if(err){
            console.error(err);
            res.end(err);
        };

        res.redirect('/incident-list')
    } )
}

export function ProcessIncidentDelete(req, res, next){
    let id = req.params.id;

    movieModel.remove({_id: id}, (err) => {
        if (err){
            console.error(err);
            res.end(err);
        }

        res.redirect('/incident-list');
    })
}


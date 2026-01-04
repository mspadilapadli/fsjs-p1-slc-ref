const Model = require("../models/model");

class Controller {
    static home(req, res) {
        try {
            res.render("home");
        } catch (error) {
            res.send(error);
        }
    }
    static async readPH(req, res) {
        try {
            const dataPHs = await Model.getPHs();
            res.render("phs", { dataPHs });
        } catch (error) {
            res.send(error);
        }
    }
    static async readMovies(req, res) {
        try {
            const dataMovies = await Model.getMovies();
            res.render("movies", { dataMovies });
        } catch (error) {
            res.send(error);
        }
    }
    static async showForm(req, res) {
        try {
            const { id } = req.params;
            const listPH = await Model.getPHs();
            let action = "/movies/add";
            let movie = {};

            if (id) {
                action = `/movies/edit/${id}`;
                movie = await Model.getMovieById(id);
            }
            console.log(movie);
            res.render("showForm", { movie, listPH, action });
        } catch (error) {
            console.log(error);
            // res.send(error);
        }
    }
    static async postAdd(req, res) {
        try {
            const data = { ...req.body };
            await Model.submitAdd(data);
            res.redirect("/movies");
        } catch (error) {
            console.log(error);
        }
    }
    static async postEdit(req, res) {
        try {
            const { id } = req.params;
            const payload = { ...req.body };
            await Model.submitEdit(id, payload);
            res.redirect("/movies");
        } catch (error) {
            res.send(error);
        }
    }
    static async deleteMovie(req, res) {
        try {
            const { id } = req.params;
            await Model.deleteMovie(id);
            res.redirect("/movies");
        } catch (error) {
            res.send(error);
        }
    }
}
module.exports = Controller;

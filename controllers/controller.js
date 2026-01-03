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
            console.log(dataMovies, "ctrl");
            res.render("movies", { dataMovies });
        } catch (error) {
            // res.send(error);
            console.log(error);
        }
    }
    static async showForm(req, res) {
        try {
        } catch (error) {
            res.send(error);
        }
    }
    static async submitAdd(req, res) {
        try {
        } catch (error) {
            res.send(error);
        }
    }
    static async submitEdit(req, res) {
        try {
        } catch (error) {
            res.send(error);
        }
    }
    static async deleteMovie(req, res) {
        try {
        } catch (error) {
            res.send(error);
        }
    }
}
module.exports = Controller;

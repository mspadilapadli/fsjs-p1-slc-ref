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

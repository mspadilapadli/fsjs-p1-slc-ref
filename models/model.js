const Factory = require("./class");
const pool = require("../config/connection");

class Model {
    static async getPHs() {
        try {
            let query = `SELECT * FROM "ProductionHouses" ORDER BY "name_prodHouse" ASC `;
            const { rows } = await pool.query(query);
            return Factory.instancePHs(rows);
        } catch (error) {
            throw error;
        }
    }
    static async getMovies() {
        try {
            let query = `SELECT m."id", m."name" ,m.released_year ,m.genre ,m."ProductionHouseId", p."name_prodHouse" as "ph_name"
FROM "Movies" m inner join "ProductionHouses" p 
ON p."id" = m."ProductionHouseId"
ORDER BY m.released_year desc `;
            const { rows } = await pool.query(query);
            return Factory.instanceMoviesWithPHName(rows);
        } catch (error) {
            throw error;
        }
    }

    static async getMovieById(id) {
        try {
            let query = ` select * from "Movies" where "id" = ${id}`;
            let data = await pool.query(query);
            let { name, released_year, genre, ProductionHouseId } =
                data.rows[0];

            return Factory.instanceMovie(
                id,
                name,
                released_year,
                genre,
                ProductionHouseId
            );
        } catch (error) {
            throw error;
        }
    }

    static async submitAdd({ name, released_year, genre, ProductionHouseId }) {
        try {
            const query = `insert into "Movies" ( 
                "name",
                "released_year", 
                "genre",
                "ProductionHouseId"
            )
            values ('${name}','${released_year}','${genre}','${ProductionHouseId}')`;
            console.log(query);
            await pool.query(query);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Model;

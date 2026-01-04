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

    static async submitAdd(payload) {
        try {
            const { name, released_year, genre, ProductionHouseId } = payload;

            const validation = this.validate(payload);
            if (Object.keys(validation).length > 0)
                throw {
                    name: "ErrorValidation",
                    errValidation: validation,
                };

            const query = `insert into "Movies" ( 
                "name",
                "released_year", 
                "genre",
                "ProductionHouseId"
            )
            values ('${name}','${released_year}','${genre}','${ProductionHouseId}')`;

            await pool.query(query);
        } catch (error) {
            throw error;
        }
    }
    static async submitEdit(id, payload) {
        try {
            const { name, released_year, genre, ProductionHouseId } = payload;
            const validation = this.validate(payload);
            if (Object.keys(validation).length > 0)
                throw {
                    name: "ErrorValidation",
                    errValidation: validation,
                };

            console.log("test model");
            let query = `update "Movies" set 
             "name" = '${name}',
                "released_year"= '${released_year}', 
                "genre"= '${genre}',
                "ProductionHouseId" = '${ProductionHouseId}'
                where "id" = ${id}
            `;
            await pool.query(query);
        } catch (error) {
            throw error;
        }
    }

    static async deleteMovie(id) {
        try {
            let query = `delete from "Movies" where "id" = ${id}`;
            await pool.query(query);
        } catch (error) {
            throw error;
        }
    }

    static validate(payload) {
        try {
            const { name, released_year, genre, ProductionHouseId } = payload;
            const error = {};
            if (!name) {
                error.name = `*Name is required`;
            }
            if (!released_year) {
                error.released_year = `*Release year is required`;
            } else if (released_year > 2025) {
                error.released_year = `*Maksimum released year is 2025`;
            }
            if (!genre) {
                error.genre = `*Genre is required`;
            }
            if (!ProductionHouseId) {
                error.ProductionHouseId = `*Production House Id is required`;
            }
            return error;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Model;

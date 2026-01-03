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
            console.log(rows);
            return Factory.instanceMoviesWithPHName(rows);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Model;

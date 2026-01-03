const Factory = require("./class");
const pool = require("../config/connection");

class Model {
    static async getPHs() {
        try {
            const query = `select * from "ProductionHouses"`;
            const { rows } = await pool.query(query);
            return Factory.instancePHs(rows);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = Model;

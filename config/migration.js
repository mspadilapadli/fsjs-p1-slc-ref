const pool = require("./connection");

const dropTable = `drop table if exists "Movies", "ProductionHouses"`;

const qPH = `create table if not exists "ProductionHouses"(
"id" SERIAL PRIMARY KEY,
"name_prodHouse" VARCHAR,
"headquarters" VARCHAR
)`;

const qMovies = `create table if not exists "Movies" (
"id" SERIAL PRIMARY KEY,
"name" VARCHAR,
"released_year" INT,
"genre" VARCHAR,
"ProductionHouseId" INT REFERENCES "ProductionHouses"("id")
)`;

const migration = async () => {
    try {
        const dropTables = await pool.query(dropTable);
        if (dropTables) console.log(`drop tables successfully`);

        const createPH = await pool.query(qPH);
        if (createPH) console.log("ProductionHouses table created");

        const createMobvies = await pool.query(qMovies);
        if (createMobvies) console.log("Movies table created");
    } catch (error) {
        console.log(error);
    }
};

migration();

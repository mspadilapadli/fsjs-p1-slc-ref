const pool = require("./connection");

const dataPH = require("../productionHouses.json")
    .map(({ name, headquarters }) => `('${name}','${headquarters}')`)
    .join(",\n");

const qSeedPH = `insert into "ProductionHouses" 
("name_prodHouse", "headquarters")
values ${dataPH}`;

const seeding = async () => {
    try {
        const insertData = await pool.query(qSeedPH);
        if (insertData)
            console.log("seeding ProductionHouses data successfully");
    } catch (error) {
        console.log(error);
    }
};

seeding();

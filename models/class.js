class ProductionHouse {
    constructor(id, name_prodHouse, headquarters) {
        this.id = id;
        this.name = name_prodHouse;
        this.headquarters = headquarters;
    }
}

class Movie {
    constructor(id, name, released_year, genre, ProductionHouseId) {
        this.id = id;
        this.name = name;
        this.released_year = released_year;
        this.genre = genre;
        this.ProductionHouseId = ProductionHouseId;
    }
}

class Factory {
    static instancePHs(arr) {
        return arr.map(({ id, name_prodHouse, headquarters }) =>
            this.instancePH(id, name_prodHouse, headquarters)
        );
    }
    static instanceMovies(arr) {
        return arr.map(
            ({ id, name, released_year, genre, ProductionHouseId }) =>
                this.instanceMovie(
                    id,
                    name,
                    released_year,
                    genre,
                    ProductionHouseId
                )
        );
    }

    static instanceMovie(id, name, released_year, genre, ProductionHouseId) {
        return new Movie(id, name, released_year, genre, ProductionHouseId);
    }

    static instancePH(id, name_prodHouse, headquarters) {
        return new ProductionHouse(id, name_prodHouse, headquarters);
    }
}

module.exports = Factory;

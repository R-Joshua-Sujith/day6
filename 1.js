class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

const movie1 = new Movie("Movie1", "Movie1 Production", "PG");
const movie2 = new Movie("Movie2", "Movie2 Production", "PG");
const movie3 = new Movie("Casino Royale", "Eon Productions", "PG-13");


console.log(Movie.getPG([movie1, movie2, movie3]));
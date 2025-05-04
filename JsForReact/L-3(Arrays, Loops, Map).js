const movies = ["3 Idiots", "Premalu", "Shita Raman", "Drishyam", "Ratsasan"];

//forEach
movies.forEach((movie)=>{
  console.log(movie);
})

//Map
const upperMovies = movies.map((movie)=> movie.toUpperCase());
console.log(upperMovies);
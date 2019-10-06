export let movies = [
  {
    id: 0,
    name: "lazyker",
    age: 37,
    gender: "female"
  },
  {
    id: 1,
    name: "two",
    age: 22,
    gender: "male"
  },
  {
    id: 2,
    name: "three",
    age: 37,
    gender: "female"
  },
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === id)
  return filteredMovies[0];
}

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  }

  movies.push(newMovie);
  return newMovie;
}

export const deleteMovie = id => {
  const cleanMovies = movies.filter(movie => movie.id !== id);
  if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
}
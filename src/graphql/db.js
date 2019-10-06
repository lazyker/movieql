import axios from "axios";

const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

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

export const getYtsMovies = async (limit, rating) => {
  const { data: { data: { movies } } } = await axios(LIST_MOVIES_URL, {
    params: {
      limit,
      minimum_rating: rating
    }
  })

  return movies;
}

export const getYtsMovie = async id => {
  const { data: { data: { movie } } } = await axios(MOVIE_DETAILS_URL, {
    params: {
      movie_id: id
    }
  });

  return movie;
};

export const getYtsSuggestions = async id => {
  const { data: { data: { movies } } } = await axios(MOVIE_SUGGESTIONS_URL, {
    params: {
      movie_id: id
    }
  });

  return movies;
};
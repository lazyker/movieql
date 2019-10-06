import { getMovies, getById, addMovie, deleteMovie, getYtsMovies, getYtsMovie, getYtsSuggestions } from './db';

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
    ytsMovies: (_, { rating, limit }) => getYtsMovies(limit, rating),
    ytsMovie: (_, { id }) => getYtsMovie(id),
    ytsSuggestions: (_, { id }) => getYtsSuggestions(id)

  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id}) => deleteMovie(id)
  }
};

export default resolvers;
const lazyker = {
  name: "lazyker",
  age: 37,
  gender: "female"
};

const resolvers = {
  Query: {
    person: () => lazyker
  }
};

export default resolvers;
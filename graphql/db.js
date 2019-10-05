export const people = [
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

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === id)
  return filteredPeople[0];
}
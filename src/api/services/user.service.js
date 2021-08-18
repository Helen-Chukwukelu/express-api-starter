const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john@mail.com",
  },
  {
    id: 2,
    name: "Jane Doe",
    email: "jane@mail.com",
  },
];

module.exports.getUsers = () => {
  return users;
};

module.exports.getUserById = (id) => {
  if (id >= 1 && id <= users.length) {
    return users[id - 1];
  } else {
    return {};
  }
};

const userService = require("../services/user.service");

module.exports.getUsers = (req, res) => {
  const users = userService.getUsers();

  res.json({
    status: "success",
    data: {
      users: users,
    },
  });
};

module.exports.getUserById = (req, res) => {
  const user = userService.getUserById(req.params.id);
  res.json({
    status: "success",
    data: {
      user: user,
    },
  });
};

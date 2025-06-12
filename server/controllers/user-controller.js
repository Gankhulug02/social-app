const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);

const { listUsers, createUser } = require("../services/user-service");

exports.getAllUsers = asyncHandler(async (req, res) => {
  const result = await listUsers(req.query);
  res.json(result);
});

exports.createUser = asyncHandler(async (req, res) => {
  const user = await createUser(req.body);
  res.status(201).json(user);
});

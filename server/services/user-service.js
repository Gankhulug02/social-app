const User = require("../models/User");

// Fetch all users (with pagination)
async function listUsers({ page = 1, limit = 10 }) {
  const skip = (page - 1) * limit;
  const users = await User.find().skip(skip).limit(limit).lean();

  const count = await User.countDocument();
  return { users, total: count, page, pages: Math.ceil(count / limit) };
}

// Create a new user
async function createUser(userData) {
  const user = new User(userData);
  return await user.save();
}

module.exports = { listUsers, createUser };

import User from '../models/User.js';

export const createUser = async (req, res) => {
  try {
    const { name, email, surname, phone, address } = req.body;

    let user = await User.findOne({ email });

    if (user) {
      return res.status(409).json({
        success: false,
        message: 'User with email address already exists!',
      });
    }

    user = await User.create({ name, email, surname, phone, address });
    return res.status(201).json({
      success: true,
      message: 'User added successfully!',
      user,
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
    });
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.status(200).json({
      success: true,
      count: users.length,
      users,
    });
  } catch (error) {
    console.error(`Error: \n ${error.message}`);
    return res.status(500).json({ error: error.message });
  }
};

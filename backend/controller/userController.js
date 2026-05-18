import User from "../model/userModel.js";

// Register a new user
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields" });
  }

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const savedUser = await User.create({ username, email, password });
    const { id, username, email, createdAt } = savedUser;

    res.status(201).json({
      message: "User registered successfully",
      user: { id: _id, username, email, createdAt },
    });
  } catch (error) {
    console.error("registerUser error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

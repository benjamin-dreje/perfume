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

    const { _id, createdAt } = savedUser;

    res.status(201).json({
      message: "User registered successfully",
      user: { id: _id, username, email, createdAt },
    });
  } catch (error) {
    console.error("registerUser error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Simple login for testing (compares plain passwords)
export const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide email and password" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    if (user.password !== password) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const { _id, username } = user;
    return res.json({
      message: "Login successful",
      user: { id: _id, username, email },
    });
  } catch (error) {
    console.error("login error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

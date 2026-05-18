import express from "express";
import User from "../model/userModel.js";

// Register a new user
export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields" });
  }
  const newUser = {
    username,
    email,
    password,
  };
  res
    .status(201)
    .json({ message: "User registered successfully", user: newUser });
};

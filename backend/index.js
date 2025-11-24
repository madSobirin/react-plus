const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/user");

const app = express();
app.use(cors());
app.use(express.json());

// ====== KONEKSI KE MONGODB ======
mongoose
  .connect("mongodb://127.0.0.1:27017/myapp")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// ====== REGISTER ======
app.post("/register", async (req, res) => {
  const { username, password } = req.body;

  const existing = await User.findOne({ username });
  if (existing) return res.json({ message: "Username sudah digunakan" });

  const hashed = await bcrypt.hash(password, 10);

  const newUser = new User({ username, password: hashed });
  await newUser.save();

  res.json({ message: "Registrasi berhasil" });
});

// ====== LOGIN ======
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username });
  if (!user) return res.json({ message: "User tidak ditemukan" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.json({ message: "Password salah" });

  const token = jwt.sign({ id: user._id }, "SECRET123");

  res.json({ message: "Login berhasil", token });
});

app.listen(5000, () => console.log("Server jalan di port 5000"));

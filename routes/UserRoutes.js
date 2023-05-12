const User = require("../models/User");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.status(201).json(users);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

router.post("/", async (req, res) => {
  const { name } = req.body;
  try {
    const newUser = await User.create({ name });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json(error.message);
  }
});
router.put("/", async (req, res) => {
  const { name, category, point } = req.body;
  try {
    const user = await User.findOne({ name });
    user.set({
      name,
      category,
      point,
      date: Date.now(),
    });
    user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json(error.message);
  }
});

module.exports = router;

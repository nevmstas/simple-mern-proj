const { Router } = require("express");
const router = Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

// /api/auth/register
router.post(
  "/register",
  [
    check("email", "Uncorrect email").isEmail(),
    check("password", "Min length passord 6 symbols").isLength({ min: 6 }),
  ],
  async (req, res) => {
    try {
        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message: 'Uncorrect email or pass'
            })
        }

      const { email, password } = req.body;

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res.status(400).json({ message: "User exists!" });
      }

      const hashedPassord = await bcrypt.hash(password, 12);
      const user = new User({ email, password: hashedPassord });

      await user.save();
      res.status(201).json({ message: "User created" });
    } catch (e) {
      res.status(500).json({ message: "something happend wrong, try again" });
    }
  }
);

// /api/auth/login
router.post("/login", async (req, res) => {});

module.exports = router;

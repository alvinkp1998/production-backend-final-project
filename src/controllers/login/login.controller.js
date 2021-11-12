const { users } = require("../../models");
const jwt = require("jsonwebtoken");

const service = async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const validUser = await users.findOne({ where: { email } });
    if (!validUser)
      return res.json({ msg: "Email atau password tidak sesuai" });
    if (validUser.password !== password)
      return res.json({ msg: "Email atau password tidak sesuai" });

    const jwtToken = jwt.sign(
      { id: validUser.id, email: validUser.email },
      "secret-key"
    );
    res.json({ msg: "Welcome back!", token: jwtToken });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };

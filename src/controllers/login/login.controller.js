const { users } = require("../../models");
const { compareSync } = require("bcrypt");
const jwt = require("jsonwebtoken");

const service = async function (req, res, next) {
  try {
    const { email, password } = req.body;
    const user = await users.findOne({ where: { email } });
    const validUser = compareSync(req.body.password, user.password);
    if (!validUser)
      return res.json({ msg: "Email atau password tidak sesuai" });
    if (validUser.password !== password)
      return res.json({ msg: "Email atau password tidak sesuai" });

    const jwtToken = jwt.sign(
      { id: validUser.id, email: validUser.email },
      "secret-key"
    );
    res.json({ msg: "success", token: jwtToken });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };

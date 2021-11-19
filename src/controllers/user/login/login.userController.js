const { Users } = require("../../../models");
const { createJWT } = require("../../../middlewares/jwt");
// const { compareSync } = require("bcrypt");

const service = async function (req, res, next) {
  try {
    const user = await Users.findOne({
      where: { email: req.body.email },
    });
    // const validUser = compareSync(req.body.password, user.password);
    // if (validUser) return res.json({ msg: "success", token: createJWT(user) });
    // if (!validUser) return res.json({ msg: "Email atau password tidak sesuai" });
    // if (validUser.password !== password)
    //   return res.json({ msg: "Email atau password tidak sesuai" });
    if (user) return res.json({ msg: "success", token: createJWT(user) });
    if (!user) return res.json({ msg: "Email atau password tidak sesuai" });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };

const jwt = require("jsonwebtoken");

const checkJWT = (req, res, next) => {
  const header = req.get("Authorization");
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  } else {
    jwt.verify(token, "secret-key", (err, decode) => {
      if (err) return res.status(401).json({ msg: err.message });
      else {
        req.auth = decode.user;
        next();
      }
    });
  }
};

module.exports = { checkJWT };

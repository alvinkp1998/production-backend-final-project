const jwt = require("jsonwebtoken");

const checkJWT = (req, res, next) => {
  const token = req.get("Authorization");
  if (!token) {
    return res.status(401).json({ msg: "Unauthorized" });
  } else {
    jwt.verify(token, "secret-key", (err, decode) => {
      if (err) return res.status(401).json({ msg: err.message });
      else {
        // return res.json(decode);
        req.auth = decode;
        next();
      }
    });
  }
};

module.exports = { checkJWT };

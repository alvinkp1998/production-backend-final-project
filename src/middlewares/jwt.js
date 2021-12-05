const jwt = require("jsonwebtoken");

const createJWT = (user) => {
  delete user.dataValues.password;
  const token = jwt.sign(user.dataValues, "secret-key");
  return token;
};

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

const checkJWTAdmin = (req, res, next) => {
  const token = req.get("Authorization");
  if (!token) return res.status(401).json({ msg: "Unauthorize" });
  else {
    jwt.verify(token, "secret-key", (err, decode) => {
      if (err) return res.status(401).json({ msg: error.toString() });
      else {
        const user = decode;
        if (user.status === "admin") {
          req.auth = user;
          next();
        } else {
          return res
            .status(401)
            .json({ msg: "Akses gagal, anda bukan admin !" });
        }
      }
    });
  }
};

module.exports = { checkJWT, checkJWTAdmin, createJWT };

const service = async (req, res, next) => {
  try {
    const descFile = req.file.path;
    const splitFile = descFile.split("\\");
    const link = "http://localhost:3000/" + splitFile.join("/");
    return res.json({ data: link });
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };

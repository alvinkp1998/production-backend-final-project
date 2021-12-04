const { Users, JoinClasses, Classes, Sessions } = require("../../models");

const service = async function (req, res, next) {
  try {
    const userPresensi = await Users.findOne({
      where: { id: req.auth.id },
      include: {
        model: Classes,
        attributes: ["id", "namaKelas", "kodeKelas"],
        through: { attributes: [] },
        include: {
          model: Sessions,
          include: {
            model: JoinClasses,
            as: "absensi",
            where: { UserId: req.auth.id },
            required: false,
          },
          attributes: [
            "id",
            "namaSesi",
            "kodeSesi",
            "urutanSesi",
            "waktuMulai",
            "waktuSelesai",
          ],
        },
      },
    });

    if (userPresensi) {
      userPresensi.Classes.map((kelas) => {
        kelas.Sessions.map((sesi) => {
          sesi.dataValues.absen =
            sesi.absensi.length > 0 ? "Sudah Absen" : "Belum Absen";
        });
      });
      return res.json({ data: userPresensi.Classes });
    } else {
      return res.status(404).json({ msg: "User tidak ditemukan" });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };

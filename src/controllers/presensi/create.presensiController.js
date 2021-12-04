const e = require("express");
const {
  presences,
  Classes,
  Users,
  JoinClasses,
  Sessions,
} = require("../../models");

const service = async function (req, res, next) {
  try {
    const reqSession = await Sessions.findOne({
      where: {
        kodeSesi: req.body.kodeSesi,
      },
    });
    if (reqSession) {
      const reqClass = await Classes.findOne({
        where: {
          kodeKelas: req.body.kodeKelas,
        },
      });
      if (reqClass) {
        const reqJoinClass = await JoinClasses.findOne({
          where: {
            UserId: req.auth.id,
            ClassId: reqClass.id,
          },
        });
        if (reqJoinClass) {
          const payload = {
            SessionId: reqSession.id,
            JoinClassId: reqJoinClass.id,
          };
          const [presensi] = await presences.findOrCreate({
            where: payload,
          });
          if (presensi) {
            return res.json({ msg: "Berhasil Absen", data: payload });
          } else if (!presensi) {
            return res.status(400).json({ msg: "Anda Sudah Melakukan Absen" });
          } else {
            return res.json({ msg: "Gagal Absen" });
          }
        } else {
          return res.status(400).json({
            msg: `Anda belum gabung dikelas ini`,
          });
        }
      } else {
        return res.status(400).json({
          msg: "Kelas tidak ada",
        });
      }
    } else {
      return res.status(400).json({
        msg: "Kode sesi tidak terdaftar",
      });
    }
  } catch (error) {
    return res.status(500).json({ msg: error.toString() });
  }
};

module.exports = { service };

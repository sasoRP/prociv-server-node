const bcrypt = require("bcryptjs");

const { getHistoryOccurrencesByLocation } = require("./fetch_occurrences");
const Occurrence = require("./models/occurrence");
const User = require("./models/user");

exports.getIndex = (req, res, next) => {
  res.send("Hi");
};

exports.fetchAll = (req, res, next) => {
  try {
    getHistoryOccurrencesByLocation();
    res.json({ success: true });
  } catch (err) {
    res.json({ error: err });
  }
};

exports.getAllOccurrences = (req, res, next) => {
  Occurrence.find()
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err });
    });
};

exports.getOccurrencesByDistrito = (req, res, next) => {
  console.log(req.query);
  let distritoID = req.params.distritoID;
  Occurrence.find({ DistritoID: distritoID })
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err });
    });
};

exports.getOccurrencesByConcelho = (req, res, next) => {
  let concelhoID = req.params.concelhoID;
  Occurrence.find({ ConcelhoID: concelhoID })
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err });
    });
};

exports.getOccurrencesByFreguesia = (req, res, next) => {
  let freguesiaID = req.params.freguesiaID;
  Occurrence.find({ FreguesiaID: freguesiaID })
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err });
    });
};

exports.getOccurrencesByCode = (req, res, next) => {
  let code = req.params.codigo;
  Occurrence.find({ Natureza: code })
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err });
    });
};

exports.getUsers = (req, res, next) => {
  User.find()
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err });
    });
};

exports.getUser = (req, res, next) => {
  const userId = req.params.id;
  User.find({ _id: userId })
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.log(err);
      res.status(400).json({ error: err });
    });
};

exports.postUser = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email: email })
    .then((userDoc) => {
      if (!userDoc) {
        return bcrypt
          .hash(password, 12)
          .then((hashedPass) => {
            const newUser = new User({
              nome: req.body.nome,
              apelido: req.body.apelido,
              email: email,
              password: hashedPass,
              concelhos: req.body.concelhos,
              distritos: req.body.distritos,
              freguesias: req.body.freguesias,
              tiposOcorrencias: req.body.tiposOcorrencias,
            });
            newUser
              .save()
              .then((userDoc) => res.status(200).json(userDoc))
              .catch((err) => res.status(400).json({ error: err }));
          })
          .catch((err) => res.status(400).json({ error: err }));
      }
      res.status(400).json({ error: "User email already registered!" });
    })
    .catch((err) => res.status(400).json({ error: err }));
};

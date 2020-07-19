const { getHistoryOccurrencesByLocation } = require('./fetch_occurrences');
const Occurrence = require('./models/occurrence');

exports.getIndex = (req, res, next) => {
    res.send('Hi');
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

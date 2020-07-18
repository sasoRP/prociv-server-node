const { getHistoryOccurrencesByLocation } = require('./fetch_occurrences');

exports.getIndex = (req, res, next) => {
    res.send('Hi');
};

exports.fetchAll = (req, res, next) => {
    getHistoryOccurrencesByLocation();
};

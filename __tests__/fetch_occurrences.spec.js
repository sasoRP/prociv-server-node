const getHistoryOccurrencesByLocation = require('../fetch_occurrences');

test('getHistoryOccurrencesByLocation() returns any results', () => {
    expect(getHistoryOccurrencesByLocation).not.toBeUndefined();
});

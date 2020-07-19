const results = require('./mock_results');

exports.post = jest.fn(() => Promise.resolve({ data: results }));

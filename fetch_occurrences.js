const axios = require('axios');
const fs = require('fs');

const BASE_URL =
    'http://www.prociv.pt/_vti_bin/ARM.ANPC.UI/ANPC_SituacaoOperacional.svc/';

function getHistoryOccurrencesByLocation() {
    axios
        .post(BASE_URL + 'GetHistoryOccurrencesByLocation', {
            distritoID: null,
            concelhoID: null,
            freguesiaID: null,
            pageSize: 10000,
            pageIndex: 1,
            forToday: false,
            natureza: '0'
        })
        .then(
            (response) => {
                fs.writeFile(
                    'results.js',
                    JSON.stringify(
                        response.data.GetHistoryOccurrencesByLocationResult
                            .ArrayInfo[0].Data
                    ),
                    function (err) {
                        if (err) {
                            return console.log(err);
                        }
                        console.log('The file was saved!');
                    }
                );
            },
            (error) => {
                console.log(error);
            }
        );
}

getHistoryOccurrencesByLocation();

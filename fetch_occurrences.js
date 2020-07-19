const axios = require('axios');

const Occurrence = require('./models/occurrence');

let occurrences;

const BASE_URL =
    'http://www.prociv.pt/_vti_bin/ARM.ANPC.UI/ANPC_SituacaoOperacional.svc/';

// Get all occurrences from ANPC and save to DB

exports.getHistoryOccurrencesByLocation = () => {
    axios
        .post(`${BASE_URL}GetHistoryOccurrencesByLocation`, {
            distritoID: null,
            concelhoID: null,
            freguesiaID: null,
            pageSize: 10000,
            pageIndex: 1,
            forToday: false,
            natureza: '0'
        })
        .then((response) => {
            occurrences =
                response.data.GetHistoryOccurrencesByLocationResult.ArrayInfo[0]
                    .Data;
            occurrences.forEach((occurr) => {
                let queryObj = new Occurrence({
                    Concelho: occurr.Concelho.Name,
                    ConcelhoID: occurr.Concelho.DICO,
                    DataFechoOperacional: occurr.DataFechoOperacional,
                    DataOcorrencia: occurr.DataOcorrencia,
                    Distrito: occurr.Distrito.Name,
                    DistritoID: occurr.Distrito.DI,
                    EstadoOcorrencia: occurr.EstadoOcorrencia.Name,
                    EstadoOcorrenciaID: occurr.EstadoOcorrenciaID,
                    Freguesia: occurr.Freguesia.Name,
                    FreguesiaID: occurr.Freguesia.DICOFRE,
                    ID: occurr.ID,
                    Latitude: occurr.Latitude,
                    Localidade: occurr.Localidade,
                    Longitude: occurr.Longitude,
                    Natureza: occurr.Natureza.ID,
                    Numero: occurr.Numero,
                    NumeroMeiosAereosEnvolvidos:
                        occurr.NumeroMeiosAereosEnvolvidos,
                    NumeroMeiosTerrestresEnvolvidos:
                        occurr.NumeroMeiosTerrestresEnvolvidos,
                    NumeroOperacionaisAereosEnvolvidos:
                        occurr.NumeroOperacionaisAereosEnvolvidos,
                    NumeroOperacionaisTerrestresEnvolvidos:
                        occurr.NumeroOperacionaisTerrestresEnvolvidos
                });
                queryObj
                    .save()
                    .then((response) => console.log(response))
                    .catch((err) => console.log(err));
            });
        });
};

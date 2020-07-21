const axios = require('axios');
const moment = require('moment');

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
                    DataOcorrencia: moment(occurr.DataOcorrencia),
                    Distrito: occurr.Distrito.Name,
                    DistritoID: occurr.Distrito.DI,
                    EstadoOcorrencia: occurr.EstadoOcorrencia.Name,
                    EstadoOcorrenciaActive: occurr.EstadoOcorrencia.Active,
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
                    .then((response) =>
                        console.log('Document successfully created!')
                    )
                    .catch((err) => console.log(err));
            });
        });
};

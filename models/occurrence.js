var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OccurrenceSchema = new Schema(
    {
        Concelho: String,
        ConcelhoID: Number,
        DataFechoOperacional: String,
        DataOcorrencia: String,
        Distrito: String,
        DistritoID: Number,
        EstadoOcorrencia: String,
        EstadoOcorrenciaID: Number,
        Freguesia: String,
        FreguesiaID: Number,
        ID: Number,
        Latitude: Number,
        Localidade: String,
        Longitude: Number,
        Natureza: String,
        Numero: Number,
        NumeroMeiosAereosEnvolvidos: Number,
        NumeroMeiosTerrestresEnvolvidos: Number,
        NumeroOperacionaisAereosEnvolvidos: Number,
        NumeroOperacionaisTerrestresEnvolvidos: Number
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Occurrence', OccurrenceSchema);

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OccurrenceSchema = new Schema(
    {
        Concelho: String,
        DataFechoOperacional: String,
        DataOcorrencia: String,
        Distrito: String,
        EstadoOcorrencia: String,
        EstadoOcorrenciaID: Number,
        Freguesia: String,
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

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OccurrenceSchema = new Schema(
    {
        Concelho: String,
        ConcelhoID: Number,
        DataOcorrencia: Date,
        Distrito: String,
        DistritoID: Number,
        EstadoOcorrencia: String,
        EstadoOcorrenciaActive: Boolean,
        EstadoOcorrenciaID: Number,
        EstadoOcorrenciaCreated: Date,
        EstadoOcorrenciaModified: Date,
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

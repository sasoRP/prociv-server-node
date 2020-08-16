var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema(
  {
    nome: { type: String, required: true },
    apelido: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    concelhos: [Number],
    distritos: [Number],
    freguesias: [Number],
    tiposOcorrencias: [Number],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);

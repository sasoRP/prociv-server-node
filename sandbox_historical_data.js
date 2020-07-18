const Fs = require("fs");
const Path = require("path");
const Axios = require("axios");

const BASE_URL = "http://www.prociv.pt/pt-PT/Paginas/export.aspx?";

const SAVE_FOLDER = Path.resolve(__dirname, "data");

// Parâmetro	Descrição
// ex	boolean, sempre verdadeiro para exportação
// l	boolean, se verdadeiro é obrigatório colocar um intervalo de datas, caso contrário exporta o dia corrente.
// d	distrito (ver tabela, deixar sem Id para todos os distritos)
// n	código da natureza da ocorrência (ver tabela, deixar sem Id para todas as naturezas de ocorrência)
// s	data início (ex: 2017.06.01)
// f	data final (ex: 2017.06.30)
// e	tipo de exportação (XLSX: 0, CSV: 1, KMZ: 2)

let queryObjectInstantData = {
  ex: 1,
  l: 0,
  d: "",
  n: 0,
  e: 1,
};

let queryObjectTimeHistoryData = {
  ex: 1,
  l: 0,
  d: "",
  n: "",
  s: "2016.01.01",
  f: "2016.01.01",
  e: 1,
};

const DISTRITOS = {
  1: "Aveiro",
  2: "Beja",
  3: "Braga",
  4: "Bragança",
  5: "Castelo Branco",
  6: "Coimbra",
  8: "Évora",
  9: "Faro",
  10: "Guarda",
  11: "Leiria",
  12: "Lisboa",
  13: "Portalegre",
  14: "Porto",
  15: "Santarém",
  16: "Setúbal",
  17: "Viana do Castelo",
  18: "Vila Real",
  19: "Viseu",
};

const COLUNAS_CSV = [
  "Numero",
  "DataOcorrencia",
  "DataFechoOperacional",
  "Natureza",
  "EstadoOcorrencia",
  "Distrito",
  "Concelho",
  "Freguesia",
  "Localidade",
  "Latitude",
  "Longitude",
  "NumeroMeiosTerrestresEnvolvidos",
  "NumeroOperacionaisTerrestresEnvolvidos",
  "NumeroMeiosAereosEnvolvidos",
  "NumeroOperacionaisAereosEnvolvidos",
];

let queryInstantData = `ex=${queryObjectInstantData.ex}&l=${queryObjectInstantData.l}&d=${queryObjectInstantData.d}&c=&f=&t=0&n=${queryObjectInstantData.n}&e=${queryObjectInstantData.e}`;
let queryTimeHistoryData = `ex=${queryObjectTimeHistoryData.ex}&l=${queryObjectTimeHistoryData.l}&d=${queryObjectTimeHistoryData.d}&n=&${queryObjectTimeHistoryData.s}=&${queryObjectTimeHistoryData.f}=&e=${queryObjectTimeHistoryData.e}`;

let dataUrl = BASE_URL + queryInstantData;

console.log(dataUrl);

async function downloadCSV(url, path) {
  if (!Fs.existsSync(path)) {
    Fs.mkdirSync(path);
  }
  const writer = Fs.createWriteStream(Path.resolve(SAVE_FOLDER, "data.csv"));

  const response = await Axios({
    url,
    method: "GET",
    responseType: "stream",
  });

  response.data.pipe(writer);

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve);
    writer.on("error", reject);
  });
}

downloadCSV(dataUrl, SAVE_FOLDER);

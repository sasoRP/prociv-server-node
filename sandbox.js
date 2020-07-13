const BASE_URL = 'http://www.prociv.pt/en-US/Pages/export.aspx?';

let query_url = `ex=1&l=0&d=&c=&f=&t=0&n=0&e=1`;
let query_url2 = `http://www.prociv.pt/pt-PT/Paginas/export.aspx?ex=1&l=1&d=&n=&2020.06.01=&2020.06.07=&e=1`;

const DISTRITOS = {
    1: 'Aveiro',
    2: 'Beja',
    3: 'Braga',
    4: 'Bragança',
    5: 'Castelo Branco',
    6: 'Coimbra',
    8: 'Évora',
    9: 'Faro',
    10: 'Guarda',
    11: 'Leiria',
    12: 'Lisboa',
    13: 'Portalegre',
    14: 'Porto',
    15: 'Santarém',
    16: 'Setúbal',
    17: 'Viana do Castelo',
    18: 'Vila Real',
    19: 'Viseu'
};

const COLUNAS_CSV = [
    'Numero',
    'DataOcorrencia',
    'DataFechoOperacional',
    'Natureza',
    'EstadoOcorrencia',
    'Distrito',
    'Concelho',
    'Freguesia',
    'Localidade',
    'Latitude',
    'Longitude',
    'NumeroMeiosTerrestresEnvolvidos',
    'NumeroOperacionaisTerrestresEnvolvidos',
    'NumeroMeiosAereosEnvolvidos',
    'NumeroOperacionaisAereosEnvolvidos'
];

let rows;

const axios = require('axios');
const neatCsv = require('neat-csv');

let csvUrl = BASE_URL + query_url;
const getData = async (url) => {
    try {
        const response = await axios.get(url);
        const data = response.data;
        rows = await neatCsv(data);
    } catch (error) {
        console.log(error);
    }
    console.log(rows);
};

getData(csvUrl);

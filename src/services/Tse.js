const URL = process.env.VUE_APP_TSE_URL;

async function getStates() {
  try {
    const response = await fetch(
      `${URL}/divulga/rest/v1/eleicao/eleicao-atual?idEleicao=0`
    )
      .then(response => response.json())
      .then(data => data);

    return response;
  } catch (error) {
    return error;
  }
}

async function getCities({ state, id }) {
  try {
    const response = await fetch(
      `${URL}/divulga/rest/v1/eleicao/buscar/${state}/${id}/municipios`
    )
      .then(response => response.json())
      .then(data => data);

    return response;
  } catch (error) {
    return error;
  }
}

async function getCandidates({ city }) {
  try {
    const response = await fetch(
      `${URL}/divulga/rest/v1/candidatura/listar/2020/${city}/2030402020/11/candidatos`
    )
      .then(response => response.json())
      .then(data => data);

    return response;
  } catch (error) {
    return error;
  }
}

async function getCandidateDetail({ city, candidato }) {
  try {
    const response = await fetch(
      `${URL}/divulga/rest/v1/candidatura/buscar/2020/${city}/2030402020/candidato/${candidato}`
    )
      .then(response => response.json())
      .then(data => data);

    return response;
  } catch (error) {
    return error;
  }
}

const TSEService = {
  getStates,
  getCities,
  getCandidates,
  getCandidateDetail
};

export default TSEService;

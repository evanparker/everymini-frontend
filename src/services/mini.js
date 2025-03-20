import { apiClient } from "./apiClient";

async function getMinis() {
  const response = await apiClient.get(`/minis/`);
  return response;
}

async function getMini(id) {
  const response = await apiClient.get(`/minis/${id}`);
  return response;
}

async function postMini(mini) {
  const response = await apiClient.post(`/minis/`, mini);
  return response;
}

async function putMini(id, mini) {
  const response = await apiClient.put(`/minis/${id}`, mini);
  return response;
}


export { getMini, getMinis, postMini, putMini };
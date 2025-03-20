import { apiClient } from "./apiClient";

async function getMinisByUsername(username) {
  const response = await apiClient.get(`/users/${username}/minis`);
  return response;
}

export { getMinisByUsername };
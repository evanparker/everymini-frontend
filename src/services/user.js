import { apiClient } from "./apiClient";

async function getMinisByUsername(username) {
  const response = await apiClient.get(`/users/${username}/minis?thumbnails=true`);
  return response;
}

export { getMinisByUsername };
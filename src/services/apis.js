const baseURL = import.meta.env.VITE_BASE_URL;

// BOARDS ENDPOINTS
export const boardEndPoints = {
  FETCH_ALL_BOARD: baseURL + "/members/me/boards",
  CREATE_NEW_BOARD: baseURL + "/boards",
};

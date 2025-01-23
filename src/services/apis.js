const baseURL = import.meta.env.VITE_BASE_URL;

// BOARDS ENDPOINTS
export const boardEndPoints = {
  FETCH_ALL_BOARD: baseURL + "/members/me/boards",
  CREATE_NEW_BOARD: baseURL + "/boards",
};

// LISTS ENDPOINTS
export const listEndPoints = {
  GET_ALL_LISTS: baseURL + "/boards",
  CREATE_NEW_LIST: baseURL + "/boards",
};

// CARDS ENDPOINTS
export const cardEndPoints = {
  CREATE_NEW_CARD: baseURL + "/cards",
  GET_ALL_CARDS: baseURL + "/lists",
  DELETE_CARD: baseURL + "/cards",
};

// CHECK LISTS ENDPOINTS
export const checkListEndPoints = {
  GET_ALL_CHECKlISTS: baseURL + "/cards/:cardId/checklists",
};

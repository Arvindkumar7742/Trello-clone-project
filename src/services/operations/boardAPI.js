// fetching the API key and token for endpoints
const APIKey = import.meta.env.VITE_API_KEY;
const APIToken = import.meta.env.VITE_API_TOKEN;

import { apiConnector } from "../apiconnector";
import { boardEndPoints } from "../apis";

// destructuring the endpoints for get all the boards and create a new board
const { FETCH_ALL_BOARD, CREATE_NEW_BOARD } = boardEndPoints;

// function to get lists of the boards
export async function getAllBoards() {
  try {
    const result = await apiConnector("GET", FETCH_ALL_BOARD, null, null, {
      key: APIKey,
      token: APIToken,
    });
    console.log("Printing the result::", result);
  } catch (err) {
    console.log("Print the result from API::", err);
  }
}

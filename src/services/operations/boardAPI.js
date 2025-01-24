import { toast } from "react-toastify";

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
    let response = await apiConnector("GET", FETCH_ALL_BOARD, null, null, {
      key: APIKey,
      token: APIToken,
    });

    if (!response?.data) {
      throw new Error("Unexpected response format");
    }

    return response.data;
  } catch (err) {
    toast.error(
      err?.response?.data || err.message || "Error in getting the Boards data"
    );
  }
}

// function to create a new board
export async function createBoard(boardName, bgColor) {
  try {
    let response = await apiConnector("POST", CREATE_NEW_BOARD, null, null, {
      name: boardName,
      prefs_background: bgColor !== "" ? bgColor : "blue",
      key: APIKey,
      token: APIToken,
    });

    if (!response?.data) {
      throw new Error("Unexpected response format");
    }

    toast.success("Board created Successfully");
    return response.data;
  } catch (err) {
    toast.error(
      err?.response?.data || err.message || "Error in creating a data"
    );
  }
}

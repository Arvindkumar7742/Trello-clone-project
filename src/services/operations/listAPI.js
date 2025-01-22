// fetching the API key and token for endpoints
const APIKey = import.meta.env.VITE_API_KEY;
const APIToken = import.meta.env.VITE_API_TOKEN;

import { toast } from "react-toastify";

import { apiConnector } from "../apiconnector";
import { listEndPoints } from "../apis";

// destructuring the end points of the lists
const { GET_ALL_LISTS } = listEndPoints;

// function to fetch all the lists for a particular board
export async function getAllLists(boardId) {
  try {
    let response = await apiConnector(
      "GET",
      GET_ALL_LISTS + `/${boardId}/lists`,
      null,
      null,
      {
        key: APIKey,
        token: APIToken,
      }
    );

    console.log("Response received:", response);

    if (!response?.data) {
      throw new Error("Unexpected response format");
    }

    return response.data;
  } catch (err) {
    toast.error(
      err?.response?.data || err.message || "Error in getting all the lists"
    );
    console.log("Print the Error from calling API::", err);
  }
}

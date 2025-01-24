// fetching the API key and token for endpoints
const APIKey = import.meta.env.VITE_API_KEY;
const APIToken = import.meta.env.VITE_API_TOKEN;

import { toast } from "react-toastify";

import { apiConnector } from "../apiconnector";
import { checkListEndPoints } from "../apis";

// destructuring the end points of the lists
const { GET_ALL_CHECKlISTS } = checkListEndPoints;

// function to get all the checklists for a card
export async function fetchAllCheckLists(cardId) {
  try {
    let response = await apiConnector(
      "GET",
      GET_ALL_CHECKlISTS + `/${cardId}/checklists`,
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
      err?.response?.data ||
        err.message ||
        "Error in getting the CheckLists data"
    );
    console.log(
      "Print the Error from calling API To get all the checkLists::",
      err
    );
  }
}

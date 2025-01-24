// fetching the API key and token for endpoints
const APIKey = import.meta.env.VITE_API_KEY;
const APIToken = import.meta.env.VITE_API_TOKEN;

import { toast } from "react-toastify";

import { apiConnector } from "../apiconnector";
import { checkListEndPoints } from "../apis";

// destructuring the end points of the lists
const { GET_ALL_CHECKlISTS, CREATE_CHECK_LIST } = checkListEndPoints;

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

// function to create new checklist
export async function createCheckList(cardId, name) {
  try {
    let response = await apiConnector("POST", CREATE_CHECK_LIST, null, null, {
      idCard: cardId,
      name: name,
      key: APIKey,
      token: APIToken,
    });

    console.log("Response received:", response);

    if (!response?.data) {
      throw new Error("Unexpected response format");
    }

    toast.success("Checklist Created");
    return response.data;
  } catch (err) {
    toast.error(
      err?.response?.data || err.message || "Error in Creating new checklist"
    );
    console.log(
      "Print the Error from calling API To create a new checklist::",
      err
    );
  }
}

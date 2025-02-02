import { toast } from "react-toastify";

// fetching the API key and token for endpoints
const APIKey = import.meta.env.VITE_API_KEY;
const APIToken = import.meta.env.VITE_API_TOKEN;

import { apiConnector } from "../apiconnector";
import { checkListEndPoints } from "../apis";

// destructuring the end points of the lists
const { GET_ALL_CHECKlISTS, CREATE_CHECK_LIST, DELETE_CHECK_LIST } =
  checkListEndPoints;

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

    if (!response?.data) {
      throw new Error("Unexpected response format");
    }

    toast.success("Checklist Created");
    return response.data;
  } catch (err) {
    toast.error(
      err?.response?.data || err.message || "Error in Creating new checklist"
    );
  }
}

// function to delete a checklist
export async function deleteCheckList(checkList) {
  try {
    let response = await apiConnector(
      "DELETE",
      DELETE_CHECK_LIST + `/${checkList}`,
      null,
      null,
      {
        key: APIKey,
        token: APIToken,
      }
    );

    if (!response?.data) {
      throw new Error("Unexpected response format");
    }

    toast.success("Checklist Deleted");
    return response.data;
  } catch (err) {
    toast.error(
      err?.response?.data ||
        err.message ||
        "Error in getting the CheckLists data"
    );
  }
}

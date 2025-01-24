import { toast } from "react-toastify";

// fetching the API key and token for endpoints
const APIKey = import.meta.env.VITE_API_KEY;
const APIToken = import.meta.env.VITE_API_TOKEN;

import { apiConnector } from "../apiconnector";
import { checkItemsEndPoints } from "../apis";

// destructuring the end points of the check items
const {
  GET_ALL_CHECK_ITEMS,
  CREATE_CHECK_ITEM,
  DELETE_CHECK_ITEM,
  UPDATE_CHECK_ITEM,
} = checkItemsEndPoints;

// function to fetch all the check item for check list
export async function fetchAllCheckItems(checkListId) {
  try {
    let response = await apiConnector(
      "GET",
      GET_ALL_CHECK_ITEMS + `/${checkListId}/checkItems`,
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
        "Error in getting the Check Items data"
    );
  }
}

// API function to create new check item
export async function createCheckItem(checkListId, checkItemName) {
  try {
    let response = await apiConnector(
      "POST",
      CREATE_CHECK_ITEM + `/${checkListId}/checkItems`,
      null,
      null,
      {
        name: checkItemName,
        key: APIKey,
        token: APIToken,
      }
    );

    if (!response?.data) {
      throw new Error("Unexpected response format");
    }

    toast.success("Item created");
    return response.data;
  } catch (err) {
    toast.error(
      err?.response?.data || err.message || "Error in Creating check Item"
    );
  }
}

// API function to delete a check item
export async function deleteCheckItem(checkListId, checkItemId) {
  try {
    let response = await apiConnector(
      "DELETE",
      DELETE_CHECK_ITEM + `/${checkListId}/checkItems/${checkItemId}`,
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

    toast.success("Item deleted");
    return response.data;
  } catch (err) {
    toast.error(
      err?.response?.data || err.message || "Error in deleting check Item"
    );
  }
}

// API function to update on check Item
export async function updateCheckItem(cardId, checkItemId, status) {
  try {
    let response = await apiConnector(
      "PUT",
      UPDATE_CHECK_ITEM + `/${cardId}/checkItem/${checkItemId}`,
      null,
      null,
      {
        key: APIKey,
        token: APIToken,
        state: status,
      }
    );

    if (!response?.data) {
      throw new Error("Unexpected response format");
    }

    return response.data;
  } catch (err) {
    toast.error(
      err?.response?.data || err.message || "Error in updating check Item"
    );
  }
}

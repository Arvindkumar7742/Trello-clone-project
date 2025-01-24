// fetching the API key and token for endpoints
const APIKey = import.meta.env.VITE_API_KEY;
const APIToken = import.meta.env.VITE_API_TOKEN;

import { toast } from "react-toastify";

import { apiConnector } from "../apiconnector";
import { checkItemsEndPoints } from "../apis";

// destructuring the end points of the check items
const { GET_ALL_CHECK_ITEMS, CREATE_CHECK_ITEM } = checkItemsEndPoints;

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

    console.log("Response received:", response);

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
    console.log(
      "Print the Error from calling API To get all the checkItems::",
      err
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

    console.log("Response received:", response);

    if (!response?.data) {
      throw new Error("Unexpected response format");
    }

    toast.success("CheckItem created");
    return response.data;
  } catch (err) {
    toast.error(
      err?.response?.data || err.message || "Error in Creating check Item"
    );
    console.log(
      "Print the Error from calling API To get all the checkItems::",
      err
    );
  }
}

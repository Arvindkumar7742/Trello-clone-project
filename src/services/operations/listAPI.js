// fetching the API key and token for endpoints
const APIKey = import.meta.env.VITE_API_KEY;
const APIToken = import.meta.env.VITE_API_TOKEN;

import { toast } from "react-toastify";

import { apiConnector } from "../apiconnector";
import { listEndPoints } from "../apis";

// destructuring the end points of the lists
const { GET_ALL_LISTS, CREATE_NEW_LIST, DELETE_LIST } = listEndPoints;

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

// API function to create new board
export async function createList(boardId, title) {
  try {
    let response = await apiConnector(
      "POST",
      CREATE_NEW_LIST + `/${boardId}/lists`,
      null,
      null,
      {
        name: title,
        key: APIKey,
        token: APIToken,
      }
    );

    console.log("Response received:", response);

    if (!response?.data) {
      throw new Error("Unexpected response format");
    }

    toast.success("Added new list");
    return response.data;
  } catch (err) {
    toast.error(
      err?.response?.data || err.message || "Error in creating a list"
    );
    console.log("Print the Error from calling API for creating an list::", err);
  }
}

// function to delete or archive a list
export async function deleteList(listId) {
  try {
    let response = await apiConnector(
      "PUT",
      DELETE_LIST + `/${listId}/closed`,
      null,
      null,
      {
        value: true,
        key: APIKey,
        token: APIToken,
      }
    );

    console.log("Response received:", response);

    if (!response?.data) {
      throw new Error("Unexpected response format");
    }

    toast.success("List deleted successfully");
    return response.data;
  } catch (err) {
    toast.error(
      err?.response?.data || err.message || "Error in creating a list"
    );
    console.log("Print the Error from calling API for Deleting  a list::", err);
  }
}

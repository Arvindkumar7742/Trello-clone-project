// fetching the API key and token for endpoints
const APIKey = import.meta.env.VITE_API_KEY;
const APIToken = import.meta.env.VITE_API_TOKEN;

import { toast } from "react-toastify";

import { apiConnector } from "../apiconnector";
import { cardEndPoints } from "../apis";

// destructuring the end points of the lists
const { GET_ALL_CARDS, CREATE_NEW_CARD } = cardEndPoints;

// function to fetch all the cards for a particular list
export async function getAllCards(listId) {
  try {
    let response = await apiConnector(
      "GET",
      GET_ALL_CARDS + `/${listId}/cards`,
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
      err?.response?.data || err.message || "Error in getting all the cards"
    );
    console.log("Error in getting all the cards for a list", err);
  }
}

// function API to create new card in a list
export async function createCard(listId, cardName) {
  try {
    let response = await apiConnector("POST", CREATE_NEW_CARD, null, null, {
      idList: listId,
      name: cardName,
      key: APIKey,
      token: APIToken,
    });

    console.log("Response received:", response);

    if (!response?.data) {
      throw new Error("Unexpected response format");
    }

    toast.success("Added new card");
    return response.data;
  } catch (err) {
    toast.error(
      err?.response?.data || err.message || "Error in creating a data"
    );
    console.log(
      "Print the Error from calling API for creating a a new List::",
      err
    );
  }
}

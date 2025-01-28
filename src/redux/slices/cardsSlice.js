import { createSlice } from "@reduxjs/toolkit";

const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    listCards: [],
  },
  reducers: {
    // add new cards in the existing cards
    pushNewCards: (state, action) => {
      state.listCards.push(action.payload);
    },
    // add new card in particular list
    addNewCard: (state, action) => {
      const { listId, newCard } = action.payload;
      const findListCards = state.listCards.find(
        (listCard) => listCard.listId === listId
      );
      findListCards.cards.push(newCard);
    },
    // delete an existing card
    deleteExistingCard: (state, action) => {
      const { cardId, listId } = action.payload;
      state.listCards = state.listCards.map((listCard) => {
        if (listCard.listId == listId) {
          return {
            cards: listCard.cards.filter((card) => card.id != cardId),
            listId,
          };
        }
        return listCard;
      });
    },
  },
});

// export the modules
export const { pushNewCards, addNewCard, deleteExistingCard } =
  cardsSlice.actions;

// export the reducer
export default cardsSlice.reducer;

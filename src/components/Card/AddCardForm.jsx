import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { createCard } from "../../services/operations/cardAPI";

const AddCardForm = ({ setAddCardFrom, setCards, listId }) => {
  const [title, setTitle] = useState("");

  // function for adding in the card
  async function handleAddBtnClick() {
    if (title.trim() == "") {
      return setAddCardFrom(false);
    }

    const result = await createCard(listId, title);
    console.log("sl;nc", setCards);
    setCards((prvCard) => [...prvCard, result]);
    console.log("setA", setAddCardFrom);
    setAddCardFrom(false);
  }

  // function to close the form for icon
  function handleCloseIcnClick() {
    setAddCardFrom(false);
  }

  return (
    <Box
      sx={{
        display: "flex",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <input
        type="text"
        placeholder="Enter card title..."
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className="bg-[#242425] p-1 pb-4 rounded-md  outline-1 outline-blue-400 border-none"
      />
      <Box
        sx={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <Button variant="contained" onClick={handleAddBtnClick}>
          Add
        </Button>
        <CloseIcon
          sx={{
            cursor: "pointer",
          }}
          onClick={handleCloseIcnClick}
        />
      </Box>
    </Box>
  );
};

export default AddCardForm;

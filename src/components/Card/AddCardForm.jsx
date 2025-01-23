import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

const AddCardForm = ({ setAddCardFrom, setCard }) => {
  const [title, setTitle] = useState("");

  // function for adding in the card
  function handleAddBtnClick() {
    if (title.trim() == "") {
      return setAddCardFrom(false);
    }
    console.log("Yaha se kerna hai", title);
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

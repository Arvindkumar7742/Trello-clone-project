import { Textarea } from "@mui/joy";
import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";

import { createCheckItem } from "../../services/operations/checkItemAPI";

const CheckItemForm = ({ checklistId, setCheckItems, setAddCheckItemForm }) => {
  const [checkItemName, setCheckItemName] = useState("");

  // function to close the form to add new item
  async function handleAddBtnClick() {
    if (checkItemName.trim() == "") {
      return;
    }

    setAddCheckItemForm(false);
    // calling api to create new check item
    const result = await createCheckItem(checklistId, checkItemName);
    if (result) {
      setCheckItems((prevCheckItems) => [...prevCheckItems, result]);
    }
  }

  // function to handle enter on text area
  function handleKeyUpTextArea(e) {
    if (e.key === "Enter") handleAddBtnClick();
  }

  // handling the changing name in name of check item in text area
  function handleChangeTextArea(e) {
    setCheckItemName(e.target.value);
  }

  // function to close the form of adding new Item
  function handleCloseClick() {
    setAddCheckItemForm(false);
  }
  return (
    <Box
      sx={{
        marginLeft: "50px",
        marginTop: "5px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Textarea
        color="neutral"
        minRows={2}
        value={checkItemName}
        onChange={handleChangeTextArea}
        onKeyUp={handleKeyUpTextArea}
        sx={{
          backgroundColor: "black",
          width: "50%",
          color: "rgb(199, 190, 190)",
        }}
      />
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <Button variant="contained" onClick={handleAddBtnClick}>
          Add
        </Button>
        <Typography
          sx={{
            cursor: "pointer",
            p: 1,
            pl: 2,
            pr: 2,
            borderRadius: "10px",
            ":hover": {
              backgroundColor: "#40464e",
            },
          }}
          onClick={handleCloseClick}
        >
          Cancel
        </Typography>
      </Box>
    </Box>
  );
};

export default CheckItemForm;

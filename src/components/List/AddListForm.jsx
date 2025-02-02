import { Box, Button } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch } from "react-redux";

import { createList } from "../../services/operations/listAPI";
import { addNewList } from "../../redux/slices/listsSlice";

const AddListForm = ({ setAddListFrom, boardId }) => {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  // function for adding in the card
  async function handleAddBtnClick() {
    if (title.trim() == "") {
      return setAddListFrom(false);
    }

    // calling api function to create new list
    const result = await createList(boardId, title);
    if (result) {
      dispatch(addNewList(result));
    }
    setAddListFrom(false);
  }

  // function to handle key up on the input tag
  function handleKeyUp(e) {
    if (e.key === "Enter") {
      setAddListFrom(false);
      handleAddBtnClick();
    }
  }
  // function to close the form for icon
  function handleCloseIcnClick() {
    setAddListFrom(false);
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
        placeholder="Enter list title..."
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        onKeyUp={handleKeyUp}
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
            color: "white",
          }}
          onClick={handleCloseIcnClick}
        />
      </Box>
    </Box>
  );
};

export default AddListForm;

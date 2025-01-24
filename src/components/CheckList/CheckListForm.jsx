import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { Typography } from "@mui/material";

import { createCheckList } from "../../services/operations/checklistAPI";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#343B42",
  boxShadow: 24,
  borderRadius: "10px",
  outline: "none",
  pt: 2,
  px: 4,
  pb: 3,
};

export function CheckListForm({ open, setOpen, cardId, setCheckLists }) {
  const ref = React.useRef();
  const [title, setTitle] = React.useState("Checklist");

  // function for adding in the card
  async function handleAddBtnClick() {
    if (title.trim() == "") {
      return ref.current.focus();
    }
    setOpen(false);
    const result = await createCheckList(cardId, title);
    if (result) {
      setCheckLists((prvChecklists) => [...prvChecklists, result]);
    }
  }

  // function to handle key up on the input tag
  function handleKeyUp(e) {
    if (e.key === "Enter") {
      handleAddBtnClick();
    }
  }

  // function to close the modal
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: "fit-content",
            display: "flex",
            gap: "20px",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              color: "rgb(182, 194, 207)",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                width: "90%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Add CheckList
            </Typography>
            <CloseIcon
              sx={{
                cursor: "pointer",
              }}
              onClick={handleClose}
            />
          </Box>
          <input
            ref={ref}
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            onKeyUp={handleKeyUp}
            className="bg-[#242425] p-1 pb-4 rounded-md  outline-1 outline-blue-400 border-none text-[white]"
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
          </Box>
        </Box>
      </Modal>
    </React.Fragment>
  );
}

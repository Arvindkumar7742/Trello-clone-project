import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

import { CheckListForm } from "./CheckListForm";
import { CheckListsContainer } from "./CheckListsContainer";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  boxShadow: 24,
  outline: "none",
  borderRadius: "15px",
  pt: 2,
  px: 4,
  pb: 3,
};

export default function CheckListModal({
  openCheckListModal,
  setOpenCheckListModal,
  selectedCard,
}) {
  // managing state to add form to add checklist
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpenCheckListModal(false);
  };

  return (
    <div>
      <Modal
        open={openCheckListModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: ["350px", "650px", "750px", "800px"],
            maxHeight: "90vh",
            height: "auto",
            overflowY: "auto",
            backgroundColor: "#343B42",
            color: "rgb(182, 194, 207)",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#444d55",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#6c757d",
              borderRadius: "4px",
              "&:hover": {
                backgroundColor: "#adb5bd",
              },
            },
          }}
        >
          <Typography
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              variant="h7"
              sx={{
                fontSize: "19px",
                fontFamily: "sans-serif",
                fontWeight: "600",
              }}
            >
              <CreditCardIcon
                sx={{
                  marginRight: "20px",
                }}
              />
              {selectedCard.cardName}
            </Typography>
            <CloseIcon sx={{ cursor: "pointer" }} onClick={handleClose} />
          </Typography>
          <Typography
            onClick={() => {
              setOpen(true);
            }}
            sx={{
              marginLeft: "45px",
              display: "flex",
              gap: "8px",
              backgroundColor: "#444d55",
              width: "fit-content",
              p: 1,
              pl: 2,
              pr: 3,
              borderRadius: "10px",
              border: "2px solid #343B42",
              fontSize: "17px",
              fontFamily: "sans-serif",
              ":hover": {
                cursor: "pointer",
                border: "2px solid white",
              },
            }}
          >
            <AddIcon /> Add checklist
          </Typography>

          {/* CheckLists container for all the checkLists */}
          <CheckListsContainer cardId={selectedCard.cardId} />

          {/* Modal for adding a new checkLists */}
          {open && (
            <CheckListForm
              open={open}
              setOpen={setOpen}
              cardId={selectedCard.cardId}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
}

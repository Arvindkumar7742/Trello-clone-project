import { Box, Typography } from "@mui/material";
import { useState } from "react";
import AddCardForm from "./AddCardForm";

const AddNewCard = ({ setCards, listId }) => {
  const [addCardForm, setAddCardFrom] = useState(false);

  // ro add the add card form in rhe cards
  function handleAddCardClick() {
    setAddCardFrom(true);
  }
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {addCardForm ? (
        <AddCardForm
          setAddCardFrom={setAddCardFrom}
          setCards={setCards}
          listId={listId}
        />
      ) : (
        <Typography
          onClick={handleAddCardClick}
          sx={{
            borderRadius: "10px",
            p: 1,
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "20px",
            color: "rgb(182, 194, 207)",
            ":hover": {
              backgroundColor: "rgb(18, 18, 19)",
              cursor: "pointer",
            },
            display: "flex",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <span className="text-[25px]">+</span> <span>Add a card</span>
        </Typography>
      )}
    </Box>
  );
};

export default AddNewCard;

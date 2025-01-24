import { Box, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteCard } from "../../services/operations/cardAPI";
import { useState } from "react";
import CheckListModal from "../CheckList/CheckListModal";

const ShowCards = ({ cards, setCards }) => {
  const [disabledIcons, setDisabledIcons] = useState({});
  const [openCheckListModal, setOpenCheckListModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  // Function to delete the card
  async function handleCardDelete(e, cardId) {
    e.stopPropagation();
    // Disable pointer events for this card's delete icon
    setDisabledIcons((prev) => ({ ...prev, [cardId]: true }));

    // using function to delete the particular card
    const result = await deleteCard(cardId);
    if (result) {
      setCards((prevCards) => prevCards.filter((card) => card.id !== cardId));
    } else {
      // enable the btn again
      setDisabledIcons((prev) => ({ ...prev, [cardId]: false }));
    }
  }

  // handling clicking on some particular card
  function handleCardClick(card) {
    setSelectedCard({
      cardId: card.id,
      cardName: card.name,
    });
    setOpenCheckListModal(true);
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      {cards.map((card) => (
        <Typography
          className="group"
          key={card.id}
          onClick={() => {
            handleCardClick(card);
          }}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "rgb(36, 36, 37)",
            borderRadius: "10px",
            cursor: "pointer",
            p: 1,
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
            color: "rgb(182, 194, 207)",
            position: "relative",
            border: "2px solid black",
            ":hover": {
              border: "2px solid white",
            },
          }}
        >
          {card.name.slice(0, 150)}
          <DeleteIcon
            onClick={(e) => handleCardDelete(e, card.id)}
            className="opacity-0 group-hover:opacity-100"
            sx={{
              fontSize: "medium",
              transition: "opacity 0.3s ease",
              cursor: disabledIcons[card.id] ? "not-allowed" : "pointer",
              pointerEvents: disabledIcons[card.id] ? "none" : "auto",
            }}
          />
        </Typography>
      ))}

      {/* opening the modal basis on the checklist modal */}
      {openCheckListModal && (
        <CheckListModal
          openCheckListModal={openCheckListModal}
          setOpenCheckListModal={setOpenCheckListModal}
          selectedCard={selectedCard}
        />
      )}
    </Box>
  );
};

export default ShowCards;

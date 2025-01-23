import { Box, Card, Typography } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useEffect, useState } from "react";
import { getAllCards } from "../../services/operations/cardAPI";
import ShowCards from "../Card/ShowCards";
import AddNewCard from "../Card/AddNewCard";

const ListCard = ({ list }) => {
  const [cards, setCards] = useState([]);

  // destructing the list data
  const { name, id } = list;

  // get all the card of this list on first render
  useEffect(() => {
    const fetchAllCards = async () => {
      const result = await getAllCards(id);
      setCards(result);
    };
    fetchAllCards();
  }, []);

  return (
    <Card
      sx={{
        minWidth: "280px",
        maxWidth: "280px",
        minHeight: "80px",
        backgroundColor: "black",
        color: "rgb(182, 194, 207)",
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        borderRadius: "10px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          {name}
        </Typography>
        <MoreHorizIcon titleAccess="list actions" sx={{ cursor: "pointer" }} />
      </Box>

      {/* Showing all the cards */}
      {cards.length > 0 && <ShowCards cards={cards} />}

      {/* Component for adding new card */}
      <AddNewCard setCards={setCards} listId={list.id} />
    </Card>
  );
};

export default ListCard;

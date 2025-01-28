import {
  Box,
  Card,
  Typography,
  Popper,
  Paper,
  Button,
  ClickAwayListener,
} from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useEffect, useState } from "react";

import { getAllCards } from "../../services/operations/cardAPI";
import ShowCards from "../Card/ShowCards";
import AddNewCard from "../Card/AddNewCard";
import { deleteList } from "../../services/operations/listAPI";
import { useDispatch } from "react-redux";
import { deleteExistingList } from "../../redux/slices/listsSlice";

const ListCard = ({ list }) => {
  const [cards, setCards] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  const dispatch = useDispatch();

  // Destructuring the list data
  const { name, id } = list;

  // Get all the cards of this list on first render
  useEffect(() => {
    const fetchAllCards = async () => {
      const result = await getAllCards(id);
      setCards(result);
    };
    fetchAllCards();
  }, [id]);

  // Handle popper toggle
  const handleIconClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  // Handle popper close
  const handleClosePopper = () => {
    setAnchorEl(null);
  };

  // Handle delete action
  const handleDeleteAction = async () => {
    handleClosePopper();
    const res = await deleteList(list.id);
    if (res) {
      // dispatching the action to delete the lists
      dispatch(deleteExistingList({ id }));
    }
  };

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
        <MoreHorizIcon
          titleAccess="list actions"
          sx={{ cursor: "pointer" }}
          onClick={handleIconClick}
        />
      </Box>

      {/* Popper for Delete Action */}
      <Popper open={Boolean(anchorEl)} anchorEl={anchorEl} placement="right">
        <ClickAwayListener onClickAway={handleClosePopper}>
          <Paper
            elevation={3}
            sx={{
              padding: 1,
              backgroundColor: "rgb(46, 45, 45)",
              color: "white",
              borderRadius: "5px",
            }}
          >
            <Button
              fullWidth
              sx={{
                color: "rgb(184, 189, 194)",
                fontWeight: "bold",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
              onClick={handleDeleteAction}
            >
              Delete List
            </Button>
          </Paper>
        </ClickAwayListener>
      </Popper>

      {/* Showing all the cards */}
      {cards.length > 0 && <ShowCards cards={cards} setCards={setCards} />}

      {/* Component for adding new card */}
      <AddNewCard setCards={setCards} listId={list.id} />
    </Card>
  );
};

export default ListCard;

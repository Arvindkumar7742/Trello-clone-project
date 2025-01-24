import { Box, Checkbox, FormControlLabel } from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

import { deleteCheckItem } from "../../services/operations/checkItemAPI";
import { updateCheckItem } from "../../services/operations/checkItemAPI";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CheckItemCard = ({ checklistId, checkItem, setCheckItems, cardId }) => {
  const [disabledIcons, setDisabledIcons] = useState({});
  const [isChecked, setIsChecked] = useState(checkItem.state === "complete");

  // function to handle check box change
  const handleCheckboxChange = async (event) => {
    setIsChecked(event.target.checked);

    // Disable pointer events for this card's delete icon
    setDisabledIcons((prev) => ({ ...prev, [checkItem.id]: true }));

    let state = event.target.checked ? "complete" : "incomplete";

    // making api call to update check item
    const result = await updateCheckItem(cardId, checkItem.id, state);
    if (result) {
      // updating the check items
      setCheckItems((prevCheckItem) => {
        prevCheckItem.forEach((ctCheckItem) => {
          if (ctCheckItem.id === checkItem.id) {
            ctCheckItem.state = result.state;
          }
        });
        return [...prevCheckItem];
      });
    }
    // Disable pointer events for this card's delete icon
    setDisabledIcons((prev) => ({ ...prev, [checkItem.id]: false }));
  };

  // function to delete a particular check item
  async function handleCardDelete(checkItemId) {
    // Disable pointer events for this card's delete icon
    setDisabledIcons((prev) => ({ ...prev, [checkItemId]: true }));

    // using function to delete the particular card
    const result = await deleteCheckItem(checklistId, checkItemId);
    if (result) {
      setCheckItems((prevCheckItems) =>
        prevCheckItems.filter((itCheckItem) => itCheckItem.id !== checkItemId)
      );
    } else {
      // enable the btn again
      setDisabledIcons((prev) => ({ ...prev, [checkItemId]: false }));
    }
  }

  return (
    <Box
      sx={{
        pl: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        pr: 2,
        ":hover": {
          backgroundColor: "#40464e",
          borderRadius: "10px",
        },
      }}
      className="group"
    >
      <FormControlLabel
        control={
          <Checkbox
            {...label}
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
        }
        style={{
          gap: "7px",
          cursor: disabledIcons[checkItem.id] ? "not-allowed" : "pointer",
          pointerEvents: disabledIcons[checkItem.id] ? "none" : "auto",
        }}
        label={
          <span
            style={{
              textDecoration: isChecked ? "line-through" : "none",
            }}
          >
            {checkItem.name}
          </span>
        }
      />
      <DeleteIcon
        onClick={() => handleCardDelete(checkItem.id)}
        className="opacity-0 group-hover:opacity-100"
        sx={{
          fontSize: "medium",
          transition: "opacity 0.3s ease",
          cursor: disabledIcons[checkItem.id] ? "not-allowed" : "pointer",
          pointerEvents: disabledIcons[checkItem.id] ? "none" : "auto",
        }}
      />
    </Box>
  );
};

export default CheckItemCard;

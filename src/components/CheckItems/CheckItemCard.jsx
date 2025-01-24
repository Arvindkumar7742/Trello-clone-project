import { Box, Checkbox, FormControlLabel } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const CheckItemCard = ({ checkItem, setCheckItems }) => {
  const [disabledIcons, setDisabledIcons] = useState({});
  const [isChecked, setIsChecked] = useState(checkItem.state === "complete");

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };
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
        style={{ gap: "16px" }}
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
        onClick={(e) => handleCardDelete(e, card.id)}
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

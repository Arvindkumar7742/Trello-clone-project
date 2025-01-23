import { Box, Typography } from "@mui/material";
import React from "react";

const ShowCards = ({ cards }) => {
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
          key={card.id}
          sx={{
            backgroundColor: "rgb(36, 36, 37)",
            borderRadius: "10px",
            p: 1,
            fontSize: "14px",
            fontWeight: 400,
            lineHeight: "20px",
            color: "rgb(182, 194, 207)",
          }}
        >
          {card.name.slice(0, 150)}
        </Typography>
      ))}
    </Box>
  );
};

export default ShowCards;

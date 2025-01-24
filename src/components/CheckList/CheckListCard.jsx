import { Box, Typography } from "@mui/material";
import React from "react";
import ChecklistIcon from "@mui/icons-material/Checklist";

export const CheckListCard = ({ checkList }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography>
        <ChecklistIcon
          sx={{
            marginRight: "20px",
            fontFamily: "sans-serif",
          }}
        />
        {checkList.name}
      </Typography>
    </Box>
  );
};

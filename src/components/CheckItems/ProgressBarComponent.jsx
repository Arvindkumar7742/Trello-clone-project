import { LinearProgress } from "@mui/joy";
import { Box, Typography } from "@mui/material";
import React from "react";

const ProgressBarComponent = ({ checkItems }) => {
  // function to get the exact percentage of progress bar
  function getPercentage() {
    let totalCheckItems = checkItems.length;
    if (totalCheckItems === 0) {
      return 0;
    } else {
      let allCheckedCheckItems = checkItems.filter(
        (checkItem) => checkItem.state === "complete"
      );
      let percentage = (allCheckedCheckItems.length / totalCheckItems) * 100;
      return Math.floor(percentage);
    }
  }
  return (
    <Box
      sx={{
        display: "flex",
        gap: getPercentage() === 100 ? "15px" : "30px",
        margin: "10px 0",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: "12px",
        }}
      >
        {getPercentage()}%
      </Typography>
      <LinearProgress
        determinate
        value={getPercentage()}
        sx={{
          backgroundColor: "#444d55",
          height: "5px",
        }}
      />
    </Box>
  );
};

export default ProgressBarComponent;

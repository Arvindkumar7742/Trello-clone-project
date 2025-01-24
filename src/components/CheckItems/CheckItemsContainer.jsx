import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchAllCheckItems } from "../../services/operations/checkItemAPI";
import CheckItemCard from "./CheckItemCard";
import AddIcon from "@mui/icons-material/Add";

const CheckItemsContainer = ({ checklistId }) => {
  const [checkItems, setCheckItems] = useState([]);

  console.log("checkListId", checklistId);
  // fetch all the check items for this particular list
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAllCheckItems(checklistId);
      if (result) {
        setCheckItems(result);
      }
    };
    // calling the function to get the data initial
    fetchData();
  }, []);
  return (
    <Box>
      {checkItems.map((checkItem) => (
        <CheckItemCard
          key={checkItem.id}
          checkItem={checkItem}
          setCheckItems={setCheckItems}
        />
      ))}
      <Typography
        onClick={() => {
          // setOpen(true);
        }}
        sx={{
          marginLeft: "50px",
          display: "flex",
          gap: "8px",
          backgroundColor: "#444d55",
          width: "fit-content",
          p: 1,
          pl: 2,
          pr: 2,
          marginTop: "5px",
          borderRadius: "10px",
          fontFamily: "sans-serif",
          fontSize: "15px",
          ":hover": {
            cursor: "pointer",
            backgroundColor: "#282d33",
            transition: "all",
            transitionDuration: "200ms",
          },
        }}
      >
        Add an item
      </Typography>
    </Box>
  );
};

export default CheckItemsContainer;

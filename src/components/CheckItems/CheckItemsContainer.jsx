import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchAllCheckItems } from "../../services/operations/checkItemAPI";
import CheckItemCard from "./CheckItemCard";
import CheckItemForm from "./CheckItemForm";
import ProgressBarComponent from "./ProgressBarComponent";

const CheckItemsContainer = ({ checklistId, cardId }) => {
  const [checkItems, setCheckItems] = useState([]);
  const [addCheckItemForm, setAddCheckItemForm] = useState(false);

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
      <ProgressBarComponent checkItems={checkItems} />
      {checkItems.map((checkItem) => (
        <CheckItemCard
          key={checkItem.id}
          checkItem={checkItem}
          checklistId={checklistId}
          setCheckItems={setCheckItems}
          cardId={cardId}
        />
      ))}
      {addCheckItemForm ? (
        <CheckItemForm
          checklistId={checklistId}
          setCheckItems={setCheckItems}
          setAddCheckItemForm={setAddCheckItemForm}
        />
      ) : (
        <Typography
          onClick={() => {
            setAddCheckItemForm(true);
          }}
          sx={{
            marginLeft: "45px",
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
      )}
    </Box>
  );
};

export default CheckItemsContainer;

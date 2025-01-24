import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { deleteCheckList } from "../../services/operations/checklistAPI";
import CheckItemsContainer from "../CheckItems/CheckItemsContainer";

export const CheckListCard = ({ checkList, setCheckLists }) => {
  // for disabling the button while deleting a checkList
  const [disabledIcons, setDisabledIcons] = useState({});

  // function to delete a particular check list
  async function handleCheckListDelete(checklistId) {
    // Disable pointer events for this card's delete icon
    setDisabledIcons((prev) => ({ ...prev, [checklistId]: true }));

    // making api call to delete the check items
    const result = await deleteCheckList(checklistId);

    if (result) {
      setCheckLists((prevCheckList) =>
        prevCheckList.filter((itCheckList) => itCheckList.id !== checklistId)
      );
    } else {
      // enable the btn again
      setDisabledIcons((prev) => ({ ...prev, [checklistId]: false }));
    }
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: "sans-serif",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          <ChecklistIcon
            sx={{
              marginRight: "20px",
            }}
          />
          {checkList.name}
        </Typography>
        <Typography
          onClick={() => handleCheckListDelete(checkList.id)}
          variant="h7"
          sx={{
            backgroundColor: "#444d55",
            width: "fit-content",
            p: 1,
            pl: 2,
            pr: 2,
            borderRadius: "10px",
            border: "2px solid #343B42",
            fontSize: "17px",
            fontFamily: "sans-serif",
            cursor: disabledIcons[checkList.id] ? "not-allowed" : "pointer",
            pointerEvents: disabledIcons[checkList.id] ? "none" : "auto",
            ":hover": {
              cursor: "pointer",
              backgroundColor: "#3b434a",
            },
          }}
        >
          Delete
        </Typography>
      </Box>

      {/* container to show all the check items */}
      <CheckItemsContainer checklistId={checkList.id} />
    </Box>
  );
};

import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllCheckItems } from "../../services/operations/checkItemAPI";
import CheckItemCard from "./CheckItemCard";
import CheckItemForm from "./CheckItemForm";
import ProgressBarComponent from "./ProgressBarComponent";
import { pushCheckItems } from "../../redux/slices/checkItemsSlice";

const CheckItemsContainer = ({ checklistId, cardId }) => {
  const [addCheckItemForm, setAddCheckItemForm] = useState(false);

  // fetching the checkItem of the checkItem
  const { checkListCheckItems } = useSelector((state) => state.checkItems);
  const checkItems =
    checkListCheckItems.find(
      (listCheckItem) => listCheckItem.checkListId === checklistId
    )?.checkItems ?? [];

  // dispatcher to dispatch the actions
  const dispatch = useDispatch();

  // fetch all the check items for this particular list
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAllCheckItems(checklistId);
      if (result) {
        dispatch(
          pushCheckItems({ checkListId: checklistId, checkItems: result })
        );
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
          cardId={cardId}
        />
      ))}
      {addCheckItemForm ? (
        <CheckItemForm
          checklistId={checklistId}
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

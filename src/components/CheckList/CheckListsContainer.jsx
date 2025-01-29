import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { fetchAllCheckLists } from "../../services/operations/checklistAPI";
import ScaleLoader from "../ScaleLoader";
import { CheckListCard } from "./CheckListCard";
import { setCheckLists } from "../../redux/slices/checkListsSlice";

export const CheckListsContainer = ({ cardId }) => {
  // fetching initial data for all the check lists
  const [loading, setLoading] = useState(true);

  // fetching the data
  const { checkLists } = useSelector((state) => state.checkLists);

  // dispatcher to dispatch the actions
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAllCheckLists(cardId);
      if (result) {
        dispatch(setCheckLists(result));
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <ScaleLoader loading={loading} />;
  }
  return (
    <Box
      sx={{
        display: "flex",
        gap: "5px",
        flexDirection: "column",
        marginTop: "10px",
      }}
    >
      {checkLists &&
        checkLists.map((checkList) => (
          <CheckListCard
            key={checkList.id}
            checkList={checkList}
            cardId={cardId}
          />
        ))}
    </Box>
  );
};

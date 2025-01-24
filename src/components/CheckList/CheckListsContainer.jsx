import { useEffect, useState } from "react";
import { fetchAllCheckLists } from "../../services/operations/checklistAPI";
import { Box } from "@mui/material";
import ScaleLoader from "../ScaleLoader";

export const CheckListsContainer = ({ cardId, checkLists, setCheckLists }) => {
  // fetching initial data for all the check lists
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAllCheckLists(cardId);
      if (result) {
        setCheckLists(result);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return <ScaleLoader loading={loading} />;
  }
  return (
    <Box>
      {checkLists &&
        checkLists.map((checkList) => (
          <div key={checkList.id}>{checkList.name}</div>
        ))}
    </Box>
  );
};

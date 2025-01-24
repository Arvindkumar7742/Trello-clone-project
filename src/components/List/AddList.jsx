import { Box, Card, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

import AddListForm from "./AddListForm";

const AddList = ({ boardId, setLists }) => {
  const [addListForm, setAddListFrom] = useState(false);
  // // function to add the new list in the all lists
  function handleAddClickHandler() {
    setAddListFrom(true);
  }
  return (
    <>
      {addListForm ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            p: 2,
            backgroundColor: "black",
            color: "white",
            borderRadius: "10px",
          }}
        >
          <AddListForm
            setAddListFrom={setAddListFrom}
            setLists={setLists}
            boardId={boardId}
          />
        </Box>
      ) : (
        <Card
          onClick={handleAddClickHandler}
          sx={{
            minWidth: "280px",
            maxWidth: "280px",
            minHeight: "50px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            color: "white",
            p: 2,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            borderRadius: "10px",
            backdropFilter: addListForm && "blur(5px)",
            ":hover": {
              outline: "2px solid white",
            },
            cursor: "pointer",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                fontWeight: "400",
              }}
            >
              <AddIcon
                sx={{
                  fontSize: "large",
                  marginLeft: "10px",
                }}
              />{" "}
              Add another list
            </Typography>
          </Box>
        </Card>
      )}
    </>
  );
};

export default AddList;

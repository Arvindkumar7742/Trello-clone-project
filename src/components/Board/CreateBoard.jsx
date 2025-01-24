import { Card, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

import CreateBoardModal from "./CreateBoardModal";

export const CreateBoard = ({ length, setBoards }) => {
  const [openModal, setOpenModal] = useState(false);

  function clickCreateHandler() {
    // condition of cards limits exceeded
    if (length < 10) setOpenModal(true);
  }
  return (
    <div>
      <Card
        onClick={clickCreateHandler}
        sx={{
          height: "100px",
          p: "10px",
          color: "white",
          cursor: "pointer",
          backgroundColor: "rgb(125, 135, 143)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "5px",
          ":hover": {
            backgroundColor: "rgb(89, 94, 98)",
          },
          transition: "all",
          transitionDuration: "200ms",
        }}
      >
        {length < 10 ? (
          <>
            {" "}
            <AddIcon /> Create Board
          </>
        ) : (
          <Typography>Cards limit exceeded</Typography>
        )}
      </Card>
      {openModal && (
        <CreateBoardModal
          openModal={openModal}
          setOpenModal={setOpenModal}
          setBoards={setBoards}
        />
      )}
    </div>
  );
};

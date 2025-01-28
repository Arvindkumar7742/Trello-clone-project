import { Card, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";

import CreateBoardModal from "./CreateBoardModal";
import { useSelector } from "react-redux";

export const CreateBoard = () => {
  const { boards } = useSelector((state) => state.boards);
  const [openModal, setOpenModal] = useState(false);

  function clickCreateHandler() {
    // condition of creation cards limits exceeded
    if (boards.length < 10) setOpenModal(true);
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
        {boards.length < 10 ? (
          <>
            <AddIcon /> Create Board
          </>
        ) : (
          <Typography>Cards limit exceeded</Typography>
        )}
      </Card>

      {/* opening modal form to get board configuration */}
      {openModal && (
        <CreateBoardModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </div>
  );
};

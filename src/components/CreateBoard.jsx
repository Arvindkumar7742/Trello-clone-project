import { Card } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import CreateBoardModal from "./CreateBoardModal";

export const CreateBoard = () => {
  const [openModal, setOpenModal] = useState(false);

  function clickCreateHandler() {
    setOpenModal(true);
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
        <AddIcon /> Create Board
      </Card>
      {openModal && (
        <CreateBoardModal openModal={openModal} setOpenModal={setOpenModal} />
      )}
    </div>
  );
};

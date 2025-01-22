import { Card } from "@mui/material";
import { useNavigate } from "react-router-dom";

const BoardCard = ({ board }) => {
  const navigate = useNavigate();

  // destructuring the data from board
  const { name, prefs, id } = board;

  // function to handle while clicking
  function handleCardClick(boardId) {
    navigate(`/boards/${boardId}`, {
      state: {
        backgroundColor: prefs.backgroundColor,
        backgroundImage: prefs.backgroundImage,
      },
    });
  }
  return (
    <Card
      onClick={() => handleCardClick(id)}
      sx={{
        height: "100px",
        p: "10px",
        color: "white",
        cursor: "pointer",
        backgroundColor: prefs.backgroundColor,
        backgroundImage: prefs.backgroundImage
          ? `url(${prefs.backgroundImage})`
          : "none",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {name.length > 40 ? name.substr(0, 40) + "..." : name}
    </Card>
  );
};

export default BoardCard;

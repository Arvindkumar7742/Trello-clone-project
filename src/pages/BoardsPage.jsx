import { useEffect, useState } from "react";
import { Box, Card, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { getAllBoards } from "../services/operations/boardAPI";
import { Spinner } from "../components/Spinner";

const BoardsPage = () => {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // fetching te
  useEffect(() => {
    const fetchBoardsData = async () => {
      const result = await getAllBoards();
      if (result) {
        setBoards(result);
      }
      setLoading(false);
    };
    fetchBoardsData();
  }, []);

  // handling the clicking of on eny card
  function handleCardClick(boardId) {
    navigate(`/boards/${boardId}`);
  }

  if (loading) {
    return <Spinner loading={loading} />;
  }
  return (
    <>
      {boards.length === 0 ? (
        <Typography
          sx={{
            fontSize: "25px",
            textAlign: "center",
            marginTop: "50px",
            color: "#026aa7",
          }}
        >
          No boards
        </Typography>
      ) : (
        <Box
          sx={{
            maxWidth: "1024px",
            backgroundColor: "whitesmoke",
            padding: 2,
            mx: "auto",
            marginTop: "30px",
          }}
        >
          <Typography
            variant="h7"
            sx={{ marginLeft: "25px", color: "rgb(89, 94, 98)" }}
          >
            YOUR WORKSPACES
          </Typography>
          <Container
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            {boards.map((board) => (
              <Card
                key={board.id}
                onClick={() => handleCardClick(board.id)}
                sx={{
                  height: "100px",
                  p: "10px",
                  color: "white",
                  cursor: "pointer",
                  backgroundColor: board.prefs.backgroundColor,
                  backgroundImage: board.prefs.backgroundImage
                    ? `url(${board.prefs.backgroundImage})`
                    : "none",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
              >
                {board.name.length > 40
                  ? board.name.substr(0, 40) + "..."
                  : board.name}
              </Card>
            ))}
          </Container>
        </Box>
      )}
    </>
  );
};

export default BoardsPage;

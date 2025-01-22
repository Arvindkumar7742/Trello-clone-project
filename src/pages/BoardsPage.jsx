import { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";

import { getAllBoards } from "../services/operations/boardAPI";
import { Spinner } from "../components/Spinner";
import BoardCard from "../components/BoardCard";
import { CreateBoard } from "../components/CreateBoard";

const BoardsPage = () => {
  const [boards, setBoards] = useState([]);
  const [loading, setLoading] = useState(true);

  // fetching all the cards data
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

  // if loading written with spinner
  if (loading) {
    return <Spinner loading={loading} />;
  }
  return (
    <>
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
            <BoardCard key={board.id} board={board} />
          ))}
          <CreateBoard />
        </Container>
      </Box>
    </>
  );
};

export default BoardsPage;

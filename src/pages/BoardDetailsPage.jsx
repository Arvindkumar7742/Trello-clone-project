import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import { getAllLists } from "../services/operations/listAPI";
import { Spinner } from "../components/Spinner";
import { Container, Typography } from "@mui/material";
import ListsContainer from "../components/List/ListsContainer";

const BoardDetailsPage = () => {
  const [lists, setLists] = useState();
  const location = useLocation();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  // getting the data like background color and image
  const { backgroundColor, backgroundImage, boardName } = location.state;

  // fetching all the initial lists from the particular board
  useEffect(() => {
    const fetchAllLists = async () => {
      const result = await getAllLists(id);
      setLists(result);
      setLoading(false);
    };

    // calling the function to get data
    fetchAllLists();
  }, []);

  if (loading) {
    return <Spinner loading={loading} />;
  }

  return (
    <Container
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        overflow: "auto",
        backgroundColor: backgroundColor || "#000",
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        pb: "50px",
        "&::-webkit-scrollbar": {
          width: "10px",
          height: "10px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "#2e2e2e",
          borderRadius: "5px",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#6c757d",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "#adb5bd",
          },
        },
      }}
    >
      <Typography
        variant="h7"
        sx={{
          marginLeft: "28px",
          marginTop: "20px",
          fontSize: "25px",
          color: "white",
          fontFamily: "cursive",
          position: "sticky",
        }}
      >
        {boardName}
      </Typography>
      <ListsContainer boardId={id} lists={lists} setLists={setLists} />
    </Container>
  );
};

export default BoardDetailsPage;

import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

import { getAllLists } from "../services/operations/listAPI";
import { Spinner } from "../components/Spinner";
import { Container } from "@mui/material";

const BoardDetailsPage = () => {
  const [lists, setLists] = useState();
  const location = useLocation();
  const { id } = useParams();
  const [loading, setLoading] = useState(true);

  // getting the data like background color and image
  const { backgroundColor, backgroundImage } = location.state;

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
        minHeight: "647px",
        overflowX: "scroll",
        backgroundColor: backgroundColor,
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></Container>
  );
};

export default BoardDetailsPage;

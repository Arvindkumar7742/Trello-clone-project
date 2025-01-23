import { Container } from "@mui/material";
import React from "react";
import ListCard from "./ListCard";

const ListsContainer = ({ lists }) => {
  return (
    <Container
      sx={{
        width: "fit-content",
        margin: 0,
        marginTop: "20px",
        display: "flex",
        gap: "10px",
        alignItems: "flex-start",
      }}
    >
      {lists.map((list) => (
        <ListCard key={list.id} list={list} />
      ))}
    </Container>
  );
};

export default ListsContainer;

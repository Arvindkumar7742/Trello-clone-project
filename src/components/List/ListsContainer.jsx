import { Container } from "@mui/material";
import React from "react";
import ListCard from "./ListCard";

const ListsContainer = ({ lists }) => {
  console.log("Lists");
  return (
    <Container
      sx={{
        width: "100%",
        marginLeft: 0,
      }}
    >
      {lists.map((list) => (
        <ListCard key={list.id} list={list} />
      ))}
    </Container>
  );
};

export default ListsContainer;

import { Container } from "@mui/material";
import React from "react";
import ListCard from "./ListCard";
import AddList from "./AddList";

const ListsContainer = ({ boardId, lists, setLists }) => {
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
        <ListCard key={list.id} list={list} setLists={setLists} />
      ))}

      {/* components to add new list */}
      <AddList boardId={boardId} setLists={setLists} />
    </Container>
  );
};

export default ListsContainer;

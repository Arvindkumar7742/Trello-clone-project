import { Container } from "@mui/material";
import { useSelector } from "react-redux";

import ListCard from "./ListCard";
import AddList from "./AddList";

const ListsContainer = ({ boardId }) => {
  const { lists } = useSelector((state) => state.lists);

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
      {/* map on the list to show all the lists */}
      {lists.map((list) => (
        <ListCard key={list.id} list={list} />
      ))}

      {/* components to add new list */}
      <AddList boardId={boardId} />
    </Container>
  );
};

export default ListsContainer;

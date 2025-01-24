import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { createBoard } from "../../services/operations/boardAPI";

const AddBoardForm = ({ setBoards, setOpenModal }) => {
  const [input, setInput] = useState("");
  const [backgroundOption, setBackgroundOption] = useState("");
  const navigate = useNavigate();

  const handleChangeBackground = (event) => {
    setBackgroundOption(event.target.value);
  };

  // handling the changing in the input filed
  function inputChangeHandler(e) {
    setInput(e.target.value);
  }

  // handling the submission fo the field
  async function submitFormHandler(e) {
    e.preventDefault();
    setOpenModal(false);

    //calling function to add new card
    const result = await createBoard(input, backgroundOption);
    if (result) {
      setBoards((prevBoard) => [...prevBoard, result]);
    }
  }
  return (
    <form onSubmit={submitFormHandler}>
      <Stack
        spacing={2}
        sx={{
          mx: "auto",
          width: ["300px", "auto", "auto", "auto"],
          marginTop: "20px",
          color: "rgb(79, 82, 84)",
        }}
      >
        <label htmlFor="boardName">
          Board Title <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={input}
          onChange={inputChangeHandler}
          name="boardName"
          className={`outline-none border-2 ${
            input.trim() == "" ? "border-red-500" : "border-blue-400"
          } rounded-sm p-2`}
          required
        />
        {input.trim() == "" && (
          <Typography>👋 Board title is required</Typography>
        )}
        <div>
          <FormControl sx={{ m: 0, minWidth: 140 }}>
            <InputLabel id="demo-simple-select-helper-label">
              Background
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={backgroundOption}
              label="Background"
              onChange={handleChangeBackground}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="blue">Blue</MenuItem>
              <MenuItem value="green">Green</MenuItem>
              <MenuItem value="orange">Orange</MenuItem>
              <MenuItem value="red">Red</MenuItem>
              <MenuItem value="pink">Pink</MenuItem>
              <MenuItem value="sky">Skyblue</MenuItem>
              <MenuItem value="lime">Lime</MenuItem>
            </Select>
          </FormControl>
        </div>
        <Button
          type="submit"
          variant="solid"
          sx={{
            width: "100%",
            backgroundColor:
              input.trim() == "" ? "rgb(202, 196, 196)" : "#026aa7",
            color: input.trim() === "" ? "black" : "white",
            ":hover": {
              backgroundColor: "#0a80c5",
            },
          }}
          disabled={input.trim() == ""}
        >
          Create
        </Button>
      </Stack>
    </form>
  );
};

export default AddBoardForm;

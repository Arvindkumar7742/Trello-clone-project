import { Button, Stack, Typography } from "@mui/material";
import { useState } from "react";

const AddBoardForm = () => {
  const [input, setInput] = useState("");

  // handling the changing in the input filed
  function inputChangeHandler(e) {
    setInput(e.target.value);
  }

  // handling the submission fo the field
  function submitFormHandler(e) {
    e.preventDefault();
    console.log("Printing the form state::", input);
  }
  return (
    <form onSubmit={submitFormHandler}>
      <Stack spacing={2} sx={{ marginTop: "20px", color: "rgb(79, 82, 84)" }}>
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
        <Button
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

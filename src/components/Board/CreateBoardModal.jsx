import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Container } from "@mui/material";

import AddBoardForm from "./AddBoardForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "1px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function CreateBoardModal({ openModal, setOpenModal }) {
  const handleClose = () => setOpenModal(false);

  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                width: "90%",
                textAlign: "center",
                fontSize: "16px",
                color: "rgb(79, 82, 84)",
              }}
            >
              Create board
            </Typography>
            <CloseIcon
              onClick={handleClose}
              sx={{
                cursor: "pointer",
              }}
            />
          </Container>
          {/* attaching the form */}
          <AddBoardForm />
        </Box>
      </Modal>
    </div>
  );
}

import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ModalContext from "../../ModalContaxt/modalContext";
import { useState, useContext } from "react";
import {Main,Form, InputGroup, Submit } from "./SignupStyle";
import { Close } from "../Icon/index";
import LinearProgress from "@mui/material/LinearProgress";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 450,
  bgcolor: "background.paper",
  // border: '2px solid #000',
  boxShadow: 24,
  // p: 4,
};

export default function BasicModal() {
  const context = useContext(ModalContext);
  const { open, handleClose } = context;
  const [formSubmit, setFormSubmit] = useState(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={() => handleClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          {formSubmit?  <LinearProgress />:null}
        

          <Main> <Form>
            <div onClick={() => handleClose()}>
              <Close />
            </div>

            <InputGroup>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" />
            </InputGroup>

            <InputGroup>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" />
            </InputGroup>

            <InputGroup>
              <label htmlFor="password">Password:</label>
              <input type="password" name="cunformpassword" />
            </InputGroup>

            <Submit>Submit</Submit>
          </Form></Main>
         
        </Box>
      </Modal>
    </div>
  );
}

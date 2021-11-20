import React, { useState } from "react";
import ModalContext from './modalContext';

const ModalState = (props) => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);

        console.log("modal close function call")
    }
    return (<ModalContext.Provider value={{ open, handleClose, handleOpen }}>
        {props.children}
    </ModalContext.Provider>)
};

export default ModalState
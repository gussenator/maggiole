import { Typography, Box } from "@mui/material";
import React from "react";
import Help from "./icons/Help.svg";

function Modal({ showModal, setShowModal, handleModal }) {
  return (
    <Box
      sx={{
        width: "100vw",
        height: "100vh",
        zIndex: "modal",
        position: "absolute",
        top: 0,
        left: 0,
        overflowX: "clip",
        overflowY: "clip",

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={() => handleModal()}
    >
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          zIndex: "modal",
          position: "absolute",
          top: 0,
          left: 0,
          bgcolor: "#E7D3D0",
          opacity: 0.5,
        }}
      ></Box>
      <Box
        component="img"
        sx={{
          "@media (min-width:1000px)": {
            width: "50%",
          },
          width: "90%",
          height: "auto",
          opacity: 1,
          zIndex: "10000000",
        }}
        src={Help}
      />
    </Box>
  );
}

export default Modal;

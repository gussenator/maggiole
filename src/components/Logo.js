import React from "react";
import { Typography, Box, Button } from "@mui/material";
import maggiole from "./icons/maggiole.svg";
import questionmark from "./icons/questionmark.svg";
function Logo({ guesses, showModal, setShowModal, handleModal }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginBottom: 8,
        marginTop: 4,
      }}
    >
      <Box
        component="img"
        sx={{
          width: "80%",
          height: "auto",
          marginInline: 1,
          maxWidth: 800,
        }}
        src={maggiole}
      />
      <Box sx={{ display: "flex" }}>
        <Typography
          sx={{
            fontSize: "1.25rem",
            "@media (min-width:600px)": {
              fontSize: "2rem",
            },
            lineHeight: "150%",
            color: "#41212A",
          }}
        >
          {guesses} / 8 gissningar
        </Typography>
        <Button onClick={() => handleModal()}>
          <Box
            component="img"
            sx={{
              width: "1.25rem",
              height: "1.25rem",
              "@media (min-width:600px)": {
                width: "2rem",
                height: "2rem",
              },
              marginInline: 2,
            }}
            src={questionmark}
          />
        </Button>
      </Box>
    </Box>
  );
}

export default Logo;

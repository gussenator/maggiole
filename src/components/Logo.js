import React from "react";
import { Typography, Box } from "@mui/material";

function Logo({ guesses }) {
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
      <Typography
        sx={{
          fontSize: "5rem",
          "@media (min-width:1000px)": {
            fontSize: "12.5rem",
          },
          lineHeight: "90%",
          color: "#41212A",
        }}
      >
        MAGGIOLE
      </Typography>
      <Typography
        sx={{
          fontSize: "1.75rem",
          "@media (min-width:1000px)": {
            fontSize: "3rem",
          },
          lineHeight: "100%",
          color: "#41212A",
        }}
      >
        GISSA VERONICA MAGGIO LÅTEN
      </Typography>
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
    </Box>
  );
}

export default Logo;

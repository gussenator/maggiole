import React from "react";
import { Typography, Box } from "@mui/material";
import maggiole from "./icons/maggiole.svg";
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
      <Box
        component="img"
        sx={{
          width: "80%",
          height: "auto",
          marginInline: 1,
        }}
        src={maggiole}
      />
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

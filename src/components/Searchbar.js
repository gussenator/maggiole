import React from "react";
import { Box, Autocomplete, TextField } from "@mui/material";
import { matchSorter } from "match-sorter";

function Searchbar({
  songs,
  songList,
  setSongList,
  setSongs,
  win,
  setWin,
  chosen,
  guesses,
  setGuesses,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Autocomplete
        disablePortal
        onChange={(event, newValue) => {
          if (newValue !== null && guesses < 8) {
            setGuesses(guesses + 1);
            setSongList([...songList, newValue]);
            setSongs(songs.filter((data) => data !== newValue));

            if (newValue === chosen) {
              setWin(!win);
            }
          }
        }}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        getOptionLabel={(songs) => `${songs.track}`}
        options={songs}
        sx={{
          width: "80%",
          maxWidth: 800,
          p: 2,
          borderRadius: 2,
          bgcolor: "#E7D3D0",
        }}
        noOptionsText="Inga låtar hittade..."
        renderInput={(params) => (
          <TextField {...params} label="SKRIV IN EN LÅT" />
        )}
      />
    </Box>
  );
}

export default Searchbar;

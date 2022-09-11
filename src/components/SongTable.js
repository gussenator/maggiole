import React from "react";
import { Grid, Typography } from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useEffect } from "react";

import check from "./icons/check.svg";
import upArrow from "./icons/upArrow.svg";
import downArrow from "./icons/downArrow.svg";

import denförsta from "./icons/albumcovers/denförsta.jpg";
import fienderärtråkigt from "./icons/albumcovers/fienderärtråkigt.jpg";
import handenifickan from "./icons/albumcovers/handenifickan.jpg";
import ochvinnarenär from "./icons/albumcovers/ochvinnarenär.jpg";
import ochsomvanligt from "./icons/albumcovers/ochsomvanligt.jpg";
import satanigatan from "./icons/albumcovers/satanigatan.jpg";
import vattenochbröd from "./icons/albumcovers/vattenochbröd.jpg";

const albumCovers = {
  "Fiender är tråkigt": fienderärtråkigt,
  "Satan i gatan": satanigatan,
  "Den första är alltid gratis": denförsta,
  "Vatten och Bröd": vattenochbröd,
  "Handen i fickan fast jag bryr mig": handenifickan,
  "Och som vanligt händer det något hemskt": ochsomvanligt,
  "Och vinnaren är…": ochvinnarenär,
};

const green = "#BEE5B0";
const yellow = "#FFFF99";
const gray = "#E7D3D0";

function SongTable({ songs, songList, chosen }) {
  function formatTime(time) {
    const [minutes, seconds] = time.split(":");
    return Number(minutes) * 60 + Number(seconds);
  }
  function getColor(guess, chosen, category) {
    if (category === "album") {
      if (guess.albumnr === chosen.albumnr) {
        return green;
      } else if (
        guess.albumnr <= chosen.albumnr + 2 &&
        guess.albumnr >= chosen.albumnr - 2
      ) {
        return yellow;
      } else {
        return gray;
      }
    } else if (category === "track") {
      if (guess.track === chosen.track) {
        return green;
      } else {
        return gray;
      }
    } else if (category === "plays") {
      if (guess.plays === chosen.plays) {
        return green;
      } else if (
        guess.plays <= chosen.plays + 2500000 &&
        guess.plays >= chosen.plays - 2500000
      ) {
        return yellow;
      } else {
        return gray;
      }
    } else if (category === "lenght") {
      const guessTime = formatTime(guess.lenght);
      const chosenTime = formatTime(chosen.lenght);
      if (guessTime === chosenTime) {
        return green;
      } else if (guessTime <= chosenTime + 30 && guessTime >= chosenTime - 30) {
        return yellow;
      } else {
        return gray;
      }
    } else if (category === "tracknr") {
      if (guess.tracknr === chosen.tracknr) {
        return green;
      } else if (
        guess.tracknr <= chosen.tracknr + 2 &&
        guess.tracknr >= chosen.tracknr - 2
      ) {
        return yellow;
      } else {
        return gray;
      }
    }
  }
  function getIcon(guess, chosen, category) {
    if (category === "album") {
      if (guess.albumnr === chosen.albumnr) {
        return check;
      } else if (guess.albumnr < chosen.albumnr) {
        return upArrow;
      } else if (guess.albumnr > chosen.albumnr) {
        return downArrow;
      }
    } else if (category === "plays") {
      if (guess.plays === chosen.plays) {
        return check;
      } else if (guess.plays < chosen.plays) {
        return upArrow;
      } else if (guess.plays > chosen.plays) {
        return downArrow;
      }
    } else if (category === "lenght") {
      const guessTime = formatTime(guess.lenght);
      const chosenTime = formatTime(chosen.lenght);
      if (guessTime === chosenTime) {
        return check;
      } else if (guessTime < chosenTime) {
        return upArrow;
      } else if (guessTime > chosenTime) {
        return downArrow;
      }
    } else if (category === "tracknr") {
      if (guess.tracknr === chosen.tracknr) {
        return check;
      } else if (guess.tracknr < chosen.tracknr) {
        return upArrow;
      } else if (guess.tracknr > chosen.tracknr) {
        return downArrow;
      }
    }
  }

  return (
    <TableContainer
      component={Paper}
      sx={{
        "@media (min-width:1000px)": {
          width: "80%",
        },
        width: "100%",
        marginInline: "auto",
        marginBlock: 5,
        maxHeight: 500,
      }}
    >
      <Table
        sx={{
          bgcolor: "#B67C82",
          "@media (min-width:1000px)": {
            minWidth: 700,
          },
          width: "100%",
        }}
        aria-label="simple table"
        stickyHeader
      >
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              sx={{ bgcolor: "#E7D3D0", color: "#41212A" }}
            >
              <Typography variant="h3">LÅT</Typography>
            </TableCell>
            <TableCell
              align="center"
              sx={{ bgcolor: "#E7D3D0", color: "#41212A" }}
            >
              <Typography
                variant="h3"
                sx={{ bgcolor: "#E7D3D0", color: "#41212A" }}
              >
                ALBUM
              </Typography>
            </TableCell>
            <TableCell
              align="center"
              sx={{ bgcolor: "#E7D3D0", color: "#41212A" }}
            >
              <Typography variant="h3">SPELNINGAR</Typography>
            </TableCell>
            <TableCell
              align="center"
              sx={{ bgcolor: "#E7D3D0", color: "#41212A" }}
            >
              <Typography variant="h3">LÄNGD</Typography>
            </TableCell>
            <TableCell
              align="center"
              sx={{ bgcolor: "#E7D3D0", color: "#41212A" }}
            >
              <Typography variant="h3">LÅT NR</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        {/* BODY */}
        <TableBody>
          {songList.map((song) => (
            <TableRow key={song.track}>
              <TableCell
                align="center"
                sx={{
                  bgcolor: () => getColor(song, chosen, "track"),
                  color: "#41212A",
                }}
              >
                <Typography variant="h4">{song.track}</Typography>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  bgcolor: () => getColor(song, chosen, "album"),

                  color: "#41212A",

                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    component="img"
                    sx={{
                      "@media (min-width:600px)": {
                        height: 75,
                        width: 75,
                      },
                      height: "3rem",
                      width: "2rem",

                      marginInline: 1,
                      alignSelf: "left",
                    }}
                    src={albumCovers[song.album]}
                  />
                  <Typography variant="h4">{song.album}</Typography>
                  <Box
                    component="img"
                    sx={{
                      marginInline: 1,
                      "@media (min-width:600px)": {
                        height: 25,
                        width: 25,
                      },
                      height: "1rem",
                      width: "1rem",
                    }}
                    src={getIcon(song, chosen, "album")}
                  />
                </Box>
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  bgcolor: () => getColor(song, chosen, "plays"),

                  color: "#41212A",
                }}
              >
                <Typography variant="h4">
                  {song.plays.toLocaleString("en-US")}
                </Typography>
                <Box
                  component="img"
                  sx={{
                    marginInline: 1,
                    "@media (min-width:600px)": {
                      height: 25,
                      width: 25,
                    },
                    height: "1rem",
                    width: "1rem",
                  }}
                  src={getIcon(song, chosen, "plays")}
                />
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  bgcolor: () => getColor(song, chosen, "lenght"),

                  color: "#41212A",
                }}
              >
                <Typography variant="h4">{song.lenght}</Typography>
                <Box
                  component="img"
                  sx={{
                    marginInline: 1,
                    "@media (min-width:600px)": {
                      height: 25,
                      width: 25,
                    },
                    height: "1rem",
                    width: "1rem",
                  }}
                  src={getIcon(song, chosen, "lenght")}
                />
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  bgcolor: () => getColor(song, chosen, "tracknr"),

                  color: "#41212A",
                }}
              >
                <Typography variant="h4">{song.tracknr}</Typography>
                <Box
                  component="img"
                  sx={{
                    marginInline: 1,
                    "@media (min-width:600px)": {
                      height: 25,
                      width: 25,
                    },
                    height: "1rem",
                    width: "1rem",
                  }}
                  src={getIcon(song, chosen, "tracknr")}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SongTable;

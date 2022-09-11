import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Moret from "./fonts/Moret-Bold.ttf";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "./components/Logo";
import Searchbar from "./components/Searchbar";
import SongTable from "./components/SongTable";
import { useEffect, useState } from "react";
const theme = createTheme({
  palette: {
    primary: {
      light: "#E7D3D0",
      main: "#41212A",
      dark: "#E7D3D0",
      contrastText: "#fff",
    },
    secondary: {
      light: "#E7D3D0",
      main: "#E7D3D0",
      dark: "#E7D3D0",
      contrastText: "#000",
    },
  },
  typography: {
    fontFamily: "Moret",
    body1: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Moret';
          font-style: bold;
          font-display: swap;
          font-weight: 400;
          src: local('Moret'), local('Moret-bold'), url(${Moret}) format('ttf');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
    },
  },
});

theme.typography.h4 = {
  fontSize: "1rem",
  "@media (min-width:1000px)": {
    fontSize: "2rem",
  },
};
theme.typography.h3 = {
  fontSize: "1rem",
  "@media (min-width:1000px)": {
    fontSize: "2rem",
  },
};
const allSongs = [
  {
    track: "070-xxxx xxx",
    lenght: "4:00",
    album: "Och som vanligt händer det något hemskt",
    tracknr: 4,
    plays: 1463276,
    albumnr: 7,
  },
  {
    track: "17 år",
    lenght: "3:40",
    album: "Och vinnaren är…",
    tracknr: 10,
    plays: 46798919,
    albumnr: 2,
  },
  {
    track: "5 minuter",
    lenght: "2:50",
    album: "Fiender är tråkigt",
    tracknr: 9,
    plays: 12632407,
    albumnr: 6,
  },
  {
    track: "Alla mina låtar",
    lenght: "3:29",
    album: "Satan i gatan",
    tracknr: 7,
    plays: 12754595,
    albumnr: 3,
  },
  {
    track: "Ayahausca",
    lenght: "3:44",
    album: "Den första är alltid gratis",
    tracknr: 7,
    plays: 10600812,
    albumnr: 5,
  },
  {
    track: "Ballad om vintern",
    lenght: "2:18",
    album: "Vatten och Bröd",
    tracknr: 10,
    plays: 1947174,
    albumnr: 1,
  },
  {
    track: "Bas gillar hörn",
    lenght: "3:41",
    album: "Handen i fickan fast jag bryr mig",
    tracknr: 9,
    plays: 8582881,
    albumnr: 4,
  },
  {
    track: "Daddy Issues",
    lenght: "3:18",
    album: "Och som vanligt händer det något hemskt",
    tracknr: 11,
    plays: 1763638,
    albumnr: 7,
  },
  {
    track: "Dallas",
    lenght: "3:49",
    album: "Handen i fickan fast jag bryr mig",
    tracknr: 8,
    plays: 8391599,
    albumnr: 4,
  },
  {
    track: "Den första är alltid gratis",
    lenght: "3:41",
    album: "Den första är alltid gratis",
    tracknr: 1,
    plays: 19060689,
    albumnr: 5,
  },
  {
    track: "Dom sa!",
    lenght: "3:43",
    album: "Den första är alltid gratis",
    tracknr: 4,
    plays: 8982417,
    albumnr: 5,
  },
  {
    track: "Dröm",
    lenght: "1:01",
    album: "Och vinnaren är…",
    tracknr: 6,
    plays: 2736816,
    albumnr: 2,
  },
  {
    track: "Dumpa mig",
    lenght: "3:39",
    album: "Vatten och Bröd",
    tracknr: 3,
    plays: 7256744,
    albumnr: 1,
  },
  {
    track: "Där hjärtat satt förut",
    lenght: "2:57",
    album: "Fiender är tråkigt",
    tracknr: 7,
    plays: 4653294,
    albumnr: 6,
  },
  {
    track: "En timme till",
    lenght: "3:38",
    album: "Fiender är tråkigt",
    tracknr: 5,
    plays: 11067341,
    albumnr: 6,
  },
  {
    track: "Femton",
    lenght: "3:32",
    album: "Den första är alltid gratis",
    tracknr: 3,
    plays: 3757960,
    albumnr: 5,
  },
  {
    track: "Fiender är tråkigt",
    lenght: "3:41",
    album: "Fiender är tråkigt",
    tracknr: 6,
    plays: 11104130,
    albumnr: 6,
  },
  {
    track: "Finns det en så finns det flera",
    lenght: "3:57",
    album: "Satan i gatan",
    tracknr: 10,
    plays: 13753633,
    albumnr: 3,
  },
  {
    track: "Fint i mörker",
    lenght: "3:20",
    album: "Och som vanligt händer det något hemskt",
    tracknr: 7,
    plays: 507857,
    albumnr: 7,
  },
  {
    track: "Förlorad för alltid",
    lenght: "3:45",
    album: "Den första är alltid gratis",
    tracknr: 12,
    plays: 3358394,
    albumnr: 5,
  },
  {
    track: "Förlorat mot världen",
    lenght: "3:06",
    album: "Och som vanligt händer det något hemskt",
    tracknr: 8,
    plays: 1068735,
    albumnr: 7,
  },
  {
    track: "Galaxen",
    lenght: "4:35",
    album: "Den första är alltid gratis",
    tracknr: 13,
    plays: 4635586,
    albumnr: 5,
  },
  {
    track: "Gammal sång",
    lenght: "3:27",
    album: "Och vinnaren är…",
    tracknr: 2,
    plays: 13585462,
    albumnr: 2,
  },
  {
    track: "Gjord av sten",
    lenght: "4:36",
    album: "Den första är alltid gratis",
    tracknr: 5,
    plays: 6936028,
    albumnr: 5,
  },
  {
    track: "Gå nu",
    lenght: "3:13",
    album: "Vatten och Bröd",
    tracknr: 9,
    plays: 1836924,
    albumnr: 1,
  },
  {
    track: "Havanna Mamma",
    lenght: "3:52",
    album: "Vatten och Bröd",
    tracknr: 2,
    plays: 7402274,
    albumnr: 1,
  },
  {
    track: "Heaven med dig",
    lenght: "3:03",
    album: "Och som vanligt händer det något hemskt",
    tracknr: 10,
    plays: 4847864,
    albumnr: 7,
  },
  {
    track: "Hela huset",
    lenght: "3:33",
    album: "Handen i fickan fast jag bryr mig",
    tracknr: 3,
    plays: 65082320,
    albumnr: 4,
  },
  {
    track: "Hotellet",
    lenght: "4:01",
    album: "Den första är alltid gratis",
    tracknr: 14,
    plays: 1559561,
    albumnr: 5,
  },
  {
    track: "Hädanefter",
    lenght: "3:32",
    album: "Handen i fickan fast jag bryr mig",
    tracknr: 6,
    plays: 29792530,
    albumnr: 4,
  },
  {
    track: "Höghusdrömmar",
    lenght: "2:23",
    album: "Och som vanligt händer det något hemskt",
    tracknr: 6,
    plays: 2097616,
    albumnr: 7,
  },
  {
    track: "I min bil",
    lenght: "3:34",
    album: "Handen i fickan fast jag bryr mig",
    tracknr: 10,
    plays: 7050852,
    albumnr: 4,
  },
  {
    track: "I staden växer inga blommor",
    lenght: "2:44",
    album: "Och vinnaren är…",
    tracknr: 5,
    plays: 3984621,
    albumnr: 2,
  },
  {
    track: "Inga kläder",
    lenght: "3:21",
    album: "Satan i gatan",
    tracknr: 6,
    plays: 32638055,
    albumnr: 3,
  },
  {
    track: "Ingen kommer undan (inte ens i sverige)",
    lenght: "1:47",
    album: "Och vinnaren är…",
    tracknr: 3,
    plays: 3886429,
    albumnr: 2,
  },
  {
    track: "Ingenting kvar",
    lenght: "2:47",
    album: "Vatten och Bröd",
    tracknr: 1,
    plays: 2916315,
    albumnr: 1,
  },
  {
    track: "Inget kan ändra på det",
    lenght: "3:24",
    album: "Och vinnaren är…",
    tracknr: 11,
    plays: 6000921,
    albumnr: 2,
  },
  {
    track: "Innan dig",
    lenght: "0:40",
    album: "Och som vanligt händer det något hemskt",
    tracknr: 1,
    plays: 284147,
    albumnr: 7,
  },
  {
    track: "Jag kastar bort mitt liv",
    lenght: "3:43",
    album: "Fiender är tråkigt",
    tracknr: 4,
    plays: 6391096,
    albumnr: 6,
  },
  {
    track: "Jag kommer",
    lenght: "3:22",
    album: "Satan i gatan",
    tracknr: 3,
    plays: 88122215,
    albumnr: 3,
  },
  {
    track: "Jag lovar",
    lenght: "3:29",
    album: "Handen i fickan fast jag bryr mig",
    tracknr: 2,
    plays: 12453748,
    albumnr: 4,
  },
  {
    track: "Jajaja",
    lenght: "3:18",
    album: "Och vinnaren är…",
    tracknr: 9,
    plays: 4259935,
    albumnr: 2,
  },
  {
    track: "Kan inte säga nej",
    lenght: "3:42",
    album: "Vatten och Bröd",
    tracknr: 5,
    plays: 4726704,
    albumnr: 1,
  },
  {
    track: "Kurt Cobain",
    lenght: "3:30",
    album: "Fiender är tråkigt",
    tracknr: 1,
    plays: 22289361,
    albumnr: 6,
  },
  {
    track: "Kvällens sista cigarett",
    lenght: "4:14",
    album: "Vatten och Bröd",
    tracknr: 6,
    plays: 3798609,
    albumnr: 1,
  },
  {
    track: "Låt mig gå",
    lenght: "3:06",
    album: "Och som vanligt händer det något hemskt",
    tracknr: 3,
    plays: 2346010,
    albumnr: 7,
  },
  {
    track: "Låtsas som det regnar",
    lenght: "3:17",
    album: "Handen i fickan fast jag bryr mig",
    tracknr: 5,
    plays: 17094068,
    albumnr: 4,
  },
  {
    track: "Lördagen den femtonde mars",
    lenght: "1:09",
    album: "Satan i gatan",
    tracknr: 11,
    plays: 8085369,
    albumnr: 3,
  },
  {
    track: "Mitt hjärta blöder",
    lenght: "3:21",
    album: "Satan i gatan",
    tracknr: 4,
    plays: 37998925,
    albumnr: 3,
  },
  {
    track: "Måndagsbarn",
    lenght: "3:25",
    album: "Och vinnaren är…",
    tracknr: 8,
    plays: 31610115,
    albumnr: 2,
  },
  {
    track: "Månskensregn",
    lenght: "2:54",
    album: "Vatten och Bröd",
    tracknr: 7,
    plays: 2145412,
    albumnr: 1,
  },
  {
    track: "Mörkt - Bonus Track",
    lenght: "4:19",
    album: "Handen i fickan fast jag bryr mig",
    tracknr: 11,
    plays: 13336013,
    albumnr: 4,
  },
  {
    track: "Nöjd?",
    lenght: "3:03",
    album: "Vatten och Bröd",
    tracknr: 8,
    plays: 12884509,
    albumnr: 1,
  },
  {
    track: "Pang Pang",
    lenght: "2:38",
    album: "Den första är alltid gratis",
    tracknr: 11,
    plays: 2842292,
    albumnr: 5,
  },
  {
    track: "Play och sen repeat",
    lenght: "3:11",
    album: "Den första är alltid gratis",
    tracknr: 10,
    plays: 5381722,
    albumnr: 5,
  },
  {
    track: "På en buss",
    lenght: "2:47",
    album: "Och som vanligt händer det något hemskt",
    tracknr: 12,
    plays: 3535337,
    albumnr: 7,
  },
  {
    track: "Ridå",
    lenght: "0:40",
    album: "Och vinnaren är…",
    tracknr: 12,
    plays: 2376523,
    albumnr: 2,
  },
  {
    track: "Rosa drinkar och champagne",
    lenght: "3:17",
    album: "Fiender är tråkigt",
    tracknr: 8,
    plays: 3235344,
    albumnr: 6,
  },
  {
    track: "Satan i gatan",
    lenght: "3:15",
    album: "Satan i gatan",
    tracknr: 1,
    plays: 55474623,
    albumnr: 3,
  },
  {
    track: "SE MIG",
    lenght: "3:18",
    album: "Och som vanligt händer det något hemskt",
    tracknr: 2,
    plays: 12680524,
    albumnr: 7,
  },
  {
    track: "Sergels torg",
    lenght: "3:46",
    album: "Handen i fickan fast jag bryr mig",
    tracknr: 1,
    plays: 391000000,
    albumnr: 4,
  },
  {
    track: "Sju sorger",
    lenght: "4:00",
    album: "Satan i gatan",
    tracknr: 9,
    plays: 21904626,
    albumnr: 3,
  },
  {
    track: "Snälla bli min",
    lenght: "2:39",
    album: "Satan i gatan",
    tracknr: 8,
    plays: 71155649,
    albumnr: 3,
  },
  {
    track: "Solen har gått ner",
    lenght: "3:36",
    album: "Fiender är tråkigt",
    tracknr: 2,
    plays: 25063375,
    albumnr: 6,
  },
  {
    track: "Stopp",
    lenght: "3:06",
    album: "Och vinnaren är…",
    tracknr: 4,
    plays: 9120300,
    albumnr: 2,
  },
  {
    track: "Storma tills vi dör",
    lenght: "3:05",
    album: "Den första är alltid gratis",
    tracknr: 9,
    plays: 4141216,
    albumnr: 5,
  },
  {
    track: "Svart sommar",
    lenght: "3:42",
    album: "Den första är alltid gratis",
    tracknr: 6,
    plays: 6049245,
    albumnr: 5,
  },
  {
    track: "Tillfälligheter",
    lenght: "3:47",
    album: "Fiender är tråkigt",
    tracknr: 3,
    plays: 47850653,
    albumnr: 6,
  },
  {
    track: "Trädgården en fredag",
    lenght: "3:09",
    album: "Handen i fickan fast jag bryr mig",
    tracknr: 7,
    plays: 17710350,
    albumnr: 4,
  },
  {
    track: "V för Vendetta",
    lenght: "3:34",
    album: "Och vinnaren är…",
    tracknr: 7,
    plays: 5155718,
    albumnr: 2,
  },
  {
    track: "Va kvar",
    lenght: "2:53",
    album: "Handen i fickan fast jag bryr mig",
    tracknr: 4,
    plays: 12500778,
    albumnr: 4,
  },
  {
    track: "Vad gör vi ikväll - Bonus track",
    lenght: "4:15",
    album: "Satan i gatan",
    tracknr: 12,
    plays: 4296813,
    albumnr: 3,
  },
  {
    track: "Var är du?",
    lenght: "3:14",
    album: "Och som vanligt händer det något hemskt",
    tracknr: 9,
    plays: 1052620,
    albumnr: 7,
  },
  {
    track: "Varsomhelst/Närsomhelst",
    lenght: "2:59",
    album: "Och som vanligt händer det något hemskt",
    tracknr: 5,
    plays: 6601742,
    albumnr: 7,
  },
  {
    track: "Verkligheten",
    lenght: "4:28",
    album: "Den första är alltid gratis",
    tracknr: 8,
    plays: 10600812,
    albumnr: 5,
  },
  {
    track: "Vi har, vi har",
    lenght: "3:44",
    album: "Vatten och Bröd",
    tracknr: 4,
    plays: 2246675,
    albumnr: 1,
  },
  {
    track: "Vi kommer alltid ha Paris",
    lenght: "2:36",
    album: "Satan i gatan",
    tracknr: 5,
    plays: 14170608,
    albumnr: 3,
  },
  {
    track: "Vi mot världen",
    lenght: "3:12",
    album: "Den första är alltid gratis",
    tracknr: 2,
    plays: 34406405,
    albumnr: 5,
  },
  {
    track: "Vilken sekund som helst",
    lenght: "2:51",
    album: "Fiender är tråkigt",
    tracknr: 10,
    plays: 151059,
    albumnr: 6,
  },
  {
    track: "Vinnaren",
    lenght: "2:33",
    album: "Och vinnaren är…",
    tracknr: 1,
    plays: 4701213,
    albumnr: 2,
  },
  {
    track: "Välkommen in",
    lenght: "3:32",
    album: "Satan i gatan",
    tracknr: 2,
    plays: 68148579,
    albumnr: 3,
  },
];

function App() {
  const [songList, setSongList] = useState([]);
  const [songs, setSongs] = useState(allSongs);
  const [chosen, setChosen] = useState(
    songs[Math.floor(Math.random() * songs.length)]
  );
  const [win, setWin] = useState(false);
  const [guesses, setGuesses] = useState(0);
  useEffect(() => {
    if (win === true || guesses === 8) {
      setSongs([]);
    }
  }, [win, guesses]);
  return (
    <Box sx={{ bgcolor: "#B67C82", height: "auto", width: "100vw" }}>
      <ThemeProvider theme={theme}>
        <Logo guesses={guesses} />
        <Searchbar
          songs={songs}
          songList={songList}
          setSongList={setSongList}
          setSongs={setSongs}
          win={win}
          setWin={setWin}
          chosen={chosen}
          guesses={guesses}
          setGuesses={setGuesses}
        />
        <Box
          sx={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
            margin: 2,
          }}
        >
          {(win && (
            <Typography
              sx={{
                fontSize: "1rem",
                "@media (min-width:1000px)": {
                  fontSize: "2rem",
                },
                color: "#41212A",
              }}
            >
              BRA JOBBAT, DU GISSADE RÄTT!
            </Typography>
          )) ||
            (guesses === 8 && (
              <Typography
                sx={{
                  fontSize: "1rem",
                  "@media (min-width:1000px)": {
                    fontSize: "2rem",
                  },
                  color: "#41212A",
                }}
              >
                TYVÄRR, LÅTEN VAR {chosen.track.toUpperCase()}
              </Typography>
            )) || <div></div>}
        </Box>
        <SongTable
          songs={songs}
          songList={songList}
          setSongList={setSongList}
          chosen={chosen}
        />
      </ThemeProvider>
    </Box>
  );
}

export default App;

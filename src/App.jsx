import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import TextField from "@mui/material/TextField";
import { SEARCHDATA } from "./db/MOCK_DATA.jsx";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CircularProgress from "@mui/material/CircularProgress";
import { display, height, width } from "@mui/system";

import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function App() {
  const [search, setSearch] = useState("");
  const [searchTimer, setSearchTimer] = useState(0);
  const [loading, setLoading] = useState(false);

  const updateSearch = (e) => {
    // setSearch(e.target.value);

    setLoading(true);
    clearTimeout(searchTimer);
    setSearchTimer(
      setTimeout(() => {
        setSearch(e.target.value);
        setLoading(false);
      }, 300)
    );
  };

  if (loading) {
    return (
      <div className="App">
        <TextField
          id="outlined-basic"
          autoComplete="off"
          label="textfield"
          variant="outlined"
          sx={{ marginBottom: "20px", width: "50%" }}
          onChange={updateSearch}
        />

        <div>
          <CircularProgress color="secondary" />
          {/* <Box sx={{ width: "100%" }}>
            <LinearProgress />
          </Box> */}
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <TextField
        autoComplete="off"
        id="outlined-basic"
        label="textfield"
        variant="outlined"
        sx={{ marginBottom: "20px", width: "50%" }}
        onChange={updateSearch}
      />

      <div className="cards_place">
        {SEARCHDATA.filter((data) => {
          if (search === "") return data;
          else if (data.first_name.toLowerCase().includes(search.toLowerCase()))
            return data;
          else if (data.last_name.toLowerCase().includes(search.toLowerCase()))
            return data;
          else if (data.email.toLowerCase().includes(search.toLowerCase()))
            return data;
          else if (data.gender.toLowerCase().includes(search.toLowerCase()))
            return data;
        }).map((data, index) => {
          return (
            <Card className="cardhover" sx={{ marginBottom: "20px" }}>
              <CardContent>
                <div key={index}>
                  <div>{data.first_name}</div>
                  <div>{data.last_name}</div>
                  <div>{data.email}</div>
                  <div>{data.gender}</div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default App;

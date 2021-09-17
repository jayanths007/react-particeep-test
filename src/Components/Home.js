import React from "react";
import { movies$ } from "../Data/movies";
import Card from "./Card";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Home = () => {
  const [movies, setMovies] = React.useState([]);
  const [filterMovies, setFilterMovies] = React.useState([]);

  const [category, setCategory] = React.useState("All");

  React.useEffect(() => {
    movies$.then((data) => {
      setMovies(data);
      setFilterMovies(data);
    });
  }, []);
  console.log("eeee", category);

  const onDelete = (e) => {
    setFilterMovies(filterMovies.filter((item) => item.title !== e.title));
  };

  const handleChangeCategory = (event) => {
    setCategory(event.target.value);
    setFilterMovies(
      movies.filter((item) => item.category === event.target.value),
    );
    if (event.target.value === "All") {
      setFilterMovies(movies);
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: 40, fontWeight: "bold", marginBottom: 15 }}>
          Particeep React Test
        </div>
        <div
          style={{
            maxWidth: 150,
            marginBottom: 30,
            marginLeft: 50,

            margin: "auto",
          }}
        >
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={category}
              label="Category"
              onChange={handleChangeCategory}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Comedy">Comedy</MenuItem>
              <MenuItem value="Animation">Animation</MenuItem>
              <MenuItem value="Thriller">Thriller</MenuItem>
              <MenuItem value="Drama">Drama</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {filterMovies.map((item, index) => {
          return (
            <div key={item.id}>
              <Card item={item} onDelete={(e) => onDelete(item)} />
            </div>
          );
        })}
      </div>
      <div>Developed by Jayanth Sudabattula for Particeep</div>
    </div>
  );
};
export default Home;

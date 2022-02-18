import { Button, MenuItem, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { categories } from "./Data";
import ErrorMessage from "./ErrorMessage";
import "./Style.css";

function Home({ name, setName, fetchQuestion }) {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);
  const history = useNavigate();

  console.log(!category);
  console.log(!name);
  console.log(!difficulty);

  const handleSubmit = () => {
    if (!category || !difficulty || !name) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestion(category, difficulty);
      history("/quiz");
    }
  };

  return (
    <div className="home">
      <div className="home-title">
        <span>Quiz app</span>
      </div>

      <div className="settings-select">
        <div className="error">{error && <ErrorMessage />}</div>
        <TextField
          className="text-field"
          variant="outlined"
          label="Enter your name"
          style={{ marginTop: 30 }}
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <TextField
          select
          className="text-field"
          variant="outlined"
          label="Enter your name"
          style={{ marginTop: 20 }}
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        >
          {categories.map((item, index) => {
            return (
              <MenuItem key={item.category} value={item.value}>
                {item.category}
              </MenuItem>
            );
          })}
        </TextField>
        <TextField
          select
          className="text-field"
          variant="outlined"
          style={{ marginTop: 20 }}
          label="Select diffulty"
          onChange={(e) => setDifficulty(e.target.value)}
          value={difficulty}
        >
          <MenuItem key="Easy" value="easy">
            Easy
          </MenuItem>
          <MenuItem key="Medium" value="medium">
            Medium
          </MenuItem>
          <MenuItem key="Hard" value="hard">
            Hard
          </MenuItem>
        </TextField>
        <Button
          onClick={handleSubmit}
          style={{ marginTop: 30 }}
          variant="contained"
          color="primary"
          style={{ width: "100%", marginTop: 20 }}
        >
          Start quiz
        </Button>
      </div>
    </div>
  );
}

export default Home;

import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import "./Card.css";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Card({ item, onDelete }) {
  const [switchToggle, setSwitchToggle] = React.useState(false);

  const toggleSwitch = (e) => {
    setSwitchToggle(e.target.checked);
    if (e.target.checked) {
      item.likes++;
      setSwitchToggle(true);
    } else {
      if (!e.target.checked) {
        item.dislikes--;
      }
    }
  };
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: 600,
            height: 335,
            borderRadius: 15,
          },
        }}
      >
        <Paper style={{ marginRadius: 15 }} elevation={15}>
          <div style={{ marginRadius: 15 }}>
            <img
              src="https://www.italy24news.com/entertainment/content/uploads/2021/07/19/781036655f.jpg"
              alt="Logo"
              width="600"
              className="image"
            />
          </div>
          <div className="Black-Shade">
            <div className="Title">{item.title}</div>
            <div className="Des">
              <div>Genre: {item.category}</div>
              <div className="container">
                <div>
                  👎 {item.dislikes}{" "}
                  <Switch
                    onChange={(e) => toggleSwitch(e)}
                    checked={switchToggle}
                  />
                  👍 {item.likes}
                </div>
                <div style={{ marginRight: 30 }}>
                  <IconButton
                    onClick={() => onDelete()}
                    aria-label="delete"
                    color="primary"
                  >
                    <DeleteIcon />
                  </IconButton>
                </div>
              </div>
            </div>
          </div>
        </Paper>
      </Box>
    </div>
  );
}

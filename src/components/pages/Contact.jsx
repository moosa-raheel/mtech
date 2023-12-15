import React from "react";
import Navbar from "../Navbar";
import { TextField, TextareaAutosize } from "@mui/material";

export default function Contact() {
  return (
    <>
      <Navbar navColor={"#0779e4"} />
      <div className="contact">
        <h1 style={{ fontSize: "4rem", textAlign: "center" }}>Contact Us</h1>
        <div className="container">
          <div className="form" style={{ width: "60%", margin: "0 auto" }}>
            <TextField
              variant="outlined"
              label="Enter your name"
              fullWidth
              margin="normal"
              inputProps={{ style: { fontSize: "1.8rem" } }}
              InputLabelProps={{ style: { fontSize: "1.8rem" } }}
              type="text"
            />

            <TextField
              variant="outlined"
              label="Enter your email"
              fullWidth
              margin="normal"
              inputProps={{ style: { fontSize: "1.8rem" } }}
              InputLabelProps={{ style: { fontSize: "1.8rem" } }}
              type="email"
            />
            <TextField
              variant="outlined"
              label="Enter your number"
              fullWidth
              margin="normal"
              inputProps={{ style: { fontSize: "1.8rem" }, min: "1" }}
              InputLabelProps={{ style: { fontSize: "1.8rem" } }}
              type="number"
              min="1"
            />
            <TextareaAutosize
              style={{
                width: "100%",
                marginTop: "1rem",
                height: "30rem",
                borderRadius: ".5rem",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

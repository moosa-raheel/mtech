import { Grid, TextField, Box, Button } from "@mui/material";
import Navbar from "../Navbar";
import css from "../../css/style.module.css";
import AccountCircle from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import LoginIcon from "@mui/icons-material/Login";
import contactImage from "../../assets/images/contact.png";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar nav={"normal_nav"} />

      <div
        className="signup"
        style={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          style={{
            width: "80%",
            height: "70rem",
            background: "#fff",
            margin: "0 auto",
            borderRadius: "1rem",
            boxShadow: "10px 10px 10px #afa7a7",
          }}
        >
          <Grid item lg={1}></Grid>
          <Grid
            item
            lg={5}
            mt={"5rem"}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h1 className={`${css.text_center} ${css.f_40}`}>Sign up</h1>
            <form
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <AccountCircle
                  sx={{ color: "action.active", mr: 1, my: 0.5 }}
                />
                <TextField
                  id="input-with-sx"
                  label="Username"
                  variant="standard"
                  name="name"
                  required
                  type="text"
                  autoComplete="off"
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="email"
                  variant="standard"
                  type="email"
                  required
                  name="email"
                  autoComplete="off"
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="password"
                  variant="standard"
                  type="password"
                  name="password"
                  required
                  autoComplete="off"
                />
              </Box>
              <Box sx={{ display: "flex", alignItems: "flex-end" }}>
                <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <TextField
                  id="input-with-sx"
                  label="Repeat your password"
                  variant="standard"
                  type="password"
                  name="cPassword"
                  required
                  autoComplete="off"
                />
              </Box>
              <Button type="submit" variant="outlined" endIcon={<LoginIcon />}>
                Signup
              </Button>
            </form>
          </Grid>
          <Grid item lg={5}>
            <div style={{ width: "100%", height: "100%" }}>
              <div
                className="img"
                style={{ width: "100%", height: "80%", paddingTop: "2rem" }}
              >
                <img
                  src={contactImage}
                  alt="Cratoon"
                  style={{ width: "100%" }}
                />
              </div>
              <div
                className="content"
                style={{
                  width: "100%",
                  height: "20%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <p
                  style={{
                    color: "#0779e4",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  I have already sign up
                </p>
              </div>
            </div>
          </Grid>
          <Grid item lg={1}></Grid>
        </Grid>
      </div>
    </>
  );
}

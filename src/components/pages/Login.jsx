import Navbar from "../Navbar";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import userImage from "../../assets/images/user.png";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { Box, Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar nav={"normal_nav"} />
      <div
        className="login"
        style={{
          marginTop: "9rem",
          width: "100%",
          height: "90vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#ddd",
        }}
      >
        <div
          className="form"
          style={{
            width: "70%",
            height: "50rem",
            background: "#fff",
            borderRadius: "1rem",
            position: "relative",
          }}
        >
          <Avatar
            src={userImage}
            style={{
              width: "12rem",
              height: "12rem",
              position: "absolute",
              top: "-6rem",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
          <form
            style={{
              width: "100%",
              height: "80%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "space-evenly",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <EmailIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Email"
                variant="standard"
                type="email"
                name="email"
                required
                autoComplete="off"
              />
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <LockIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Password"
                variant="standard"
                type="password"
                required
                autoComplete="off"
                name="password"
              />
            </Box>
            <Button variant="outlined" endIcon={<LoginIcon />} type="submit">
              Login
            </Button>
          </form>
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
                cursor: "pointer",
              }}
              onClick={() => {
                navigate("/signup");
              }}
            >
              I don't have an account
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

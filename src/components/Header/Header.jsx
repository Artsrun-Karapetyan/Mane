import AppBar from "@mui/material/AppBar";
import { Link } from "@tanstack/react-router";
import { Box, Toolbar } from "@mui/material";
import img from "../../logo/user.png";
import { useState } from "react";
export default function Header() {
  const [active, setIsActive] = useState("users");

  return (
    <AppBar>
      <Toolbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <img style={{ width: 70, height: 65 }} src={img} alt="" />
        <Box style={{ gap: 27, display: "flex" }}>
          <Link
            onClick={() => setIsActive("users")}
            style={{
              color: active === "users" ? "grey" : "white",
              fontSize: 21,
              textDecoration: "none",
            }}
            to="/users"
          >
            Users
          </Link>
          <Link
            style={{
              color: active === "courts" ? "grey" : "white",
              fontSize: 21,
              textDecoration: "none",
            }}
            to="/courts"
            onClick={() => setIsActive("courts")}
          >
            Courts
          </Link>
          <Link
            style={{
              color: active === "custom" ? "grey" : "white",
              fontSize: 21,
              textDecoration: "none",
            }}
            to="/custom"
            onClick={() => setIsActive("custom")}
          >
            Custom
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

import AppBar from "@mui/material/AppBar";
import { Link } from "@tanstack/react-router";
import { Box, Toolbar } from "@mui/material";
import img from "../../logo/user.png";

export default function Header() {
  return (
    <AppBar>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/">
          <img style={{ width: 70, height: 65 }} src={img} alt="" />
        </Link>
        <Box sx={{ gap: 27, display: "flex" }}>
          <Link
            activeProps={{ style: { color: "orange" } }}
            inactiveProps={{ style: { color: "white" } }}
            style={{
              fontSize: 21,
              textDecoration: "none",
            }}
            to="/users"
          >
            Օգտատերեր
          </Link>
          <Link
            style={{
              fontSize: 21,
              textDecoration: "none",
            }}
            to="/courts"
            activeProps={{ style: { color: "orange" } }}
            inactiveProps={{ style: { color: "white" } }}
          >
            Դատարաններ
          </Link>
          <Link
            style={{
              fontSize: 21,
              textDecoration: "none",
            }}
            activeProps={{ style: { color: "orange" } }}
            inactiveProps={{ style: { color: "white" } }}
            to="/custom"
          >
            Օգտատերի ստեղծում
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

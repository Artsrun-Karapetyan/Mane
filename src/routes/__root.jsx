import { Box, CssBaseline } from "@mui/material";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import Providers from "../providers/Providers";
import Layout from "./_layout";
export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <Providers>
      <CssBaseline />
      <Box
        sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Box sx={{ maxWidth: "1200px", margin: "0 auto" }}>
          <Layout />
        </Box>
      </Box>
    </Providers>
  );
}

import { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Stack,
  CircularProgress,
} from "@mui/material";

import { useGetUsers } from "./queries";
import { useAppStore } from "../stores/useAppStore";
import DataTable from "./shared/DataTable";

export default function HomePage() {
  const { data, isLoading, error } = useGetUsers();

  return (
    <Box sx={{ padding: 3 }}>
      <Typography sx={{ textAlign: "center", fontSize: 21 }}>
        Բարի գալուստ համակարգ
      </Typography>
      
    </Box>
  );
}

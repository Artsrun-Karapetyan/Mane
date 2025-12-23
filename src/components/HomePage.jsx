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
      <Typography sx={{textAlign:'center', fontSize:21}}>Օգտատերերի ցուցակ</Typography>
      <Box sx={{ marginTop: 4, marginBottom: 3 }}>
        {isLoading ? (
          <Box sx={{ display: "flex", justifyContent: "center", padding: 4 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography variant="body2" color="error" sx={{ padding: 2 }}>
            Error loading data: {error.message}
          </Typography>
        ) : (
          <DataTable
            title="Users Table"
            columns={[
              { id: "id", label: "ID" },
              { id: "name", label: "Name" },
              { id: "email", label: "Email" },
              {
                id: "status",
                label: "Status",
                align: "center",
                render: (value) => (
                  <Typography
                    variant="body2"
                    sx={{
                      color:
                        value === "active" ? "success.main" : "text.secondary",
                      fontWeight: "medium",
                    }}
                  >
                    {value || "N/A"}
                  </Typography>
                ),
              },
            ]}
            data={data || []}
            emptyMessage="No users found"
            sx={{ marginTop: 2 }}
          />
        )}
      </Box>
    </Box>
  );
}

import DataTable from "./shared/DataTable";
import { useGetUsers } from "./queries";
import { Box, CircularProgress, Typography } from "@mui/material";
import Alert from "@mui/material/Alert";

export default function Users() {
  const columns = [
    { id: "id", label: "ID" },
    { id: "name", label: "name" },
    { id: "email", label: "email" },
    { id: "role", label: "role" },
    { id: "createdAt", label: "created At" },
  ];
  const { data = [], isLoading, error } = useGetUsers();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }
  return (
    <Box
      sx={{
        marginLeft: 10,
      }}
    >
      <Typography sx={{ textAlign: "center", fontSize: 21 }}>
        Օգտատերերի ցուցակ
      </Typography>
      <Box sx={{ width: "100%", maxWidth: 1200 }}>
        <DataTable title="Users" columns={columns} data={data || []} />
      </Box>
    </Box>
  );
}

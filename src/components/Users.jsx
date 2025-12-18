import DataTable from "./shared/DataTable";
import { useGetUsers } from "./queries";
import { Box, CircularProgress } from "@mui/material";
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
  return (
    <Box
      sx={{
        marginLeft: 10,
      }}
    >
      {isLoading ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : error ? (
        <Alert severity="error">{error.message}</Alert>
      ) : (

        <Box sx={{ width: "100%", maxWidth: 1200 }}>
          <DataTable title="Users" columns={columns} data={data || []} />
        </Box>
      )}
    </Box>
  );
}

import { useGetCourts } from "../components/queries";
import { Box, CircularProgress } from "@mui/material";
import DataTable from "../components/shared/DataTable";
import CreateCourtsModal from "./CreateCourtsModal";
import { useCourtsColumns } from "./UseCourtsColumns";
export default function Courts() {
  const { data, isLoading, error } = useGetCourts();
  const columns = useCourtsColumns({ data: data || [] });
  console.log("data", data);

  if (isLoading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error.message}</Alert>;
  }
  return (
    <Box>
      <CreateCourtsModal />
      <Box sx={{ width: "100%", maxWidth: 1200 }}>
        <DataTable title="Դատարաններ" columns={columns} data={data || []} />
      </Box>
    </Box>
  );
}

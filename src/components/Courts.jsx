import { useGetCourts } from "./queries";
import { Box, CircularProgress } from "@mui/material";
import DataTable from "./shared/DataTable";
import CreateCourtsModal from "./CreateCourtsModal";
import EditCourtsModal from "./EditCourtsModal";
import DeleteCourtsModal from "./DeleteCourtsModal";
export default function Courts() {
  const { data, isLoading, error } = useGetCourts();

  const columns = [
    { id: "id", label: "ID" },
    { id: "name", label: "Անուն" },
    { id: "city", label: "Քաղաք" },
    {
      id: "actions",
      label: "Գործողություններ",
      render: (value, row, rowIndex) => (
        <Box>
          <EditCourtsModal court={row} />
          <DeleteCourtsModal court={row} />
        </Box>
      ),
    },
  ];

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

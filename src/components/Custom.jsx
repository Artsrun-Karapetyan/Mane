import { useAppStore } from "../stores/useAppStore";
import CreateModal from "./CreateModal";
import DataTable from "./shared/DataTable";
import { Box } from "@mui/material";
export default function Custom() {

  const {users}  = useAppStore()
  const columns = [
    { id: "name", label: "Անուն" },
    { id: "email", label: "Էլ փոստ" },
    { id: "phone", label: "Հեռախոսահամար" },
    { id: "gender", label: "Սեռ" },
    { id: "country", label: "Երկիր" },
    { id: "message", label: "Տվյալներ" },
  ];
  return (
    <>
      <Box sx={{ marginTop: 20 }}>
        <CreateModal  />
        <DataTable columns={columns}   data={users}/>
      </Box>
    </>
  );
}

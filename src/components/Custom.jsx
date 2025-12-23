import { useAppStore } from "../stores/useAppStore";
import CreateModal from "./CreateModal";
import DataTable from "./shared/DataTable";
import { Box } from "@mui/material";
export default function Custom() {

  const users  = useAppStore((state)=> state.users)
  const columns = [
    { id: "name", label: "name" },
    { id: "email", label: "email" },
    { id: "phone", label: "phone" },
    { id: "gender", label: "gender" },
    { id: "country", label: "country" },
    { id: "message", label: "message" },
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

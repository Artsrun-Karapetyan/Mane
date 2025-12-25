import { Button } from "@mui/material";
import { useCourtsDelete } from "../components/mutation";
import { useState } from "react";
import DeleteModal from "./DeleteModal";


export default function DeleteCourtsModal({ id }) {
  const { trigger: deleteCourt } = useCourtsDelete(id);
  const [open, setOpen] = useState(false);
  const handleDeleteClick = () => setOpen(true);

 const handleConfirmDelete = async () => {
    await deleteCourt();
    setOpen(false);
  };


    const handleCancel = () => setOpen(false);

  return (
    <>
      <Button sx={{ marginLeft: 2 }} onClick={handleDeleteClick}>
        Ջնջել
      </Button>

       <DeleteModal
        open={open}
        oncancel={handleCancel}
        onConfirm={handleConfirmDelete}
        confirmMessage={`Դուք իսկապե՞ս ցանկանում եք ջնջել ${id} համարով դատարանը`}
      />
    </>
  );
}

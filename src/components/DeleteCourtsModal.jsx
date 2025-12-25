import { Button } from "@mui/material";
import { useCourtsDelete } from "./mutation";
export default function DeleteCourtsModal({court}){
  const { trigger: deleteCourt } = useCourtsDelete(court.id);

  return(
    <>
    <Button sx={{marginLeft:2}} onClick={deleteCourt}>Ջնջել</Button>
    </>
  )
}
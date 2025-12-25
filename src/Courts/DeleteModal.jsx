import {
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button,
} from "@mui/material";

export default function DeleteModal({
  open,
  oncancel,
  onConfirm,
  confirmMessage,
}) {
  return (
    <Dialog open={open} onClose={oncancel}>
      <DialogTitle>Հաստատում</DialogTitle>
      <DialogContent>{confirmMessage}</DialogContent>
      <DialogActions>
        <Button onClick={onConfirm}>Ջնջել</Button>
        <Button onClick={oncancel}>Չեղարկել</Button>
      </DialogActions>
    </Dialog>
  );
}

import { useState } from "react";
import { useAddCourts } from "./mutation";
import { Modal, Button, Box, TextField, CircularProgress } from "@mui/material";
import { useFormik } from "formik";

export default function CreateCourtsModal() {
  const [open, setOpen] = useState(false);
  const { trigger, isMutating } = useAddCourts();

  const formik = useFormik({
    initialValues: {
      name: "",
      city: "",
    },
    onSubmit: async (values, { resetForm }) => {
     try {

        await trigger(values);
        setOpen(false);
        resetForm();

      } catch (error) {
        setErrors(error?.errors || {});
      }
    },
    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = "Անուն դաշտը պարտադիր է ";
      }

      if (!values.city) {
        errors.city = "Քաղաք դաշտը պարտադիր է ";
      }
      return errors;
    },
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button
        sx={{ marginLeft: 120, border: 1, marginBottom: 3 }}
        onClick={handleOpen}
      >
        Ավելացնել Դատարան
      </Button>

      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            width: 540,
            height: 370,
            transform: "translate(-50%, -50%)",
            border: "2px solid black",
            backgroundColor: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            gap: "30px",
          }}
          onSubmit={formik.handleSubmit}
          component="form"
        >
          <TextField
            type="text"
            name="name"
            label="Անուն"
            onChange={formik.handleChange}
            value={formik.values.name}
            error={formik.errors.name}
            helperText={formik.errors.name}
          />
          <TextField
            type="text"
            name="city"
            label="Քաղաք"
            onChange={formik.handleChange}
            value={formik.values.city}
            error={formik.errors.city}
            helperText={formik.errors.city}
          />

          <Box>
            <Button type="submit" disabled={!formik.isValid}>
              {isMutating ? <CircularProgress /> : "Պահպանել"}
            </Button>
            <Button onClick={handleClose}>Փակել</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

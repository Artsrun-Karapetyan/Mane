import { useEffect, useState } from "react";
import { useCourtsUpdate } from "../components/mutation";
import { useSWRConfig } from "swr";
import { Modal, Button, Box, TextField, CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import { useCourtDetail } from "../components/queries";


export default function EditCourtsModal({ id }) {
  const { mutate } = useSWRConfig();
  const [open, setOpen] = useState(false);
  const { trigger, isMutating } = useCourtsUpdate(id);
  const { data: court } = useCourtDetail(id);

  const formik = useFormik({
    initialValues: {
      name: court?.name,
      city: court?.city,
    },

    onSubmit: async (values, { resetForm, setErrors }) => {
      try {
        await trigger(values);
        mutate(`/courts/${id}`)
        setOpen(false);
        resetForm();
      } catch (error) {
        setErrors(error?.errors || {});
        console.log(error.response?.data?.errors);
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

   useEffect(() => {
    if (open && court) {
      formik.setValues({
        name: court.name,
        city: court.city,
      });
    }
  }, [open, court]);


  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button onClick={handleOpen}>խմբագրել</Button>

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

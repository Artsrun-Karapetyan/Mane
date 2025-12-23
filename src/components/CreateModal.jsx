import {
  Modal,
  Button,
  Box,
  DialogTitle,
  TextareaAutosize,
  MenuItem,
  Select,
  TextField,
  CircularProgress,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
import { useFormik } from "formik";
import style from "./CreateModal.module.css";
import { useAppStore } from "../stores/useAppStore";

export default function CreateModal() {

  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const addUser = useAppStore((state) => state.addUser);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      gender: "",
      message: "",
      country: "",
    },
    onSubmit: (values, { resetForm }) => {
      setLoading(true);
      setTimeout(() => {
        addUser({
          name: values.name,
          email: values.email,
          phone: values.phone,
          gender: values.gender,
          message: values.message,
          country: values.country,
        });
        setLoading(false);
        resetForm();
        setOpen(false);
      }, 500);
    },
    validate: (values) => {
      const errors = {};
      console.log(errors);

      if (!values.name) {
        errors.name = "Անուն դաշտը պարտադիր է";
      }
      if (!values.email) {
        errors.email = "Էլ փոստ դաշտը պարտադիր է";
      }
      if (!values.phone) {
        errors.phone = "Հեռախոսահամար դաշտը պարտադիր է";
      }
      if (!values.gender) {
        errors.gender = "Սեռ դաշտը պարտադիր է";
      }
      if (!values.country) {
        errors.country = "երկիր դաշտը պարտադիր է";
      }

      if (!values.message) {
        errors.message = "Տվյալներ դաշտը պարտադիր է";
      }
      return errors;
    },
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    formik.resetForm();
  };

  return (
    <>
      <Button
        sx={{ marginLeft: 120, border: 1, marginBottom: 3 }}
        onClick={handleOpen}
      >
        Ավելացնել օգտատեր
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Box
          className={style.box}
          onSubmit={formik.handleSubmit}
          component="form"
        >
          <DialogTitle>Օգտատերի ստեղծում </DialogTitle>
          <TextField
            type="text"
            name="name"
            label="name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && formik.errors.name}
            sx={{ width: 300, height: 50 }}
            helperText={formik.touched.name && formik.errors.name}
            value={formik.values.name}
          />
          <TextField
            type="email"
            name="email"
            label="email"
            value={formik.values.email}
            error={formik.touched.email && formik.errors.email}
            sx={{ width: 300, height: 50 }}
            helperText={formik.touched.email && formik.errors.email}
            onChange={formik.handleChange}
          />
          <TextField
            type="text"
            name="phone"
            label="phone"
            value={formik.values.phone}
            sx={{ width: 300, height: 50 }}
            error={formik.touched.phone && formik.errors.phone}
            helperText={formik.touched.phone && formik.errors.phone}
            onChange={formik.handleChange}
          />
          <InputLabel id="gender">Ընտրեք սեռ</InputLabel>

          <Select
            value={formik.values.gender}
            name="gender"
            labelId="gender"
            id="demo-simple-select"
            sx={{ width: 300, height: 50 }}
            onChange={formik.handleChange}
          >
            <MenuItem value="male">male</MenuItem>
            <MenuItem value="female">female</MenuItem>
          </Select>
          {formik.touched.gender && formik.errors.gender && (
            <div style={{ color: "red", fontSize: 12 }}>
              {formik.errors.gender}
            </div>
          )}
          <InputLabel id="country">Ընտրեք երկիր</InputLabel>
          <Select
            labelId="country-simple-select-label"
            sx={{ width: 300, height: 50 }}
            name="country"
            id=""
            value={formik.values.country || ""}
            onChange={formik.handleChange}
          >
            <MenuItem value="Armenia">Armenia</MenuItem>
            <MenuItem value="Germany">Germany</MenuItem>
            <MenuItem value="France">France</MenuItem>
            <MenuItem value="Spain">Spain</MenuItem>
          </Select>
          {formik.touched.country && formik.errors.country && (
            <span style={{ color: "red", fontSize: 12 }}>
              {formik.errors.country}
            </span>
          )}
          <TextareaAutosize
            sx={{ width: 300, height: 110, border: 1 }}
            name="message"
            aria-label="minimum height"
            minRows={3}
            style={{ width: 200 }}
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message && (
            <div style={{ color: "red", fontSize: 12 }}>
              {formik.errors.message}
            </div>
          )}
          <Box>
            <Button type="submit" disabled={!formik.isValid}>
              {loading ? <CircularProgress /> : "Պահպանել"}
            </Button>
            <Button sx={{ marginLeft: 5 }} onClick={handleClose}>
              Փակել
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
}

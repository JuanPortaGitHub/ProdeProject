import React, { FC, useState } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

interface ToastTypes {
  isOpen: boolean;
  error: any;
  position: any;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Toast: FC<ToastTypes> = ({ isOpen, error, position, children }) => {
  const [open, setOpen] = useState(isOpen);

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Stack spacing={2}>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={position}
      >
        <Alert
          icon={
            error ? (
              <ErrorOutlineOutlinedIcon fontSize="inherit" />
            ) : (
              <CheckCircleOutlineIcon fontSize="inherit" />
            )
          }
          onClose={handleClose}
          severity={error ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {children}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Toast;

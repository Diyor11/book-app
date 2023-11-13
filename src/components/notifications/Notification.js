// @flow
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { notificationSelect } from "../../store/selectors";
import { Alert, Snackbar } from "@mui/material";
import { setNotification } from "../../store/slice/appSlice";

export const Notification = (props) => {
  const notify = useSelector(notificationSelect);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setNotification(null));
  };

  return (
    <div>
      <Snackbar
        open={notify}
        autoHideDuration={5000}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity={notify?.type || "success"} sx={{ width: "100%" }}>
          {notify?.text}
        </Alert>
      </Snackbar>
    </div>
  );
};

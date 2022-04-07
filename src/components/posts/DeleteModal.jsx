import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  IconButton,
} from "@mui/material";
import PropTypes from "prop-types";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deletePostAction } from "../../actions";
import Buttons from "../general/Buttons";
import deleteIcon from "../../assets/delete.svg";

export default function DeleteModal({postedAt}) {
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const dispatch = useDispatch();

  const handleDeleteModal = () => {
    setOpenDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setOpenDeleteModal(false);
  };

  const handleDeleteButton = () => {
    dispatch(
      deletePostAction({
        postedAt,
      })
    );
    setOpenDeleteModal(false);
  };

  return (
    <Box>
      <IconButton
        aria-label="delete"
        sx={{ mr: ".5em" }}
        onClick={handleDeleteModal}
      >
        <img alt="delete icon" src={deleteIcon} />
      </IconButton>

      <Dialog
        open={openDeleteModal}
        onClose={closeDeleteModal}
        fullWidth
        maxWidth="sm"
      >
        <DialogContent>
          <DialogContentText align="left" variant="h6">
            Are you sure you want to delete this item?
          </DialogContentText>
        </DialogContent>
       
        <DialogActions>
          <Buttons
            outlined={true}
            disabled={false}
            text="Cancel"
            handleFunction={closeDeleteModal}
          />

          <Buttons
            outlined={true}
            disabled={false}
            text="Ok"
            handleFunction={handleDeleteButton}
          />
        </DialogActions>
      </Dialog>
    </Box>
  );
}

DeleteModal.propTypes = {
  postedAt: PropTypes.number.isRequired,
};

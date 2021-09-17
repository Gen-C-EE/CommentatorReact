
import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import RegisterForm from './RegisterForm';

const ModalDialog = ({ open, handleClose }) => {
  return (
    // props received from App.js
    <Dialog open={open} onClose={handleClose}>
      <RegisterForm handleClose={handleClose} />
    </Dialog>
  );
};

export default ModalDialog;
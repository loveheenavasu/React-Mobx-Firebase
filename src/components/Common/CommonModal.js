import React, { Children } from 'react'
import Modal from '@material-ui/core/Modal';
import { Backdrop, Fade } from '@material-ui/core';
import { Style } from "./style"

export default function CommonModal(props) {
  const {handleClose, open } = props;

  const classes = Style()
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={() => handleClose()}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {props.children}
        </Fade>
      </Modal>
    </>
  )
}

import React from 'react'
import { Style } from "./style"
import closeIcon from "../../assets/images/close-gray-icon.png";
import { Button,Grid, TextField } from '@material-ui/core';

const AddEditForm =(props) => {
    const classes = Style()
    const { addCarData, title, buttonText, handleOnChange, handleClose, addSubmit } = props;
    return (
        <div className={classes.paper1}>
        <section className={classes.container}>
          <div className={classes.section1}>
            <div className={classes.closeBtnDiv} onClick={() => handleClose()}>
              <img src={closeIcon} className={classes.closeBtn} />
            </div>
            <h1 className={classes.title}>{title}</h1>
            <div className={classes.image}>
              <img src={addCarData?.image} width={'100%'} />
            </div>
          </div>
          <div className={classes.fields}>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={12}>
                <TextField id="outlined-basic" label="Vehical Make" variant="outlined" fullWidth value={addCarData?.VehicleMake} name="VehicleMake" onChange={(e) => handleOnChange(e)} />
              </Grid>
              <Grid item xs={12}>
                <TextField id="outlined-basic" label="Vehicle Modal" variant="outlined" fullWidth value={addCarData?.VehicleModel} name="VehicleModel" onChange={(e) => handleOnChange(e)} />
              </Grid>
              <Grid item xs={12}>
                <TextField id="outlined-basic" label="Info" variant="outlined" fullWidth value={addCarData?.info} name="info" onChange={(e) => handleOnChange(e)} />
              </Grid>
            </Grid>
          </div>

          <div className={classes.buttonContainer}>
            <Button variant="contained" color="primary" onClick={() => addSubmit()}>
              {buttonText}
            </Button>
          </div>
        </section>
      </div>
    )
}
export default AddEditForm
import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import { useStyles } from './style';
import CarImg from "../../assets/images/car_image.png"
export default function AddBtn(props) {
  const {setEditData, setOpenModal, setAddCarData} = props;
    const classes =useStyles()
    const AddCar = () => {
      setEditData(null)
      setOpenModal(true)
      setAddCarData({
        VehicleMake: '',
        VehicleModel: '',
        info: '',
        image: CarImg
      })
    }
    return (
        <div className={classes.root}>
              <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={() =>AddCar() }
      >
        Add
      </Button>
        </div>
    )
}

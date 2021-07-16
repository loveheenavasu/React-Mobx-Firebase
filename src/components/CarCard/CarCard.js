import React from 'react'
import { Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { useStyles } from './style';

export default function CarCard(props) {
  const { setAddCarData, setOpenModal, carItem, setEditData} = props
    const classes = useStyles();
  const editBtn = () => {
    setOpenModal(true)
    setAddCarData(carItem)
    setEditData(true)
  }
   
  
    return (
      <Card className={classes.root}>
        <CardHeader
          action={
            <IconButton aria-label="settings" onClick={() => editBtn()} className={classes.IconBtn}>
              <EditIcon />
            </IconButton>
          }
          title={carItem.VehicleMake}
          subheader={carItem.VehicleModel}
          className={classes.header}
        />
        <CardMedia
          className={classes.media}
          image={carItem.image}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.description}>
           {carItem.info}
          </Typography>
        </CardContent>
        
      </Card>
    )
}

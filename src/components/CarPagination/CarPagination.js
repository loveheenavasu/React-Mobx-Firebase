import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import {useStyles} from "./style"
const CarPagination =(props) => {
    const classes = useStyles();
  return (
    <div className={classes.root}>
      <Pagination count={props.carList} page={props.page} color="primary" onChange={props.handleChange} />
    </div>
    )
}
export default CarPagination
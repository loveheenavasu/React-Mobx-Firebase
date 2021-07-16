import React, { useState } from 'react'
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, Grid, IconButton, Menu, MenuItem, TextField, Typography } from '@material-ui/core'
import FilterListIcon from '@material-ui/icons/FilterList';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import AddBtn from '../../AddBtutton/AddBtn';
import { carArray } from "../../../common/constant"
import { useStyles } from "./style"
export default function Filter_Sorting(props) {
    const {  anchorEl, setAnchorEl, handleChecked ,setAddCarData } = props;
    const handleClose = () => {
        setAnchorEl(null)
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const classes = useStyles()
    return (
        <>
            <Grid item xs={6} className={classes.filtering}>
                <Grid item xs={3} aria-haspopup="true" onClick={handleClick}>
                    <IconButton
                        aria-label="more"
                        aria-controls="long-menu"

                    >
                        <FilterListIcon />
                    </IconButton>
                    Filter
                </Grid>
                <Grid item xs={3} onClick={() => props.sorting()}>
                    <IconButton
                        aria-label="more"
                        aria-controls="long-menu"
                        aria-haspopup="true"
                    >
                        <SortByAlphaIcon />
                    </IconButton>
                    Sort
                </Grid>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => handleClose()}
                    PaperProps={{
                        style: {
                            width: '20ch',
                            top: 10
                        },
                    }}
                    className={classes.selectMenu}
                >
                    {carArray.map((car, index) => {
                        return <MenuItem>
                            <FormControl component="fieldset">
                                <FormGroup>
                                    <FormControlLabel key={index}
                                        control={<Checkbox onChange={(e) => handleChecked(car)} name={car.name} color="primary" />}
                                        label={car.name}
                                    />

                                </FormGroup>
                            </FormControl>
                        </MenuItem>
                    })}
                </Menu>
            </Grid>
            <Grid item xs={6}>
                <AddBtn setOpenModal={props.setOpenModal} setEditData={props.setEditData} setAddCarData={props.setAddCarData} />
            </Grid>

        </>
    )
}

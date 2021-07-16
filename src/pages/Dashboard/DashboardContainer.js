import React, { useEffect, useState } from 'react'
import { observer, inject } from "mobx-react"
import { Container, Grid } from '@material-ui/core'
import CarCard from '../../components/CarCard/CarCard'
import { Styles } from "./style"
import CarPagination from '../../components/CarPagination/CarPagination'
import * as authFetch from "../../common/authorizedFetch";
import Filter_Sorting from '../../components/Filter/Sorting/Filter_Sorting'
import CommonModal from "../../components/Common/CommonModal"
import CarImg from "../../assets/images/car_image.png"
import AddEditForm from '../../components/Common/AddEditForm'
let cardData = []
let perPage = 8

const DashboardContainer = (props) => {
    const classes = Styles()
    const [page, setPage] = useState(1);
    const [openModal, setOpenModal] = useState(false)
    const [editData, setEditData] = useState(null)
    const [checkedValue, setCheckedValue] = useState([])
    const [addCarData, setAddCarData] = useState({
        VehicleMake: '',
        VehicleModel: '',
        info: '',
        image: CarImg,
    })
    const [anchorEl, setAnchorEl] = useState(null);
    const handleOnChange = (e) => {
        setAddCarData({ ...addCarData, [e.target.name]: e.target.value })
    }
    const handleChange = (event, value) => {
        setPage(value);
    };
    const getData = async () => {
        return await authFetch.firebaseGet(`/cars`);
    };
    useEffect(() => {
        getData().then((data) => {
            props.CarStore.setCars(data)
        })
    }, [])
    const renderCurrentData = () => {
        let a = (page - 1) * perPage
        let b = (page * perPage)
        let filteredArray = JSON.parse(JSON.stringify(props?.CarStore?.carList)).filter(item => checkedValue.length ? checkedValue.includes(item.VehicleMake) : item)
        cardData = filteredArray
        let cardCurrentData = filteredArray?.slice(a, b) || []
        return cardCurrentData;
    }
    const handleCloseModal = () => {
        setOpenModal(false)
    }
    const sorting = () => {
        let data = JSON.parse(JSON.stringify(cardData))
        data.reverse()
        props.CarStore.setCars(data)
    }
    const addSubmit = () => {
        if (editData) {
            authFetch.firebaseUpdate(`/cars/${addCarData.id}`, addCarData).then((data) => props.CarStore.setCar(data, addCarData.id))
        }
        else {
            let data = { ...addCarData, id: Math.random() }
            authFetch.firebaseInsert('/cars', data)
        }
        handleCloseModal()
    }
    const handleChecked = (car) => {
        let array = [...checkedValue]
        if (array.includes(car.name)) {
            array = array.filter(item => item !== car.name)
        }
        else {
            array = [...array, car.name]
        }
        setCheckedValue(array)

    };
    let paginationCount = Math.ceil(cardData.length / perPage)
    return (
        <div className={classes.root}>
            <Container>
                <Grid container spacing={2} className={classes.mainGrid}>
                    <Filter_Sorting setOpenModal={setOpenModal} sorting={sorting} setEditData={setEditData} setCheckedValue={setCheckedValue} checkedValue={checkedValue} setAnchorEl={setAnchorEl} anchorEl={anchorEl} handleChecked={handleChecked} setAddCarData={setAddCarData} />
                    {renderCurrentData().map((item, index) => {
                        return (
                            <React.Fragment>
                                <Grid item xs={12} sm={6} lg={3} className={classes.gridItem} key={index}>
                                    <CarCard carItem={item} setOpenModal={setOpenModal} setAddCarData={setAddCarData} setEditData={setEditData} />
                                </Grid>
                            </React.Fragment>
                        )
                    })}
                </Grid>
                <CarPagination
                    page={page}
                    handleChange={handleChange}
                    carList={paginationCount} />
                <CommonModal
                    open={openModal}
                    handleClose={handleCloseModal}
                >
                    <AddEditForm
                        editData={editData}
                        title={editData ? 'Edit Car Details' : 'Add Car'}
                        buttonText={editData ? 'Submit' : 'Add'}
                        handleOnChange={handleOnChange}
                        editData={editData}
                        addCarData={addCarData}
                        addSubmit={addSubmit}
                        handleClose={handleCloseModal}
                    />
                </CommonModal>
            </Container>
        </div>
    )
}

export default inject('CarStore')(observer(DashboardContainer))

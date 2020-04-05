import React, { useState, useEffect } from "react";
import Header from "../components/header"
import Button from "@material-ui/core/Button"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import { NavLink } from "react-router-dom";
import { get } from "../helpers/fetch";
import FishItem from "../components/fishItem"

const Main = () => {
    const [fish, setFish] = useState([]);
    console.log(fish);
    useEffect(() => {
        async function getFish() {
            const result = await get("https://pixabay.com/api/?key=15902906-909858802fdd1e826fe8c3da8&q=fish&image_type=photo&pretty=true&per_page=6")
            setFish(result.hits)
        }
        getFish()

    }, []);

    return (
        <>
            <Box display="flex" flexDirection="column">
                <Header></Header>
                <NavLink
                    to="/addfish"
                    exact
                >
                    <Button variant="contained" color="primary">Utwórz Swoją Galerię</Button>
                </NavLink>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    {fish.map(fishItem => <FishItem key={fishItem.id} props={fishItem}></FishItem>)}
                </Grid>
            </Box>
        </>
    );
}

export default Main;
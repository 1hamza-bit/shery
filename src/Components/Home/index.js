import './index.css';
const { Grid } = require("@mui/material");

const Home = () => {

return(
    <>
    <Grid container className="main" >
    <Grid className='overmain' item lg ={6} md={6} sm={12} xs={6}>
        <h1>djakldjk</h1>
    </Grid>
    </Grid>
    <Grid container spacing={0}>
        <Grid item lg ={6} md={6} sm={12} xs={12}>

        </Grid>
        <Grid item lg ={6} md={6} sm={12} xs={12}>

        </Grid>

    </Grid>
    </>
)



}

export default Home;
import './index.css';
const { Grid, Typography, Divider } = require("@mui/material");

const Home = () => {

return(
    <>
    <Grid container className="main" >
    <Grid className='overmain' item lg ={6} md={6} sm={12} xs={6}>
        <h1>djakldjk</h1>
    </Grid>
    </Grid>
    <Grid container spacing={0} className='second'>
        <Grid item className='right' lg ={6} md={6} sm={12} xs={12}>
            <Typography className='twh pt10p'>hose hose hose</Typography>
            <Typography className='twh'>hose hose hose hose hose  hose</Typography>
            <Divider />
            <Typography className='twh'>hose hose hose hose hose  hose</Typography>
        </Grid>
        <Grid item lg ={6} md={6} sm={12} xs={12}>
        <Typography className='twh pt10p'>hose hose hose</Typography>
            <Typography className='twh'>hose hose hose hose hose  hose</Typography>
            <Divider className='twh' />
            <Typography className='twh'>hose hose hose hose hose  hose</Typography>   
        </Grid>

    </Grid>
    <Grid container spacing={0} className='second'>
        <Grid item className='tright' lg ={3} md={3} sm={12} xs={12}>
        <Typography className='pt17p'>hose hose hose</Typography>
            <Typography>hose hose hose hose hose  hose</Typography>
            <Divider />
            <Typography>hose hose hose hose hose  hose</Typography>
        </Grid>
        <Grid item className='tleft' lg ={9} md={9} sm={12} xs={12}>

        </Grid>

    </Grid><Grid container spacing={0} className='second'>
        <Grid item className='fright' lg ={9} md={9} sm={12} xs={12}>

        </Grid>
        <Grid item className='fleft' lg ={3} md={3} sm={12} xs={12}>
        <Typography className='pt17p'>hose hose hose</Typography>
            <Typography>hose hose hose hose hose  hose</Typography>
            <Divider />
            <Typography>hose hose hose hose hose  hose</Typography>
        </Grid>

    </Grid>
    </>
)



}

export default Home;
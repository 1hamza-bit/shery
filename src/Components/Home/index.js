import Footer from '../Layout/footer';
import Header from '../Layout/header';
import './index.css';
const { Grid, Typography, Divider, Button } = require("@mui/material");

const Home = () => {

    return (
        <>
            <div container className="main" >
                    <hr />
                    <hr />

                <Header />
             
                <Grid container>

                <Grid className='overmain' item lg={6} md={6} sm={12} xs={12}>
                    <div className='w70p'>
                        <h1>Shaharyar Trading</h1>
                        <div style={{ textAlign: 'center' }}>
                            <Divider className='divider' />
                        </div>
                        <p>A hydraulic hose trading company, such as Shaharyar Trading, specializes in supplying high-quality hydraulic hoses
                            and components for various industries. With a focus on reliability and performance, they cater
                            to diverse sectors and prioritize customer satisfaction through a comprehensive product catalog and efficient services. </p>
                        <Button variant='contained' className='bgmain'> Products </Button>
                    </div>
                </Grid>
                <Grid  item lg={6} md={6} sm={12} xs={12}>

                </Grid>

                </Grid>

            </div>
            <Grid container spacing={0} className='second'>
                <Grid item className='right' lg={6} md={6} sm={12} xs={12}>
                    <div className=''>
                    <Typography className='twh pt10p'>hose hose hose</Typography>
                    <Typography className='twh'>hose hose hose hose hose  hose</Typography>
                    <div style={{ textAlign: 'center' , width: "100%" }}>
                        <hr className=' divider'  />
                    </div>
                    <Typography className='twh'>hose hose hose hose hose  hose</Typography>
                    </div>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                <div className=''>
                    <Typography className='twh pt10p'>hose hose hose</Typography>
                    <Typography className='twh'>hose hose hose hose hose  hose</Typography>
                    <div style={{ textAlign: 'center' , width: "100%" }}>
                        <hr className=' divider'  />
                    </div>
                    <Typography className='twh'>hose hose hose hose hose  hose</Typography>
                    </div>
                </Grid>

            </Grid>
            <Grid container spacing={0} className='second'>
                <Grid item className='tright' lg={3} md={3} sm={12} xs={12}>
                    <Typography className='pt17p'>hose hose hose</Typography>
                    <Typography>hose hose hose hose hose  hose</Typography>
                    <Divider />
                    <Typography>hose hose hose hose hose  hose</Typography>
                </Grid>
                <Grid item className='tleft' lg={9} md={9} sm={12} xs={12}>

                </Grid>

            </Grid><Grid container spacing={0} className='second'>
                <Grid item className='fright' lg={9} md={9} sm={12} xs={12}>

                </Grid>
                <Grid item className='fleft' lg={3} md={3} sm={12} xs={12}>
                    <Typography className='pt17p'>hose hose hose</Typography>
                    <Typography>hose hose hose hose hose  hose</Typography>
                    <Divider />
                    <Typography>hose hose hose hose hose  hose</Typography>
                </Grid>

            </Grid>

            <Footer />
        </>
    )



}

export default Home;
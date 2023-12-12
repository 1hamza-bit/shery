import { Button, Divider, Grid, List, ListItem, Typography } from "@mui/material";
import { Link } from "react-router-dom";




const Footer = () => {

    return(

        <>
        <Grid container spacing={2} className="footer">
            <Grid item lg={3} md={6} sm={12} xs={12}>
            <div className=' p010p'>
                        <h1>Shaharyar Trading</h1>
                        <div style={{ textAlign: 'center' }}>
                            <Divider className='divider' />
                        </div>
                        <p>A hydraulic hose trading company, such as Shaharyar Trading, specializes in supplying high-quality hydraulic hoses
                            and components for various industries. With a focus on reliability and performance, they cater
                            to diverse sectors and prioritize customer satisfaction through a comprehensive product catalog and efficient services. </p>
                        {/* <Button variant='contained' className='bgmain'> Products </Button> */}
                    </div>
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
            <div className='w70p p010p'>
                        <h1>About us</h1>
                        <div style={{ textAlign: 'center' }}>
                            <Divider className='divider' />
                        </div>
                        <List>
                            <ListItem>
                                <Typography className="bold tu ">
                                    <Link to="/products"> Products </Link>


                                </Typography>
                            </ListItem>
                            <ListItem>
                                <Typography className="bold  ">
                                    <Link > Email: hamtah112@gmai.com </Link>


                                </Typography>
                            </ListItem>
                        </List>
                       
                    </div>
            </Grid>
            <Grid item lg={2} md={6} sm={12} xs={12}>
            <div className='w70p '>
                      
                    </div>
            </Grid>
            <Grid item lg={3} md={6} sm={12} xs={12}>
            <div className='w70p p010p'>
                        <h1>Contact Us</h1>
                        <div style={{ textAlign: 'center' }}>
                            <Divider className='divider' />
                        </div>
                        <p>Lets Connect with us with this Email button </p>
                        <Button variant='contained' className='bgmain'><a href={`mailto:${"hamtah112@gmail.com"}`} > Email </a></Button>
                    </div>
            </Grid>

        </Grid>
        <Grid container spacing={0} className="underfooter">
        <Grid item lg={12} md={12} sm={12} xs={12}>
        <p style={{padding: "0px 10%"}}>copyrights Shaharyar Trading 2023 </p>
        </Grid>
        </Grid>
        </>

    )
}

export default Footer ;
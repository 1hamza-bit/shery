import { Link } from 'react-router-dom';
import Footer from '../Layout/footer';
import Header from '../Layout/header';
import './index.css';
import green from '../../Assets/png green.png'
import pipe from '../../Assets/pipe.png'
import hydraulic from '../../Assets/hydraulic.png'
import fire from '../../Assets/fire.png'
import gas from '../../Assets/gas.png'
import canvas from '../../Assets/canvas.png'

const { Grid, Typography, Divider, Button, Card, CardActionArea, CardMedia, CardContent } = require("@mui/material");

const Home = () => {


    const products = [
        {
          title: 'Rubber Hose 1',
          category: 'Industrial Rubber Hoses',
          description: "Introducing our star performers – the epitome of reliability and versatility in rubber hoses. Engineered for durability and flexibility, our most popular products deliver unmatched performance across various applications. From heavy-duty industrial use to everyday tasks.",
          image: green,
          tag: "Rubber hose"
        },
        {
          title: 'Rubber Hose 2',
          category: 'Commercial Rubber Hoses',
         description: "Introducing our star performers – the epitome of reliability and versatility in rubber hoses. Engineered for durability and flexibility, our most popular products deliver unmatched performance across various applications. From heavy-duty industrial use to everyday tasks.",

          image: hydraulic,
          tag: "Rubber hose"
        },
        {
          title: 'Rubber Hose 3',
          category: 'Specialty Rubber Hoses',
          description: "Introducing our star performers – the epitome of reliability and versatility in rubber hoses. Engineered for durability and flexibility, our most popular products deliver unmatched performance across various applications. From heavy-duty industrial use to everyday tasks.",
          image: green,
          tag: "Rubber hose"
        },

        {
            title: 'Rubber Hose 3',
            category: 'Specialty Rubber Hoses',
            description: "Introducing our star performers – the epitome of reliability and versatility in rubber hoses. Engineered for durability and flexibility, our most popular products deliver unmatched performance across various applications. From heavy-duty industrial use to everyday tasks.",
            image: green,
            tag: "Rubber hose"
          }
      ];

    return (
        <>
            <div container className="main" >
                {/* <hr />
                    <hr /> */}

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
                            <Button variant='contained' className='bgmain'><Link to="/products"> Products </Link> </Button>
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>

                    </Grid>

                </Grid>

            </div>
            <h1 className='pl'>Our Most Popular Products</h1>
            <Grid container spacing={0} className='second'>
            {products.map((product, index) => (
                <Grid item className='card' lg={3} md={4} sm={6} xs={6}>
                    <Card className='card' sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={product.image}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                   {product.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                   {product.description}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            ))}
            
            </Grid>
            <Grid container spacing={0} className='second'>
                <Grid item className='right' lg={6} md={6} sm={12} xs={12}>
                    <div className=''>
                        <h2 className='pt10p'>About Shaharyar Trading</h2>
                        <div style={{ textAlign: 'center', width: "100%" }}>
                            <hr className=' divider' />
                        </div>
                        <Typography className='twh'>A hydraulic hose trading company, such as Shaharyar Trading, specializes in supplying high-quality hydraulic hoses</Typography>
                    </div>
                </Grid>
                <Grid item lg={6} md={6} sm={12} xs={12}>
                    <div className=''>
                        <h1 className='pt10p'>Contact us</h1>
                        <div style={{ textAlign: 'center', width: "100%" }}>
                            <hr className=' divider' />
                        </div>
                        <Typography className='twh'>9.00 am ---- 11:00pm</Typography>
                        <Typography className='twh'>Monday ---- Saturday</Typography>
                        <Button variant='contained' className='bgmain pt10p'><a href={`mailto:${"hamtah112@gmail.com"}`} > Email </a></Button>

                    </div>
                </Grid>

            </Grid>
            <Grid container spacing={0} className='third'>
                <Grid item className='tright' lg={3} md={3} sm={12} xs={12}>
                    <h2 className='pt17p'>Stocklot hose</h2>
                    <Divider />
                    <Typography>A stocklot hose typically refers to a surplus or excess quantity of hoses that a manufacturer,
                        distributor, or retailer may have beyond their regular inventory needs.
                        These hoses can vary widely in terms of type, size, material, and intended use.</Typography>
                </Grid>
                <Grid item className='tleft' lg={9} md={9} sm={12} xs={12}>

                </Grid>

            </Grid><Grid container spacing={0} className='forth'>
                <Grid item className='fright' lg={9} md={9} sm={12} xs={12}>

                </Grid>
                <Grid item className='fleft' lg={3} md={3} sm={12} xs={12}>
                    <h2 className='pt17p'>Fresh hose</h2>
                    <Divider />
                    <Typography>A "fresh hose" typically refers to a newly manufactured hose that has not been used or put into service.
                        This term is often used to emphasize that the hose is in brand-new condition and has not undergone any wear or damage. </Typography>
                </Grid>

            </Grid>

            <Footer />
        </>
    )



}

export default Home;
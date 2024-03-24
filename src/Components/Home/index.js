import { Link } from 'react-router-dom';
import Footer from '../Layout/footer';
import Header from '../Layout/header';
import './index.scss';
import green from '../../Assets/png green.png'
import pipe from '../../Assets/pipe.png'
import hydraulic from '../../Assets/hydraulic.png'
import fire from '../../Assets/fire.png'
import gas from '../../Assets/gas.png'
import canvas from '../../Assets/canvas.png'
import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, HighQuality, HighQualityTwoTone, InstallDesktopOutlined, StarRounded } from '@mui/icons-material';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import axios from 'axios';

const { Grid, Typography, Divider, Button, Card, CardActionArea, CardMedia, CardContent, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Slide } = require("@mui/material");

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const products = [
    {
        title: 'Hydraulic Hose',
        category: 'Hydraulic Hoses',
        description: "Our hydraulic hoses are designed to withstand high pressures and deliver exceptional performance. Available in various sizes to suit your needs, these hoses are engineered for reliability and durability in hydraulic systems.",
        image: green,
        tag: "Hydraulic hose"
    },
    {
        title: 'Suction Hose',
        category: 'Suction Hoses',
        description: "Need a reliable solution for suction applications? Look no further than our suction hoses. Available in different sizes and configurations, these hoses offer powerful suction capabilities for various industrial and commercial uses.",
        image: fire,
        tag: "Suction hose"
    },
    {
        title: 'Pressure Pipe',
        category: 'High-Pressure Pipes',
        description: "Experience unmatched strength and resilience with our high-pressure pipes. Built to withstand extreme pressure levels, these pipes are available in a range of sizes to meet your specific requirements. Trust in their durability for your toughest applications.",
        image: gas,
        tag: "Pressure pipe"
    },
    {
        title: 'Fire Hose',
        category: 'Firefighting Hoses',
        description: "When it comes to firefighting, reliability is paramount. Our fire hoses are engineered to deliver under pressure when it matters most. Available in different sizes and configurations, these hoses provide the strength and flexibility needed for effective firefighting operations.",
        image: hydraulic,
        tag: "Fire hose"
    }
];

const Home = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [openBlogDialog, setOpenBlogDialog] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState([]);

    useEffect(() => {

        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://backend-production-f667.up.railway.app/api/blogs');
            setBlogs(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleClickOpen = (index) => {
        setOpenDialog(true)
        setSelectedProduct(index);
    };

    const handleClickOpenBlog = (index) => {
        setOpenBlogDialog(true)
        setSelectedBlog(index);
    };

    const handleClose = () => {
        setOpenDialog(false);
        setSelectedProduct(null);
    };

    const handleCloseBlog = () => {
        setOpenBlogDialog(false);
        setSelectedBlog(null);
    };

    const truncateText = (text, limit) => {
        const words = text.split(' ');

        if (words.length > limit) {
            return words.slice(0, limit).join(' ') + '...';
        } else {
            return text;
        }
    };



    return (
        <>
            <div container className="main" >
                {/* <hr />
                    <hr /> */}

                <Header />

                <Grid container>

                    <Grid className='overmain' item lg={6} md={6} sm={12} xs={12}>
                        <div className='w70p'>
                            <h1>Shaharyar Traders</h1>
                            <div style={{ textAlign: 'center' }}>
                                <Divider className='divider' />
                            </div>
                            <p>A hydraulic hose trading company, "Shaharyar Traders, formerly known as Shahzad Trading,
                                continues the legacy and expertise established by its predecessor, offering the same trusted services and quality products under a new name." </p>
                            <Button variant='contained' className='bgmain productbutton'><Link to="/products"> Products <ArrowRight /></Link> </Button>
                        </div>
                    </Grid>
                    <Grid item lg={6} md={6} sm={12} xs={12}>

                    </Grid>

                </Grid>

            </div>

            <Grid container spacing={2} className='second'>
                <Grid item lg={6.5} md={6} sm={12} xs={12}>
                    <Grid container spacing={2} className='boxes'>
                        <Grid item lg={6} md={6} sm={12} xs={12} >
                            <div className='box '>
                                <HighQuality />
                                <h2>High Quality</h2>
                                <p>Choose rubber hoses made from high-quality materials to ensure durability and longevity.</p>
                            </div>

                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} >
                            <div className='box '>
                                <StarRounded />
                                <h2> Industry Standards</h2>
                                <p>Compliance with standards ensures that the hoses meet  safety and performance requirements</p>
                            </div>

                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} >
                            <div className='box '>
                                <PrecisionManufacturingIcon />
                                <h2>High Pressure</h2>
                                <p> Choose hoses to handle the maximum working pressure of your system without  failure or leakage</p>
                            </div>

                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12} >
                            <div className='box '>
                                <BuildCircleIcon />
                                <h2>Compatibility</h2>
                                <p>Look for hoses designed to handle various fluids, including water, oil, fuels, chemicals, and gases</p>
                            </div>

                        </Grid>
                    </Grid>
                </Grid>
                <Grid item lg={5} md={6} sm={12} xs={12}>
                    <div className='p-20 px-30 text-left'>
                        <h1>Providing the most reliable Rubber hoses by getting them from the best Manufacturers in the World</h1>
                        <p>
                            At Shaharyar Traders, we bring you unrivaled quality with our selection of rubber hoses sourced from top-tier manufacturers worldwide.
                            Partnering with industry leaders renowned for their innovation
                            and commitment to excellence, we ensure that each hose meets rigorous quality standards. Count on us to deliver reliable solutions for all your fluid transfer needs
                        </p>
                    </div>
                </Grid>
            </Grid>
            <div className='featured'>
                <h1 className='pl-8 mt-8 '>Our Most Popular Products</h1>
                <hr className='ml-8 mt-2 ' />
                <Grid container spacing={0} className='second'>
                    {products.map((product, index) => (
                        <Grid item lg={3} md={4} sm={12} xs={12}>
                            <Card className='card' sx={{ maxWidth: 345 }}>

                                <div className='img'>
                                    <CardMedia
                                        component="img"
                                        height="240"
                                        image={product.image}
                                        alt="green iguana"
                                    />
                                </div>
                                <CardContent >
                                    <Typography gutterBottom variant="h5" component="div">
                                        {product.title}
                                    </Typography>
                                    <Typography className='content' variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                </CardContent>
                                <CardActionArea>
                                    <Button variant='contained' onClick={() => handleClickOpen(product)} fullWidth>See more</Button>
                                </CardActionArea>
                            </Card>
                            <Dialog
                                open={openDialog}
                                TransitionComponent={Transition}
                                onClose={handleClose}
                                className='productmodal'
                                aria-describedby="product detail modal"
                            >
                                <DialogTitle>{selectedProduct?.title} details</DialogTitle>
                                <DialogContent>
                                    <DialogContentText id="product detail modal-description">
                                        <p>{selectedProduct?.description}</p>
                                    </DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={handleClose}>Close</Button>
                                </DialogActions>
                            </Dialog>
                        </Grid>
                    ))}

                </Grid>
            </div>
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
            {/* <Grid container spacing={0} className='third'>
                <Grid item className='tright' lg={3} md={3} sm={12} xs={12}>
                    <h2 className='pt17p'>Stocklot hose</h2>
                    <Divider />
                    <Typography>A stocklot hose typically refers to a surplus or excess quantity of hoses that a manufacturer,
                        distributor, or retailer may have beyond their regular inventory needs.
                        These hoses can vary widely in terms of type, size, material, and intended use.</Typography>
                </Grid>
                <Grid item className='tleft' lg={9} md={9} sm={12} xs={12}>

                </Grid>

            </Grid>
            <Grid container spacing={0} className='forth'>
                <Grid item className='fright' lg={9} md={9} sm={12} xs={12}>

                </Grid>
                <Grid item className='fleft' lg={3} md={3} sm={12} xs={12}>
                    <h2 className='pt17p'>Fresh hose</h2>
                    <Divider />
                    <Typography>A "fresh hose" typically refers to a newly manufactured hose that has not been used or put into service.
                        This term is often used to emphasize that the hose is in brand-new condition and has not undergone any wear or damage. </Typography>
                </Grid>

            </Grid> */}

            <div className='featured'>
                <h1 className='pl-8 mt-8 '>Our Blogs</h1>
                <hr className='ml-8 mt-2 ' />
                <Grid container spacing={3} className='p-8' >
                    {blogs.map((blog, index) => (
                        <Grid item lg={3} md={4} sm={12} xs={12} className='justify-center flex' onClick={() => handleClickOpenBlog(blog)}>
                            <div class="bg-zinc-900 shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 my-8 ">
                                <a href="#">
                                    <img class="rounded-t-lg max-w-full" src={blog.image} alt="" width={"auto"} height={300} />
                                </a>
                                <div class="p-5">
                                    <a href="#">
                                        <h5 class="text-gray-300 font-bold text-2xl tracking-tight mb-2">{blog.title} </h5>
                                    </a>
                                    <p class="font-normal text-gray-200 mb-3">{truncateText(blog.description, 8)}..</p>
                                    <a onClick={() => handleClickOpenBlog(blog)} class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center" href="#">
                                        Read more
                                    </a>
                                </div>
                            </div>
                        </Grid>
                    ))}

                </Grid>
            </div>
            <Dialog
                open={openBlogDialog}
                TransitionComponent={Transition}
                onClose={handleCloseBlog}
                className='productmodal'
                aria-describedby="product detail modal"
                maxWidth="md"
            >
                <DialogTitle>{selectedBlog?.title} </DialogTitle>
                <DialogContent p={2}>
                    <DialogContentText id="product detail modal-description">
                        <img height="300" className='p-8  ' src={selectedBlog?.image} />
                        <p>{selectedBlog?.description}</p>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseBlog}>Close</Button>
                </DialogActions>
            </Dialog>

            <Footer />
        </>
    )



}

export default Home;
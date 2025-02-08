import { Link } from 'react-router-dom';
import Footer from '../Layout/footer';
import Header from '../Layout/header';
import './index.scss';
import green from '../../Assets/png green.png'
import pipe from '../../Assets/pipe.png'
import hydraulic from '../../Assets/hydraulic.png'
import fire from '../../Assets/fire.png'
import greenpipe from '../../Assets/green pipe.jpg'
import greenpipe2 from '../../Assets/green2.jpg'
import redpipe from '../../Assets/red pipe.jpg'
import red2 from '../../Assets/red2.jpg'
import gas from '../../Assets/gas.png'
import canvas from '../../Assets/canvas.png'
import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, HighQuality, HighQualityTwoTone, InstallDesktopOutlined, StarRounded } from '@mui/icons-material';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import axios from 'axios';
import { Fade, Zoom } from "react-awesome-reveal";

const { Grid, Typography, Divider, Button, Card, CardActionArea, CardMedia, CardContent, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Slide, } = require("@mui/material");

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const products = [
    {
        title: 'Hydraulic Hose',
        category: 'Hydraulic Hoses',
        description: "Our hydraulic hoses are designed to withstand high pressures and deliver exceptional performance. Available in various sizes to suit your needs, these hoses are engineered for reliability and durability in hydraulic systems.",
        image: greenpipe,
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
        image: redpipe,
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
            <Header />

            <Fade cascade damping={0.1}>

                <div container className="main" >
                    {/* <hr />
                    <hr /> */}


                    <Grid container>

                        <Grid className='overmain' item lg={6} md={6} sm={12} xs={12}>

                            <div className='w70p'>
                                <div className="inline-block px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full mb-6">
                                    <span className="text-[#E9B57A]">
                                        Next-Gen Hydraulic Technology
                                    </span>
                                </div>
                                <h1 className='text-5xl md:text-6xl font-bold mb-6 '>Shaharyar Traders</h1>
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

                <div className="flex flex-col md:flex-row gap-8 second">

                    {/* Left Section */}
                    <div className="lg:w-7/12 md:w-1/2 w-full sApp">
                        <Fade cascade damping={0.3} fraction={0.2}>
                            <div className="spotlight-container relative">
                                <div className="spotlight"></div>

                                {/* Boxes */}
                                <div className="flex  gap-6 boxes">
                                    <div className='flex flex-col gap-4 items-center'>
                                        {/* High Quality */}
                                        <div className="box w-full md:w-1/2 p-4">
                                            <HighQuality />
                                            <h2 className="text-lg font-semibold mt-2">High Quality</h2>
                                            <p>Choose rubber hoses made from high-quality materials to ensure durability and longevity.</p>
                                        </div>

                                        {/* Industry Standards */}
                                        <div className="box w-full md:w-1/2 p-4">
                                            <StarRounded />
                                            <h2 className="text-lg font-semibold mt-2">Industry Standards</h2>
                                            <p>Compliance with standards ensures that the hoses meet safety and performance requirements.</p>
                                        </div>

                                    </div>

                                    <div className='flex flex-col gap-4 '>

                                        {/* High Pressure */}
                                        <div className="box w-full md:w-1/2 p-4">
                                            <PrecisionManufacturingIcon />
                                            <h2 className="text-lg font-semibold mt-2">High Pressure</h2>
                                            <p>Choose hoses to handle the maximum working pressure of your system without failure or leakage.</p>
                                        </div>

                                        {/* Compatibility */}
                                        <div className="box w-full md:w-1/2 p-4">
                                            <BuildCircleIcon />
                                            <h2 className="text-lg font-semibold mt-2">Compatibility</h2>
                                            <p>Look for hoses designed to handle various fluids, including water, oil, fuels, chemicals, and gases.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    {/* Right Section */}
                    <div className="lg:w-5/12 md:w-1/2 w-full py-10 sm:py-20 md:py-40 text-left px-8 sm:px-6 max-w-[84vw]">
                        <div className='md:w-3/4 w:5/6'>


                            <Fade delay={0.4} fraction={0.4}>
                                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold whitespace-normal">
                                    Providing the most reliable Rubber hoses by getting them from the best Manufacturers in the World
                                </h1>
                                <p className="mt-4 text-sm sm:text-base whitespace-normal">
                                    At Shaharyar Traders, we bring you unrivaled quality with our selection of rubber hoses sourced from top-tier manufacturers worldwide.
                                    Partnering with industry leaders renowned for their innovation and commitment to excellence, we ensure that each hose meets rigorous quality standards. Count on us to deliver reliable solutions for all your fluid transfer needs.
                                </p>
                            </Fade>
                        </div>
                    </div>


                </div>

                <div className='featured  my-8'>
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center md:text-left px-4 sm:px-6 mb-4 sm:mb-6">
                        <Fade cascade damping={0.01}>Our Most Popular Products</Fade>
                    </h1>
                    <hr className='ml-8 mt-2 ' />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                        {products.map((product, index) => (
                            <div key={index} className=" text-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 border border-red-700 relative flex flex-col h-full">
                                <div className="overflow-hidden rounded-xl flex-grow">
                                    <img src={product.image} alt={product.title} className="w-full h-60 object-cover transform transition duration-300 hover:scale-110" />
                                </div>
                                <div className="p-4 flex flex-col flex-grow">
                                    <h3 className="text-lg font-semibold mb-2 flex-grow">{product.title}</h3>
                                    <p className="text-sm text-gray-400 flex-grow">{product.description}</p>
                                </div>
                                <div className="mt-auto">
                                    <button
                                        className="w-full bgmain hover:bg-orange-700 text-white font-semibold py-2 rounded-xl transition duration-300"
                                        onClick={() => handleClickOpen(product)}
                                    >
                                        See More
                                    </button>
                                </div>
                            </div>
                        ))}

                        {openDialog && selectedProduct && (
                            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4">
                                <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-2xl max-w-lg w-full">
                                    <h2 className="text-xl font-bold mb-4">{selectedProduct.title} Details</h2>
                                    <p className="text-gray-400">{selectedProduct.description}</p>
                                    <div className="mt-4 flex justify-end">
                                        <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg" onClick={handleClose}>Close</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <Grid container spacing={0} className='second'>
                    <Grid item className='right' lg={6} md={6} sm={12} xs={12}>
                        <div className=''>
                            <h2 className='pt10p'>About Shaharyar Traders</h2>
                            <div style={{ textAlign: 'center', width: "100%" }}>
                                <hr className=' divider' />
                            </div>
                            <Typography className='twh'>A hydraulic hose trading company, such as Shaharyar Traders, specializes in supplying high-quality hydraulic hoses</Typography>
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
            </Fade>

            <Footer />
        </>
    )



}

export default Home;
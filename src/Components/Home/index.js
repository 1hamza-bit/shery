"use client"; // Ensure this is a client component

import styles from './index.module.scss'; // Ensure this file exists and is compatible
import green from '../../Assets/png green.png';
import pipe from '../../Assets/pipe.png';
import hydraulic from '../../Assets/hydraulic.png';
import fire from '../../Assets/fire.png';
import greenpipe from '../../Assets/green pipe.jpg';
import greenpipe2 from '../../Assets/green2.jpg';
import redpipe from '../../Assets/red pipe.jpg';
import red2 from '../../Assets/red2.jpg';
import gas from '../../Assets/gas.png';
import yellow from '../../Assets/yellow.jpg';
import canvas from '../../Assets/canvas.png';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Fade } from 'react-awesome-reveal';
import Link from 'next/link';
import Header from '../Layout/header';
import Footer from '../Layout/footer';
import { Mail } from 'lucide-react';
import Image from 'next/image';

// Static product data
const products = [
    {
        title: 'Hydraulic Hose',
        category: 'Hydraulic Hoses',
        description:
            'Our hydraulic hoses are designed to withstand high pressures and deliver exceptional performance. Available in various sizes to suit your needs, these hoses are engineered for reliability and durability in hydraulic systems.',
        image: greenpipe,
        tag: 'Hydraulic hose',
    },
    {
        title: 'Suction Hose',
        category: 'Suction Hoses',
        description:
            'Need a reliable solution for suction applications? Look no further than our suction hoses. Available in different sizes and configurations, these hoses offer powerful suction capabilities for various industrial and commercial uses.',
        image: fire,
        tag: 'Suction hose',
    },
    {
        title: 'Pressure Pipe',
        category: 'High-Pressure Pipes',
        description:
            'Experience unmatched strength and resilience with our high-pressure pipes. Built to withstand extreme pressure levels, these pipes are available in a range of sizes to meet your specific requirements. Trust in their durability for your toughest applications.',
        image: gas,
        tag: 'Pressure pipe',
    },
    {
        title: 'Fire Hose',
        category: 'Firefighting Hoses',
        description:
            'When it comes to firefighting, reliability is paramount. Our fire hoses are engineered to deliver under pressure when it matters most. Available in different sizes and configurations, these hoses provide the strength and flexibility needed for effective firefighting operations.',
        image: redpipe,
        tag: 'Fire hose',
    },
];

const Homes = () => {
    const [openDialog, setOpenDialog] = useState(false);
    const [openBlogDialog, setOpenBlogDialog] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [blogs, setBlogs] = useState([]);
    const [selectedBlog, setSelectedBlog] = useState(null); // Fixed to null

    useEffect(() => {
        // fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://backend-production-f667.up.railway.app/api/blogs');
            setBlogs(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const handleClickOpen = (product) => {
        setOpenDialog(true);
        setSelectedProduct(product);
    };

    const handleClickOpenBlog = (blog) => {
        setOpenBlogDialog(true);
        setSelectedBlog(blog);
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
        }
        return text;
    };

    return (
        <>
            <Header />

            <div className="main  mx-auto px-4">
                {/* Uncomment and adapt if needed */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="overmain">
                        <div className="w-[70%] mx-auto">
                            <div className="inline-block px-4 py-2 bg-orange-500/20 backdrop-blur-sm rounded-full mb-6">
                                <span className="text-[#E9B57A]">Next-Gen Hydraulic Technology</span>
                            </div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-6">Shaharyar Traders</h1>
                            <div className="text-center">
                                <hr className="w-1/2 mx-auto border-gray-300" />
                            </div>
                            <p className="mt-4">
                                A hydraulic hose trading company, "Shaharyar Traders, formerly known as Shahzad Trading,
                                continues the legacy and expertise established by its predecessor, offering the same trusted
                                services and quality products under a new name."
                            </p>
                            <Link href="/products">
                                <button className="mt-6 bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">
                                    Products <span className="inline-block ml-2">→</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 second  mx-auto ">
                {/* Left Section */}
                <div className="lg:w-7/12 md:w-1/2 w-full sApp">
                    <Fade cascade damping={0.3} fraction={0.2}>
                        <div className="spotlight-container relative">
                            <div className="spotlight"></div>
                            <div className="flex gap-6 boxes flex-col md:flex-row">
                                <div className="flex flex-col gap-4 items-center">
                                    <div className="box w-full md:w-1/2 p-4 bg-gray-800 rounded-lg text-white">
                                        <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <h2 className="text-lg font-semibold mt-2">High Quality</h2>
                                        <p>Choose rubber hoses made from high-quality materials to ensure durability and longevity.</p>
                                    </div>
                                    <div className="box w-full md:w-1/2 p-4 bg-gray-800 rounded-lg text-white">
                                        <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                        </svg>
                                        <h2 className="text-lg font-semibold mt-2">Industry Standards</h2>
                                        <p>Compliance with standards ensures that the hoses meet safety and performance requirements.</p>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-4">
                                    <div className="box w-full md:w-1/2 p-4 bg-gray-800 rounded-lg text-white">
                                        <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                        </svg>
                                        <h2 className="text-lg font-semibold mt-2">High Pressure</h2>
                                        <p>Choose hoses to handle the maximum working pressure of your system without failure or leakage.</p>
                                    </div>
                                    <div className="box w-full md:w-1/2 p-4 bg-gray-800 rounded-lg text-white">
                                        <svg className="w-6 h-6 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                                        </svg>
                                        <h2 className="text-lg font-semibold mt-2">Compatibility</h2>
                                        <p>Look for hoses designed to handle various fluids, including water, oil, fuels, chemicals, and gases.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>

                {/* Right Section */}
                <div className="lg:w-5/12 md:w-1/2 w-full py-10 sm:py-20 md:py-40 text-left px-8 sm:px-6 ">
                    <div className="md:w-3/4 w-full">
                        <Fade delay={0.4} fraction={0.4}>
                            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold whitespace-normal">
                                Providing the most reliable Rubber hoses by getting them from the best Manufacturers in the World
                            </h1>
                            <p className="mt-4 text-sm sm:text-base whitespace-normal text-gray-300">
                                At Shaharyar Traders, we bring you unrivaled quality with our selection of rubber hoses sourced from top-tier manufacturers worldwide. Partnering with industry leaders renowned for their innovation and commitment to excellence, we ensure that each hose meets rigorous quality standards. Count on us to deliver reliable solutions for all your fluid transfer needs.
                            </p>
                        </Fade>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-8 second md:max-h-6 max-h-auto my-16 mx-auto container px-4">
    
      {/* Right Section */}
      <div className=" w-full flex flex-col justify-center items-start py-10 sm:py-2 md:py-4 px-8 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="text-left">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Featured Stock of Rubber Hose</h2>
            <p className="text-base md:text-lg text-gray-300">
              Discover our premium selection of rubber hoses, designed for durability and versatility across industrial and everyday applications.
            </p>
          </div>
          <Image
            src={yellow}
            alt="Featured Rubber Hose"
            className="w-full md:w-1/2 h-1/2 object-cover rounded-lg"
            width={300} // Adjust based on your image dimensions
            height={200} // Adjust based on your image dimensions
          />
        </div>
      </div>
    </div>

            

            <div className="featured my-8  mx-auto px-4">
                <h1 className="!text-[29px] !sm:text-[15px]  font-bold text-center md:text-left px-4 sm:px-6 mb-4 sm:mb-6">
                    <Fade cascade damping={0.01}>Our Most Popular Products</Fade>
                </h1>
                <hr className="ml-8 mt-2 border-gray-300" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
                    {products.map((product, index) => (
                        <div
                            key={index}
                            className="text-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300  relative flex flex-col h-full bg-gray-900"
                        >
                            <div className="overflow-hidden rounded-xl flex-grow">
                                <img src={product.image.src} alt={product.title} className="w-full h-60 object-cover transform transition duration-300 hover:scale-110" />
                            </div>
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-lg font-semibold mb-2 flex-grow">{product.title}</h3>
                                <p className="text-sm text-gray-400 flex-grow">{product.description}</p>
                            </div>
                            <div className="mt-auto">
                                <button
                                    className="w-full cursor-pointer bg-[#E9B57A] hover:bg-[#e9a37a] text-white font-semibold py-2 rounded-xl transition duration-300"
                                    onClick={() => handleClickOpen(product)}
                                >
                                    See More
                                </button>
                            </div>
                        </div>
                    ))}

                    {openDialog && selectedProduct && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
                            <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-2xl max-w-lg w-full">
                                <h2 className="text-xl font-bold mb-4">{selectedProduct.title} Details</h2>
                                <p className="text-gray-400">{selectedProduct.description}</p>
                                <div className="mt-4 flex justify-end">
                                    <button
                                        className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg transition"
                                        onClick={handleClose}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <section className="relative py-24 overflow-hidden">
                <div className="absolute inset-0" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent" />
                <div className=" mx-auto px-4 relative">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400">
                                Let's Connect
                            </h2>
                            <p className="text-xl text-blue-200">
                                Have questions about our hydraulic solutions? Our team of
                                experts is here to help.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-8">
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-colors">
                                        <h3 className="text-xl font-semibold mb-2 text-white">
                                            Global Headquarters
                                        </h3>
                                        <p className="text-gray-300">Brandeth Road Lahore</p>
                                        <p className="text-gray-300">Opposite Rehman Gali no 1</p>
                                    </div>
                                </div>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-colors">
                                        <h3 className="text-xl font-semibold mb-2 text-white">
                                            Contact Info
                                        </h3>
                                        <p className="text-gray-300">Phone: +92 320 2112565</p>
                                        {/* <p className="text-gray-300">Email: 1-800-HYDRAULIC-FAX</p> */}
                                    </div>
                                </div>
                                <div className="relative group">
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="relative p-6 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-colors">
                                        <h3 className="text-xl font-semibold mb-2 text-white">
                                            Business Hours
                                        </h3>
                                        <p className="text-gray-300">
                                            Monday - Saturday: 10:00 AM - 10:00 PM
                                        </p>
                                        <p className="text-gray-300">
                                            24/7 Emergency Support Available
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="relative p-8 border border-blue-500/20 rounded-xl backdrop-blur-sm hover:border-blue-500/40 transition-colors text-center">
                                    <h3 className="text-2xl font-semibold mb-4 text-white">
                                        Ready to Get Started?
                                    </h3>
                                    <p className="text-gray-300 mb-6">
                                        Send us an email and our team will get back to you within 24
                                        hours.
                                    </p>
                                    <button
                                        className="inline-flex cursor-pointer items-center px-8 py-4 bg-gradient-to-r from-amber-800 to-amber-400 rounded-lg group overflow-hidden relative"
                                        onClick={() =>
                                        (window.location.href =
                                            "mailto:contact@hydraulicsolutions.com")
                                        }
                                    >
                                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                        <Mail className="mr-2 relative" size={20} />
                                        <span className="relative">Email Us Now</span>
                                    </button>
                                    <p className="mt-4 text-sm text-gray-400">
                                        Or email us directly at:
                                        <br />
                                        <span className="text-blue-400">
                                            shahzadtradingco26@gmail.com
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="featured container mx-auto px-4">
                <h1 className="pl-8 mt-8 text-2xl md:text-3xl font-bold">Our Blogs</h1>
                <hr className="ml-8 mt-2 border-gray-300" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-8">
                    {blogs.map((blog, index) => (
                        <div
                            key={index}
                            className="bg-zinc-900 shadow-md border border-gray-200 rounded-lg max-w-sm mb-5 my-8 flex flex-col cursor-pointer"
                            onClick={() => handleClickOpenBlog(blog)}
                        >
                            <a href="#" onClick={(e) => e.preventDefault()}>
                                <img className="rounded-t-lg max-w-full h-[300px] object-cover" src={blog.image} alt={blog.title} />
                            </a>
                            <div className="p-5 flex flex-col flex-grow">
                                <a href="#" onClick={(e) => e.preventDefault()}>
                                    <h5 className="text-gray-300 font-bold text-2xl tracking-tight mb-2">{blog.title}</h5>
                                </a>
                                <p className="font-normal text-gray-200 mb-3 flex-grow">{truncateText(blog.description, 8)}..</p>
                                <button
                                    className="text-white bg-amber-700 hover:bg-amber-800 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                                    onClick={() => handleClickOpenBlog(blog)}
                                >
                                    Read more
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {openBlogDialog && selectedBlog && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
                        <div className="bg-gray-900 text-white p-6 rounded-2xl shadow-2xl max-w-3xl w-full animate-slide-up">
                            <h2 className="text-2xl font-bold mb-4">{selectedBlog.title}</h2>
                            <img className="p-8 w-full h-[300px] object-cover" src={selectedBlog.image} alt={selectedBlog.title} />
                            <p className="text-gray-300">{selectedBlog.description}</p>
                            <div className="mt-4 flex justify-end">
                                <button
                                    className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
                                    onClick={handleCloseBlog}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <Footer />
        </>
    );
};

export default Homes;


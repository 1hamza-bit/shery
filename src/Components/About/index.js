
import { Button, Grid } from "@mui/material";
import Footer from "../Layout/footer";
import Header from "../Layout/header";
import "./index.scss"
import { Canvas } from "@react-three/fiber";
import Globe from "react-globe.gl";
import { GlobeMethods } from 'react-globe.gl';
import { useEffect, useRef, useState } from "react";
import shop from "../../Assets/shophose.jpg"
import { Link } from "react-router-dom";

const labelData = [
    { lat: 35.8617, lng: 104.1954, text: 'China', color: 'red', labelSize: 80 },
    { lat: 35.9078, lng: 127.7669, text: 'Korea', color: 'blue', size: 80 },
    { lat: 37.0902, lng: -95.7129, text: 'USA', color: 'green', size: 120 },
    { lat: 41.8719, lng: 12.5674, text: 'Italy', region: "europe", color: 'yellow', size: 120 },
    { lat: 51.1657, lng: 10.4515, text: 'Germany', region: "europe", color: 'orange', size: 120 },
    { lat: 47.5162, lng: 14.5501, text: 'Austria', region: "europe", color: 'purple', size: 120 },
    { lat: 55.3781, lng: -3.4360, text: 'UK', color: 'cyan', size: 120 },
    { lat: 52.1326, lng: 5.2913, text: 'Netherlands', region: "europe", color: 'magenta', size: 120 },
    { lat: 51.9194, lng: 19.1451, text: 'Poland', region: "europe", color: 'lime', size: 120 },
    { lat: -30.5595, lng: 22.9375, text: 'South Africa', color: 'lime', size: 120 },
    { lat: 23.4241, lng: 53.8478, text: 'UAE', color: 'lime', size: 120 },
];

const lineData = [
    { startLat: 35.8617, startLng: 104.1954, endLat: 35.9078, endLng: 127.7669 }, // China to Korea
    { startLat: 35.9078, startLng: 127.7669, endLat: 37.0902, endLng: -95.7129 }, // Korea to USA
    // Add more line data as needed for other connections
  ];

const About = () => {
    const globeEl = useRef(undefined);
    const w = window.innerWidth;
    const shiftFactor = -0.6;
    const shiftAmmount = shiftFactor * w;
    const [hoveredLabel, setHoveredLabel] = useState(null);

    const handleLabelHover = (label) => {
        setHoveredLabel(label ? label.name : null);
    };

    const labelText = (label) => {
        return label === hoveredLabel ? label : '•';
    };

    useEffect(() => {
        let to;
        (function check() {
            if (globeEl.current) {
                globeEl.current.controls().autoRotate = true;
                globeEl.current.controls().autoRotateSpeed = 0.7;
                const aspectRatio = window.innerWidth / window.innerHeight;
                const altitude = window.innerWidth > 1608 ? 4 : 2.5; // Adjust altitude based on aspect ratio or other factors

                globeEl.current.pointOfView({ lat: 0, lng: 0, altitude });
            } else {
                to = setTimeout(check, 1000);
            }
        })();
        return () => {
            if (to) {
                clearTimeout(to);
            }
        };
    }, []);

    const labelSize = (label) => {
        // Adjust the formula as needed to calculate dynamic sizes based on label content

        if (label.region) {
            return 1
        }
        else {
            return 3
        }
    };

    return (
        <>
            <div className="about">
                <div className="overlay mt-8">
                    <Header />
                    <Grid container spacing={1} className="map">
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <div className="p-8 text-white">
                                <h1>About Us</h1>
                                <p>"Shaharyar Traders, a subsidiary of Shahzad Trading Company established in 1975, specializes in top-quality hydraulic and rubber hoses for over a decade.
                                    Our parent company, Shahzad Trading, brings decades of industry expertise.

                                    We take pride in our international reach, having collaborated with numerous countries across the globe. From the United States to Japan,
                                    our commitment to quality remains unwavering.

                                    At Shaharyar Traders, we prioritize excellence and reliability in every product we deliver, ensuring customer satisfaction worldwide." </p>
                            </div>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <div className="globe" style={{ width: '400px', height: '400px', position: 'relative' }}>
                                <Globe
                                    width={w + shiftAmmount}
                                    onGlobeRightClick={(event) => console.log(event)}
                                    globeImageUrl='https://unpkg.com/three-globe@2.18.0/example/img/earth-night.jpg'
                                    bumpImageUrl='https://unpkg.com/three-globe@2.18.0/example/img/earth-topology.png'
                                    backgroundColor="rgba(0,0,0,0)"
                                    //   backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
                                    //   waitForGlobeReady={true}
                                    animateIn={true}
                                    showGlobe={true}
                                    ref={globeEl}
                                    labelsData={labelData}
                                    // labelText={labelText}
                                    labelSize={labelSize}
                                    linesData={lineData} // Pass the line data
                                    // onLabelHover={handleLabelHover}
                                    labelColor={() => 'rgba(255, 165, 0, 0.5)'}
                                />
                                {hoveredLabel && <div style={{ position: 'absolute', top: 10, left: 10 }}>{hoveredLabel}</div>}

                            </div>
                        </Grid>

                    </Grid>

                    <Grid container spacing={1} className="snd">
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <div className="text-center m-28">
                                <h2 className="underline">Who we are</h2>
                                <div className="flex justify-center">
                                    <p className="max-w-4xl	!mt-0 text-lg	">Based in Lahore, Pakistan, Shaharyar Traders is a renowned establishment dedicated to providing the highest quality hoses to the local market.
                                        Since our inception, we've focused on serving the needs of our customers across Pakistan with excellence and integrity.

                                        Our commitment to delivering top-tier products has earned us a reputation as a trusted supplier in the region. From industrial enterprises to small businesses,
                                        we cater to a diverse range of clients, ensuring that each receives the best quality hoses available.

                                        At Shaharyar Traders, our roots run deep in the fabric of Pakistan's business landscape. We take pride in contributing to the growth and success of
                                        local industries by offering reliable solutions backed by superior customer service. </p>
                                </div>
                            </div>

                        </Grid>
                    </Grid>

                 

                    <Grid container spacing={1} className="thrd">
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <div className="text-center m-16 !ml-28 !mr-28">
                                <img src={shop}
                                    alt="Slideshow"
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                />
                            </div>

                        </Grid>

                        <Grid item lg={5} md={5} sm={12} xs={12}>
                            <div className="!mt-24 m-12">
                                <h2 className="underline text-lg">Our Shop</h2>
                                <div className="flex justify-center">
                                    <p className="max-w-4xl	!mt-0 text-lg">Visit our shop located at Barandeth Road, where we house our extensive w
                                    arehouse of top-quality stocklots. Discover a wide range of products to meet your needs. </p>
                                </div>
                            </div>

                        </Grid>

                    </Grid>

                    <Grid container spacing={1} className="bg">
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <div className="text-center m-8">
                                <h2 className="underline">Contact Us</h2>
                                <div className="flex justify-center">
                                    <p className="max-w-4xl	!mt-0 text-lg	">Do You have any queries ? Please fell free to Connect with Us  </p>
                                </div>
                                <Button variant="outlined" className=""><Link to="/contact" >  Lets Connect </Link></Button>

                            </div>

                        </Grid>
                    </Grid>
                </div>
            </div>
            <Footer />

        </>


    )
}

export default About;
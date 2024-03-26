
import { Grid } from "@mui/material";
import Footer from "../Layout/footer";
import Header from "../Layout/header";
import "./index.scss"
import { Canvas } from "@react-three/fiber";
import Globe from "react-globe.gl";
import { GlobeMethods } from 'react-globe.gl';
import { useEffect, useRef, useState } from "react";

const labelData = [
    { lat: 35.8617, lng: 104.1954, text: 'China', color: 'red', size: 80 },
    { lat: 35.9078, lng: 127.7669, text: 'Korea', color: 'blue', size: 80 },
    { lat: 37.0902, lng: -95.7129, text: 'USA', color: 'green', size: 120 },
    { lat: 41.8719, lng: 12.5674, text: 'Italy', color: 'yellow', size: 120 },
    { lat: 51.1657, lng: 10.4515, text: 'Germany', color: 'orange', size: 120 },
    { lat: 47.5162, lng: 14.5501, text: 'Austria', color: 'purple', size: 120 },
    { lat: 55.3781, lng: -3.4360, text: 'UK', color: 'cyan', size: 120 },
    { lat: 52.1326, lng: 5.2913, text: 'Netherlands', color: 'magenta', size: 120 },
    { lat: 51.9194, lng: 19.1451, text: 'Poland', color: 'lime', size: 120 }
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
                globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 2 });
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

    return (
        <>
            <div className="about">
                <div className="overlay">
                    <Header />
                    <Grid container spacing={1}>
                        <Grid item lg={6} md={6} sm={12} xs={12}>

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
                                    labelText={labelText}
                                    labelSize={2}
                                    onLabelHover={handleLabelHover}
                                    labelColor={() => 'rgba(255, 165, 0, 0.5)'}
                                />
                                      {hoveredLabel && <div style={{ position: 'absolute', top: 10, left: 10 }}>{hoveredLabel}</div>}

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
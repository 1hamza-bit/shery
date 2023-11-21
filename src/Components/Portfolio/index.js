import React, { useEffect, useState } from 'react';
import styles from './index.module.scss'
import { Button, Grid } from '@mui/material';
import Footer from '../Layout/footer';
import Header from '../Layout/header';
// import axios from 'axios';
// import { CSSTransition } from 'react-transition-group';
// import { AnimatePresence, motion, useAnimation } from 'framer-motion';

const projectData = [
  {
    title: 'Project 1',
    category: 'Web Development',
    description: 'Description of project 1.',
    image: 'https://w7.pngwing.com/pngs/230/486/png-transparent-garden-hoses-natural-rubber-plumbing-others-cable-plastic-plumbing-fixtures.png',
    tag: "Hydraulic hose"
  },
  {
    title: 'Project 2',
    category: 'UI/UX Design',
    description: 'Description of project 2.',
    image: 'https://www.thespruce.com/thmb/TZytWxNYr0nvxNDyvLBMjUP9JqU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3SP4153399_hero-90bfa8e547794d269a9283a94f4ff74e.jpg',
    tag: "Hydraulic hose"
  },
  {
    title: 'Project 2',
    category: 'UI/UX Design',
    description: 'Description of project 2.',
    image: 'https://daubnerusa.com/wp-content/uploads/2021/04/4129.jpg',
    tag: "Hydraulic hose"
  },
  {
    title: 'Project 1',
    category: 'Web Development',
    description: 'Description of project 1.',
    image: 'https://w7.pngwing.com/pngs/230/486/png-transparent-garden-hoses-natural-rubber-plumbing-others-cable-plastic-plumbing-fixtures.png',
    tag: "Hydraulic hose"
  },
  {
    title: 'Project 2',
    category: 'UI/UX Design',
    description: 'Description of project 2.',
    image: 'https://www.thespruce.com/thmb/TZytWxNYr0nvxNDyvLBMjUP9JqU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3SP4153399_hero-90bfa8e547794d269a9283a94f4ff74e.jpg',
    tag: "Hydraulic hose"
  },
  {
    title: 'Project 2',
    category: 'UI/UX Design',
    description: 'Description of project 2.',
    image: 'https://daubnerusa.com/wp-content/uploads/2021/04/4129.jpg',
    tag: "Hydraulic hose"
  },
  // Add more projects here
];

const Projects = () => {
  const gridItemVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };
  const [data, setData] = useState([]);

  const [data1, setData1] = useState([]);
  const [tags, setTags] = useState([
    "Hydraulic hose", " Suction hose", 
  ]);

  // useEffect(() => {
  //   axios
  //     .get('https://kobmob.pythonanywhere.com/api/portfolio')
  //     .then((response) => {
  //       // Save the response data in the state
        
  //       setData(response.data);
  //       setData1(response.data);


  //       // Extract unique tags from the response and add them to the tags state
  //       const uniqueTags = [...new Set(response.data.map((item) => item.tag))];
  //       setTags(uniqueTags);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //     });
  // }, []);

  const handleTagClick = (selectedTag) => {
    const filteredData = data1.filter((item) => item.tag === selectedTag);
    setData(filteredData);
  };


  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.overlay}>
        <Header />
      <div className={styles.secondoverlay}>

     {/* <motion.div
          initial="hidden"
          animate="visible"
          variants={gridItemVariants}
          transition={{ duration: 0.9, delay: 0.9 }}
        >  */}
      <h1>Our Projects</h1>
      <div className={styles['project-tags']}>
      {tags.map((tag, index) => (
        <Button
          key={index}
          className={styles.tag}
          onClick={() => handleTagClick(tag)}
        >
          <span>{tag}</span>
        </Button>
      ))}
      
      </div>
      <div className={styles['project-cards']}>
        <Grid container spacing={2}>
      
   
        {projectData.map((project, index) => (
      
          <Grid item lg={4} md={6} sm={11}>
                 {/* <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.9 }}
         > */}
          <div key={index} className={styles['project-card']}>
            <div className={styles['project-image']}>
              <img  src={project.image} alt={project.title} />
            </div>
            <div className={styles['project-details']}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className={styles['category-tag']}>{project.tag}</span>
            </div>
          </div>
          {/* </motion.div> */}
          </Grid>
          
        ))}
        
       
        </Grid>
      </div>
    {/* </motion.div> */}
    </div>
    <Footer />
    </div>

  </section>
  );
};

export default Projects;

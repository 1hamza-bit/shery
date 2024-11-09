import React, { useEffect, useState } from 'react';
import styles from './index.module.scss'
import { Button, Grid, TextField } from '@mui/material';
import Footer from '../Layout/footer';
import Header from '../Layout/header';
// import axios from 'axios';
// import { CSSTransition } from 'react-transition-group';
// import { AnimatePresence, motion, useAnimation } from 'framer-motion';
import green from '../../Assets/png green.png'
import pipe from '../../Assets/pipe.png'
import greenpipe from '../../Assets/green pipe.jpg'
import greenpipe2 from '../../Assets/green2.jpg'
import redpipe from '../../Assets/red pipe.jpg'
import red2 from '../../Assets/red2.jpg'
import hydraulic from '../../Assets/hydraulic.png'
import fire from '../../Assets/fire.png'
import gas from '../../Assets/gas.png'
import canvas from '../../Assets/canvas.png'


import { debounce } from 'lodash';
import ProductSlider from './Slider';

const projectData = [
  {
    title: 'Project 1',
    category: 'Web Development',
    description: 'Description of project 1.',
    image: green,
    tag: "Hydraulic hose"
  },
  {
    title: 'Project 2',
    category: 'UI/UX Design',
    description: 'Description of project 2.',
    image: hydraulic,
    tag: "Hydraulic hose"
  },
  {
    title: 'Project 2',
    category: 'UI/UX Design',
    description: "Introducing our star performers – the epitome of reliability and versatility in rubber hoses Engineered for durability and flexibility our most popular products deliver unmatched performance across various applications. From heavy-duty industrial use to everyday tasks"

    // image: 'https://daubnerusa.com/wp-content/uploads/2021/04/4129.jpg',
    // tag: "Hydraulic hose"
  },
  {
    title: 'Project 1',
    category: 'Web Development',
    description: 'Description of project 1.',
    image: canvas,
    tag: "Hydraulic hose"
  },
  {
    title: 'Project 2',
    category: 'UI/UX Design',
    description: "Introducing our star performers – the epitome of reliability and versatility in rubber hoses Engineered for durability and flexibility our most popular products deliver unmatched performance across various applications. From heavy-duty industrial use to everyday tasks"
    // image: 'https://www.thespruce.com/thmb/TZytWxNYr0nvxNDyvLBMjUP9JqU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/3SP4153399_hero-90bfa8e547794d269a9283a94f4ff74e.jpg',
    // tag: "Hydraulic hose"
  },
  {
    title: 'Project 2',
    category: 'UI/UX Design',
    description: 'Description of project 2.',
    image: gas,
    tag: "Hydraulic hose"
  },

  {
    title: 'Project 2',
    category: 'UI/UX Design',
    description: 'Description of project 2.',
    image: fire,
    tag: "Hydraulic hose"
  },
  // Add more projects here
];

const Projects = () => {
  const gridItemVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: { opacity: 1, y: 0 },
  };
  const [data, setData] = useState(projectData);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [searchResults, setSearchResults] = useState(projectData);
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

  const handleTagClick = (selectedTag2) => {
    debugger
    setSelectedTag(selectedTag2)
    const filteredData = projectData.filter((item) => item.tag === selectedTag2);
    if (selectedTag2 === "clear") {
      setData(projectData)
    }
    else {
      setData(filteredData);
    }
  };

  // const handleSearch = (event) => {
  //     debugger
  //   if (searchTerm.length >= 2) {
  //     // Set a delay of, for example, 500 milliseconds before triggering the search
  //     setTimeout(() => {
  //       debugger
  //       // Perform the search operation here, for example, call an API or update the state
  //       console.log(`Searching for: ${searchTerm}`);
  //       const results = projectData.filter(item =>
  //         item.title.toLowerCase().includes(searchTerm.toLowerCase())
  //       );

  //       // Assuming you want to update some state when the search is done
  //       if (results.length === 0) {
  //         // Show an alert if nothing is found
  //         alert("Nothing found");
  //       }

  //       // Update the state with either the search results or the original data
  //       setData(results.length > 0 ? results : projectData);
  //     }, 500);
  //   } else {
  //     // If the search term is less than 2 characters, revert to the original data
  //     setData(projectData);
  //   }

  // };

  useEffect(() => {
    const debouncedSearch = debounce((term) => {
      if (term.length >= 2) {
        // Perform the search operation here, for example, call an API or update the state
        console.log(`Searching for: ${term}`);
        const results = projectData.filter(item =>
          item.title.toLowerCase().includes(term.toLowerCase())
        );

        // Assuming you want to update some state when the search is done
        if (results.length === 0) {
          // Show an alert if nothing is found
          alert("Nothing found");
        }

        // Update the state with either the search results or the original data
        setData(results.length > 0 ? results : projectData);
      } else {
        // If the search term is less than 2 characters, revert to the original data
        setData(projectData);
      }
    }, 500);

    debouncedSearch(searchTerm);

    // Cleanup the debounced function on component unmount
    return () => debouncedSearch.cancel();
  }, [searchTerm, projectData]);

  // const debouncedSearch = debounce((term) => {
  //   debugger
  //   if (term.length >= 2) {
  //     // Perform the search operation here, for example, call an API or update the state
  //     console.log(`Searching for: ${term}`);
  //     const results = projectData.filter(item =>
  //       item.title.toLowerCase().includes(term.toLowerCase())
  //     );

  //     // Assuming you want to update some state when the search is done
  //     if (results.length === 0) {
  //       // Show an alert if nothing is found
  //       alert("Nothing found");
  //     }

  //     // Update the state with either the search results or the original data
  //     setData( projectData);
  //   } else {
  //     // If the search term is less than 2 characters, revert to the original data
  //     setData(projectData);
  //   }
  // }, 500);

  // const handleSearch = (event) => {
  //   // Check if the Enter key is pressed (key code 13)
  //     debouncedSearch(searchTerm);

  // };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    // handleSearch(); // Trigger search on every change
  };

  const products = [
    {
      image: red2,
      title: 'Hydraulic 3/8',
      description: 'This is hydraulic/ wire braided hose with R1',
    },
    {
      image: greenpipe2,
      title: 'Product 1/2',
      description: 'This is hydraulic/ wire braided hose with R1',
    },
    // Add more products as needed
  ];

  return (
    <>
      <section id="projects" className={styles.projects}>
      <Header />

        <div className={styles.overlay}>

          <div className={``}>


            <Grid container spacing={2} className='mt5p'>
              <Grid item lg={5} md={5} sm={12} sx={12} className={styles.inquiry}>
                <h1>Our most Popular Products</h1>
                <p> Introducing our star performers – the epitome of reliability and versatility in rubber hoses.
                  Engineered for durability and flexibility, our most popular products deliver unmatched
                  performance across various applications. From heavy-duty industrial use to everyday tasks,
                  these hoses are crafted to withstand the toughest conditions while ensuring optimal functionality.
                  Trust in the quality that sets the standard –
                  explore our top-rated rubber hoses today and experience durability like never before.</p>
                <Button className=''><a href={`mailto:${"hamtah112@gmail.com"}`} >Send Inquiry</a></Button>
              </Grid>
              <Grid item lg={5} md={5} sm={12} sx={12} className=''>
                <ProductSlider products={products} />
              </Grid>
            </Grid>
            {/* <motion.div
          initial="hidden"
          animate="visible"
          variants={gridItemVariants}
          transition={{ duration: 0.9, delay: 0.9 }}
        >  */}
            <div className='dfi mt15'>
              <div className='flex items-center justify-evenly w-full'>
              <h1 style={{ width: "fit-content" }}>Our Projects   </h1>
             
            
            <div className={styles['project-tags']}>
              <Button className={styles.tag} onClick={() => handleTagClick("clear")}>Clear</Button>
              {tags.map((tag, index) => (
                <Button
                  key={index}
                  className={`${styles.tag} ${tag === selectedTag ? styles.active : ""}`}
                  onClick={() => handleTagClick(tag)}
                >
                  <span>{tag}</span>
                </Button>
              ))}

            </div>

            <input
                variant='standard'
                type="text"
                size='large'
                placeholder="Search by title"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                // onKeyDown={handleSearch}
                className={`${styles.search} !text-white`}
              />
            </div>

            </div>
            <div className={styles['project-cards']}>
              <Grid container spacing={2}>


                {data.map((project, index) => (

                  <Grid item lg={4} md={6} sm={12} sx={12} className='jcc'>
                    {/* <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           exit={{ opacity: 0 }}
           transition={{ duration: 0.9 }}
         > */}
                    <div key={index} className={`${styles['project-card']} !bg-black ${!project.image ? styles.red : ''}`}>
                      {project.image ? <div className={`${styles['project-image']} !bg-zinc-800`}>
                        <img src={project.image} alt={project.title} />
                      </div> : null}
                      <div className={styles['project-details']}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        {project.tag ? <span className={styles['category-tag']}>{project.tag}</span> : null}
                      </div>
                    </div>
                    {/* </motion.div> */}

                  </Grid>

                ))}


              </Grid>
            </div>
            {/* </motion.div> */}
          </div>
        </div>

      </section>
      <Footer />
    </>
  );
};

export default Projects;

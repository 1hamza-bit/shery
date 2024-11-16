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
import hydra from '../../Assets/aicontainer.jpeg'
import firecontainer from '../../Assets/firecontainer2.jpeg'


import { debounce } from 'lodash';
import ProductSlider from './Slider';
import { Search, SendHorizonalIcon } from 'lucide-react';

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
      image: hydra,
      title: 'Hydraulic 3/8',
      description: 'This is hydraulic/ wire braided hose with R1',
    },
    {
      image: firecontainer,
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


            <div className='mt5p flex flex-col mb-6 overflow-hidden md:h-[550px] items-center md:flex-row px-3 md:px-10 gap-12'>
              <div className={`md:w-2/5 ${styles.inquiry}`}>
                <h1>Our most Popular Products</h1>
                <p className='text-md'> Introducing our star performers – the epitome of reliability and versatility in rubber hoses.
                  Engineered for durability and flexibility, our most popular products deliver unmatched
                  performance across various applications. From heavy-duty industrial use to everyday tasks,
                  these hoses are crafted to withstand the toughest conditions while ensuring optimal functionality.
                  Trust in the quality that sets the standard –
                  explore our top-rated rubber hoses today and experience durability like never before.</p>
                <button className='py-2 px-4 !bg-transparent border-red-700  text-gray-200 hover:border-red-600 text-gray-50 !text-md flex gap-1 items-center'>
                  <a className='!text-[15px] flex gap-2 items-center ' href={`mailto:${"hamtah112@gmail.com"}`} > Inquiry <SendHorizonalIcon className='w-4' /></a></button>
              </div>
              <div item lg={5} md={5} sm={12} sx={12} className='w-full md:w-3/5 flex justify-center overflow-hidden'>
                <ProductSlider products={products} />
              </div>
            </div>
            {/* <motion.div
          initial="hidden"
          animate="visible"
          variants={gridItemVariants}
          transition={{ duration: 0.9, delay: 0.9 }}
        >  */}
            <div className="flex flex-col gap-6 mt-4">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <h1 className="text-xl font-semibold text-gray-400">Our Products</h1>

                {/* Tags Section */}
                <div className="flex  items-center gap-2">
                  <a
                    className="px-3 py-1 text-sm font-medium text-zinc-500 bg-transparent  rounded hover:text-gray-200"
                    onClick={() => handleTagClick("clear")}
                  >
                    Clear
                  </a>
                  {tags.map((tag, index) => (
                    <a
                      key={index}
                      className={`px-3 py-2 text-sm font-medium rounded ${tag === selectedTag
                        ? "border-b-2 text-white"
                        : "bg-transparent text-gray-400 hover:text-gray-200"
                        }`}
                      onClick={() => handleTagClick(tag)}
                    >
                      {tag}
                    </a>
                  ))}
                </div>

                {/* Search Input */}
                <div className="flex py-1 px-2 rounded-lg items-center w-4/5 md:w-auto border-b-2 outline outline-1 border-red-400 focus-within:border-blue-500">
                  <Search className="text-gray-200 mr-1" />
                  <input
                    type="text"
                    placeholder="Search by title"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent px-4 py-2 outline-none border-none   text-white placeholder-white focus:outline-0 focus:border-none"
                  />
                </div>

              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.map((project, index) => (
                  <div
                    key={index}
                    className={` rounded-lg  overflow-hidden ${!project.image ? "border-2 border-red-500" : ""
                      }`}
                  >
                    {project.image && (
                      <div className="h-72 border bg-zinc-800 custom-shadow">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full p-2 object-scale-down hover:scale-110"
                        />
                      </div>
                    )}
                    <div className="p-4 !pt-1 text-white">
                      <h3 className="text-lg font-bold !my-1">{project.title}</h3>
                      <p className="text-sm text-gray-400 !my-1">{project.description}</p>
                      {project.tag && (
                        <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-blue-600 rounded">
                          {project.tag}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
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

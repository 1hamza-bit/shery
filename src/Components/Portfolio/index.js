import React, { useEffect, useState } from 'react';
import styles from './index.module.scss'
import { Button, Grid, TextField } from '@mui/material';
import Footer from '../Layout/footer';
import Header from '../Layout/header';
// import axios from 'axios';
// import { CSSTransition } from 'react-transition-group';
// import { AnimatePresence, motion, useAnimation } from 'framer-motion';
// import * as tf from "@tensorflow/tfjs";
// import * as use from "@tensorflow-models/universal-sentence-encoder";
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
import axios from 'axios';
import Image from 'next/image';

const projectData = [
  {
    title: 'High-Pressure Hydraulic Hose',
    category: 'Hydraulic Hoses',
    description: 'Engineered for durability and high-pressure performance, this hydraulic hose is ideal for heavy-duty industrial applications requiring reliability and flexibility.',
    image: green,
    tag: 'Hydraulic Hose',
  },
  {
    title: 'Standard Hydraulic Hose',
    category: 'Hydraulic Hoses',
    description: 'A versatile hydraulic hose designed for a wide range of fluid transfer needs, offering excellent durability and flexibility for industrial use.',
    image: hydraulic,
    tag: 'Hydraulic Hose',
  },
  {
    title: 'Firefighting Hose',
    category: 'Fire Hoses',
    description: 'Introducing our star performer – a fire hose built for reliability and versatility. Engineered to deliver under high pressure, it’s perfect for firefighting operations.',
    image: fire,
    tag: 'Fire Hose',
  },
  {
    title: 'Suction Hose',
    category: 'Suction Hoses',
    description: 'Designed for powerful suction applications, this hose ensures efficient fluid transfer in industrial and commercial settings with unmatched durability.',
    image: canvas,
    tag: 'Suction Hose',
  },
  {
    title: 'High-Pressure Pipe Hose',
    category: 'Pressure Pipes',
    description: 'A robust pressure pipe hose engineered for extreme pressure levels, delivering top performance across heavy-duty industrial tasks and everyday use.',
    image: gas,
    tag: 'Pressure Pipe',
  },
  {
    title: 'Reinforced Hydraulic Hose',
    category: 'Hydraulic Hoses',
    description: 'This reinforced hydraulic hose offers superior strength and flexibility, making it a reliable choice for demanding hydraulic systems.',
    image: greenpipe,
    tag: 'Hydraulic Hose',
  },
  {
    title: 'Heavy-Duty Fire Hose',
    category: 'Fire Hoses',
    description: 'Built to withstand intense conditions, this heavy-duty fire hose provides exceptional performance for firefighting and emergency response applications.',
    image: redpipe,
    tag: 'Fire Hose',
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
  const [isLoading, setIsLoading] = useState(false);
  const [searchResults, setSearchResults] = useState(projectData);
  const [data1, setData1] = useState([]);
  const [tags, setTags] = useState([
    "Hydraulic hose", " Suction hose",
  ]);
  const [model, setModel] = useState(null);
  const [movieEmbeddings, setMovieEmbeddings] = useState(null);

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

  // useEffect(() => {
  //   const loadModel = async () => {
  //     setIsLoading(true);
  //     const loadedModel = await use.load();
  //     setModel(loadedModel);

  //     // Precompute embeddings for all movie descriptions
  //     const descriptions = projectData.map((movie) => `${movie.title} ${movie.description}`);
  //     const embeddings = await loadedModel.embed(descriptions);
  //     setMovieEmbeddings(embeddings);
  //     setIsLoading(false);
  //   };
  //   loadModel();
  // }, []);

  // Compute cosine similarity between two vectors
  const cosineSimilarity = (a, b) => {
    if (!(a instanceof tf.Tensor) || !(b instanceof tf.Tensor)) {
      throw new Error("Inputs must be TensorFlow tensors");
    }
    const dotProduct = tf.dot(a, b).dataSync()[0];
    const normA = tf.norm(a).dataSync()[0];
    const normB = tf.norm(b).dataSync()[0];
    return dotProduct / (normA * normB);
  };

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

  const searchWithAI = async (term) => {
    if (!model || !movieEmbeddings) return;

    setIsLoading(true);
    const queryEmbedding = await model.embed([term]);
    const similarities = projectData.map((_, index) => {
      const movieEmbedding = movieEmbeddings.slice([index, 0], [1, -1]);
      return cosineSimilarity(queryEmbedding, movieEmbedding);
    });

    // Rank movies by similarity
    const rankedResults = projectData
      .map((movie, index) => ({
        ...movie,
        similarity: similarities[index],
      }))
      .sort((a, b) => b.similarity - a.similarity)
      .filter((movie) => movie.similarity > 0.5); // Threshold for relevance

    setData(rankedResults);
    setIsLoading(false);
  };

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
                <button className='py-2 px-4 mt-4 !bg-transparent border border-red-700  text-gray-200 hover:border-red-600 text-gray-50 !text-md flex gap-1 items-center'>
                  <a className='!text-[15px] flex gap-2 items-center ' href={`mailto:${"hamtah112@gmail.com"}`} > Inquiry <SendHorizonalIcon className='w-4' /></a></button>
              </div>
              <div item lg={5} md={5} sm={12} sx={12} className='w-full md:w-3/5 flex justify-center overflow-hidden'>
                {/* <ProductSlider products={products} /> */}
          <Image src={products[0].image} alt={products[0].title}   className="w-full h-full object-contain" />
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
                <div className="flex py-1 px-2 rounded-lg items-center w-4/5 md:w-auto border-b-2  outline-none border-white-400 focus-within:border-blue-500">
                  <Search className="text-gray-200 mr-1" />
                  <input
                    type="text"
                    placeholder="Search by title"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-transparent px-4 py-2 outline-none border-none   text-white placeholder-white focus:outline-0 focus:border-none"
                  />
                  {/* <button onClick={searchWithAI}>Search</button> */}
                </div>

              </div>

              {/* Projects Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {data.map((project, index) => (
                  <div
                    key={index}
                    className={` rounded-lg  overflow-hidden ${!project.image ? "border-2 border-none" : ""
                      }`}
                  >
                    {project.image && (
                      <div className="h-72  bg-zinc-800 custom-shadow">
                        <Image
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

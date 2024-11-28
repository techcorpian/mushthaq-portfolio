import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { motion } from 'framer-motion';
import Home from './view/home/Home.jsx'
import Menu from './view/shared/UIElements/Menu.jsx'
import './App.css'

const App = () => {
  const [loading, setLoading] = useState(true);

  const icon = {
      hidden: {
          pathLength: 0,
          fill: "rgba(255, 255, 255, 0)"
      },
      visible: {
          pathLength: 1,
          fill: "rgba(255, 255, 255, 1)"
      }
  };

  useEffect(() => {
      // Simulate a loading time of 3 seconds
      const timer = setTimeout(() => {
          setLoading(false);
      }, 2000);

      // Cleanup the timer if the component unmounts
      return () => clearTimeout(timer);
  }, []);

  if (loading) {
      return (
          <div className="flex justify-center items-center h-screen">
              <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 100 100"
                  className="item"
                  width="100px"
                  height="100px"
              >
                  <motion.path
                      d="M0 100V0l50 50 50-50v100L75 75l-25 25-25-25z"
                      variants={icon}
                      initial="hidden"
                      animate="visible"
                      transition={{
                          default: { duration: 2, ease: "easeInOut" },
                          fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                      }}
                  />
              </motion.svg>
          </div>
      );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeInOut" }}
    >
    <div className='glow-background'>   </div>
      <Menu />
      <Routes>
        <Route index element={<Home />} />
        {/* <Route path="Clients" element={<Users />} /> */}
      </Routes>
   
    </motion.div>
  );
};

export default App;

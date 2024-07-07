'use client'; 

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react"


import Header from './components/Header';
import Hero from './components/Hero';
import SkillsList from './components/Skills';
import StylizedTextOverVideo from './components/Language';
import EducationSection from './Education';


import LoadingSpinner from './components/LoadingSpinner';

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading of components
    const componentsToLoad = [
      Header,
      Hero,
      SkillsList,
      StylizedTextOverVideo,
      EducationSection,
    ];

    Promise.all(
      componentsToLoad.map(() => new Promise(resolve => setTimeout(resolve, 1000)))
    ).then(() => {
      setIsLoading(false);
    });

    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

  
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  if (isLoading) {
    return <LoadingSpinner />; 
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Header className=" w-full z-10" />
      <main className=""> {/* Adjust based on your header height */}
        <Hero />
        <SkillsList className="min-h-screen" />
        <StylizedTextOverVideo />
        <EducationSection />
      </main>
    </motion.div>
  );
};

export default Page;
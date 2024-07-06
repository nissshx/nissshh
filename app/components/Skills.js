'use client'
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SkillsList = () => {
  const skills = [
    "Programming",
    "Web Development",
    "Content Writer",
    "UI Design"
  ];

  const skillsRef = useRef([]);

  useEffect(() => {
    skillsRef.current.forEach((skill, index) => {
      gsap.fromTo(skill, 
        {
          opacity: 0,
          y: 20,
          scale: 0.9
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          delay: index * 0.1
        }
      );
    });
  }, []);

  return (
    <div className="  p-5 flex items-center h-1/2 text-center font-sans border border-b-1 border-gray-500">
        <div>
      {skills.map((skill, index) => (
        <span 
          key={index} 
          ref={el => skillsRef.current[index] = el}
          className="inline-block m-1 px-3 py-1 border border-gray-700 rounded-full text-sm
                     hover:bg-blue-100 transition-colors duration-300"
        >
          • {skill.toUpperCase()} •
        </span>
      ))}
      </div>
    </div>
  );
};

export default SkillsList;
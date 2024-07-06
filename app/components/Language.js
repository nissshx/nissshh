import React from 'react';

const StylizedTextOverVideo = () => {
  const textItems = [
    "C / C++",
    "Python",
    "HTML / CSS / JS",
    "React / NextJs",
    "SQL / MongoDB",
    
  ];

  return (
    <div className="relative h-screen w-screen  bg-black">
      <video 
        className="absolute top-0 left-0 w-screen h-full object-cover right-0"
        autoPlay 
        loop 
        muted
      >
        <source src="https://cdn.pixabay.com/video/2019/04/20/22908-331768732.mp4?download " type="video/mp4" />
      </video>
      
      <div className="relative z-10 h-full flex flex-col justify-center items-start p-8">
        <h1 className="text-6xl font-bold text-white mb-4">
          Languages I Know
        </h1>
        {textItems.map((item, index) => (
          <p key={index} className="text-5xl font-light text-white mb-2 tracking-widest">
            {typeof item === 'string' ? (
              <span className="outline-text">{item}</span>
            ) : (
              <>
                <span className="outline-text">{item.text} </span>
                <sup className="text-xl">{item.superscript}<br/><br/></sup>
              </>
            )}
          </p>
        ))}
      </div>
    </div>
  );
};

export default StylizedTextOverVideo;
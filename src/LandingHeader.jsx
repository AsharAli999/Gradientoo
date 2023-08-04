import React from 'react';

const LandingHeader = () => {
  return (
    <div className="flex items-center justify-center h-screen dotted-background top-0 left-0 right-0 z-0">
      <div className="container mx-auto px-4 mb-20">

        <h1 className="text-2xl md:text-6xl text-white font-bold text-center md:mr-48 md:ml-48 bg-conic-270 from-custom-gradient via-custom-gradient-alt to-custom-gradient-alt-2 bg-clip-text text-transparent">
          <span className='bg-gradient-to-b from-custom-gradient via-custom-gradient-alt to-custom-gradient-alt-2 bg-clip-text text-transparent'>Elevating Experiences</span>, Every Step of the Way
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 mt-10 text-center md:ml-64 md:mr-64">Unleash your imagination and experience our cutting-edge solutions. Innovation redefined, just for you.<br /> where innovation meets exceptional user experiences. </p>

      </div>
    </div>
  );
};

export default LandingHeader;

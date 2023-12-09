import React from 'react';

const Home = () => {
  return (
    <div id='home' className="lg:h-[85vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden p-16">
      <div className='container mx-auto h-full'>
        <div className="flex items-center h-full pt-8 ">
          <div className="flex-1 flex flex-col items-center text-center lg:items-start">
            <p className='text-lg text-highligh mb-[22px] font-bold'>Hey, I'm Pelumi</p>
            <h1 className='text-4xl text-accent leading-[44px] md:items-center md:text-5xl md:leading-tight lg:text-7xl lg:leading-tight-[1.2] font-bold md:tracking-[-2px] md:'>
              I Build & Design <br /> Web Interfaces
            </h1>
            <p className='pt-4 pb-8 md:pt-6 md:pb-12 max-w-[480px] text-highligh text-lg text-center'>
            I'm a passionate web developer with expertise in creating modern and responsive web interfaces. I specialize in turning ideas into user-friendly experiences. Let's collaborate and bring your vision to life!
            </p>
            <button className='btn btn-md bg-highligh hover:bg-tertiary md:btn-lg transition-all p-4 rounded text-accent font-bold'>
              Work With Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;


import React from 'react';
import Mine from '../assets/mine.jpeg';
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <div className='  lg:h-[105vh]  bg-primary text-white  items-center  lg:bg-cover lg:bg-center lg:bg-no-repeat
    py-32 lg:py-0 overflow-hidden p-16 md:p-4' id='about' >
      <div className='container mx-auto flex justify-between flex-col sm:flex-col lg:flex-row'>

        <div className="flex  basis-1/2  flex-col ">
          <img src={Mine} alt="myimage" 
          className='object-cover h-[40rem] w-full md:mx-auto lg:mx-0 rounded-3xl border-highligh  ' 
          />
        </div>

        <div className="flex  basis-1/2 flex-col items-center text-center lg:items-start lg:text-left px-5">
          <div className="flex flex-col ">
            <h2 className='  text-4xl lg:text-4xl font-medium lg:font-extrabold mb-3  pt-20 mt-10 pb-8'>
              Adewunmi Oluwapelumi
              </h2>
              <p className="mb-4 text-highligh text-lg">Freelance Web Developer</p>
              <hr className='mb-8 opacity-5' />
              <p className="mb-8 text-gray-400">I specialize in front-end technologies and
               passionate about creating visually stunning user interfaces. Committed to clean, maintainable code, 
                <br />
              I aim to surpass expectations in delivering exceptional solutions.

</p>
  
          </div>
          {/* <Link to="/contact"> */}
          <button className='bg-highligh hover:bg-tertiary transition-all p-4 rounded font-bold'>Contact me</button>
          {/* </Link> */}
        </div>

      </div>
    </div>
  )
}

export default About;
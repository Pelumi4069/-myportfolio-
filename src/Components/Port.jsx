import React, {useState, useEffect} from 'react';
import Kay from '../assets/kay.png';
import Bay from '../assets/zone.png';
import Hay from '../assets/projectTwo.jpg';
import Movie from '../assets/movies.png';


const projects = [
  {
    id: 1,
    title: 'Movie Box',
    description: '...',
    image: [Movie], 
  },
  {
    id: 2,
    title: 'Marketing website',
    description: '...',
    image: [Bay], 
  },
  {
    id: 3,
    title: 'Project 3',
    description: '...',
    image: [Hay], 
  },
  {
    id: 4,
    title: 'Kay Cleaning Service',
    description: '...',
    image: [Kay], 
  },
];



const Projects = () => {
  return (
    <div className='bg-primary min-h-[700px] py-12 p-20 text-tertiary ' id='projects'>
        <div className="container mx-auto">
            <div className="flex flex-col items-center text-center">
                <h2 className=" before:content-['portfolio'] relative before:absolute 
                before:opacity-40 before:-top-[2rem] before:-left-3/4 before:hidden 
                before:lg:block text-3xl lg:text-4xl font-medium lg:font-extrabold p-2 pt-10 mb-3 text-accent">My latest work</h2>
                <p className="sub p-5 text-gray-400 text-lg "> Explore a collection of my latest work showcasing front-end expertise with React. Each project reflects a dedication to creating seamless user experiences and innovative design. Let's turn your ideas into the next success story!</p>


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-10">
          {projects.map((project) => (
            <div key={project.id} className="bg-gray-300 p-6 rounded-md">
              <img
                className="object-cover h-40 w-full mb-4 rounded-md"
                src={project.image}
                alt={project.title}
              />
              <h2 className="text-lg font-bold mb-2">{project.title}</h2>
              <p className="text-sm">{project.description}</p>
            </div>
          ))}
        </div>
            </div>

        </div>
    </div>
  )
}


export default Projects;
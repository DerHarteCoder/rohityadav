import React from 'react';

const projects = [
  {
    title: 'Project One',
    image: 'https://placeimg.com/200/200/tech',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    title: 'Project Two',
    image: 'https://placeimg.com/200/200/tech',
    description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
  {
    title: 'Project Three',
    image: 'https://placeimg.com/200/200/tech',
    description: 'Nulla facilisi. Fusce eu elit sed velit dignissim lacinia.',
  },
];

const ProjectCards = () => {
  return (
    <>
    <h1 className='text-center text-6xl font-bold'>Work Experience</h1>
    <div className="flex justify-between mt-10">
      {projects.map((project, index) => (
        <div className="w-96 h-96 bg-black border-white shadow-md rounded-lg p-4" key={index}>
          <img src={project.image} alt={project.title} className="mb-2 rounded-lg" />
          <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
          <p className="text-sm text-gray-600">{project.description}</p>
        </div>
      ))}
    </div>
    </>
  );
};

export default ProjectCards;

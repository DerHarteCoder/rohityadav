import React from 'react';

const techStack = [
  {
    name: 'ReactJS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg'
  },
  {
    name: 'JavaScript',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
  },
  {
    name: 'HTML',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg'
  },
  {
    name: 'CSS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg'
  },
  {
    name: 'TailwindCSS',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg'
  }
];

const TechCard = ({ name, logo }) => {
  return (
    <>
   
    <div className="bg-black p-4 rounded-lg shadow-lg text-center w-60 h-60 items-center justify-center">
      <img className="h-20 mt-10 mx-auto" src={logo} alt={`${name} logo`} />
      <h3 className="mt-4 text-lg font-semibold">{name}</h3>
    </div>
    </>
  );
};

const Tech = () => {
  return (
    <>
     <h1 className='text-center text-3xl font-bold mt-10 mb-10'>Tech Stack</h1>
    <div className="flex space-x-4 justify-center items-center">
      {techStack.map(tech => (
        <TechCard key={tech.name} name={tech.name} logo={tech.logo} />
      ))}
    </div>
    </>
  );
};

export default Tech;

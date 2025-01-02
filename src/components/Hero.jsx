import React from 'react';

const Hero = () => {
  return (
    <header id="home" className="text-center py-20 bg-blue-500 text-white">
      <h1 className="text-4xl font-bold">Hi, I'm [Your Name]</h1>
      <p className="mt-4 text-xl">A passionate developer building modern web experiences.</p>
      <div className="mt-6">
        <a href="https://github.com/yourprofile" className="mr-4">GitHub</a>
        <a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
      </div>
    </header>
  );
};

export default Hero;

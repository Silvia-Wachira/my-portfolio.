import React from 'react';

const Hero = () => {
  return (
    <header >
      {/* <div className="bg-coffee text-almostWhite min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Hi, I'm Silvia Wachira.</h1>
      <p className="mt-4 text-xl">A passionate developer building modern web experiences.</p>
        <div className="mt-6">
          <a href="https://github.com/Silvia-Wachira" className="mr-4">GitHub</a>
          <a href="https://www.linkedin.com/in/silvia-wachira/">LinkedIn</a>
        </div>
      </div> */}
        <section class="bg-gradient-to-b from-almostWhite via-cream to-grayish text-coffee min-h-screen flex items-center justify-center">
          <div class="text-center">
            <h2 class="text-5xl font-bold mb-4">Hi, I'm Silvia Wachira</h2>
            <p class="text-xl mb-6">A passionate developer creating beautiful, functional designs.</p>
            <a href="#projects" class="bg-coffee text-almostWhite py-2 px-6 rounded shadow hover:bg-taupe">View My Work</a>
          </div>
        </section>


    </header>
  );
};

export default Hero;

import React from 'react';

const Navbar = () => {
  return (
<header class="bg-gradient-to-r from-coffee via-taupe to-grayish text-almostWhite py-4">
  <nav class="max-w-6xl mx-auto flex justify-between items-center">
    <h1 class="text-2xl font-bold">My Portfolio</h1>
    <ul class="flex space-x-6">
      <li><a href="#about" class="hover:text-cream">About</a></li>
      <li><a href="#projects" class="hover:text-cream">Projects</a></li>
      <li><a href="#contact" class="hover:text-cream">Contact</a></li>
    </ul>
  </nav>
</header>

  );
};

export default Navbar;

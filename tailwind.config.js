
// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/**/*.{html,js,jsx,ts,tsx}',
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: '#8A6240', 
//         secondary: '#eab308', 
//         accent: '#f43f5e', 
//         neutral: '#64748b', 
//         background: '8A6240 ',
//         text: '#334155',
//       },
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        coffee: '#654B38', // Deep Coffee
        taupe: '#6B5B51',  // Taupe
        grayish: '#9E9A9A', // Neutral Gray
        cream: '#EEECDA',  // Cream
        almostWhite: '#FAFBFA', // Almost White
      },
    },
  },
  plugins: [],
};

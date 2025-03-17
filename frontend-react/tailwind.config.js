// tailwind.config.js:
// Tailwind CSS configuration file.
// Classes and Objects Reference: See CLASSES_AND_OBJECTS.md for its role in styling across the project.
/*
--
[Write a basic tailwind.config.js file for customizing Tailwind CSS. Include comments and specify paths to your source files.]
--
<details>
<summary>Explanation</summary>
tailwind.config.js defines custom styles and purge options for the project. It ensures Tailwind processes all relevant files for class names.
</details>
*/

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
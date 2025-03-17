// vite.config.js:
// Vite configuration for bundling the React app.
// Classes and Objects Reference: See CLASSES_AND_OBJECTS.md for its role in build configuration.
/*
--
[Write a basic Vite configuration file for a React project. Include comments explaining key configuration options.]
--
<details>
<summary>Explanation</summary>
vite.config.js configures the development server and build options for the React app, including integration with the React plugin.
</details>
*/
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,    // Automatically opens browser on dev
    strictPort: true
  },
  build: {
    outDir: 'dist', // The production build will be generated in "dist"
  }
});
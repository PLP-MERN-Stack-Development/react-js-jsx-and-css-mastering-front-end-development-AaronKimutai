import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


const repoName = 'react-js-jsx-and-css-mastering-front-end-development-AaronKimutai';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  base: `/${repoName}/`, 
});

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


const repoName = 'react-js-jsx-and-css-masterinf-front-end-development';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), 
  ],
  
  base: `/${repoName}/`, 
})
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   base: "/livro-conquista/",
//   plugins: [react()],
//   optimizeDeps: {
//     exclude: ['lucide-react'],
//   },
// });


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// export default defineConfig({
//   base: "/livro-conquista/",
//   plugins: [react()],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// Em produção, base do GitHub Pages: https://<user>.github.io/livro-bett/
export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/livro-bett/' : '/',
  build: {
    assetsDir: 'assets',
    outDir: 'dist',
  },
})

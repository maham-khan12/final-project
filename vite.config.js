import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000, // Change the port number if needed
  },  
  resolve: {
    alias: {
      '@': '/src', // Example alias for cleaner imports
    },
  },
});

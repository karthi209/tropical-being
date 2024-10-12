import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  server: {
    host: '0.0.0.0', // Allow access from external devices
    port: 5173,      // Your desired port
    strictPort: true, // Prevents automatic port switching if the port is already in use
  },
});

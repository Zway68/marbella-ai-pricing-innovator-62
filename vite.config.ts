
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      '/api/send-email': {
        target: 'https://bgyjejetbtzunfbymuen.supabase.co/functions/v1/send-email',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/send-email/, ''),
        headers: {
          'Authorization': `Bearer ${process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJneWplamV0YnR6dW5mYnltdWVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzOTM0NjYsImV4cCI6MjA1Njk2OTQ2Nn0.4XFdPv5Z8OH-DulzR8JSliMG1GDCa3qIi4Pb0Fqt6YA'}`
        }
      },
    },
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

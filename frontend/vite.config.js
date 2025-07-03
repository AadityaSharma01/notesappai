// vite.config.js
export default {
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4004'
      },
    },
  },
};

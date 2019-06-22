/* The port should be identical to backend server port */
export const API_URL = process.env.NODE_ENV === 'production'
  ? 'http://your-production-domain'
  : 'http://localhost:8080'

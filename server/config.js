exports.PORT = process.env.PORT || 8080

exports.CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? process.env.CLIENT_ORIGIN
  : 'http://localhost:3000'

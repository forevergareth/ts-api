export const allowedOrigins = [
    'http://localhost:8080', 
];

export const CORSOPTIONS = {
    origin: function (origin, callback) {
      if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }

export const CONSTANTS = {

}; 
const allowedAPIConsumers = [
    'http://localhost:5173/'
  ];
  
  const corsOptions = {
  origin: function (origin, callback) {
    if (allowedAPIConsumers.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(null, false);
    }
  },
  methods: [
    'GET',
    'PUT',
    'POST',
    'DELETE',
    'OPTIONS',
    'HEAD'
  ],
  optionsSuccessStatus: 200,
  credentials: true,
  allowedHeaders: [
    'DNT',
    'If-Modified-Since',
    'Range',
    'Cache-Control',
    'Referer',
    'User-Agent',
    'Content-Type',
    'Authorization',
    'X-Requested-With',
    'Access-Control-Allow-Headers',
    'Access-Control-Allow-Origin',
    'Origin',
    'Accept'
  ]
  };
  
  module.exports = corsOptions
  
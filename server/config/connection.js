const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/sunset', {
  
});

module.exports = mongoose.connection;

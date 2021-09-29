// Read environment variables
const dovend = require('dotenv');
dovend.config();

const configurations = {
  MONGODB_HOST: process.env.MONGODB_HOST || 'localhost',
  MONGODB_DATABASE: process.env.MONGODB_DB || 'TODO-App',
  MONGODB_URI: `mongodb://${process.env.MONGODB_HOST || 'localhost'}/${
    process.env.MONGODB_DATABASE || 'TODO-App'
  }`,
};

module.exports = configurations;

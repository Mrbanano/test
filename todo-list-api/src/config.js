// Read environment variables
const dotenv = require('dotenv');
dotenv.config();

const configurations = {
  MONGODB_HOST: process.env.MONGODB_HOST || 'localhost',
  MONGODB_DATABASE: process.env.MONGO_DATABASE || 'To-Do-App',
  MONGODB_URI: `mongodb://${process.env.MONGODB_HOST || 'localhost'}/${
    process.env.MONGODB_DATABASE || 'TODO-App'
  }`,
  MONGODB_URI_TEST: `mongodb://${
    process.env.MONGODB_HOST_TEST || 'localhost'
  }/${process.env.MONGODB_DATABASE_TEST || 'To-Do-App'}`,

  SECRET: process.env.SECRET || 'SECRETO-DE-PRUEBA',
};

module.exports = configurations;

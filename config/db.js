require('dotenv').config();
const mongoose = require('mongoose');

function connectDB() {
  const connectionString = process.env.MONGODB_CONNECTION_URL;

  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    serverSelectionTimeoutMS: 30000,
    socketTimeoutMS: 45000, 
  });

  const connection = mongoose.connection;

  connection.on('error', (error) => {
    console.error('Database connection failed', error);
    process.exit(1);
  });

  connection.once('open', () => {
    console.log('Database connected');
  });
}

module.exports = connectDB;

const mongoose = require('mongoose');
const User = require('./User');
const Thought = require('./Thought');

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/socialNetworkDB';

if (mongoose.connection.readyState === 0) {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));
}

module.exports = { User, Thought };
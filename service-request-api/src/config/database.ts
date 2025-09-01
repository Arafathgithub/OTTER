import mongoose from 'mongoose';

const connect = () => {
  const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/service-requests';

  // Return the promise from mongoose.connect
  return mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, // Recommended for Mongoose 5.x
  });
};

export default {
  connect,
};
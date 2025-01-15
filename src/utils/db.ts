import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return; // Already connected

  try {
    await mongoose.connect(process.env.MONGO_URI || '');
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the process with a non-zero status code
  }
};

export default connectDB;

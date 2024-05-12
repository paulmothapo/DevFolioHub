import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const uri = 'mongodb+srv://moneyman:Developer404@cluster0.ocn9l7u.mongodb.net/moneyman@admin'
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;

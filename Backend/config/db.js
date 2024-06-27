import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://Ashish:Ashish89089@cluster0.o38xgze.mongodb.net/restra-Manage', {
      useNewUrlParser: true
    });
    console.log("DB connected");
  } catch (error) {
    console.error("DB connection error:", error);
  }
};


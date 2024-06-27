import mongoose from 'mongoose';

// Define the schema for the food collection
const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true },
    category: { type: String, required: true }
});

// Create the model if it doesn't already exist (prevents OverwriteModelError)
const Food = mongoose.models.Food || mongoose.model('Food', foodSchema);

// Export the model for use in other parts of the application
export default Food;

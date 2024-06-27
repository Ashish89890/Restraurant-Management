import foodModel from '../models/foodmodel.js';
import fs from "fs"
// Add food item
const addFood = async (req, res) => {
    const { name, description, price, category } = req.body;
    const image = req.file.filename;

    // Validate input
    if (!name || !description || !price || !category || !image) {
        return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    const food = new foodModel({
        name,
        description,
        price,
        category,
        image
    });

    try {
        await food.save();
        res.json({ success: true, message: 'Food item added successfully' });
    } catch (err) {
        console.error('Error adding food item:', err);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};
// all food list 
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
        
    } catch (err) {
        console.log(err);
        res.json({success:false,message:err})
    }
}
//remove food 
const removeFood = async (req, res) => {
     try {
         const food = await foodModel.findById(req.body.id);
         fs.unlink(`uploads/${food.image}`, () => { })
         await foodModel.findByIdAndDelete(req.body.id);
         res.json({success:true, message:"food removed"})
     } catch (error) {
         console.log(error);
         res.json({success:false, message:"Error"})
     }
}

export { addFood ,listFood,removeFood};

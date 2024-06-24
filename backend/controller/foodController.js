import foodModal from "../models/foodModel.js";
import fs from "fs";

//add food items
const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  //cretae new food instance
  const food = new foodModal({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });
  try {
    //save the food items in data base
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Adding food Error!" });
  }
};

//list food function
const listFood = async (req, res) => {
  try {
    //fetch all the food items
    const foods = await foodModal.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error loading all foods" });
  }
};

//remove food function
const removeFood = async (req, res) => {
  try {
    //find the food item want to delete
    const food = await foodModal.findById(req.body.id);
    //delete images added
    fs.unlink(`uploads/${food.image}`, () => {});
    //delete product data from mongo db
    await foodModal.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);

    res.json({ success: false, message: "Error occure remove food" });
  }
};

export { addFood, listFood, removeFood };

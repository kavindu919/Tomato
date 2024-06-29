import userModel from "../models/userModel.js";

//add to cart function
const addToCart = async (req, res) => {
  try {
    //find the relevent document according to the id passed by auth middleware convert token into id
    let userData = await userModel.findById(req.body.userId);
    //extract the cart data
    let cartData = await userData.cartData;
    if (!cartData[req.body.itemId]) {
      cartData[req.body.itemId] = 1;
    } else {
      cartData[req.body.itemId] += 1;
    }
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Added To Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};
//remove from cart function
const removeFromCart = async (req, res) => {
  try {
    //get the user data
    let userData = await userModel.findById(req.body.userId);
    //get the cart data
    let cartData = await userData.cartData;
    if (cartData[req.body.itemId] > 0) {
      cartData[req.body.itemId] -= 1;
    }
    //update the new cart data
    await userModel.findByIdAndUpdate(req.body.userId, { cartData });
    res.json({ success: true, message: "Remove From Cart" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error Hppend !" });
  }
};
//fetch user cart data
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = await userData.cartData;
    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error" });
  }
};

export { addToCart, removeFromCart, getCart };

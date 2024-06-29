import expres from "express";
import {
  addToCart,
  getCart,
  removeFromCart,
} from "../controller/cartController.js";
import authMiddleware from "../middleware/auth.js";

const cartRouter = expres.Router();

cartRouter.post("/add", authMiddleware, addToCart);
cartRouter.post("/remove", authMiddleware, removeFromCart);
cartRouter.post("/get", authMiddleware, getCart);

export default cartRouter;

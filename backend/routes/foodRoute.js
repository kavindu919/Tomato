import express from "express";
import { addFood, listFood, removeFood } from "../controller/foodController.js";
import multer from "multer";

const foodRouter = express.Router();

//Image Storage Engine. multer useto image storage function
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    return cb(null, `${Date.now()}${file.originalname}`);
  },
});

//store the image on upload folder
const upload = multer({ storage: storage });

foodRouter.post("/add", upload.single("image"), addFood);
foodRouter.get("/list", listFood);
foodRouter.post("/remove", removeFood);

export default foodRouter;

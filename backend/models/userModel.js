import mongoose from "mongoose";

//make schema for the user
const userSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    cartData: { type: Object, default: {} },
  },
  { minimize: false }
);

//if modal crated use it if not create modal
const userModel = mongoose.models.user || mongoose.model("user", userSchema);
export default userModel;

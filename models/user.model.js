import mongoose from "mongoose";
import { productSchema } from "./product.model.js";


const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: (value) => {
        const re =
          /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        return value.match(re);
      },
      message: "Please enter a valid email address",
    },
  },
  password: {
    required: true,
    type: String,
  },

  token: {
    type: String,
    default: "",
  },
  address: {
    type: String,
    default: "",
  },
  type: {
    type: String,
    default: "user",
  },

  cart: [
    {
      product: productSchema,
      quantity:{
        type : Number,
        required : true
      }
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;

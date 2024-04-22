import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your product name"],
    },
    price: {
      type: Number,
      required: [true, "Please enter price"],
      default: 0,
    },
    quantity: {
      type: Number,
      required: [true, "Please enter quantity"],
    },
    image: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("Product", productSchema);

//module.exports = Product;

export default Product;

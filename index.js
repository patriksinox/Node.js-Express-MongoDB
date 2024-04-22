import productRoute from "./routes/product.route.js";
import mongoose from "mongoose";
import express from "express";

const mongoDB = `mongodb+srv://${name}:${password}@backenddb.9f9fday.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB`;

const app = express();

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", function (req, res) {
  res.send("Hello Patrik");
});

//Connection to DB
mongoose
  .connect(mongoDB)
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port http://localhost:3000.");
    });
  })
  .catch((err) => console.log(err));

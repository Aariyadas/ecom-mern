import mongoose from "mongoose";
import users from "./data/users.js";
import products from "./data/product.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";

mongoose.connect(
  "mongodb+srv://dbUser:dbUser@cluster0.3ljghjd.mongodb.net/fashion-ecom?retryWrites=true&w=majority"
);

mongoose.connection.on("open", () => console.log("MongoDB connected!"));

const importData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    const createdUser = await User.insertMany(users);
    const adminUser = createdUser[0]._id;
    const sampleProducts = products.map((products) => {
      return { ...products, user: adminUser };
    });

    await Product.insertMany(sampleProducts);
    console.log("Data Imported!");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
  }
};

const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    await Product.insertMany(sampleProducts);
    console.log("Data Destroyed!");
    process.exit();
  } catch (error) {
    console.log(`${error}`);
    process.exit(1);
  }
};
if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}

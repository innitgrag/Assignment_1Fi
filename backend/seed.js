const mongoose = require("mongoose");
require("dotenv").config();
const Product = require("./src/models/Product");   // <-- keep this path

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo connected");

    await Product.deleteMany();

    await Product.create([
      {
        slug: "iphone-17-pro",
        name: "iPhone 17 Pro",
        mrp: 140000,
        price: 129999,
        imageUrl: "/iphone17.avif",       // <--- your image in frontend/public
        variants: [
          {
            name: "256GB Silver",
            extraPrice: 0,
            emiPlans: [
              { tenureMonths: 3, monthly: 43333, interestRate: 0 },
              { tenureMonths: 6, monthly: 22000, interestRate: 10.5 }
            ]
          },
          {
            name: "512GB Black",
            extraPrice: 15000,
            emiPlans: [
              { tenureMonths: 3, monthly: 46666, interestRate: 0 },
              { tenureMonths: 6, monthly: 25000, interestRate: 10.5 }
            ]
          }
        ]
      },

      {
        slug: "samsung-s24-ultra",
        name: "Samsung S24 Ultra",
        mrp: 130000,
        price: 118000,
        imageUrl: "/galaxy-s24-ultra.jpg",      // <--- your image
        variants: [
          {
            name: "256GB Titanium Black",
            extraPrice: 0,
            emiPlans: [
              { tenureMonths: 3, monthly: 39333, interestRate: 0 },
              { tenureMonths: 6, monthly: 20000, interestRate: 12 }
            ]
          },
          {
            name: "512GB Titanium Gray",
            extraPrice: 12000,
            emiPlans: [
              { tenureMonths: 3, monthly: 42000, interestRate: 0 },
              { tenureMonths: 6, monthly: 23000, interestRate: 12 }
            ]
          }
        ]
      },

      {
        slug: "oneplus-13-pro",
        name: "OnePlus 13 Pro",
        mrp: 82000,
        price: 74999,
        imageUrl: "/oneplu.png",       // <--- your image
        variants: [
          {
            name: "12GB/256GB",
            extraPrice: 0,
            emiPlans: [
              { tenureMonths: 3, monthly: 24999, interestRate: 0 },
              { tenureMonths: 6, monthly: 13500, interestRate: 9 }
            ]
          },
          {
            name: "16GB/512GB",
            extraPrice: 8000,
            emiPlans: [
              { tenureMonths: 3, monthly: 27000, interestRate: 0 },
              { tenureMonths: 6, monthly: 15500, interestRate: 9 }
            ]
          }
        ]
      }
    ]);

    console.log("Seed completed");
    process.exit();
  } catch (err) {
    console.log(err);
    process.exit();
  }
}

seed();

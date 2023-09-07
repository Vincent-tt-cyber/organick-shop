const express = require("express");
const app = express();
const port = 3000;

const products = [
  {
    id: 1,
    imageURL: "./product-1.png",
    category: "Vegetable",
    title: "Calabrese Broccoli",
    rating: 5,
    oldPrice: 20.0,
    activePrice: 13.0,
  },
  {
    id: 2,
    imageURL: "./product-2.png",
    category: "Fresh",
    title: "Fresh Banana Fruites",
    rating: 5,
    oldPrice: 20.0,
    activePrice: 14.0,
  },
  {
    id: 3,
    imageURL: "./product-3.png",
    category: "Millets",
    title: "White Nuts",
    rating: 3,
    oldPrice: 20.0,
    activePrice: 15.0,
  },
  {
    id: 4,
    imageURL: "./product-4.png",
    category: "Vegetable",
    title: "Vegan Red Tomato",
    rating: 3,
    oldPrice: 20.0,
    activePrice: 17.0,
  },
  {
    id: 5,
    imageURL: "./product-5.png",
    category: "Health",
    title: "Mung Bean",
    rating: 5,
    oldPrice: 20.0,
    activePrice: 11.0,
  },
  {
    id: 6,
    imageURL: "./product-6.png",
    category: "Nuts",
    title: "Brown Hazelnut",
    rating: 5,
    oldPrice: 20.0,
    activePrice: 12.0,
  },
  {
    id: 7,
    imageURL: "./product-7.png",
    category: "Fresh",
    title: "Eggs",
    rating: 5,
    oldPrice: 20.0,
    activePrice: 17.0,
  },
  {
    id: 8,
    imageURL: "./product-8.png",
    category: "Fresh",
    title: "Zelco Suji Elaichi Rusk",
    rating: 5,
    oldPrice: 20.0,
    activePrice: 15.0,
  },
];

app.get("/products", (req, res) => {
  res.json(products);
});

app.listen(port, () => {
  console.log(`Сервер запущен на порту ${port}`);
});

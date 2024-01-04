import React from "react";
import classes from "./mostPopular.module.css";
import Card from "../card/card";
import MoreBtn from "../btnMore/btn";

export default function MostPopular() {
  const products = [
    {
      id: 1,
      img: "/assets/img/product.png",
      name: "Great Ramen ",
      likes: 72,
      price: 100000,
      oldPrice: 150000,
      xit: true,
      percent: -10,
    },
    {
      id: 2,
      img: "/assets/img/product.png",
      name: "Great Ramen ",
      likes: 35,
      price: 100000,
      oldPrice: 150000,
      xit: true,
      percent: -20,
    },
    {
      id: 3,
      img: "/assets/img/product.png",
      name: "Great Ramen ",
      likes: 11,
      price: 100000,
      oldPrice: 150000,
      xit: false,
    },
    {
      id: 4,
      img: "/assets/img/product.png",
      name: "Great Ramen ",
      likes: 72,
      price: 100000,
      oldPrice: 150000,
      xit: true,
      percent: 20,
    },
    {
      id: 1,
      img: "/assets/img/product.png",
      name: "Great Ramen ",
      likes: 72,
      price: 100000,
      oldPrice: 150000,
      xit: true,
      percent: -10,
    },
    {
      id: 2,
      img: "/assets/img/product.png",
      name: "Great Ramen ",
      likes: 35,
      price: 100000,
      oldPrice: 150000,
      xit: true,
      percent: -20,
    },
    {
      id: 3,
      img: "/assets/img/product.png",
      name: "Great Ramen ",
      likes: 11,
      price: 100000,
      oldPrice: 150000,
      xit: false,
    },
    {
      id: 4,
      img: "/assets/img/product.png",
      name: "Great Ramen ",
      likes: 72,
      price: 100000,
      oldPrice: 150000,
      xit: true,
      percent: 20,
    },
  ];

  return (
    <div className={classes.mostPopular}>
      <h3>Самые популярные одежды</h3>
      <div className={classes.products}>
        {products.map((item, index) => (
          <Card product={item} key={index} />
        ))}
        <MoreBtn link={"/"} />
      </div>
    </div>
  );
}

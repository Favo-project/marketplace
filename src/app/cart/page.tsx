import React from "react";
import styles from "./cart.module.css";

export default function Cart() {
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
    <div className={styles.cartPage}>
      <div className="container">
        <div className={"history_link"}>
          <a href="/">Главная</a>
          <span>{">"}</span>
          <a href="/cart">Корзина </a>
        </div>
        <div className={`row ${styles.row}`}>
          <div className={styles.left}>
            <h3 className={styles.title}>
              Корзина
              <span>3</span>
            </h3>
            <div className={styles.carts}>
              {products.map((item, index) => (
                <div key={index} className={styles.cart}>
                  <div className={styles.leftCart}>
                    <div className={styles.cart_image}>
                      <img src={item.img} alt="" />
                    </div>
                    <div className={styles.cart_titles}>
                      <a href={`/product/${item.id}`}>{item.name}</a>
                      <li>
                        <span>Магазин:</span> Jump
                      </li>
                      <li>
                        <span>Цвет одежды:</span> Чёрный
                      </li>
                      <li>
                        <span>Размер одежды:</span> M
                      </li>

                      <div className={styles.count}>
                        <span className={styles.minus}>-</span>
                        <span className={styles.countC}>1</span>
                        <span className={styles.plus}>+</span>
                      </div>
                    </div>
                  </div>
                  <div className={styles.cart_right}>
                    <h4 className={styles.price}>{item.price} сум</h4>
                    <h5 className={styles.old_price}>{item.oldPrice}  сум</h5>
                    <span>
                      <img src="/assets/img/delete.png" alt="" /> Удалить
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.right}>
            <h3 className={styles.title}>Сумма заказа</h3>
            <ul>
              <li>
                Количество товаров: <span>3</span>
              </li>
              <li>
                Стоимость: <span>450.000 сум</span>
              </li>
              <li>
                Скидка: <span>150.000 сум</span>
              </li>
              <li>
                Доставка: <span>10.000 сум</span>
              </li>
            </ul>
            <h4>
              Итого: <span>300.000 сум</span>
            </h4>
            <button>Оформит заказ</button>
          </div>
        </div>
      </div>
    </div>
  );
}

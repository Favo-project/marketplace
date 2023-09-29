"use react";

import React, { useState } from "react";
import classes from "./BestShopping.module.css";
import Image from "next/image";

const products = [
  {
    img: "https://www.bustedtees.com/cdn/shop/products/renderMockup_777073a0-0248-4770-a96a-6bd2756a9dd5_1080x.png?v=1614612330",
    name: "What",
    price: "200",
    sizes: ["x", "x", "x"],
  },
  {
    img: "https://www.bustedtees.com/cdn/shop/products/renderMockup_777073a0-0248-4770-a96a-6bd2756a9dd5_1080x.png?v=1614612330",
    name: "What",
    price: "200",
    sizes: ["x", "x", "x"],
  },
  {
    img: "https://www.bustedtees.com/cdn/shop/products/renderMockup_777073a0-0248-4770-a96a-6bd2756a9dd5_1080x.png?v=1614612330",
    name: "What",
    price: "200",
    sizes: ["x", "x", "x"],
  },
  {
    img: "https://www.bustedtees.com/cdn/shop/products/renderMockup_777073a0-0248-4770-a96a-6bd2756a9dd5_1080x.png?v=1614612330",
    name: "What",
    price: "200",
    sizes: ["x", "x", "x"],
  },
];
function BestShirts() {
  return (
    <div className={classes.BestShopping}>
      <h1>{"Eng ko'p sotilgan futbolkalar"}</h1>
      <div className={`${classes.best_shirts} row`}>
        {products.map((item, index) => (
           <a href="" className={classes.shirt} key={index}>
           <div className={classes.like}>
             <svg
               data-v-7ba3bdaf=""
               width="30"
               height="30"
               viewBox="0 0 20 20"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               className="ui-icon "
             >
               <path
                 d="M5.95 2C8.51792 2 10 4.15234 10 4.15234C10 4.15234 11.485 2 14.05 2C16.705 2 19 4.07 19 6.95C19 11.1805 12.5604 15.6197 10.3651 17.5603C10.1582 17.7432 9.84179 17.7432 9.63488 17.5603C7.44056 15.6209 1 11.1803 1 6.95C1 4.07 3.295 2 5.95 2Z"
                 fill="white"
                 fillOpacity="0.8"
               ></path>
               <path
                 d="M1 6.86486C1 4.20297 3.15017 2 5.86486 2C7.98685 2 9.35921 3.35876 10 4.18673C10.6408 3.35876 12.0132 2 14.1351 2C16.8506 2 19 4.20302 19 6.86486C19 8.02987 18.5328 9.18622 17.8534 10.265C17.1716 11.3476 16.252 12.3903 15.29 13.3377C13.9567 14.6508 12.4757 15.8387 11.4134 16.6907C10.9618 17.0529 10.5859 17.3544 10.3293 17.579C10.1407 17.7439 9.85926 17.7439 9.67075 17.579C9.41405 17.3544 9.03815 17.0529 8.58659 16.6907C7.52431 15.8387 6.04326 14.6508 4.70997 13.3377C3.74802 12.3903 2.82836 11.3476 2.14659 10.265C1.46724 9.18622 1 8.02987 1 6.86486ZM5.86486 3C3.70929 3 2 4.74838 2 6.86486C2 7.76743 2.36553 8.73607 2.99277 9.73208C3.61759 10.7242 4.47833 11.706 5.41165 12.6252C6.71033 13.9042 8.08423 15.005 9.13396 15.8461C9.45728 16.1052 9.74985 16.3396 10 16.547C10.2501 16.3396 10.5427 16.1052 10.866 15.8461C11.9158 15.005 13.2897 13.9042 14.5883 12.6252C15.5217 11.706 16.3824 10.7242 17.0072 9.73208C17.6345 8.73607 18 7.76743 18 6.86486C18 4.74833 16.2914 3 14.1351 3C12.0406 3 10.8181 4.70211 10.5033 5.21028C10.2727 5.5825 9.72727 5.58249 9.4967 5.21027C9.1819 4.7021 7.95944 3 5.86486 3Z"
                 fill="#15151A"
               ></path>
             </svg>
           </div>
           <div className={classes.shirts_photo}>
             <img src={item.img} alt="" />
           </div>
           <h3>{item.name}</h3>
           <p>{item.price} uzs</p>
         </a>
        ))}
      </div>
      <a href="#" className={classes.allShirts}>
        Barcha futbolkalar{" "}
        <svg
          className="icon "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22 14"
          width="22"
          height="14"
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
        >
          <path d="M13.5681 0.60807C13.9825 0.193703 14.6407 0.171894 15.0808 0.542643L15.152 0.60807L20.752 6.20807L20.8174 6.27931C21.1676 6.6949 21.1676 7.30516 20.8174 7.72075L20.752 7.79199L15.152 13.392L15.0808 13.4574C14.6652 13.8076 14.0549 13.8076 13.6393 13.4574L13.5681 13.392L13.5027 13.3208C13.1525 12.9052 13.1525 12.2949 13.5027 11.8793L13.5681 11.8081L17.2558 8.12003H2.04004C1.42149 8.12003 0.920044 7.61859 0.920044 7.00003C0.920044 6.40959 1.37694 5.92586 1.95646 5.8831L2.04004 5.88003H17.2558L13.5681 2.19199L13.5027 2.12075C13.1319 1.68071 13.1537 1.02244 13.5681 0.60807Z"></path>
        </svg>
      </a>
    </div>
  );
}

export default BestShirts;

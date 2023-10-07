"use react";

import React, { useState } from "react";
import classes from "../BestShirts/BestShopping.module.css";
import Link from "next/link";
import Image from "next/image";
import Loading from "@/components/Loading/Loading";
import Product from "@/components/Product/Product";

async function BestHoodies() {
  try {
    const res = await fetch("https://fakestoreapi.com/products?sort=desc");
    const products: Product[] = await res.json();

    return (
      <div className={classes.BestShopping}>
        <h1>{"Eng ko'p sotilgan Xudiylar"}</h1>
        <div className={`${classes.best_shirts} row`}>
          {products ? (
            products.map((item) => <Product key={item.id} product={item} />)
          ) : (
            <Loading />
          )}
        </div>

        <Link href="/" className={classes.allShirts}>
          Barcha Xudiylar{" "}
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
        </Link>
      </div>
    );
  } catch (error) {
    console.log(error);
  }
}

export default BestHoodies;

import React from "react";
import classes from "./card.module.css";

export default function Card({ product }: any) {
  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <a href={`/product/${product.id}`}>
          <img src={product.img} alt="" />
        </a>
      </div>
      <h2>
        <a href={`/product/${product.id}`}>{product.name}</a>
      </h2>
      <div className={classes.likes}>
        <svg
          width="25"
          height="22"
          viewBox="0 0 36 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.9768 3.95335L18.0007 4.90998L19.0247 3.95347C20.7159 2.37382 22.9248 1.50055 25.2129 1.5C26.4241 1.50104 27.6237 1.74524 28.7429 2.21917C29.8624 2.69323 30.8804 3.38814 31.7375 4.26516L31.7387 4.26642C35.4215 8.02587 35.4174 13.8674 31.7448 17.599L18.3612 31.1977L18.278 31.2823L18.209 31.3789C18.1809 31.4184 18.1452 31.449 18.1063 31.4696C18.0696 31.4887 18.0308 31.4986 17.9925 31.4999C17.8468 31.4973 17.7649 31.4268 17.7305 31.3652L17.632 31.1893L17.4906 31.0455L4.25683 17.599L4.2566 17.5988C0.583495 13.8683 0.579157 8.02522 4.25545 4.27398L4.25762 4.27175C5.1152 3.39304 6.13404 2.69665 7.25485 2.22144C8.37537 1.74636 9.57639 1.50139 10.7891 1.5C13.0771 1.50028 15.2859 2.37353 16.9768 3.95335ZM31.3298 4.76049L31.3247 4.75529C28.0134 1.40636 22.4291 1.39596 19.1113 4.76037L19.1102 4.76143L18.2078 5.67841L18.2069 5.67927C18.1776 5.7091 18.1441 5.73145 18.109 5.74625L18.6915 7.12852L18.109 5.74626C18.0739 5.76102 18.0373 5.76829 18.0008 5.76829C17.9643 5.76829 17.9276 5.76102 17.8925 5.74622C17.8574 5.7314 17.8239 5.70907 17.7948 5.67939L17.7938 5.67841L16.8914 4.76143C15.2583 3.10211 13.0902 2.16789 10.7883 2.16789C8.48686 2.16789 6.31299 3.10167 4.67 4.76228L4.66999 4.76227L4.66454 4.76784C1.28072 8.22369 1.27602 13.6586 4.67048 17.1098L4.67082 17.1102L16.9317 29.5682L18.0008 30.6544L19.0699 29.5682L31.3308 17.1102L31.3311 17.1098C34.7265 13.6576 34.7199 8.22271 31.3298 4.7605L31.3298 4.76049Z"
            fill="#FF7405"
            stroke="#716E6E"
            strokeWidth="3"
          />
        </svg>
        <span>▪️ нравится {product.likes}</span>
      </div>
      <div className={classes.price}>
        <h3>{product.price} сум</h3>
        <p>{product.oldPrice} сум</p>
      </div>
      <div className={classes.cart}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1024 1024"
          version="1.1"
        >
          <path d="M352.512 832c-35.36 0-64 28.64-64 64s28.64 64 64 64 64-28.64 64-64-28.64-64-64-64z m448 0c-35.36 0-64 28.64-64 64s28.64 64 64 64 64-28.64 64-64-28.64-64-64-64zM864 800H344.224c-46.112 0-86.656-36.48-92.288-83.04l-54.272-382.08-30.88-178.56c-1.92-15.584-16.128-28.32-30.016-28.32H96c-17.664 0-32-14.336-32-32s14.336-32 32-32h40.768c46.688 0 87.68 36.48 93.344 83.04l30.816 177.888 54.496 383.712c1.792 14.848 15.232 27.36 28.8 27.36H864c17.696 0 32 14.304 32 32s-14.304 32-32 32zM384.224 672c-16.608 0-30.656-12.8-31.872-29.664-1.312-17.632 11.936-32.96 29.536-34.24l434.112-32c15.936-0.096 29.376-12.608 31.136-26.848l50.4-288.384c1.28-10.752-1.696-22.528-8.128-29.824-4.128-4.672-9.312-7.04-15.36-7.04H320c-17.664 0-32-14.336-32-32s14.336-32 32-32h554.048c24.448 0 46.912 10.144 63.264 28.608 18.688 21.088 27.264 50.816 23.52 81.632L910.4 558.656C904.96 603.52 864.448 640 818.336 640l-431.744 31.904c-0.8 0.064-1.6 0.096-2.368 0.096z" />
        </svg>
      </div>
      <div className={classes.like}>
        <svg
          width="31"
          height="28"
          viewBox="0 0 36 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.9768 3.95335L18.0007 4.90998L19.0247 3.95347C20.7159 2.37382 22.9248 1.50055 25.2129 1.5C26.4241 1.50104 27.6237 1.74524 28.7429 2.21917C29.8624 2.69323 30.8804 3.38814 31.7375 4.26516L31.7387 4.26642C35.4215 8.02587 35.4174 13.8674 31.7448 17.599L18.3612 31.1977L18.278 31.2823L18.209 31.3789C18.1809 31.4184 18.1452 31.449 18.1063 31.4696C18.0696 31.4887 18.0308 31.4986 17.9925 31.4999C17.8468 31.4973 17.7649 31.4268 17.7305 31.3652L17.632 31.1893L17.4906 31.0455L4.25683 17.599L4.2566 17.5988C0.583495 13.8683 0.579157 8.02522 4.25545 4.27398L4.25762 4.27175C5.1152 3.39304 6.13404 2.69665 7.25485 2.22144C8.37537 1.74636 9.57639 1.50139 10.7891 1.5C13.0771 1.50028 15.2859 2.37353 16.9768 3.95335ZM31.3298 4.76049L31.3247 4.75529C28.0134 1.40636 22.4291 1.39596 19.1113 4.76037L19.1102 4.76143L18.2078 5.67841L18.2069 5.67927C18.1776 5.7091 18.1441 5.73145 18.109 5.74625L18.6915 7.12852L18.109 5.74626C18.0739 5.76102 18.0373 5.76829 18.0008 5.76829C17.9643 5.76829 17.9276 5.76102 17.8925 5.74622C17.8574 5.7314 17.8239 5.70907 17.7948 5.67939L17.7938 5.67841L16.8914 4.76143C15.2583 3.10211 13.0902 2.16789 10.7883 2.16789C8.48686 2.16789 6.31299 3.10167 4.67 4.76228L4.66999 4.76227L4.66454 4.76784C1.28072 8.22369 1.27602 13.6586 4.67048 17.1098L4.67082 17.1102L16.9317 29.5682L18.0008 30.6544L19.0699 29.5682L31.3308 17.1102L31.3311 17.1098C34.7265 13.6576 34.7199 8.22271 31.3298 4.7605L31.3298 4.76049Z"
            fill="#FF7405"
            stroke="#716E6E"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className={classes.xits}>
        {product.percent && (
          <span className={classes.xit_percent}>{product.percent}%</span>
        )}
        {product.xit && <span className={classes.xit}>Хит</span>}
      </div>
    </div>
  );
}

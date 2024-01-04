import React from "react";
import classes from "./reklama.module.css";

function Advertising() {
  const reklama = [
    {
      img: "reklama.png",
      link: "#",
    },
    {
      img: "reklama.png",
      link: "#",
    },
    {
      img: "reklama.png",
      link: "#",
    },
  ];

  return (
    <div className={classes.Advertising}>
      {reklama.map((item, index) => (
        <a href={item.link} className={classes.rek} key={index}>
          <img src={`/assets/img/${item.img}`} alt="" />
        </a>
      ))}
    </div>
  );
}

export default Advertising;

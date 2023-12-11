import React from "react";
import classes from "./btn.module.css";

function MoreBtn({ link }: any) {
  return (
    <div className={classes.btn_more}>
      <a href={link}>Посмотреть все</a>
    </div>
  );
}

export default MoreBtn;

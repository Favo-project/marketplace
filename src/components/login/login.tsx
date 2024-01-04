import React from "react";
import classes from "./login.module.css";
import MoreBtn from "../btnMore/btn";

function LoginComponent({ setLogin, login }: any) {
  return (
    <div className={classes.login}>
      <div className={classes.bg} onClick={() => setLogin(false)}></div>
      <div className={classes.login_container}>
        <div className={classes.img}>
          <img src="/assets/img/logo.png" alt="" />
        </div>
        <h4>Введите номер телефона что бы войти или создать аккаунт</h4>
        <form action="">
          <input type="phone" name="" id="" placeholder="+998" />
          <button>Получить код </button>
        </form>
        <p>
          Я согласен с{" "}
          <a href="#">
            пользовательским соглашением и с политикой конфиденциальности
            <span>
              <span className={classes.art}>Art</span>
              <span className={classes.vibe}>Vibe</span>
            </span>
          </a>
        </p>
        <div className={classes.close} onClick={() => setLogin(false)}>
          X
        </div>
      </div>
    </div>
  );
}

export default LoginComponent;

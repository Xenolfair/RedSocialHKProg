import React, { useState } from "react";
import "./nav.css";

const Nav = () => {
  return (
    <nav className="myNav">
      <div className="navP1">
        <div className="pHome">
          <div className="svgHome">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 24 24"
              style={{ fill: "#ffffff", transform: "msFilter" }}
            >
              <path d="m21.743 12.331-9-10c-.379-.422-1.107-.422-1.486 0l-9 10a.998.998 0 0 0-.17 1.076c.16.361.518.593.913.593h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h4v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-7h2a.998.998 0 0 0 .743-1.669z"></path>
            </svg>
          </div>
          <a className="home" href="/html/home.html">
            Inicio
          </a>
        </div>

        <div className="pOrders">
          <div className="svgOrders">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              style={{ fill: "#ffffff", transform: "msFilter" }}
            >
              <path d="M20 3H4c-1.103 0-2 .897-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5c0-1.103-.897-2-2-2zm-1 9h-3.142c-.446 1.722-1.997 3-3.858 3s-3.412-1.278-3.858-3H4V5h16v7h-1z"></path>
            </svg>
          </div>
          <a className="orders" href="/html/tuspublicaciones.html">
            Tus publicaciones
          </a>
        </div>

        <div className="pCustomers">
          <div className="svgCustomers">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="27"
              height="27"
              viewBox="0 0 24 24"
              style={{ fill: "#ffffff" }}
            >
              <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z"></path>
            </svg>
          </div>
          <a className="customers" href="/html/account.html">
            Tu cuenta
          </a>
        </div>

        <div className="pDiscounts">
          <div className="svgDiscounts">
            <svg
              viewBox="0 0 20 20"
              width="30"
              height="30"
              focusable="false"
              aria-hidden="true"
              style={{ fill: "#ffffff" }}
            >
              <path
                fillRule="evenodd"
                d="M11.527 3.327c-.6-1.306-2.455-1.306-3.054 0a1.68 1.68 0 0 1-2.112.874c-1.347-.5-2.66.813-2.16 2.16a1.68 1.68 0 0 1-.874 2.112c-1.306.6-1.306 2.455 0 3.054a1.68 1.68 0 0 1 .874 2.112c-.5 1.347.813 2.659 2.16 2.16a1.68 1.68 0 0 1 2.112.874c.6 1.306 2.455 1.306 3.054 0a1.68 1.68 0 0 1 2.112-.874c1.347.499 2.66-.813 2.16-2.16a1.68 1.68 0 0 1 .874-2.112c1.306-.6 1.306-2.455 0-3.054a1.68 1.68 0 0 1-.874-2.112c.5-1.347-.813-2.66-2.16-2.16a1.68 1.68 0 0 1-2.112-.874Zm-2.527 4.923a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm3.53.53-4 4a.75.75 0 1 1-1.06-1.06l4-4a.75.75 0 1 1 1.06 1.06Zm.47 3.47a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
              ></path>
            </svg>
          </div>
          <a className="discounts" href="/html/game.html">
            ¡Juguemos!
          </a>
        </div>
      </div>

      <div>
        <div className="navP2">
          <div className="pSales">
            <strong classNameid="sales">Programación</strong>
          </div>

          <div className="pOnline">
            <div className="svgOnline">
              <img
                className="svgOnline"
                width="25"
                height="25"
                src='data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5 11.18v4.445c0 .345.28.625.625.625h2.5v-2.5c0-.69.56-1.25 1.25-1.25h1.25c.69 0 1.25.56 1.25 1.25v2.5h2.5c.345 0 .625-.28.625-.625V11.18a2.822 2.822 0 0 1-2.813-.975A2.807 2.807 0 0 1 10 11.25a2.807 2.807 0 0 1-2.188-1.045A2.807 2.807 0 0 1 5 11.18ZM7.188 7.5v.938a1.562 1.562 0 1 1-3.125 0V7.5h3.125ZM8.438 8.438V7.5h3.124v.938a1.563 1.563 0 0 1-3.124 0ZM12.813 8.438V7.5h3.124v.938a1.563 1.563 0 0 1-3.124 0ZM4.305 6.25h11.39l-.69-2.073a.625.625 0 0 0-.593-.427H5.588a.625.625 0 0 0-.592.427L4.305 6.25Z"/><path fill-rule="evenodd" d="M5 0a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h10a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5H5ZM3.81 3.782A1.875 1.875 0 0 1 5.588 2.5h8.824c.807 0 1.523.516 1.778 1.282l.997 2.992v1.663c0 .833-.362 1.582-.937 2.097v5.091c0 1.035-.84 1.875-1.875 1.875h-8.75a1.875 1.875 0 0 1-1.875-1.875v-5.091a2.805 2.805 0 0 1-.938-2.097V6.774l.998-2.992Z" clip-rule="evenodd"/></svg>'
                alt=""
                aria-hidden="true"
              />
            </div>
            <p className="online">Miguel Ballesteros</p>
          </div>
        </div>

        <div className="navP3">
          <div className="pApps">
            <p className="apps">Subir publicación</p>
          </div>

          <div className="pAdd">
            <div className="svgAdd">
              <svg
                viewBox="0 0 20 20"
                width="30"
                height="30"
                className="Polaris-Icon__Svg_375hu"
                focusable="false"
                aria-hidden="true"
              >
                <path d="M6.25 10a.75.75 0 0 1 .75-.75h2.25v-2.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1-.75-.75Z"></path>
                <path
                  fillRule="evenodd"
                  d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"
                ></path>
              </svg>
            </div>
            <p className="add">Agregar publicación</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;

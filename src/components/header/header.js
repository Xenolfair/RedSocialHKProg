import React, { useState } from "react";
import "./header.css";
import image from './image.png';

const Header = () => {
    const submitForm = () => {
    };
  
    return (
      <header>
        <div className="logo">
          <a href=""><svg width="53" height="53" viewBox="0 0 120 122" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="60" cy="61" rx="60" ry="61" fill="white"/><path d="M52.3146 43.1003L49.452 59.6103H33.3798L36.2425 43.1003H25.8487L18.8326 83.5662L17 94.1332L29.2264 83.5662L31.9151 68.0421H47.9872L45.2918 83.5662H55.6856L62.7084 43.1003L64.541 32.5333L52.3146 43.1003Z" fill="url(#paint0_linear_104_3)"/><path d="M84.303 63.8545L69.9077 88.9283H84.303L100.908 63.8545H84.303Z" fill="url(#paint1_linear_104_3)"/><path d="M84.303 38.7806L68.4077 63.8545H84.303L100.908 38.7806H84.303Z" fill="url(#paint2_linear_104_3)"/><defs><linearGradient id="paint0_linear_104_3" x1="9.69767" y1="68.1881" x2="50.8617" y2="93.1201" gradientUnits="userSpaceOnUse"><stop stop-color="#F49929"/><stop offset="0.308333" stop-color="#D90020" stop-opacity="0.79"/><stop offset="0.589583" stop-color="#AF0073" stop-opacity="0.7348"/><stop offset="0.959375" stop-color="#0217DA" stop-opacity="0.63"/></linearGradient><linearGradient id="paint1_linear_104_3" x1="85.4077" y1="63.8545" x2="85.4077" y2="88.9283" gradientUnits="userSpaceOnUse"><stop stop-color="#AF0073" stop-opacity="0.63"/><stop offset="1" stop-color="#0217DA" stop-opacity="0.73"/></linearGradient><linearGradient id="paint2_linear_104_3" x1="84.6577" y1="38.7806" x2="84.6577" y2="63.8545" gradientUnits="userSpaceOnUse"><stop stop-color="#F49929"/><stop offset="0.9999" stop-color="#D90220" stop-opacity="0.79"/><stop offset="1" stop-color="#D90020"/></linearGradient></defs></svg></a>
          <h1 id="Header_Title">Red Social
            <span id="Header_Title-Username"> HK</span>
          </h1>
        </div>
  
        <div className="searchContainer">
          <form
            id="formSearch"
            method="get"
            className="search-form"
            onSubmit={(e) => {
              e.preventDefault();
              submitForm();
            }}>

            <div className="svgSearch">
              <svg xmlns="http://www.w3.org/2000/svg"width="17"height="17"viewBox="0 0 24 24"style={{ fill: '#828181', transform: 'msFilter' }}><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
            </div>
  
            <input
              type="text"
              id="busqueda"
              name="q"
              placeholder="Search"
              required
            />
            <p id="ctrlK">Ctrl K</p>
          </form>
        </div>
  
        <div className="userPart">
          <div className="svgChat">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              style={{ fill: 'rgb(255, 255, 255)', transform: 'msFilter' }}
            >
              <circle cx="9.5" cy="9.5" r="1.5"></circle>
              <circle cx="14.5" cy="9.5" r="1.5"></circle>
              <path d="M12 2C6.486 2 2 5.589 2 10c0 2.908 1.897 5.515 5 6.934V22l5.34-4.004C17.697 17.852 22 14.32 22 10c0-4.411-4.486-8-10-8zm0 14h-.333L9 18v-2.417l-.641-.247C5.671 14.301 4 12.256 4 10c0-3.309 3.589-6 8-6s8 2.691 8 6-3.589 6-8 6z"></path>
            </svg>
          </div>
  
          <div className="svgProfile">
            <a href="/index.html">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                style={{ fill: 'rgb(255, 255, 255)', transform: 'msFilter' }}
              >
                <path d="M16 13v-2H7V8l-5 4 5 4v-3z"></path>
                <path d="M20 3h-9c-1.103 0-2 .897-2 2v4h2V5h9v14h-9v-4H9v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2z"></path>
              </svg>
            </a>
          </div>

          <div className="imgUser">
            <p className="UserName">Miguel B.</p>
            <a className="hrefI"><img src={image} className="statusProfilePictureH"/></a>
          </div>
        </div>
      </header>
    );
  };
  
  export default Header;
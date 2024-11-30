import React from "react";
import "./status.css";
import image from './userExample1.png';

const Status = () => {
  return (
    <div className="status">
        <div className="statusOptions">
          <button className="statusOption" id="statusOptionA">Estado</button>
          <button className="statusOption">Fotos</button>
          <button className="statusOption">Videos</button>
        </div>
        <div className="statusProfilePicture">
            <img src={image} className="statusProfilePictureP"/>

            <div className="statusInput">
                <input type="text" className="statusInputT" placeholder="¿En qué estas pensando?..." />
            </div>
        </div>

        <hr className="line"></hr>

        <div className="statusEmoji">
            <div className="statusEmojis">
                <button className="statusEmojiButton">🧔 Personas</button>
                <button className="statusEmojiButton">🗺️ Lugares</button>
                <button className="statusEmojiButton">😁 Estado</button>
            </div>

            <button class="btnSend">
                <div>
                    <div class="svgWrapper">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                    </svg>
                    </div>
                </div>
                
                <span>Send</span>
            </button>
        </div>
        <div className="statusMedia">

        </div>
    </div>
    )
}
export default Status;
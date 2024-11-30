import React from "react";
import "./card.css";
import ReactionBar from "../reactionBar/reactionBar";
import CommentSection from "../commentSection/commentSection";

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const enlaceLoop = ['https://i.pinimg.com/originals/8d/81/a4/8d81a41f3180bbac48abeab224d77c51.jpg', "https://i.pinimg.com/originals/80/bb/2c/80bb2cce7b04fee12d7f61c1b86e19e1.jpg", "https://i.pinimg.com/originals/94/0f/0c/940f0c386152b6331544ece70b3a400e.jpg", "https://i.pinimg.com/originals/5b/44/f8/5b44f8ee33cee450a55ebf6bc624edf2.jpg", "https://i.pinimg.com/originals/2d/91/a8/2d91a8181aee49e5be3258c0921b2f53.jpg", "https://i.pinimg.com/originals/77/57/75/7757755edde9f1abe47310a2dd57b291.jpg", "https://i.pinimg.com/originals/18/e2/4a/18e24a9ff627ecfd3376e0771adbdf7f.jpg", "https://i.pinimg.com/originals/cf/b8/83/cfb88324061790a7ed0f71ff7e6d234c.jpg", "https://i.pinimg.com/originals/fa/c9/c2/fac9c20301479bcc7f9c08b3d7ec90b7.jpg", "https://i.pinimg.com/originals/46/37/6e/46376e22aac0e082db323fe4ec5d6967.jpg", "https://i.pinimg.com/originals/d2/9d/77/d29d777d34ff78808e8615aa92674f1e.jpg", "https://fastly.picsum.photos/id/689/720/720.jpg?hmac=W8-Ym_7ycHLrRxGfKO0bm_XQuE0AW2pBKx9vQN-QySA","https://i.pinimg.com/originals/fd/01/ba/fd01bad68be48a17634398edaa7f2828.jpg","https://fastly.picsum.photos/id/38/720/720.jpg?hmac=8KiqGY_qIPM3-E_CnEkT_pg9OD85RVo74YrC6hxIh_Q","https://i.pinimg.com/originals/16/36/3b/16363b7856b58a3139e0c99a418392fa.jpg","https://i.pinimg.com/originals/8a/06/98/8a06985d8e906d3b5bf308bcc5635df0.jpg","https://i.pinimg.com/originals/75/47/59/754759c5e6d4a2651098f933965955d2.jpg","https://i.pinimg.com/originals/eb/54/f9/eb54f9c56c55e93282aec20f96aad53f.jpg","https://i.pinimg.com/originals/35/a4/0c/35a40c05e54323d33bde61d99bd1f7b5.jpg","https://i.pinimg.com/originals/7c/d6/89/7cd689f98f456ddb0c792667dbba5844.jpg","https://fastly.picsum.photos/id/291/1920/1080.jpg?hmac=SHeM7_83XkrlZUldgY-WfjkYnkn58JwF5WITrnU0jZM","https://i.pinimg.com/originals/4c/b7/b6/4cb7b67f0691b6718bd93f220a0b1b79.jpg","https://i.pinimg.com/originals/5d/fc/0d/5dfc0df62f22a32f616c461e7bc647c1.jpg","https://i.pinimg.com/564x/d1/4b/13/d14b13202db143c18370d1aa3405a024.jpg","https://i.pinimg.com/originals/56/fe/ea/56feea2bb94df5ba3d842bf55b733ee2.jpg","https://i.pinimg.com/originals/a8/7a/69/a87a69befb1350c58db883012d7b0bf6.jpg","https://i.pinimg.com/originals/3d/70/9e/3d709ec71c3d803a89f3be8d178bea00.jpg","https://i.pinimg.com/originals/8f/d2/b5/8fd2b538d8868700b46a418dac1e27f5.jpg","https://i.pinimg.com/originals/49/54/b4/4954b423021769f7dc71567725a94630.jpg","https://i.pinimg.com/originals/f4/85/3a/f4853a553e797ab43c4914d5a27dddc0.jpg","https://i.pinimg.com/originals/06/30/9c/06309ca5cf80ffe19601b26d5b8a9a5f.jpg","https://i.pinimg.com/originals/db/41/85/db41855f32cbde2e3bbd97bc4fffed4b.jpg", "https://i.pinimg.com/originals/c1/c4/52/c1c4520c2692720649f7bf1af8b9a14f.jpg","https://i.pinimg.com/originals/87/0f/60/870f608f74c132310fabf55d88328559.jpg","https://i.pinimg.com/736x/19/1a/44/191a449e18705c615691d2f19bf41121.jpg","https://i.pinimg.com/originals/ce/2b/c9/ce2bc952213ad8517637347d61234d4c.jpg","https://i.pinimg.com/originals/76/0a/6a/760a6a909f6095b85c42545ffb3d457e.jpg","https://i.pinimg.com/originals/5b/3e/67/5b3e67c41ff81ec8ed792892b8e4cf92.jpg","https://i.pinimg.com/originals/70/fe/0c/70fe0c7ea81d449b6e5590b5ffd4e1ec.jpg","https://i.pinimg.com/originals/26/0e/6a/260e6ae24b1e0e089e476263f16f350b.jpg","https://i.pinimg.com/originals/8e/70/0f/8e700fd498f1dfcf2e649b2b35126644.jpg","https://i.pinimg.com/originals/dd/bf/09/ddbf0986081ac0ab3cbc986c4c623134.jpg","https://i.pinimg.com/originals/9c/94/e1/9c94e142a7dee328b26d3b6f520cec5e.jpg", "https://i.pinimg.com/originals/95/09/01/9509013ef61675ba9e71c3f61692e17c.jpg"] 
const dateName = ['semana(s)', 'mes(es)', 'dia(s)', 'hora(s)', 'minuto(s)', 'segundo(s)'];
const frasesTontas = ['Mi gata me aruñó', 'Me gusta el spaghetti', 'Los abuelos deberian ser eternos', 'No me he bañado hoy', 'Profesional en procrastinación', "Mi dieta consiste en 90% memes", "El único ejercicio que hago es saltar a conclusiones", "Si me ves sin café, por favor, ayúdame a encontrar", "Si la vida te da limones, pídele sal y tequila", "Hoy estoy como las instrucciones de IKEA: confusa y sin sentido", "Sigo esperando a que mi carta de Hogwarts llegue por correo", "El lunes debería ser ilegal. Propongo que sea parte del fin de semana", "Mi capacidad para recordar contraseñas es directamente proporcional a mi habilidad para recordar", "La dieta de hoy: ensalada... de gominolas", "No soy perezoso, solo estoy en modo de ahorro de energía.", "Viviendo la vida al revés: comiendo postre primero.", "La paciencia es una virtud, pero también es una verdura. Y a veces, las verduras toman tiempo para cocinarse", "Me gusta mi café", "Sigo esperando", "Que sueño", ":D", "Viva petro", "Va a llover", "Rick and Morty es lo mejor"];

const Card = ({ character }) => {
  const imgAleatorio = generarNumeroAleatorio(0, enlaceLoop.length - 1);
  const dateNameAleatorio = generarNumeroAleatorio(0, dateName.length - 1);
  const frasesTontasAleatorias = generarNumeroAleatorio(0, frasesTontas.length - 1);
  
  return (
    <div className="card">
      <div className="userPart">
        <img
          src={character.image}
          alt={character.name}
          className="cardImage"
        />

        <h2 className="cardTitle">{character.name}</h2>
        <p className="cardDescription">
        {character.status} - {character.species}  •  Hace {generarNumeroAleatorio(1, 99)} {dateName[dateNameAleatorio]}
        </p>

        <h1 className="cardLeave">✖️</h1>
      </div>

      <img src={enlaceLoop[imgAleatorio]} className="postImage"></img>

      <ReactionBar />

      <div className="commentSection">
        <p> I'm {character.species} and i'm {character.gender}.</p> 
        <p className="CommentaryExample">
            <strong className="CommentaryExampleStrong">{character.name}:</strong> {frasesTontas[frasesTontasAleatorias]}
        </p>
      </div>
      <CommentSection />

    </div>
  );
};

export default Card;

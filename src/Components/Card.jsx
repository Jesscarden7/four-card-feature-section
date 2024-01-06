/* eslint-disable react/prop-types */

import "../App.css";

function Card({ card }) {
  return (
    <div
      style={{ borderTop: `3px solid ${card.borderColor}` }}
      className='CardContent'>
      <h4>{card.title}</h4>
      <p>{card.content}</p>
      <div className="ImgContainer">
        <img src={card.image} />
      </div>
    </div>
  );
}

export default Card;

import React from "react";

const CardItem = (props) => {
    console.log("props", props);
  return (
    <div className="card">
      <div className="card__img">
        <img src={props?.CardItem?.img} />
      </div>

      <div className="card__content">
        <h1 className="card__title__describtion">{props?.CardItem?.title}</h1>
        <p className="card__desc">{props?.CardItem?.desc}</p>
      </div>
      {props?.children}
    </div>
  );
};

export default CardItem;

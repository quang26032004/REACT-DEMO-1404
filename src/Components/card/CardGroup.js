import React from "react";
import "./card.css";

const cards = [
  {
    id: "1",
    img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210122183844/How-to-Learn-ReactJS-in-2021.png",
    title: "This is for item 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae libero auctor, aliquam nunc sit amet, consectetur elit. Nulla facilisi. Nullam nec nunc nec nunc.",
  },

  {
    id: "2",
    img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210122183844/How-to-Learn-ReactJS-in-2021.png",
    title: "This is for item 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae libero auctor, aliquam nunc sit amet, consectetur elit. Nulla facilisi. Nullam nec nunc nec nunc.",
  },

  {
    id: "3",
    img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210122183844/How-to-Learn-ReactJS-in-2021.png",
    title: "This is for item 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae libero auctor, aliquam nunc sit amet, consectetur elit. Nulla facilisi. Nullam nec nunc nec nunc.",
  },
];

const CardGroup = () => {
  return (
    <div className="card-container">
      {cards.map((item) => (
        <div className="card" key={item.id}>
          <div className="card__img">
            <img src={item.img} alt="React" />
          </div>

          <div className="card__content">
            <h1 className="card__title__describtion">{item.title}</h1>
            <p className="card__desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardGroup;

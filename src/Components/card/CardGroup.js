import React from "react";
import "./card.css";
import CardItem from "./CardItem";

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
        <CardItem CardItem = {item} key={item.id}/>
      ))}
    </div>
  );
};

export default CardGroup;

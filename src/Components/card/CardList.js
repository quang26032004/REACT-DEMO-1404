import React from "react";
import "./card.css";
import CardItem from "./CardItem";

const cards = [
    {
      id: "1",
      img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210122183844/How-to-Learn-ReactJS-in-2021.png",
      title: "This is card list 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae libero auctor, aliquam nunc sit amet, consectetur elit. Nulla facilisi. Nullam nec nunc nec nunc.",
    },
  
    {
      id: "2",
      img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210122183844/How-to-Learn-ReactJS-in-2021.png",
      title: "This is card list 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae libero auctor, aliquam nunc sit amet, consectetur elit. Nulla facilisi. Nullam nec nunc nec nunc.",
    },
  
    {
      id: "3",
      img: "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20210122183844/How-to-Learn-ReactJS-in-2021.png",
      title: "This is card list 3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vitae libero auctor, aliquam nunc sit amet, consectetur elit. Nulla facilisi. Nullam nec nunc nec nunc.",
    },
  ];


const CardList = () => {
  return (
    <div className="card-container">
        {cards.map((item) => (
            <CardItem CardItem = {item} key={item.id} data={true}>
              <h1>This is children text</h1>
            </CardItem>
        ))}
    </div>
  );
};

export default CardList;

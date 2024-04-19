import React, {useState} from "react";
import "./homepage.css";
import Header from "./Header";
import Footer from "./Footer";
import Body1 from "./Body1";
import Body2 from "./Body2";
import Body3 from "./Body3";

const Homepage = () => {
    const [bodyVisible, setBodyVisible] = useState(1);

    const bodyRender = () => {
        if (bodyVisible === 1) {
            return <Body1 />;
        } else if (bodyVisible === 2) {
            return <Body2 />;
        } else {
            return <Body3 />;
        }
        
    };

  return (
    <div className="page-container">
      <div className="page-btn">
        <button 
        className="btn"
        onClick={() => setBodyVisible(1)}
        >Open Body 1</button>

        <button 
        className="btn"
        onClick={() => setBodyVisible(2)}
        >Open Body 2</button>

        <button 
        className="btn"
        onClick={() => setBodyVisible(3)}
        >Open Body 3</button>
      </div>
      <Header />
        {/* {bodyVisible ? <Body1 /> : <Body2 />} */}

        {bodyRender()}
      <Footer />
    </div>
  );
};

export default Homepage;

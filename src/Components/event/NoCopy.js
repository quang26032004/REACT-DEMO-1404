import React, { useState } from "react";

const NoCopy = () => {
  const [count, setCount] = useState(0);

  const handleCopy = (event) => {
    event.preventDefault();
    alert("Copying is not allowed");
    setCount(count + 1);
  };

  const handleImageError = (event) => {
    event.target.src = "https://t4.ftcdn.net/jpg/04/73/25/49/360_F_473254957_bxG9yf4ly7OBO5I0O5KABlN930GwaMQz.jpg";
  };

  return (
    <div className="Question3">
      <div>-------------------------------------------</div>
      <h1>Question2</h1> <br />
      <p onCopy={handleCopy}>Copy me!</p>

      <img src="https://cdn-img.thethao247.vn/upload/thetrung/2018/07/28/MCI_v_CHE_Hazard.jpg" onError={handleImageError} alt="Image" />

      <h1>Count: {count}</h1>
    </div>
  );
};

export default NoCopy;

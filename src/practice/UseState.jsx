import React, { useState } from "react";

const UseState = () => {
  const [Title, setTitle] = useState("Hello world");
  const handleClick = () => {
    setTitle("Title has been changed!");
  };
  return (
    <div>
      <h2>{Title}</h2>
      <button onClick={handleClick}>Change title</button>
    </div>
  );
};

export default UseState;

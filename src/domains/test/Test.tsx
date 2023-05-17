import React from "react";

type Props = {};

const fetchHandler = () => {
  fetch("http://localhost:5000/test", {
    method: "POST",
    body: "Blavla",
  });
};

const Test = (props: Props) => {
  return (
    <div>
      <button onClick={fetchHandler}>Test</button>
    </div>
  );
};

export default Test;

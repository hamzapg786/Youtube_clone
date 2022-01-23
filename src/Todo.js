import React, { useState } from "react";

const Todo = () => {
  let [state, setState] = useState("");

  const bgChanger = () => {
    let hash = Math.floor(Math.random() * 10);
    setState(`#${hash}${hash}${hash}${hash}${hash}${hash}`);
  };
  return (
    <div style={{ width: "500px", height: "100%", background: state }}>
      <center>
        <button onClick={bgChanger}>Change Color</button>
      </center>
    </div>
  );
};

export default Todo;

/* <input type="text" onChange={(e) => setInp(e.target.value)} />
<button onClick={() => setText(inp)}>Add</button> */

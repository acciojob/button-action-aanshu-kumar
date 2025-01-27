import React, { useState } from "react";
import './../styles/App.css';

const App = (props) => {
  const [click, setClick] = useState(false);

  return (
    <div className="App" id="main">
      <p id="para" className={`${click?"show":"hide"}`}>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
      <button id="click" onClick={() => {setClick(!click)} }>Click Me</button>
    </div>
  );
}

export default App

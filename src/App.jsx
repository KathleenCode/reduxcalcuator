import { useState } from 'react'
import './App.css';
import { useSelector } from "react-redux";
import Add from "./scAdd";
import Multiply from "./skMultiply";
import Divide from "./skDivide";
import Subtract from "./scSubtract";

function App() {
  const [num, setNum] = useState(0);

  const data = useSelector((data) => data.skinc.skinc);
  console.log(data);

  return (
    <>
    <div style={{backgroundColor: "#FB8B24", padding: "3rem", borderRadius: "3rem"}}>
     <h1 style={{color: "#FF004D"}}>A Redux Mini Calculator</h1>
     <label htmlFor="num">Please type a number</label> <br />
     <input 
     style={{border: "3px solid #820300", padding: ".3rem .1rem",borderRadius: "10%", margin: "1rem", outlineColor: "#9A031E"}}
     type="number" id="num" value={num} onChange={(e) => setNum(e.target.value) } />
      <Add num={num} />
      <Subtract num={num}/>
      <Multiply num={num} />
      <Divide num={num}/>
      <br />
      <div style={{color: "#2D3250", margin: "1rem", fontWeight: "bold"}}>
       Your input: {num} 
       <hr />
       After performing operation: {data}
      </div>
    </div>
    </>
  )
}

export default App

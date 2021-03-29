import { useState } from "react";
import Coundown from "./Components/Coundown/Coundown"

const App = () => {
   const [ coundown, setCoundown] = useState(20);
   const [ a, setA] = useState(Math.round(Math.random() * 50));
   const [ b, setB] = useState(Math.round(Math.random()* 50));
   const [ c, setC] = useState("?");

  function reset(){
    setA(Math.round(Math.random() * 50));
    setB(Math.round(Math.random() * 50));
    setC("?");
  }
  function checkAnswer() {
    if ( a + b == c){
      reset();
    }
    else{
      alert("No");
    }
  }
  
  return (
    <div className="App">
      {a} + {b} = {c}
      <Coundown coundown={coundown}
      setCoundown={setCoundown} />
      <input type="text"
      onChange={({ target })=> setC(target.value)}
      <button onClick={() => checkAnswer()}>Ok</button>
      </div>
  );
}

export default App;

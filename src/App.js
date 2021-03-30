import { useState } from "react";
import Countdown from "./Components/Coundown/Coundown";
import Game from "./Components/Game/Game"



const App = () => {
  const [a, setA] = useState(randomNumber(50));
  const [b, setB] = useState(randomNumber(50));
  const [c, setC] = useState(randomNumber(50));
  const[f, setF] = useState(randomNumber(50));
  const[t, setT] = useState(randomNumber(50));
  const [answer, setAnswer] = useState("?");
  const [countdown, setCountdown] = useState(20);
  const [game, setGame] = useState(20);
  function randomNumber(limit) {
    return Math.round(Math.random() * limit);
  }


  function checkAnswer(){
    const t = a * c ;
  }
  if(t == answer) {
    setF(randomNumber(50));
    setC(randomNumber(50));
    setT(Number)
    setAnswer("?");
    setCountdown(20);
  }
   else{
     alert("No")
   }
  
 
  function checkAnswer() {
    const d = a + b - c; 
   
    if (d == answer) {
      setA(randomNumber(50));
      setB(randomNumber(50));
      setC(randomNumber(50));
      setAnswer("?");
      setCountdown(20);
    }
    else {
      alert("No");
    }
  }
  return (
    <div className="App">
      {a} + {b} - { c} = {answer} 
      {f} * {c} = {}
       
      <Countdown countdown={countdown} setCountdown={setCountdown} />
      <input type="number" value={answer} onChange={({ target }) => setAnswer(target.value)} />
      <button onClick={() => checkAnswer()}>Ok</button>


      <Game game ={game} setGame ={setGame} />
      <input type="number" value={answer} onChange={({ target }) => setAnswer(target.value)} />
      <button onClick={() => checkAnswer()}>Ok</button>
    </div>
  );
}



export default App;
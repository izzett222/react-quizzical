import { useState } from "react";
import bg from "./assets/bg.svg";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
function App() {
  const [start, setStart] = useState(false);
  function handleStart() {
    setStart(true);
  }
  return (
    <div className="min-h-[100vh] flex justify-center items-center">
      <div className="min-h-[650px] w-full max-w-[850px] relative flex justify-center items-center pb-10">
        <img
          src={bg}
          className="w-full h-full object-cover inset-0 absolute"
          alt=""
        />
       {!start && <Home start={start} handleStart={handleStart} />}
       {start && <Quiz />}
      </div>
    </div>
  );
}

export default App;

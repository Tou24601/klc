import IMG1 from "./assets/a.png";
import IMG2 from "./assets/b.png";
import IMG3 from "./assets/c.png";
import IMG4 from "./assets/d.png";
import BUBBLES from "./audio/coffee-makers-bubbling-32827.mp3";
import Audio from "./Audio";
import "./App.css";
import { useState } from "react";

function App() {
  const [imageLink, setImageLink] = useState(IMG1);

  let handleClick = () => {
    setImageLink(IMG2);
    setTimeout(() => {
      setImageLink(IMG3);
      setTimeout(() => {
        setImageLink(IMG4);
      }, 2000);
    }, 2000);
    handleClick = () => {
      alert("Kawa już gotowa");
    };
  };
  return (
    <div className="App">
      <img src={imageLink} alt="Caffe Maker" onClick={handleClick} />
    </div>
  );
}

export default App;

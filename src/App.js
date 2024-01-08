import IMG1 from "./assets/a.png";
import IMG2 from "./assets/b.png";
import IMG3 from "./assets/c.png";
import IMG4 from "./assets/d.png";
import { Howl, Howler } from "howler";
import BUBBLES from "./audio/coffee-makers-bubbling-32827.mp3";
import "./App.css";
import { useState } from "react";

function App() {
  const [imageLink, setImageLink] = useState(IMG1);

  const soundPlay = (src) => {
    const sound = new Howl({
      src,
    });
    sound.play();
  };

  const handleClick = () => {
    if (imageLink === IMG4) {
      alert("Kawa już zaparzona!");
    } else if (imageLink === IMG2 || imageLink === IMG3) {
      alert("No przecież się parzy!");
    } else {
      soundPlay(BUBBLES);
      setImageLink(IMG2);
      setTimeout(() => {
        setImageLink(IMG3);
        setTimeout(() => {
          setImageLink(IMG4);
        }, 1000);
      }, 3000);
    }
  };
  Howler.volume(1.0);

  const makeFreshCup = () => {
    setImageLink(IMG1);
  }
  return (
    <div className="App">
      <img src={imageLink} alt="Dzisiaj kawy nie będzie" onClick={handleClick} className="animatedImage" />
      <h1 className={imageLink === IMG4 ? "fontsize" : "nonvisible"}>
        Kawa gotowa. <br />
        Należy się 600 zł.
      </h1>
      <button onClick={makeFreshCup} className={imageLink === IMG4 ? "button" : "nonvisible"}>Jeszcze raz!</button>
    </div>
  );
}

export default App;

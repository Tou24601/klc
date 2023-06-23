import IMG1 from "./assets/a.png";
import IMG2 from "./assets/b.png";
import IMG3 from "./assets/c.png";
import IMG4 from "./assets/d.png";
import {Howl, Howler} from "howler"
import BUBBLES from "./audio/coffee-makers-bubbling-32827.mp3";
import "./App.css";
import { useState } from "react";

const audioClip = [
  {sound: BUBBLES, label: "Kliknij mnie"}
]

function App() {
  const [imageLink, setImageLink] = useState(IMG1);

 const soundPlay = (src) => {
  const sound = new Howl({
    src
  })
  sound.play();
 }


  const handleClick = () => {
    if (imageLink === IMG4) {
      alert("Kawa już zaparzona!")
    } else if (imageLink === IMG2 || imageLink === IMG3) {
      alert("No przecież się parzy!")
    } else {
      audioClip.map((soundObj, index) => {
        return soundPlay(soundObj.sound)
      })
    setImageLink(IMG2);
    setTimeout(() => {
      setImageLink(IMG3);
      setTimeout(() => {
        setImageLink(IMG4);
      }, 2100);
    }, 2000);
    }
  };
Howler.volume(1.0)
  return (
    <div className="App">
      <img src={imageLink} alt="Caffe Maker" onClick={handleClick} />
      <h1 style={(imageLink === IMG4) ? {} : {display: "none"}}>Kawa gotowa. <br />Należy się 500 zł.</h1>
    </div>
  );
}

export default App;

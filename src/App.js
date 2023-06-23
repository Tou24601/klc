import IMG1 from "./assets/a.png";
import IMG2 from "./assets/b.png";
import IMG3 from "./assets/c.png";
import IMG4 from "./assets/d.png";
import "./App.css";
import { useState } from "react";

function App() {
  const [imageLink, setImageLink] = useState(IMG1);

  let handleClick = () => {
    if (imageLink === IMG4) {
      alert("Kawa już zaparzona!")
      console.log()
    } else if (imageLink === IMG2 || imageLink === IMG3) {
      alert("Kawa już się parzy!")
    } else {
    setImageLink(IMG2);
    setTimeout(() => {
      setImageLink(IMG3);
      setTimeout(() => {
        setImageLink(IMG4);
      }, 2000);
    }, 2000);
    }
  };

  return (
    <div className="App">
      <img src={imageLink} alt="Caffe Maker" onClick={handleClick} />
    </div>
  );
}

export default App;

import BUBBLES from "./audio/coffee-makers-bubbling-32827.mp3";

const Audio = () => {
    return  <audio id="bubbles" preload="true" autoPlay src={BUBBLES} />
}

export default Audio;
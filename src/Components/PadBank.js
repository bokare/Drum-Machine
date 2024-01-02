import React from "react";
import "../App.css";
import { useEffect } from "react";

const activePadStyle = {
  backgroundColor: "orange",
  boxShadow: "0 3px orange",
  height: "77px",
  marginTop: "13px",
};
const inactivePadStyle = {
  backgroundColor: "grey",
  marginTop: "10px",
  boxShadow: "3px 3px 5px black",
};

const PadBank = ({ sound, playSound}) => {
  return (
    <div
      className="drum-pad"
      id={sound.name}
      onClick={() => playSound(sound.name)}
    >
      {sound.key}
    </div>
  );
};

export default PadBank;

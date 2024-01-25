import React, { useState,useEffect } from "react";
import "../App.css";

const Control = ({ displayText, toggleBank, togglePower,audioVolume }) => {
  const [poweron, setpoweron] = useState(true);
  const [bank, setbank] = useState(true);
  const [display, setdisplay] = useState("");
  const [volume, setvolume] = useState(0.3);

  useEffect(() => {
    setdisplay(displayText)
  }, [displayText])

  const handlePower = () => {
    setpoweron(!poweron);
    togglePower();
    setdisplay(poweron ? "OFF" : "ON");
  };

  const handleBank = () => {
    if (poweron) {
      setbank(!bank);
      toggleBank();
      setdisplay(bank ? "Smooth Piano Kit" : "Heater Kit");
    }
  };

  const handleVolume = (e) => {
    setvolume(e.target.value);
    audioVolume(e.target.value)
    setdisplay(Math.round(e.target.value * 100));
  };
  return (
    <div>
      <div className="control">
        <p>Power</p>
        <div className="select" onClick={handlePower}>
          <div
            className="inner"
            style={{ float: poweron ? "right" : "left" }}
          ></div>
        </div>
      </div>
      <p id="display">{display}</p>
      <div className="volume-slider">
        <input
          max="1"
          min="0"
          step="0.01"
          type="range"
          value={volume}
          onChange={handleVolume}
        />
      </div>
      <div className="control">
        <p>Bank</p>
        <div className="select" onClick={handleBank}>
          <div
            className="inner"
            style={{ float: bank ? "left" : "right" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default Control;

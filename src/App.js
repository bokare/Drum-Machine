import React, { useState, useEffect } from "react";
import "./App.css";
import PadBank from "./Components/PadBank";
import Control from "./Components/Control";

const drumSoundsBank1 = [
  {
    key: "Q",
    name: "Heater-1",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
  },
  {
    key: "W",
    name: "Heater-2",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
  },
  {
    key: "E",
    name: "Heater-3",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
  },
  {
    key: "A",
    name: "Heater-4",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
  },
  {
    key: "S",
    name: "Clap",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
  },
  {
    key: "D",
    name: "Open-HH",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
  },
  {
    key: "Z",
    name: "Kick-n'-Hat",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
  },
  {
    key: "X",
    name: "Kick",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
  },
  {
    key: "C",
    name: "Closed-HH",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
  },
];

const drumSoundsBank2 = [
  {
    key: "Q",
    name: "Chord-1",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3",
  },
  {
    key: "W",
    name: "Chord-2",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3",
  },
  {
    key: "E",
    name: "Chord-3",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3",
  },
  {
    key: "A",
    name: "Shaker",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3",
  },
  {
    key: "S",
    name: "Open-HH",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3",
  },
  {
    key: "D",
    name: "Closed-HH",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3",
  },
  {
    key: "Z",
    name: "Punchy-Kick",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3",
  },
  {
    key: "X",
    name: "Side-Stick",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3",
  },
  {
    key: "C",
    name: "Snare",
    audioUrl: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3",
  },
];



const DrumMachine = () => {
  const [power, setPower] = useState(true);
  const [currentBank, setCurrentBank] = useState(drumSoundsBank1);
  const [volume, setvolume] = useState(0.3)
  const [displayText, setdisplayText] = useState("display")

  const playSound = (name) => {
    if (power) {
      const audioElement = new Audio(); // Create a new audio element
      audioElement.src = currentBank.find(
        (sound) => sound.name === name
      ).audioUrl;
      audioElement.currentTime = 0;
      audioElement.play();
      audioElement.volume =volume ;
      setdisplayText(name)
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      const key = e.key.toUpperCase();
      const drumSound = currentBank.find((sound) => sound.key === key);
      if (drumSound) playSound(drumSound.name);
    });

    return () => {
      document.removeEventListener("keydown", () => {});
    };
  }, [currentBank]);

  const audioVolume = (volume)=>{
    setvolume(volume)
  }

  const togglePower = () => {
    setPower(!power);
    console.log(power)
  };

  const toggleBank = () => {
    if (power) {
      setCurrentBank((current) =>
        current === drumSoundsBank1 ? drumSoundsBank2 : drumSoundsBank1
      );
    }
  };

  return (
    <>
    <div className="drum-machine" id="drum">
      <div className="inner-container" id="drum-machine">
        <div className="pad-bank">
          {currentBank.map((sound) => (
            <PadBank
              key={sound.name}
              sound={sound}
              playSound={playSound}
            />
          ))}
        </div>

        <div className="controls-container">
          <Control displayText={displayText} toggleBank={toggleBank} togglePower={togglePower} audioVolume={audioVolume} />
        </div>
      </div>
      <p id="by">by - <em>Vaibhav Bokare</em> </p>
    </div>
    
    </>
    
  );
};

export default DrumMachine;

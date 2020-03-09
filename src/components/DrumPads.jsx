import React from "react";
import { useEffect } from "react";
import {
  DrumPadsContext,
  ScreenContext,
  SliderContext,
  PowerButtonContext,
  BankContext
} from "./Store";
import { useContext } from "react";

const padStyling = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#666666",
  flex: " 1 0 calc(33.333% - 30px)",
  color: "black",
  borderRadius: "10%",
  padding: "10px",
  margin: "10px",
  height: "90px",
  boxShadow: "5px 5px 5px -5px rgba(0,0,0,0.75)"
};

const DrumPads = () => {
  const [drumPads] = useContext(DrumPadsContext);
  const [screen, setScreen] = useContext(ScreenContext);
  const [slider] = useContext(SliderContext);
  const [powerButton] = useContext(PowerButtonContext);
  const [bank] = useContext(BankContext);

  const playAudio = e => {
    if (powerButton) {
      const clip = e.target.children[0];

      setScreen(bank ? e.target.id : e.target.getAttribute("id2"));
      clip.currentTime = 0;
      clip.play();
      setVolume(clip);
    }
  };

  const setVolume = e => {
    if (!powerButton) {
      e.volume = 0 / 100;
    } else {
      e.volume = slider / 100;
    }
  };

  useEffect(() => {
    drumPads.map(item => {
      document.addEventListener("keydown", e => {
        const clip = document.getElementById(item.innerText);
        const pad = document.getElementById(item.id);
        if (e.keyCode === item.keyCode) {
          clip.play();
          clip.currentTime = 0;
          setVolume(clip);
          pad.focus();
          setScreen(bank ? item.id : item.id2);
        }
      });
    });
  });

  return (
    <>
      {drumPads.map((item, index) => (
        <button
          style={padStyling}
          key={index}
          className={item.className}
          id={item.id}
          id2={item.id2}
          keycode={item.keyCode}
          onClick={e => playAudio(e)}
        >
          {item.innerText}

          <audio
            src={bank ? item.soundSrc : item.soundSrc2}
            className="clip"
            id={item.innerText}
          ></audio>
        </button>
      ))}
    </>
  );
};

export default DrumPads;

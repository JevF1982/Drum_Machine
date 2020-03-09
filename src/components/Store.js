import React, { useState } from "react";
import { createContext } from "react";

const padArray = [
  {
    className: "drum-pad",
    innerText: "Q",
    keyCode: 81,
    id: "Kick",
    id2: "Chord1",
    soundSrc: "./sounds/rw_kick_lander.wav",
    soundSrc2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
  },
  {
    className: "drum-pad",
    innerText: "W",
    keyCode: 87,
    id: "snare",
    id2: "Chord2",
    soundSrc: "./sounds/rw_snr_krash.wav",
    soundSrc2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
  },
  {
    className: "drum-pad",
    innerText: "E",
    keyCode: 69,
    id: "cymbal",
    id2: "Chord3",
    soundSrc: "./sounds/rw_cym_fairfax.wav",
    soundSrc2: "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
  },
  {
    className: "drum-pad",
    innerText: "A",
    keyCode: 65,
    id: "Open-HH",
    id2: "light",
    soundSrc: "./sounds/rw_ophat_klass.wav",
    soundSrc2: "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
  },
  {
    className: "drum-pad",
    innerText: "S",
    keyCode: 83,
    id: "tom",
    id2: "open-hat",
    soundSrc: "./sounds/rw_tom_fresh.wav",
    soundSrc2: "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
  },
  {
    className: "drum-pad",
    innerText: "D",
    keyCode: 68,
    id: "Clap",
    id2: "Kick",
    soundSrc: "./sounds/rw_clp_inc.wav",
    soundSrc2: "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
  },
  {
    className: "drum-pad",
    innerText: "Z",
    keyCode: 90,
    id: "closed hat",
    id2: "side-stick",
    soundSrc: "./sounds/rw_clhat_houseworker.wav",
    soundSrc2: "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
  },
  {
    className: "drum-pad",
    innerText: "X",
    keyCode: 88,
    id: "tom-outside",
    id2: "Snare",
    soundSrc: "./sounds/rw_tom_outside.wav",
    soundSrc2: "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
  },
  {
    className: "drum-pad",
    innerText: "C",
    keyCode: 67,
    id: "tom-robo",
    id2: "Dry_Ohh",
    soundSrc: " ./sounds/rw_tom_robo.wav",
    soundSrc2: "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
  }
];

export const DrumPadsContext = createContext();
export const ScreenContext = createContext();
export const SliderContext = createContext();
export const PowerButtonContext = createContext();
export const BankContext = createContext();

const Store = ({ children }) => {
  const [drumPads, setDrumpads] = useState(padArray);
  const [screen, setScreen] = useState("");
  const [slider, setSlider] = useState(30);
  const [powerButton, setPowerButton] = useState(true);
  const [bank, setBank] = useState(true);

  return (
    <BankContext.Provider value={[bank, setBank]}>
      <PowerButtonContext.Provider value={[powerButton, setPowerButton]}>
        <SliderContext.Provider value={[slider, setSlider]}>
          <ScreenContext.Provider value={[screen, setScreen]}>
            <DrumPadsContext.Provider value={[drumPads, setDrumpads]}>
              {children}
            </DrumPadsContext.Provider>
          </ScreenContext.Provider>
        </SliderContext.Provider>
      </PowerButtonContext.Provider>
    </BankContext.Provider>
  );
};

export default Store;

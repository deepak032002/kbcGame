import React from "react";
import Level from './gameComponents/Level'
import Lifeline from "./gameComponents/Lifeline";
import gameImg from "./gameImg.png";
import logo from "../kbcLogo1.png";

const Game = () => {

  return (
    <>
      <div className="w-100 g-0">
        {/* Game header */}
        <div className="gHeader d-flex justify-content-center align-items-center my-4">
          <span className="hr"></span>
          <div className="w-100 d-flex justify-content-between align-items-center">
            <div className="imgLogo">
              <img src={logo} alt="logo" />
            </div>
            <p>₹0</p>
            <Lifeline cls="top"/>
          </div>
        </div>
        {/* Game header */}

        {/* Game Section */}
        <div className="gSection my-4">
          <div className="row g-0">
            <div className="col-md-4 col-6 d-flex justify-content-center align-items-center">
              <div className="clock d-flex justify-content-center align-items-center rounded-circle">
                45
              </div>
            </div>
            <div className="col-md-4 col-6 d-flex justify-content-center align-items-center">
              <img
                className="gameImg img-thumbnail"
                src={gameImg}
                alt="Game Img"
              />
            </div>
            <div className="col-4 lgLvl justify-content-center align-items-center">
              <Level/>
            </div>
          </div>          
        </div>
        {/* Game Section */}

        {/* Game Question Section */}
        <div className="gQuestion p-2 d-flex justify-content-center align-items-center flex-column">
          <Lifeline cls="down" />
          <div className="questions my-3 d-flex justify-content-center align-items-center flex-column p-2">
            <div className="question d-flex justify-content-center align-items-center flex-column border p-3 rounded-pill">
              As per Asoka’s inscriptions, which among the following place was
              declared tax free and proclaimed only 1/8th part as taxable?
            </div>
            <div className="options p-1 w-100">
              <div className="row">
                <div className="col-md-6 p-3 rounded-pill my-1 col-12 opt border">
                  Kushinagar
                </div>
                <div className="col-md-6 p-3 rounded-pill my-1 col-12 opt border">
                  Lumbini
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 p-3 rounded-pill my-1 col-12 opt border">
                  Kathmandu
                </div>
                <div className="col-md-6 p-3 rounded-pill my-1 col-12 opt border">
                  Sarnath
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Game Question Section */}
      </div>
    </>
  );
};

export default Game;

import React from "react";
import fandf from "../image/50-50_2018-0.png";
import ata from "../image/ATA_2018-0.png";
import dd from "../image/DoubleDip.png";
import stq from "../image/switchTheQuestion.png";
import logo from "../kbcLogo1.png";
import gameImg from "../image/gameImg.png";

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

            <div className="lifeLine top flex-row justify-content-between">
              <button className="btn bg-transparent">
                <img src={fandf} alt="50:50" />
              </button>
              <button className="btn bg-transparent">
                <img src={ata} alt="ata" />
              </button>
              <button className="btn bg-transparent">
                <img src={dd} alt="dd" />
              </button>
              <button className="btn bg-transparent">
                <img src={stq} alt="stq" />
              </button>
            </div>
          </div>
        </div>
        {/* Game header */}

        {/* Game Section */}
        <div className="gSection my-4">
          <div className="row g-0">
            <div className="col-4 d-flex justify-content-center align-items-center">
              <div className="clock d-flex justify-content-center align-items-center rounded-circle">
                45
              </div>
            </div>
            <div className="col-4 d-flex justify-content-center align-items-center">
              <img
                className="gameImg img-thumbnail"
                src={gameImg}
                alt="Game Img"
              />
            </div>
            <div className="col-4 "></div>
          </div>
        </div>
        {/* Game Section */}

        {/* Game Question Section */}
        <div className="gQuestion p-2 d-flex justify-content-center align-items-center flex-column">
          <div className="lifeLine down flex-row justify-content-between">
            <button className="btn bg-transparent">
              <img src={fandf} alt="50:50" />
            </button>
            <button className="btn bg-transparent">
              <img src={ata} alt="ata" />
            </button>
            <button className="btn bg-transparent">
              <img src={dd} alt="dd" />
            </button>
            <button className="btn bg-transparent">
              <img src={stq} alt="stq" />
            </button>
          </div>

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

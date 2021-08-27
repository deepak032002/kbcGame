import React from "react";
import fandf from '../image/50-50_2018-0.png';
import ata from '../image/ATA_2018-0.png';
import dd from '../image/DoubleDip.png';
import stq from '../image/switchTheQuestion.png';
import logo from "../kbcLogo1.png";
import gameImg from "../image/gameImg.png"

const Game = () => {
  return (
    <>
      <div className="w-100 g-0">
        {/* Game header */}
        <div className="gHeader d-flex justify-content-center align-items-center my-4">
          <span className="hr"></span>
          <div className="w-100 d-flex justify-content-between align-items-center">
            <div className="imgLogo"><img src={logo} alt="logo" /></div>
            <p>
              ₹0
            </p>

            <div className="lifeLine d-flex flex-row justify-content-between">
              <button className="btn bg-transparent" ><img src={fandf} alt="50:50" /></button> 
              <button className="btn bg-transparent" ><img src={ata} alt="ata" /></button> 
              <button className="btn bg-transparent" ><img src={dd} alt="dd" /></button> 
              <button className="btn bg-transparent" ><img src={stq} alt="stq" /></button> 
            </div>
          </div>
        </div>
        {/* Game header */}

        {/* Game Section */}
        <div className="gSection my-4">
          <div className="row g-0">
            <div className="col-3">Time</div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <img className="gameImg" src={gameImg} alt="Game Img" />
            </div>
            <div className="col-3">Time</div>
          </div>
        </div>
        {/* Game Section */}

        {/* Game Question Section */}
        <div className="gQuestion">
          <p>Game Question Section</p>
        </div>
        {/* Game Question Section */}
      </div>
    </>
  );
};

export default Game;

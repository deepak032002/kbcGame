import React from 'react'
import fandf from "../image/50-50_2018-0.png";
import ata from "../image/ATA_2018-0.png";
import dd from "../image/DoubleDip.png";
import stq from "../image/switchTheQuestion.png";

const Lifeline = (props) => {
    return (
      <>
        <div className={`lifeLine ${props.cls} flex-row justify-content-between`}>
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
      </>
    );
}

export default Lifeline

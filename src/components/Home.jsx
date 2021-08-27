import React, {useEffect, useState} from "react";
import logo from "../kbcLogo1.png";
import $ from "jquery";
import Raudio from 'react-audio-player'
import gameMusic from "../music/gameMusic.mp3";

const Home = () => {

  // $(document).ready(()=>{
  //   $('#bgAudio').trigger('play')
  // })
  const [isMusicOff, setIsMusicOff] = useState(false)
  const [playIcon, setPlayIcon] = useState("up")

  const handleMusic = ()=>{
    if(isMusicOff){
      setIsMusicOff(false)
      setPlayIcon('up')
      // document.getElementById('bgAudio').play()
    }else{
      setIsMusicOff(true)
      setPlayIcon('off')
      document.getElementById('bgAudio').pause()
    }
  }

  return (
    <>
      <Raudio id="bgAudio" src={gameMusic} autoPlay loop></Raudio>
      <div className="row kbcHome">
        {/* left */}
        <div className="col-12 col-md-4">
          <div className="kbc_home_icon">
            <div onClick={handleMusic} className=" text-white border-white btn my-3 mx-3">
              <i className={`fa fa-volume-${playIcon}`} ></i>
            </div>
            <div className=" text-white border-white btn my-3 mx-3">
              <i className="fa fa-info "></i>
            </div>
          </div>
        </div>
        {/* left */}
        {/* mid */}
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center kbc_main_image">
          <img src={logo} alt="" className="fluid" />
        </div>
        {/* mid */}
        {/* right */}
        <div className="col-12 col-md-4 d-flex justify-content-center align-items-center flex-column">
          <button
            type="button"
            className="btn my-4 text-white border-white kbcPlayBtn"
            data-bs-toggle="modal"
            data-bs-target="#playerInfoModal"
          >
            Play
          </button>
          <button className="btn text-white border-white kbcShareBtn">
            Share
          </button>
        </div>
        {/* right */}
      </div>

      {/* pop up modal */}

      <div
        className="modal fade"
        tabindex="-1"
        aria-labelledby="playerInfoModal"
        aria-hidden="true"
        id="playerInfoModal"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h2 className="modal-title">Player Info</h2>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form action="">
                <div className="form-floating">
                  <input
                    type="text"
                    id="name"
                    className="form-control"
                    name="name"
                  />
                  <label className="form-label" htmlFor="name">
                    Name
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Proceed
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* pop up modal */}
    </>
  );
};

export default Home;

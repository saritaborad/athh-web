import React from "react";
import figma from "../assets/images/figma.svg";
import ps from "../assets/images/ps.svg";
import xd from "../assets/images/xd.svg";
import ai from "../assets/images/ai.svg";
import unity from "../assets/images/Unity.png"
import solidity from "../assets/images/solidity.png"
import go from "../assets/images/go.png"
import { SiCocos } from "react-icons/si";
import { FaRust } from "react-icons/fa";
import flutter from "../assets/images/flutter.png"
import android from "../assets/images/android.png"
import apple from "../assets/images/apple.png"
import react from "../assets/images/tech_icons/reactjs.png"
import { SiUnrealengine } from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react"
import 'animate.css';
function Techbox(props) {

  useEffect(() => {
    AOS.init({
      duration: 1500,
      startEvent: "onclick",
    });
  });
  
  switch (props.tech) {
    case "ui":
      return (

        <div className="techboxMain animate__fadeIn"  >
          <h1 >UI / UX and Graphics Design</h1>
          <p>
            UI focuses on making it more visually appealing and emotionally comfortable for the user.
          </p>
          <div className="techImagesParent"  >
            <div>
              <img src={figma} height={"40%"} width={"40%"} />
            </div>
            <div>
              <img src={ai} height={"40%"} width={"40%"} />
            </div>
            <div>
              <img src={ps} height={"40%"} width={"40%"} />
            </div>
            <div>
              <img src={xd} height={"40%"} width={"40%"} />
            </div>
          </div>
        </div>
      );
      break;

    case "app":
      return (
        <div className="techboxMain animate__fadeIn" >
          <h1 >App Development</h1>
          <p>
            We develop Android, iPhone & iPad Applications, mobile Apps. You can get Multimedia, Finance, Business, Communication and other apps developed.
          </p>
          <div className="techImagesParent" >
            <div>
              {/* <img src={figma} height={"40%"} width={"40%"} /> */}
              <img src={android} />
            </div>
            <div>
              {/* <img src={ai} height={"40%"} width={"40%"} /> */}
              <img src={flutter} width={70} />
            </div>
            <div>
              {/* <img src={ps} height={"40%"} width={"40%"} /> */}
              <img src={apple} width={70} />
            </div>
            <div>
              {/* <img src={xd} height={"40%"} width={"40%"} /> */}
              <img src={react} width={70} />
            </div>
          </div>
        </div>
      );
      break;

    case "blockchain":
      return (
        <div className="techboxMain animate__fadeIn">
          <h1>Blockchain Development</h1>
          <p>
            We create and build unique blockchain systems using Hyperledger, EVM, Solidity, Cosmos, or Substrate. We know how to create a decentralized platform for NFTs, bridges, DEXs, the metaverse, tokens, and Apps by building business logic and maintaining blockchain nodes.
          </p>
          <div className="techImagesParent">
            <div>
              {/* <img src={figma} height={"40%"} width={"40%"} /> */}
              <img src={solidity} width={70} />
            </div>
            <div>
              {/* <img src={ai} height={"40%"} width={"40%"} /> */}
              <FaRust size={70} />
            </div>
            <div>
              {/* <img src={ps} height={"40%"} width={"40%"} /> */}
              <img src={go} width={80} />
            </div>
            <div>
              {/* <img src={xd} height={"40%"} width={"40%"} /> */}
              <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/70/000000/external-blockchain-cryptocurrency-vitaliy-gorbachev-flat-vitaly-gorbachev-1.png" />
            </div>
          </div>
        </div>
      );
      break;

    case "game":
      return (
        <div className="techboxMain animate__fadeIn">
          <h1>Game Development</h1>
          <p>
            We develop games for mobile, web platforms. Our developers have in-depth expertise in cutting-edge game engines such as Unity and  hands-on experience across multiple genres.

          </p>
          <div className="techImagesParent">
            <div>
              {/* <img src={figma} height={"40%"} width={"40%"} /> */}
              <img src={unity} width={100} />
            </div>
            <div>
              <SiCocos className="gameIcons" size={70} />

            </div>
            <div>
              {/* <img src="https://img.icons8.com/nolan/55/unreal-engine.png" width={100} /> 
              */}
              <SiUnrealengine className="gameIcons" size={70} />
            </div>
            {/* <div> */}
            {/* <img src={xd} height={"40%"} width={"40%"} /> */}
            {/* </div> */}
          </div>
        </div>
      );
      break;
  }
}

export default Techbox;

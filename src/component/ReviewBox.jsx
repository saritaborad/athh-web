import React from 'react'
import client1 from "../assets/images/client1.png";
import client2 from "../assets/images/client2.png";
import client3 from "../assets/images/client3.png";
import client4 from "../assets/images/client4.png";
import client7 from "../assets/images/client7.png";
// import client6 from "../assets/images/client6.png";
import client8 from "../assets/images/client8.png"
import quote from "../assets/images/quote.svg";


function ReviewBox(props) {

    switch (props.review) {
        case "VickySingh": return (


            <div className="reviewCenterDiv">
                    <img src={quote} id="quoteimg" alt="q photo" />
                <div id="reviewTextDiv">
                    <p id="reviewText">Working with Athh technologies has been a pleasant experience for me. My Projects were developed with exceptional work with this team and I really appreciate how they went about it.</p>
                    <div id="bigClientImg">
                        <img src={client3} className="centerClientImage" alt="client photo" />
                        <h3>Vicky Singh</h3>
                        {/* <p>Adabani</p> */}
                    </div>
                </div>
            </div>
        );
            break;

        case "TuckerLaraya": return (


            <div className="reviewCenterDiv">
                    <img src={quote} id="quoteimg" alt="quote photo" />
                <div id="reviewTextDiv">
                    <p id="reviewText">Easy communication, always clear about what needs to be done and the implementation couldn’t be better.
                        When you’re looking for a team to realize your software project, you’re definitely at the right place."</p>
                    <div id="bigClientImg">
                        <img src={client8} className="centerClientImage" alt="client photo" />
                        <h3>Tucker Laraya</h3>
                        {/* <p>Adabani</p> */}
                    </div>
                </div>
            </div>
        );
            break;
        case "RajPathak": return (


            <div className="reviewCenterDiv">
                    <img src={quote} id="quoteimg" alt="quote photo" />
                <div id="reviewTextDiv">
                    <p id="reviewText">Great communicator and always replies fast. Went above and beyond. Very reliable and excellent communicator. Not the first time we have worked together and I’m sure it won’t be the last.
                    </p>
                    <div id="bigClientImg">
                        <img src={client2} className="centerClientImage" alt="client photo" />
                        <h3>Raj Pathak</h3>
                        {/* <p>Adabani</p> */}
                    </div>
                </div>
            </div>
        );
            break;
        case "Aashvi": return (


            <div className="reviewCenterDiv">
                    <img src={quote} id="quoteimg" alt="quote photo" />
                <div id="reviewTextDiv">
                    <p id="reviewText">Athh Tech communicates and collaborates effectively, establishing a seamless workflow. The team leverages its expertise and creativity to produce a high-quality result.</p>
                    <div id="bigClientImg">
                        <img src={client7} className="centerClientImage" alt="client photo" />
                        <h3>Aashvi</h3>
                        {/* <p>Adabani</p> */}
                    </div>
                </div>
            </div>
        );
            break;
        case "AhanaKhurana": return (


            <div className="reviewCenterDiv">
                    <img src={quote} id="quoteimg" alt="quote photo" />
                <div id="reviewTextDiv">
                    <p id="reviewText">I highly recommended Athh Tech as a Blockchain & Web developer that compromises a team of competent and talented professional</p>
                    <div id="bigClientImg">
                        <img src={client1} className="centerClientImage" alt="client photo" />
                        <h3>Ahana Khurana</h3>
                        {/* <p>Adabani</p> */}
                    </div>
                </div>
            </div>
        );
            break;
        case "RominSabastian": return (


            <div className="reviewCenterDiv">
                    <img src={quote} id="quoteimg" alt="quote photo" />
                <div id="reviewTextDiv">
                    <p id="reviewText">It was great to work with them. Great people. Finished with revisions and a perfect product. Will rehire in the future surely.</p>
                    <div id="bigClientImg">
                        <img src={client4} className="centerClientImage" alt="client photo" />
                        <h3>Romin Sabastian</h3>
                        {/* <p>Adabani</p> */}
                    </div>
                </div>
            </div>
        );
            break;



    }
}

export default ReviewBox;

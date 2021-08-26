import React, { useState } from "react";
import { Container } from "react-bootstrap";
import ImageModal from "./ImageModal";
import chutki from "../img/1.jpg";
import flower from "../img/2.jpg";
import girl1 from "../img/3.jpg";
import girl2 from "../img/4.jpg";
import girl3 from "../img/5.jpg";
import girl4 from "../img/6.jpg";
import greenery from "../img/7.jpg";
import krishna from "../img/8.jpg";
import moon_girl from "../img/9.jpg";
import night_bird from "../img/10.jpg";
import pink_tree from "../img/11.jpg";
import rainbow_tree from "../img/12.jpg";
import red_bubbles from "../img/13.jpg";
import restaurant from "../img/14.jpg";
import ship from "../img/15.jpg";
import sofia from "../img/16.jpg";
import valley from "../img/17.jpg";
import village from "../img/18.jpg";
import aaa from "../img/19.jpg";
import bbb from "../img/20.jpg";
import ccc from "../img/21.jpg";
import ddd from "../img/22.jpg";
import eee from "../img/23.jpg";
import img24 from "../img/24.jpg";
import img25 from "../img/25.jpg";
import img26 from "../img/26.jpg";
import img27 from "../img/27.jpg";
import lalajins from "../img/lalajins.gif";

import { HeartSpinner } from "react-spinners-kit";

const Art = () => {
  const [one, setOne] = useState(false);
  const handleOne = () => setOne(true);
  const handleNoOne = () => setOne(false);

  const [two, setTwo] = useState(false);
  const handleTwo = () => setTwo(true);
  const handleNoTwo = () => setTwo(false);

  const [three, setThree] = useState(false);
  const handleThree = () => setThree(true);
  const handleNoThree = () => setThree(false);

  const [four, setFour] = useState(false);
  const handleFour = () => setFour(true);
  const handleNoFour = () => setFour(false);

  const [five, setFive] = useState(false);
  const handleFive = () => setFive(true);
  const handleNoFive = () => setFive(false);

  const [six, setSix] = useState(false);
  const handleSix = () => setSix(true);
  const handleNoSix = () => setSix(false);

  const [seven, setSeven] = useState(false);
  const handleSeven = () => setSeven(true);
  const handleNoSeven = () => setSeven(false);

  const [eight, setEight] = useState(false);
  const handleEight = () => setEight(true);
  const handleNoEight = () => setEight(false);

  const [nine, setNine] = useState(false);
  const handleNine = () => setNine(true);
  const handleNoNine = () => setNine(false);

  const [ten, setTen] = useState(false);
  const handleTen = () => setTen(true);
  const handleNoTen = () => setTen(false);

  const [eleven, setEleven] = useState(false);
  const handleEleven = () => setEleven(true);
  const handleNoEleven = () => setEleven(false);

  const [twelve, setTwelve] = useState(false);
  const handleTwelve = () => setTwelve(true);
  const handleNoTwelve = () => setTwelve(false);

  const [thirteen, setThirteen] = useState(false);
  const handleThirteen = () => setThirteen(true);
  const handleNoThirten = () => setThirteen(false);

  const [fourteen, setFourteen] = useState(false);
  const handleFourteen = () => setFourteen(true);
  const handleNoFourteen = () => setFourteen(false);

  const [fifteen, setFifteen] = useState(false);
  const handleFifteen = () => setFifteen(true);
  const handleNoFifteen = () => setFifteen(false);

  const [sixteen, setSixteen] = useState(false);
  const handleSixteen = () => setSixteen(true);
  const handleNoSixteen = () => setSixteen(false);

  const [seventeen, setSeventeen] = useState(false);
  const handleSeventeen = () => setSeventeen(true);
  const handleNoSeventeen = () => setSeventeen(false);

  const [eighteen, setEighteen] = useState(false);
  const handleEighteen = () => setEighteen(true);
  const handleNoEighteen = () => setEighteen(false);

  const [nineteen, setNineteen] = useState(false);
  const handleNineteen = () => setNineteen(true);
  const handleNoNineteen = () => setNineteen(false);

  const [twenty, setTwenty] = useState(false);
  const handleTwenty = () => setTwenty(true);
  const handleNoTwenty = () => setTwenty(false);

  const [twentyone, setTwentyone] = useState(false);
  const handleTwentyone = () => setTwentyone(true);
  const handleNoTwentyone = () => setTwentyone(false);

  const [twentytwo, setTwentytwo] = useState(false);
  const handleTwentytwo = () => setTwentytwo(true);
  const handleNoTwentytwo = () => setTwentytwo(false);

  const [twentythree, setTwentythree] = useState(false);
  const handleTwentythree = () => setTwentythree(true);
  const handleNoTwentythree = () => setTwentythree(false);

  const [twentyfour, setTwentyfour] = useState(false);
  const handleTwentyfour = () => setTwentyfour(true);
  const handleNoTwentyfour = () => setTwentyfour(false);

  const [twentyfive, setTwentyfive] = useState(false);
  const handleTwentyfive = () => setTwentyfive(true);
  const handleNoTwentyfive = () => setTwentyfive(false);
  
  const [twentysix, setTwentysix] = useState(false);
  const handleTwentysix = () => setTwentysix(true);
  const handleNoTwentysix = () => setTwentysix(false);

  const [twentyseven, setTwentyseven] = useState(false);
  const handleTwentyseven = () => setTwentyseven(true);
  const handleNoTwentyseven = () => setTwentyseven(false);

  return (
    <center className="Art">
      {/* <div style={{height: 400, width: 400}}> */}
      <img src={lalajins} alt="lala" style={{ height: 480, width: 571 }} />
      {/* </div> */}


      <Container fluid>
        {/* <article className="Image-Container">
          <img src={lalajins} alt="lala" />
        </article> */}

        <article className="Image-Container">
          <img src={village} alt="Village" onClick={handleOne} />
          <ImageModal id="one" src={village} show={one} Close={handleNoOne} />
        </article>

        <article className="Image-Container">
          <img src={flower} alt="Flower" onClick={handleTwo} />
          <ImageModal id="two" src={flower} show={two} Close={handleNoTwo} />
        </article>

        <article className="Image-Container">
          <img src={valley} alt="Valley" onClick={handleThree} />
          <ImageModal
            id="three"
            src={valley}
            show={three}
            Close={handleNoThree}
          />
        </article>

        <article className="Image-Container">
          <img src={img25} alt="Ship" onClick={handleTwentyfive} />
          <ImageModal
            id="twentyfive"
            src={img25}
            show={twentyfive}
            Close={handleNoTwentyfive}
          />
        </article>

        <article className="Image-Container">
          <img src={img24} alt="Ship" onClick={handleTwentyfour} />
          <ImageModal
            id="twentyfour"
            src={img24}
            show={twentyfour}
            Close={handleNoTwentyfour}
          />
        </article>

        <article className="Image-Container">
          <img src={rainbow_tree} alt="Rainbow tree" onClick={handleFour} />
          <ImageModal
            id="four"
            src={rainbow_tree}
            show={four}
            Close={handleNoFour}
          />
        </article>

        <article className="Image-Container">
          <img src={girl2} alt="Girl" onClick={handleFive} />
          <ImageModal id="five" src={girl2} show={five} Close={handleNoFive} />
        </article>

        <article className="Image-Container">
          <img src={girl3} alt="Girl" onClick={handleEight} />
          <ImageModal
            id="eight"
            src={girl3}
            show={eight}
            Close={handleNoEight}
          />
        </article>

        <article className="Image-Container">
          <img src={girl4} alt="Girl" onClick={handleSix} />
          <ImageModal id="six" src={girl4} show={six} Close={handleNoSix} />
        </article>

        <article className="Image-Container">
          <img src={pink_tree} alt="Pink Tree" onClick={handleSeven} />
          <ImageModal
            id="seven"
            src={pink_tree}
            show={seven}
            Close={handleNoSeven}
          />
        </article>

        <article className="Image-Container">
          <img src={sofia} alt="Sofia" onClick={handleNine} />
          <ImageModal id="nine" src={sofia} show={nine} Close={handleNoNine} />
        </article>

        <article className="Image-Container">
          <img src={greenery} alt="Sun set" onClick={handleTen} />
          <ImageModal id="ten" src={greenery} show={ten} Close={handleNoTen} />
        </article>

        <article className="Image-Container">
          <img src={krishna} alt="Lord krishna" onClick={handleEleven} />
          <ImageModal
            id="eleven"
            src={krishna}
            show={eleven}
            Close={handleNoEleven}
          />
        </article>

        <article className="Image-Container">
          <img src={night_bird} alt="Night bird" onClick={handleTwelve} />
          <ImageModal
            id="twelve"
            src={night_bird}
            show={twelve}
            Close={handleNoTwelve}
          />
        </article>

        {/* <article className="Image-Container">
					<img src={chutki} alt="Chota beam Chutki" onClick={handleThirteen}/>
					<ImageModal id="thirteen" src={chutki} show={thirteen} Close={handleNoThirten}/>
				</article> */}

        <article className="Image-Container">
          <img src={red_bubbles} alt="Heart bubbles" onClick={handleFourteen} />
          <ImageModal
            id="fourteen"
            src={red_bubbles}
            show={fourteen}
            Close={handleNoFourteen}
          />
        </article>

        <article className="Image-Container">
          <img src={moon_girl} alt="Moon girl" onClick={handleFifteen} />
          <ImageModal
            id="fifteen"
            src={moon_girl}
            show={fifteen}
            Close={handleNoFifteen}
          />
        </article>

        <article className="Image-Container">
          <img src={ddd} alt="Ship" onClick={handleTwentytwo} />
          <ImageModal
            id="twentytwo"
            src={ddd}
            show={twentytwo}
            Close={handleNoTwentytwo}
          />
        </article>

        <article className="Image-Container">
          <img
            src={restaurant}
            alt="Restaurant in Zootophia"
            onClick={handleSixteen}
          />
          <ImageModal
            id="sixteen"
            src={restaurant}
            show={sixteen}
            Close={handleNoSixteen}
          />
        </article>

        <article className="Image-Container">
          <img src={girl1} alt="Girl" onClick={handleSeventeen} />
          <ImageModal
            id="seventeen"
            src={girl1}
            show={seventeen}
            Close={handleNoSeventeen}
          />
        </article>

        <article className="Image-Container">
          <img src={ship} alt="Ship" onClick={handleEighteen} />
          <ImageModal
            id="eighteen"
            src={ship}
            show={eighteen}
            Close={handleNoEighteen}
          />
        </article>

        <article className="Image-Container">
          <img src={aaa} alt="Ship" onClick={handleNineteen} />
          <ImageModal
            id="nineteen"
            src={aaa}
            show={nineteen}
            Close={handleNoNineteen}
          />
        </article>

        <article className="Image-Container">
          <img src={bbb} alt="Ship" onClick={handleTwenty} />
          <ImageModal
            id="twenty"
            src={bbb}
            show={twenty}
            Close={handleNoTwenty}
          />
        </article>

        {/* <article className="Image-Container">
					<img src={ccc} alt="Ship" onClick={handleTwentyone}/>
					<ImageModal id="twentyone" src={ccc} show={twentyone} Close={handleNoTwentyone}/>
				</article> */}

        

        <article className="Image-Container">
          <img src={eee} alt="Ship" onClick={handleTwentythree} />
          <ImageModal
            id="twentythree"
            src={eee}
            show={twentythree}
            Close={handleNoTwentythree}
          />
        </article>

        <article className="Image-Container">
          <img src={img26} alt="Ship" onClick={handleTwentysix} />
          <ImageModal
            id="twentysix"
            src={img26}
            show={twentysix}
            Close={handleNoTwentysix}
          />
        </article>

        <article className="Image-Container">
          <img src={img27} alt="Ship" onClick={handleTwentyseven} />
          <ImageModal
            id="twentyseven"
            src={img27}
            show={twentyseven}
            Close={handleNoTwentyseven}
          />
        </article>
      </Container>
      <HeartSpinner size={40} color="#FF0000" loading={true} />
    </center>
  );
};

export default Art;

import "../styles/SmarterNJHelps.css";
import bookAndMagGlass from "../assets/bookAndMag.png";
import lightBulb from "../assets/lightBulb.png";
import thumbsUp from "../assets/thumbsUp.png";

export function SmarterNJHelps() {
  return (
    <section className="greySection">
      <h1>How does SmarterNJ help?</h1>
      <div className="gridContainer">
        <div className="column">
          <h2 className="gridHeader">Problem Identification</h2>
          <img
            src={bookAndMagGlass}
            alt="Image Not Found"
            className="colGraphic"
          ></img>
          <p>
            We help partners <b>identify</b> key challenges by tapping the
            expertise and lived experiences of professionals and the public.
          </p>
        </div>
        <div className="column">
          <h2 className="gridHeader">Solution Identification</h2>
          <img
            src={lightBulb}
            alt="Image Not Found"
            className="colGraphic"
          ></img>
          <p>
            We collaborate with stakeholders to <b>empower</b> the public to
            source, develop, and iterate novel solutions that can solve key
            public problems.
          </p>
        </div>
        <div className="column">
          <h2 className="gridHeader">Assessment</h2>
          <img
            src={thumbsUp}
            alt="Image Not Found"
            className="colGraphic"
          ></img>
          <p>
            We work with government partners and the community to <b>measure</b>{" "}
            the effects and impacts of policies and services.
          </p>
        </div>
      </div>
    </section>
  );
}

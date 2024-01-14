import "../styles/GovernmentSection.css";
import GenericPeople from "../assets/GenericPeopleBlueBanner.svg";
import Directional from "../assets/Directional.png";

export function GovernmentSection() {
  return (
    <>
      <section className="blueBanner">
        <div className="rightContainer">
          <div className="heading">
            Government of the people, for the people, <b>with</b> the people.
          </div>
          <div className="subText">
            SmarterNJ works with government to tap New Jersey's most valuable
            resource: the intelligence, expertise, and know-how of its people.
          </div>
          <a
            href="mailto:team@innovation.nj.gov?subject=Innovating%20with%20SmarterNJ"
            target="_blank"
            className="getInTouchButton"
          >
            Get in touch
          </a>
        </div>
        <div className="imageCont">
          <img
            src={GenericPeople}
            className="genericPeople"
            alt="Image not found"
          />
        </div>
      </section>
      <section className="whiteBanner">
        <div className="midBanner">
          <img
            src={Directional}
            alt="Directional"
            className="directionalImage"
          />
          <div className="flexRight">
            <p className="boldPara">
              SmarterNJ helps government meaningfully engage with the public.
            </p>
            <p className="lowerPara">
              We harness the insights, perspective, and passion of the public to
              improve government programs, policies, and services.
            </p>
          </div>
        </div>
      </section>
      <section className="blueBanner Bottom">
        <p className="explainer">
          SmarterNJ is led by the <b>New Jersey State Office of Innovation</b>,
          which works with government, academic, non-profit, and private sector
          institutions to drive innovation in the Garden State.
        </p>
      </section>
    </>
  );
}

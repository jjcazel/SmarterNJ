import "../styles/Partners.css";
import NjDeptHealth from "../assets/NjDeptHealth.jpeg";
import DOL from "../assets/DOL.png";
import Environment from "../assets/Environment.png";
import RSA from "../assets/RSA.png";

export function Partners() {
  return (
    <section className="partnersSection">
      <h1>Partners</h1>
      <p className="quote">
        “We know how important elevating community voices is to advancing our
        public health goals and the Department of Health is always seeking
        innovative ways of engaging with the public to communicate critical
        information and keep each other safe. <br />
        <br />
        The Your Voice, Your Shot video contest collaboration with the Office of
        Innovation's SmarterNJ team was an incredible opportunity to empower our
        team to tap into the community's creativity and passion.”
      </p>
      <p className="quoter">
        — Judith Persichilli
        <br /> Commissioner, New Jersey Department of Health
      </p>
      <div className="partnerLogoSection">
        <img src={NjDeptHealth} alt="Image Not Found" className="partnerImg First" />
        <img src={Environment} alt="Image Not Found" className="partnerImg" />
        <img src={DOL} alt="Image Not Found" className="partnerImg" />
        <img src={RSA} alt="Image Not Found" className="partnerImg" />
      </div>
    </section>
  );
}

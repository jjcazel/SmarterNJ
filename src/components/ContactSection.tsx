import "../styles/ContactSection.css";
import GenericPeople from "../assets/GenericPeopleBlueBanner.svg";

export function ContactSection() {
  return (
    <section className="blueBanner">
      <div className="rightContainer">
        <div className="heading">
          Interested to learn how SmarterNJ can help your project? Let's chat.
        </div>
        <div className="subText">
          Share a little more about your project and email{" "}
          <a
            href="mailto:team@innovation.nj.gov?subject=Innovating%20with%20SmarterNJ"
            target="_blank"
            style={{ color: "white", fontWeight: "bold" }}
          >
            team@innovation.nj.gov
          </a>
        </div>
        <a
          href="mailto:team@innovation.nj.gov?subject=Innovating%20with%20SmarterNJ"
          target="_blank"
          className="getInTouchButton"
        >
          Get in touch
        </a>
      </div>
      <div>
        <img
          src={GenericPeople}
          className="genericPeople"
          alt="Image not found"
        />
      </div>
    </section>
  );
}

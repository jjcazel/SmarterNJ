import "../styles/GovernmentSection.css";

export function GovernmentSection() {
  return (
    <section>
      <div className="rightContainer">
        <div className="heading">
          Government of the people, for the people, with the people.
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
    </section>
  );
}

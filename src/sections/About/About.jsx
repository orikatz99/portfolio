import "./About.css";
import basketballImage from "../../assets/basketball.jpeg";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about__header">
        <h2 className="about__title">About</h2>
        <p className="about__subtitle">
          A little more about me — what I love doing, how I work, and where I aspire to go.
        </p>
      </div>

      <div className="about__grid">
        {/* Left: text */}
        <div className="about__card">
  <h3 className="about__cardTitle">Hi 💗</h3>

  <p className="about__text">
    I’m Ori Katz, a Junior Software Developer with a B.Sc in Computer Science.
    I was first introduced to the world of software development during high school,
    and from that moment on, I knew this is the field I wanted to grow in.
  </p>

  <p className="about__text">
    I’m highly motivated, curious, and quick to learn new technologies.
    I enjoy understanding how systems work behind the scenes and turning ideas into
    clean, reliable solutions.
  </p>

  <p className="about__text">
    My main focus is backend and full-stack development, with a strong interest in AI.
  </p>

  <ul className="about__bullets">
    <li>Strong self-learning skills and problem-solving mindset</li>
    <li>Hands-on experience in mobile, web, APIs, and AI agents</li>
    <li>Comfortable working in teams, under pressure, and with real-world constraints</li>
  </ul>
</div>


        {/* Right: basketball image (optional) */}
        <div className="about__card about__media">
          <div className="about__mediaTop">
            <h3 className="about__cardTitle">Off the keyboard 🏀</h3>
            <p className="about__text about__textStrong">
                Basketball is my “reset button”
            </p>
            <p className="about__text">
            I’ve been playing basketball since the age of 8 and currently serve as my team’s captain.
            This has shaped my work approach, emphasizing teamwork, leadership, accountability,
            and long-term commitment to shared goals.
            </p>
          </div>

          <div className="about__imagePlaceholder">
            <img
                className="about__image"
                src={basketballImage}
                alt="Ori playing basketball"
            />
        </div>
        </div>
      </div>
    </section>
  );
}

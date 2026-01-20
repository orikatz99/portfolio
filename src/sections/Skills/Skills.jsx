// Skills.jsx
import "./Skills.css";

const skillGroups = [
  {
    title: "Programming Languages",
    icon: "💻",
    items: ["Java", "JavaScript", "C", "C++", "Python", "SQL"],
  },
  {
    title: "Frontend",
    icon: "🎨",
    items: ["React", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    title: "Backend & APIs",
    icon: "🛠️",
    items: ["Node.js", "Express", "REST APIs", "MongoDB", "PostgreSQL"],
  },
  {
    title: "AI",
    icon: "🤖",
    items: ["OpenAI API", "AI Agent Development", "Prompt Design", "Machine Learning"],
  },
  {
    title: "Tools & Platforms",
    icon: "🧰",
    items: ["Git", "GitHub", "Google Cloud", "Cloudinary", "Linux"],
  },
  {
    title: "Methodologies",
    icon: "🚀",
    items: ["Agile", "Team Collaboration"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills__header">
        <h2 className="skills__title">Technical Skills</h2>
        <p className="skills__subtitle">
          The tools and technologies I use to build products end-to-end.
        </p>
      </div>

      <div className="skills__grid">
        {skillGroups.map((group) => (
          <article key={group.title} className="skills__card">
            <div className="skills__cardTop">
              <span className="skills__icon" aria-hidden="true">
                {group.icon}
              </span>
              <h3 className="skills__cardTitle">{group.title}</h3>
            </div>

            <div className="skills__chips">
              {group.items.map((item) => (
                <span key={item} className="skills__chip">
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

import "./Projects.css";

import tourtrackLogo from "../../assets/tourtrack-logo.png";
import tourtrackShot1 from "../../assets/tourtrack-1.jpeg";
import tourtrackShot2 from "../../assets/tourtrack-2.jpeg";
import trustmeShot from "../../assets/trustme.png";
import melomatchLogo from "../../assets/melomatch-logo.png";
import timeReportingShot from "../../assets/TimeReport.png";

const projects = [
  {
    title: "Time Reporting System",
    subtitle: "Abra • AI-First Development Bootcamp",
    badge: "Featured",
    description:
      "Full-stack employee management and time reporting platform developed during Abra's AI-First Development Bootcamp. Working in an agile team environment, we received a real-world PRD, participated in daily standups, and built a production-style application featuring employee and task management, time reporting, role-based permissions, and secure authentication. The project leveraged modern AI-first development practices including MCP architecture, subagents, reusable skills, custom commands, Cloud Code, and Codex to accelerate development and collaboration.",
    tech: ["React", "TypeScript", "Node.js", "PostgreSQL", "JWT Auth", "Docker", "CI/CD", "MCP", "AI Development Agents"],
    links: [
      { label: "GitHub", href: "https://github.com/AI-development-bootcamp-2/team-rocket/blob/main/README.md" },
      { label: "Demo", href: "https://time-reporting-flame.vercel.app/login" },
    ],
    highlight: true,
    media: { shot: timeReportingShot },
  },
  {
    title: "TourTrack",
    subtitle: "Final Project • Android + Backend",
    description:
      "Tourism social network app built for the Lower Galilee Regional Council. Features personalized route recommendations, nearby user discovery and chat, and a scalable backend with REST APIs. The app is currently under the client’s budget review for continued development — feel free to explore the code on GitHub or watch the demo video.",
    tech: ["Android (Java)", "Node.js", "MongoDB", "Firebase Storage", "REST APIs"],
    links: [
      { label: "GitHub", href: "https://github.com/ShaniHalali/Final-Project-TourTrack-app/blob/main/README.md" },
      { label: "Demo", href: "https://www.youtube.com/watch?v=oH4EgSAv1es" },
    ],
    highlight: true,
    media: {
      logo: tourtrackLogo,
      shots: [tourtrackShot1, tourtrackShot2],
    },
  },
  {
    title: "Trust Me",
    subtitle: "Hackathon • AI Safety Web Platform",
    description:
      "Web-based platform developed during the AppsFlyer × QueenB hackathon, aimed at combating online bullying among teens. The project was built over a month by a team of developers, with guidance from an industry mentor, and focuses on an AI-powered support agent designed to provide guidance in difficult situations while maintaining clear safety boundaries and responsible interaction.",
    tech: ["React", "Node.js", "OpenAI API", "Google Auth", "Cloudinary", "Youtube API"],
    links: [
      { label: "GitHub", href: "https://github.com/miryamMazor/Hackathon_2025_Maya_team" },
      { label: "Demo", href: "https://www.youtube.com/watch?v=7-ARs6UO6Vg" },
    ],
    media: { shot: trustmeShot },
  },
  {
    title: "MeloMatch",
    subtitle: "24h Hackathon • 2nd Place",
    description:
      "MeloMatch allows singers to simply start singing — the app detects the song in real time and plays the matching karaoke accompaniment in the correct key for the singer. Built during a 24-hour hackathon in collaboration with Afeka College and Rimon School of Music, where the project won 2nd place.",
    tech: ["Android (Java)", "MediaPlayer API"],
    links: [
      { label: "GitHub", href: "https://github.com/orikatz99/MeloMatch" },
      { label: "Demo", href: "https://www.youtube.com/shorts/pj65kfB61Ik" },
    ],
    media: { logo: melomatchLogo },
  },
];

function ProjectLinks({ links }) {
  return (
    <div className="projects__links">
      {links.map((l) => (
        <a
          key={l.label}
          className={`projects__link ${l.disabled ? "projects__link--disabled" : ""}`}
          href={l.disabled ? undefined : l.href}
          target={l.disabled ? undefined : "_blank"}
          rel={l.disabled ? undefined : "noreferrer"}
          aria-disabled={l.disabled ? "true" : "false"}
          tabIndex={l.disabled ? -1 : 0}
          onClick={(e) => {
            if (l.disabled) e.preventDefault();
          }}
        >
          {l.label} →
        </a>
      ))}
    </div>
  );
}

function ProjectMedia({ project }) {
  if (project.media?.shots) {
    return (
      <div className="projects__shots">
        {project.media.shots.map((src, idx) => (
          <div key={idx} className="projects__shotWrap">
            <img
              className="projects__shot"
              src={src}
              alt={`${project.title} screenshot ${idx + 1}`}
            />
          </div>
        ))}
      </div>
    );
  }

  if (project.media?.shot) {
    return (
      <div className="projects__wideMedia">
        <img
          className="projects__wideShot"
          src={project.media.shot}
          alt={`${project.title} screenshot`}
        />
      </div>
    );
  }

  return null;
}

function FeaturedProject({ project }) {
  return (
    <article className="projects__featured">
      <div className="projects__featuredTop">
        <div className="projects__brand">
          {project.media?.logo && (
            <img
              className="projects__logo"
              src={project.media.logo}
              alt={`${project.title} logo`}
            />
          )}

          <div className="projects__brandText">
            <div className="projects__nameRow">
              <h3 className="projects__cardTitle">{project.title}</h3>
              {project.badge && <span className="projects__badge">{project.badge}</span>}
            </div>
            <div className="projects__cardSubtitle">{project.subtitle}</div>
          </div>
        </div>
      </div>

      <div className="projects__featuredBody">
        <div className="projects__featuredLeft">
          <p className="projects__desc">{project.description}</p>

          <div className="projects__tech">
            {project.tech.map((t) => (
              <span key={t} className="projects__chip">
                {t}
              </span>
            ))}
          </div>

          <ProjectLinks links={project.links} />
        </div>

        <div className="projects__featuredRight">
          <ProjectMedia project={project} />
        </div>
      </div>
    </article>
  );
}

function RegularProject({ project }) {
  const isWideProject = project.title === "Trust Me";

  return (
    <article className={`projects__card ${isWideProject ? "projects__card--wide" : ""}`}>
      {isWideProject ? (
        <>
          <div className="projects__wideLeft">
            <h3 className="projects__cardTitle">{project.title}</h3>
            <div className="projects__cardSubtitle">{project.subtitle}</div>

            <p className="projects__desc">{project.description}</p>

            <div className="projects__tech">
              {project.tech.map((t) => (
                <span key={t} className="projects__chip">
                  {t}
                </span>
              ))}
            </div>

            <ProjectLinks links={project.links} />
          </div>

          <div className="projects__wideRight">
            <ProjectMedia project={project} />
          </div>
        </>
      ) : (
        <>
          <div className="projects__top">
            <div className="projects__brand">
              {project.media?.logo && (
                <img
                  className="projects__logo"
                  src={project.media.logo}
                  alt={`${project.title} logo`}
                />
              )}

              <div className="projects__brandText">
                <h3 className="projects__cardTitle">{project.title}</h3>
                <div className="projects__cardSubtitle">{project.subtitle}</div>
              </div>
            </div>
          </div>

          <p className="projects__desc">{project.description}</p>

          <div className="projects__tech">
            {project.tech.map((t) => (
              <span key={t} className="projects__chip">
                {t}
              </span>
            ))}
          </div>

          <ProjectLinks links={project.links} />
        </>
      )}
    </article>
  );
}

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.highlight);
  const rest = projects.filter((p) => !p.highlight);

  return (
    <section id="projects" className="projects">
      <div className="projects__header">
        <h2 className="projects__title">Projects</h2>
        <p className="projects__subtitle">
          A selection of projects I’ve built — focused on real-world apps, clean architecture, and
          user experience.
        </p>
      </div>

      {featuredProjects.map((project) => (
        <FeaturedProject key={project.title} project={project} />
      ))}

      <div className="projects__grid">
        {rest.map((project) => (
          <RegularProject key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
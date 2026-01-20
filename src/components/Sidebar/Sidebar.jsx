import "./Sidebar.css";
import profileImage from "../../assets/profile.jpeg";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__profile">
        <img className="sidebar__avatar" src={profileImage} alt="Ori Katz" />
        <div className="sidebar__name">Ori Katz</div>
        <div className="sidebar__role">Junior Software Developer</div>

        <div className="sidebar__socials">
          <a
            className="sidebar__socialIcon"
            href="https://github.com/orikatz99"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                fill="currentColor"
                d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.8-.25.8-.56v-2c-3.25.71-3.94-1.57-3.94-1.57-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.1-.75.4-1.26.73-1.55-2.6-.3-5.33-1.3-5.33-5.8 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.5.12-3.12 0 0 .99-.32 3.24 1.2a11.2 11.2 0 0 1 5.9 0c2.25-1.52 3.24-1.2 3.24-1.2.64 1.62.24 2.82.12 3.12.75.82 1.2 1.87 1.2 3.15 0 4.51-2.74 5.5-5.35 5.79.41.35.78 1.05.78 2.12v3.15c0 .31.21.66.8.56A11.5 11.5 0 0 0 12 .5Z"
              />
            </svg>
          </a>

          <a
            className="sidebar__socialIcon"
            href="https://www.linkedin.com/in/orikatz99"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path
                fill="currentColor"
                d="M20.45 20.45h-3.55v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85v5.5H9.47V9h3.4v1.56h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.41v6.33ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM3.56 20.45h3.56V9H3.56v11.45Z"
              />
            </svg>
          </a>
        </div>
      </div>

      <nav className="sidebar__nav" aria-label="Section navigation">
        <a className="sidebar__navLink" href="#home">Home</a>
        <a className="sidebar__navLink" href="#about">About</a>
        <a className="sidebar__navLink" href="#projects">Projects</a>
        <a className="sidebar__navLink" href="#skills">Technical Skills</a>
      </nav>

      <a className="sidebar__cv" href="/CV_Ori_Katz.pdf" download>
        Download CV
      </a>
    </aside>
  );
}

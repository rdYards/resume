import { useLocation } from "preact-iso";

import githubLogo from "../assets/github-logo.svg";
import mailSendLine from "../assets/mail-send-line.svg";
import inIcon from "../assets/in_icon.svg";

import "./components.css";

export function Footer() {
  const { url } = useLocation();

  return (
    <footer>
      <p>© 2026 Alexander Eastman</p>
      <div class="icon_nav">
        <a
          href="https://github.com/rdYards"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="icon" src={githubLogo} />
        </a>
        <a
          href="https://www.linkedin.com/in/rdyards/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="icon" src={inIcon} />
        </a>
        <a
          href="mailto:rdyards@protonmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class="icon" src={mailSendLine} />
        </a>
      </div>
    </footer>
  );
}

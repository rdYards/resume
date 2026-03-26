import { useLocation } from "preact-iso";
import "./components.css";

export function Header() {
  const { url } = useLocation();

  return (
    <header>
      <nav>
        <a href="/resume/" class={url == "/" && "active"}>
          Home
        </a>
        <a href="/resume/project" class={url == "/project" && "active"}>
          Project
        </a>
        <a href="/resume/credentials" class={url == "/credentials" && "active"}>
          Credentials
        </a>
        <a
          href="/resume/aeastman_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </nav>
    </header>
  );
}

import styles from "./Contacts.module.css";

import githubLogo from "../../assets/github-logo.svg";
import mailSendLine from "../../assets/mail-send-line.svg";
import inIcon from "../../assets/in_icon.svg";

export function Contacts() {
  return (
    <div class={styles.contacts}>
      <div>Contacts</div>
      <nav>
        <a
          href="https://github.com/rdYards"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class={styles.icon} src={githubLogo} />
        </a>
        <a
          href="https://www.linkedin.com/in/rdyards/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class={styles.icon} src={inIcon} />
        </a>
        <a
          href="mailto:rdyards@protonmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img class={styles.icon} src={mailSendLine} />
        </a>
      </nav>
    </div>
  );
}

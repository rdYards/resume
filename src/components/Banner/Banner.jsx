import styles from "./Banner.module.css";

export function Banner(props) {
  let prog_banner;
  if (props.prog === "in-progress") {
    prog_banner = (
      <div class={`${styles.prog_banner} ${styles.inprogress}`}>
        In Progress
      </div>
    );
  } else if (props.prog === "paused") {
    prog_banner = (
      <div class={`${styles.prog_banner} ${styles.paused}`}>Paused</div>
    );
  } else if (props.prog === "cancelled") {
    prog_banner = (
      <div class={`${styles.prog_banner} ${styles.canceled}`}>Cancelled</div>
    );
  } else if (props.prog === "complete") {
    prog_banner = (
      <div class={`${styles.prog_banner} ${styles.complete}`}>Complete</div>
    );
  } else if (props.prog === "updated") {
    prog_banner = (
      <div class={`${styles.prog_banner} ${styles.updated}`}>Recently Updated</div>
    );
  } else if (props.prog === "tbd") {
    prog_banner = (
      <div class={`${styles.prog_banner} ${styles.tbd}`}>To Be Determined</div>
    );
  } else {
    // Default case
    prog_banner = null;
  }

  return (
    <div class={styles.banner_wrapper}>
      {prog_banner}
      <a
        href={props.href}
        class={`${styles.resource} ${styles[`${props.mode}-mode`]}`}
      >
        <div class={styles.content}>
          <h2>{props.title}</h2>
          <p>{props.description}</p>
        </div>
        <div class="skills-banner">
          {props.skills && props.skills.map((skill, index) => (
            <span key={index} class="banner-skills">{skill}</span>
          ))}
        </div><br />
      </a>
    </div>
  );
}

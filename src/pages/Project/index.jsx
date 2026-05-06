import "./style.css";
import { Banner } from "../../components/Banner/Banner";

export function Project() {
  return (
    <section>
      <div class="project_grid">
        <Banner
          prog="in-progress"
          mode="light"
          title="CheckIT"
          description="Native ADW/GTK4 app for recording risk/inventory/object managment in a ledger"
          href="https://github.com/rdYards/checkIT"
          skills={["Rust", "GTK (gtk-rs)", "ADW", "sl"]}
        />
        <Banner
          prog="in-progress"
          mode="light"
          title="Sl, Secure Ledger File Format"
          description="Custom File Format based on Ledgers"
          href="https://github.com/rdYards/sl"
          skills={["Rust", "Data Storage", "sl", "zip"]}
        />
        <Banner
          prog="complete"
          mode="light"
          title="Bluetooth 6.17"
          description="Bluetooth Patch for Linux Kernel 6.17"
          href="https://github.com/rdYards/bluetooth-6.17"
          skills={["Linux", "Bluetooth"]}
        />
        <Banner
          prog="in-progress"
          mode="light"
          title="Homelab"
          description="Modern homelab to learn enterprise focused enviroments."
          href=""
          skills={[
            "Kubernetes",
            "RKE2/RKEGOV",
            "Cilium",
            "Flux",
            "Rook/Ceph",
            "HAProxy",
            "Keepalive",
            "Fedora Server",
          ]}
        />
        <Banner
          prog="in-progress"
          mode="light"
          title="Resume Website"
          description="Website to host further details featured on my resume, and an opportunity to highlight projects previously done or actively done."
          href="https://github.com/rdYards/resume"
          skills={[
            "Preact JS",
            "Github Actions",
            "Github Pages",
            "Vite",
            "bun",
            "CSS",
            "JSX",
          ]}
        />
        <Banner
          prog="complete"
          mode="light"
          title="Grasshopper"
          description="Grasshopper is a voice-activated assistant application built to be an assistant in personal Lancer campaigns."
          href="https://github.com/rdYards/grasshopper"
          skills={[
            "Ollama Python SDK",
            "RealtimeSTT",
            "Kokoro-ONNX/TTS",
            "Git",
            "Speech to Text",
            "Text to Speech",
            "Faster Whisper",
            "JACK",
          ]}
        />
        <Banner
          prog="complete"
          mode="light"
          title="Homelab Archive"
          description="Personal lab to learn networking. The first attempt to built my own homelab."
          href=""
          skills={[
            "Proxmox",
            "Docker",
            "Linux",
            "Bash",
            "Networking",
            "Ollama",
            "Debian",
            "CI-CD",
            "Cisco",
            "Netgear",
            "NAS (samba)",
          ]}
        />
        <Banner
          prog="paused"
          mode="light"
          title="Eldritch Trains"
          description="Eldritch Trains is a 2D top-down game built using Rust and the Macroquad framework."
          href="https://github.com/rdYards/eldritch_trains"
          skills={["Rust", "Macroquad", "Parry2D", "git"]}
        />
      </div>
    </section>
  );
}

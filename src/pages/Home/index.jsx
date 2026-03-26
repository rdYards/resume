import "./style.css";
import { Banner } from "../../components/Banner/Banner";
import { CredBanner } from "../../components/CredBanner/CredBanner";
import { Timeline } from "../../components/Timeline/Timeline";

// Import image assets
import codeImg from "../../assets/code.png";
import cofoLogo from "../../assets/cofo_logo.png";
import networkPlusIcon from "../../assets/Network+-svg.svg";
import securityPlusIcon from "../../assets/Security+-svg.svg";
import walmartIcon from "../../assets/walmart_icon.svg";

import { useState } from "preact/hooks";

export function Home() {
  const [activeTab, setActiveTab] = useState("work");
  return (
    <>
      {/* Welcome */}
      <section class="section_row">
        <div class="welcome_content">
          <h1>Alexander Eastman</h1>
          <h3>Software Engineering, DevOps</h3>
        </div>
        <img src={codeImg} alt="Professionally done code" />
      </section>

      {/* Work and EDU */}
      <section>
        <div class="ted_contianer">
          <div class="button_header">
            <button
              id={activeTab === "work" ? "active" : ""}
              onClick={() => setActiveTab("work")}
            >
              Work
            </button>
            <button
              id={activeTab === "education" ? "active" : ""}
              onClick={() => setActiveTab("education")}
            >
              Education
            </button>
          </div>
          <div
            class="ted_content"
            id="work"
            style={{ display: activeTab === "work" ? "block" : "none" }}
          >
            {/* Work */}
            <Timeline
              data={[
                {
                  icon: cofoLogo,
                  title: "IT Student Leader",
                  timeline: "May 2025 - Present",
                  location:
                    "College of the Ozarks, Information Technology Deparqtment; Point Lookout, MS - (On Site)",
                  summary:
                    "Leading a dynamic team while instructing and training follow coworkers. While developing and implementing improvements to increase company performance and reduce costs.",
                  skills: [
                    "Human Management",
                    "Scheduling",
                    "Team Communication",
                    "Microsoft Teams",
                  ],
                  href: "https://www.cofo.edu/Workstation#InformationTechnology-Helpdesk",
                },
                {
                  icon: cofoLogo,
                  title: "IT Technician",
                  timeline: "August 2023 - May 2025",
                  location:
                    "College of the Ozarks, Information Technology Deparqtment; Point Lookout, MS - (On Site)",
                  summary:
                    "Working with a dynamic team in an active environment, correcting system faults to maintain uptime of the school's network infrastructure. At the same time, producing and deployments improvements to increase company performance and reduce costs.",
                  skills: [
                    "Windows 11",
                    "MacOS 10.14+",
                    "Microsoft Configuration Manager (MCM)",
                    "PDQ",
                    "Hyper-V",
                    "LogMeIn Suite",
                  ],
                  href: "https://www.cofo.edu/Workstation#InformationTechnology-Helpdesk",
                },
                {
                  icon: cofoLogo,
                  title: "Cook Assistant and Associate,",
                  timeline: "August 2022 - July 2023",
                  location:
                    "College of the Ozarks, Pearl Rogers Dining Center; Point Lookout, MS - (On Site)",
                  summary:
                    "Worked a multipurpose role on a dynamic schedule to assist with various needs, including cook assistant and dishwasher duties. While, creating a favorable environment for customers.",
                  skills: [
                    "Teamwork",
                    "Communication",
                    "Customer Service",
                    "Time Management",
                  ],
                  href: "https://www.cofo.edu/Workstation#PearlRogers(Cafeteria)",
                },
                {
                  icon: walmartIcon,
                  title: "CAP2 Stocking Associate,",
                  timeline: "September 2020 - December 2023",
                  location: "Walmart Inc; Paola, KS - (On Site)",
                  summary:
                    "Worked with a team to manage inventory in a time-sensitive environment. Managing inventory to ensure product availability to customers.",
                  skills: [
                    "Time Managment",
                    "Inventory Management",
                    "Customer Service",
                    "Manual Labor",
                  ],
                  href: "https://careers.walmart.com/",
                },
              ]}
            />
          </div>
          <div
            class="ted_content"
            id="education"
            style={{ display: activeTab === "education" ? "block" : "none" }}
          >
            {/* Education */}
            <CredBanner
              mode="light"
              title="Bachelor of Science in Computer Science"
              active_date="May 2026"
              image={cofoLogo}
            />
            <CredBanner
              mode="light"
              title="Minor in Cybersecurity"
              active_date="May 2026"
              image={cofoLogo}
            />
            <CredBanner
              mode="light"
              title="CompTIA Network+"
              verify_code="V67GDSW581EEK6S2"
              active_date="June 2025"
              image={networkPlusIcon}
            />
            <CredBanner
              mode="light"
              title="CompTIA Security+"
              verify_code="B5TR4RNY724ES5M2"
              active_date="August 2025"
              image={securityPlusIcon}
            />
            <a href="/resume/credentials" class="button">
              See More
            </a>
          </div>
        </div>
      </section>
      {/* Projects */}
      <section>
        <h4>Featured Projects</h4>
        <div class="project_grid">
          <Banner
            prog="in-progress"
            mode="light"
            title="Homelab Modern"
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
        </div>
        <a href="/resume/project" class="button">
          See More
        </a>
      </section>
    </>
  );
}

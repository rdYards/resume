import { render } from "preact";
import { LocationProvider, Router, Route } from "preact-iso";

import { Header } from "./components/Header.jsx";
import { Home } from "./pages/Home/index.jsx";
import { Credentials } from "./pages/Credentials/index.jsx";
import { Project } from "./pages/Project/index.jsx";
import { NotFound } from "./pages/_404.jsx";
import { Contacts } from "./components/Contacts/Contacts";
import "./style.css";

export function App() {
  return (
    <LocationProvider>
      <div class="sidebar">
        <img
          src="/resume/spaceshuttle_rocket_spaceship_icon.svg"
          alt="Rocket Icon"
        />
        <Header />
        <Contacts />
      </div>
      <main>
        <Router>
          <Route path="/resume/" component={Home} />
          <Route path="/resume/credentials" component={Credentials} />
          <Route path="/resume/project" component={Project} />
          <Route default component={NotFound} />
        </Router>
      </main>
    </LocationProvider>
  );
}

render(<App />, document.getElementById("app"));

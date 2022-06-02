import { Component } from "solid-js";
import "./App.css";
import Main from "./components/Main";
import Projects from "./components/Projects";
import WhoIS from "./components/WhoIS";

const App: Component = () => {
  return (
    <main>
      <div class="page">
        <Main />
      </div>
      <div class="page">
        <Projects />
      </div>
      <div class="page">
        <WhoIS />
      </div>
    </main>
  );
};

export default App;

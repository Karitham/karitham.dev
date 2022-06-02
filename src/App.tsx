import { Component, For } from "solid-js";
import "./App.css";
import Main from "./components/Main";
import Projects from "./components/Projects";
import WhoIS from "./components/WhoIS";

const components = [Main, Projects, WhoIS];

const App: Component = () => {
  return (
    <For each={components}>
      {(Component) => (
        <div class="page">
          <Component />
        </div>
      )}
    </For>
  );
};

export default App;

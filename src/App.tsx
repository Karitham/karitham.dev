import { Component, For } from "solid-js";
import Main from "./components/Main";
import Projects from "./components/Projects";
import WhoIS from "./components/WhoIS";
import Me from "./components/Me";

const components = [Main, Me, Projects, WhoIS];

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

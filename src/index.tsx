/* @refresh reload */
import { render } from "solid-js/web";
import "./normalize.css";
// so normalize.css is loaded before everything else
import App from "./App";
import "./index.css";

render(() => <App />, document.getElementById("root") as HTMLElement);

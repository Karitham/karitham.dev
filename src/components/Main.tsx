import { For } from "solid-js";
import "./Main.css";

let doc = {
  PageTitle: "Kar's HQ.",
  HomeMessage: "This is Karitham.",
  HomeSub: "Welcome to my HQ.",
  HomeDesc: [
    () => "Computer engineering student.",
    () => "Open Source Enthusiast.",
    () => "Gamer.",
    () => "Nerd.",
    () => (
      <a href="./resume.pdf" class="text-main">
        View my Resume.
      </a>
    ),
  ],
  HomeImage: "https://avatars.githubusercontent.com/u/57440386",
};
export default () => {
  return (
    <div class="main">
      <h3 class="page-title">
        <a href="/">{doc.PageTitle}</a>
      </h3>
      <div class="body">
        <div class="left">
          <h1 class="home-message">{doc.HomeMessage}</h1>
          <h2 class="home-sub text-main">{doc.HomeSub}</h2>
          <For each={doc.HomeDesc} fallback={<div>No items</div>}>
            {(D) => <p class="home-desc">{<D />}</p>}
          </For>
        </div>
        <div class="right">
          <img class="pfp" src={doc.HomeImage} alt="Karitham profile" />
        </div>
      </div>
    </div>
  );
};

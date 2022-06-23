import { For, Show } from "solid-js";
import "./Projects.css";

const doc = {
  Title: "Projects.",
  Desc: "Open source projects, made with love.",
  Cards: [
    {
      Name: "Goapi-gen",
      Desc: "Utilities for generating Go boilerplate code for services based on OpenAPI 3.0 API definitions.",
      Link: "https://github.com/Karitham/handlergen",
    },
    {
      Name: "WaifuBot",
      Desc: "Complete gacha game to collect and trade manga characters. Front-End and API available for advanced use, to promote trades between players. Available on over 300 discord guilds, with thousands of players.",
      Link: "https://github.com/Karitham/WaifuBot",
      Image:
        "https://raw.githubusercontent.com/go-waifubot/WaifuGUI/solidjs/src/assets/YMD.png",
    },
    {
      Name: "zp",
      Desc: "A blazing fast shell prompt cross compatible written in pure zig.",
      Link: "https://github.com/Karitham/zp",
      Image:
        "https://github.com/Karitham/zp/blob/master/.github/assets/zp-logo.png?raw=true",
    },
    {
      Name: "Genial",
      Desc: "A code-generation helper for golang. Build an AST, genial writes the code.",
      Link: "https://github.com/Karitham/go-genial",
    },
    {
      Name: "Corde",
      Desc: "A high level discord reverse-webhook wrapper, to enable fast micro-service oriented developments of discord bots.",
      Link: "https://github.com/Karitham/corde",
    },
    {
      Name: "WaifuGUI",
      Desc: "A web based GUI for the waifu bot. Features a simple yet extensible interface to sort, search and compare user lists.",
      Link: "https://github.com/go-waifubot/WaifuGUI",
      Image:
        "https://raw.githubusercontent.com/go-waifubot/WaifuGUI/solidjs/src/assets/YMD.png",
    },
  ],
};

export default () => {
  return (
    <div class="projects">
      <div class="body">
        <h1 class="title">{doc.Title}</h1>
        <h2 class="sub text-main">{doc.Desc}</h2>
        <div class="cards">
          <For each={doc.Cards} fallback={<div>No items</div>}>
            {(c) => (
              <div class="project">
                <h3 class="name">
                  <a href={c.Link} target="_blank">
                    {c.Name}
                  </a>
                </h3>
                <Show
                  when={c.Image}
                  fallback={
                    <a href={c.Link} target="_blank">
                      <img
                        src={"https://avatars.githubusercontent.com/u/57440386"}
                        alt={c.Name}
                      />
                    </a>
                  }
                >
                  <a href={c.Link} target="_blank">
                    <img src={c.Image} alt={c.Name} />
                  </a>
                </Show>
                <p class="desc">{c.Desc}</p>
              </div>
            )}
          </For>
        </div>
      </div>
    </div>
  );
};

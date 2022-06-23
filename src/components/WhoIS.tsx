import { For } from "solid-js";
import discord from "../assets/discord.svg";
import github from "../assets/gh.svg";
import linkedin from "../assets/linkedin.svg";
import mail from "../assets/mail.svg";
import twitter from "../assets/twitter.svg";

import "./WhoIS.css";

const doc = {
  Title: "WhoIS",
  Desc: "",
  Where: {
    Title: "Where?",
    Desc: "Lille. France.",
  },
  Who: {
    Title: "Who?",
    Desc: "Pery Pierre-Louis.",
  },
  Contact: {
    Title: "Contact",
    Links: [
      {
        Title: "Email",
        Link: "mailto://kar@karitham.dev",
        Icon: mail,
      },
      {
        Title: "GitHub",
        Link: "https://github.com/Karitham",
        Icon: github,
      },
      {
        Title: "Linkedin",
        Link: "https://www.linkedin.com/in/pl-pery",
        Icon: linkedin,
      },
      {
        Title: "Twitter",
        Link: "https://twitter.com/KarithamIRL",
        Icon: twitter,
      },
      {
        Title: "Discord",
        Icon: discord,
        Link: "https://discord.com/users/206794847581896705",
        Desc: "Karitham#0577",
      },
    ],
  },
};

export default () => {
  return (
    <div class="whois">
      <h1 class="title">{doc.Title}</h1>
      <p class="desc">{doc.Desc}</p>
      <div class="cards">
        <div class="sub">
          <h3 class="name text-main">{doc.Where.Title}</h3>
          <p class="desc">{doc.Where.Desc}</p>
        </div>
        <div class="sub">
          <h3 class="name text-main">{doc.Who.Title}</h3>
          <p class="desc">{doc.Who.Desc}</p>
        </div>
        <div class="sub">
          <h3 class="name text-main">{doc.Contact.Title}</h3>
          <div class="desc cards">
            <For each={doc.Contact.Links} fallback={<div>No items</div>}>
              {(l) => (
                <div class="contact-card">
                  <a href={l.Link} target="_blank">
                    <img
                      src={l.Icon}
                      alt={l.Title}
                      class="logo"
                      title={l.Desc}
                    />
                  </a>
                </div>
              )}
            </For>
          </div>
        </div>
      </div>
    </div>
  );
};

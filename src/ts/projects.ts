import { repos } from "./services/reposTest";

export const createHtmlForRepos = () => {
  const content = document.getElementById("content") as HTMLDivElement;
  for (let i = 0; i < repos.length; i++) {
    const card = document.createElement("article") as HTMLDivElement;
    const cardTitle = document.createElement("h3") as HTMLHeadingElement;
    const cardContent = document.createElement("img") as HTMLImageElement;

    card.classList.add("card");
    cardTitle.classList.add("card__title");
    cardContent.classList.add("card__content");

    cardTitle.innerHTML = repos[i].nameTest;
    cardContent.src = repos[i].imgTest;

    card.appendChild(cardTitle);
    card.appendChild(cardContent);

    content.appendChild(card);
  }
};

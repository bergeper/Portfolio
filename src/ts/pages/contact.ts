import { titleContent } from "../services/titles";

export const createHtmlForContact = () => {
  const content = document.getElementById("contact") as HTMLDivElement;
  content.innerHTML = "";

  // left container
  const contentLeft = document.createElement("div") as HTMLDivElement;
  contentLeft.classList.add("content--left");

  const cardInfo = document.createElement("div") as HTMLDivElement;
  const cardInfoTitle = document.createElement("h3") as HTMLHeadingElement;
  const cardInfoContent = document.createElement("p") as HTMLParagraphElement;
  const arrow: HTMLDivElement = document.createElement("div");

  cardInfo.classList.add("card--info", "reveal--left");
  cardInfoTitle.classList.add("card--info__title");
  cardInfoContent.classList.add("card--info__content");
  arrow.classList.add("card--info__pointer");

  cardInfoTitle.innerHTML = titleContent[2].title;
  cardInfoContent.innerHTML = titleContent[2].text;
  arrow.innerHTML = `<i class="fa-solid fa-arrow-down-long"></i>`;

  cardInfo.appendChild(cardInfoTitle);
  cardInfo.appendChild(cardInfoContent);
  cardInfo.appendChild(arrow);

  contentLeft.appendChild(cardInfo);

  // right container
  const contentRight = document.createElement("div") as HTMLDivElement;
  contentRight.classList.add("content--right");

  const card = document.createElement("div") as HTMLDivElement;
  const cardTitle = document.createElement("h3") as HTMLHeadingElement;
  const cardContent = document.createElement("p") as HTMLParagraphElement;
  const cardLinkedin = document.createElement("a") as HTMLAnchorElement;
  const cardEmail = document.createElement("p") as HTMLParagraphElement;

  card.classList.add("card", "reveal--right");
  cardTitle.classList.add("card__title");
  cardEmail.classList.add("card__email");
  cardLinkedin.classList.add("linkSM--contact");

  cardTitle.innerHTML = "Contact Info";

  cardLinkedin.href = "https://www.linkedin.com/in/per-berge-5b0b36250/";
  cardLinkedin.innerHTML = `<i class="fa-brands fa-linkedin"></i>: Per Berge`;
  cardLinkedin.target = "_blank";

  cardEmail.innerHTML = `<i class="fa-solid fa-envelope"></i>: per.berge@medieinstitutet.se`;

  card.appendChild(cardTitle);
  cardContent.appendChild(cardEmail);
  cardContent.appendChild(cardLinkedin);
  card.appendChild(cardContent);

  contentRight.appendChild(card);

  content.appendChild(contentLeft);
  content.appendChild(contentRight);
};

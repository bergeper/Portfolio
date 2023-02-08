import { titleContent } from "./services/titles";

export const createHtmlForContact = () => {
  const content = document.getElementById("contact") as HTMLDivElement;
  content.innerHTML = "";

  // left container
  const contentLeft = document.createElement("div") as HTMLDivElement;
  contentLeft.classList.add("content--left");

  const cardInfo = document.createElement("div") as HTMLDivElement;
  const cardInfoTitle = document.createElement("h3") as HTMLHeadingElement;
  const cardInfoContent = document.createElement("p") as HTMLParagraphElement;

  cardInfo.classList.add("card--info", "reveal--left");
  cardInfoTitle.classList.add("card--info__title");
  cardInfoContent.classList.add("card--info__content");

  cardInfoTitle.innerHTML = titleContent[2].title;
  cardInfoContent.innerHTML = titleContent[2].text;

  cardInfo.appendChild(cardInfoTitle);
  cardInfo.appendChild(cardInfoContent);

  contentLeft.appendChild(cardInfo);

  // right container
  const contentRight = document.createElement("div") as HTMLDivElement;
  contentRight.classList.add("content--right");

  const card = document.createElement("div") as HTMLDivElement;
  const cardTitle = document.createElement("h3") as HTMLHeadingElement;
  const cardContent = document.createElement("p") as HTMLParagraphElement;

  card.classList.add("card", "reveal--right");
  cardTitle.classList.add("card__title");

  cardTitle.innerHTML = "tihihihi";
  cardContent.innerHTML = "Dumtext";

  card.appendChild(cardTitle);
  card.appendChild(cardContent);

  contentRight.appendChild(card);

  content.appendChild(contentLeft);
  content.appendChild(contentRight);
};

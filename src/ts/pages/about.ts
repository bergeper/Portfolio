import { titleContent } from "../services/titles";

export const createHtmlForAbout = () => {
  const content = document.getElementById("about") as HTMLDivElement;
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

  cardInfoTitle.innerHTML = titleContent[1].title;
  cardInfoContent.innerHTML = titleContent[1].text;

  cardInfo.appendChild(cardInfoTitle);
  cardInfo.appendChild(cardInfoContent);

  contentLeft.appendChild(cardInfo);

  // right container
  const contentRight: HTMLDivElement = document.createElement("div");
  contentRight.classList.add("content--right");

  const card: HTMLDivElement = document.createElement("div");
  const cardTitle: HTMLHeadingElement = document.createElement("h3");
  const cardImageContainer: HTMLDivElement = document.createElement("div");
  const cardImage: HTMLImageElement = document.createElement("img");
  const cardContent: HTMLParagraphElement = document.createElement("p");

  card.classList.add("card", "reveal--right");
  cardTitle.classList.add("card__title");
  cardContent.classList.add("card__content");
  cardImageContainer.classList.add("card__imageContainer");
  cardImage.classList.add("card__imageContainer--image");

  cardImage.src =
    "https://dl.dropboxusercontent.com/s/8uigscgtofmrjri/pbr.png.png?dl=0";
  cardImage.alt = "A picture of me";
  cardContent.innerHTML = `
  I am currently seeking an internship 
  opportunity to gain practical experience and enhance my skills in the field. 
  I am eager to learn from industry professionals and contribute to real-world projects. 
  Let's connect to discuss how I can add value to your team.
  <br>
  <br>
  Check out my contact information down below!
  `;

  card.appendChild(cardTitle);
  cardImageContainer.appendChild(cardImage);
  card.appendChild(cardImageContainer);
  card.appendChild(cardContent);

  contentRight.appendChild(card);

  content.appendChild(contentLeft);
  content.appendChild(contentRight);
};

export const heroSection = () => {
  const header = document.getElementById("header") as HTMLDivElement;

  const hero: HTMLDivElement = document.createElement("div");
  const heroSection: HTMLDivElement = document.createElement("div");
  const heroSectionLinkContainer: HTMLDivElement =
    document.createElement("div");
  const heroSectionHeadingTop: HTMLParagraphElement =
    document.createElement("p");
  const heroSectionHeadingMiddle: HTMLParagraphElement =
    document.createElement("p");
  const heroSectionHeadingBottom: HTMLParagraphElement =
    document.createElement("p");
  const heroSectionLinkOne: HTMLAnchorElement = document.createElement("a");
  const heroSectionLinkTwo: HTMLAnchorElement = document.createElement("a");

  heroSectionLinkOne.classList.add("linkSM");
  heroSectionLinkTwo.classList.add("linkSM");

  hero.classList.add("hero");
  hero.id = "hero";
  heroSection.classList.add("hero__section");
  heroSectionLinkContainer.classList.add("hero__section--link");
  heroSectionHeadingTop.classList.add("hero__section--heading");
  heroSectionHeadingMiddle.classList.add("hero__section--heading");
  heroSectionHeadingBottom.classList.add("hero__section--text");

  heroSectionHeadingTop.innerHTML = "Hi, I'm";
  heroSectionHeadingMiddle.innerHTML = "Per";
  heroSectionHeadingBottom.innerHTML = "Soon to be Front-end Developer";

  heroSectionLinkOne.href = "https://github.com/bergeper";
  heroSectionLinkOne.innerHTML = `<i class="fa-brands fa-github"></i>`;
  heroSectionLinkOne.target = "_blank";
  heroSectionLinkTwo.href = "https://www.linkedin.com/in/per-berge-5b0b36250/";
  heroSectionLinkTwo.innerHTML = `<i class="fa-brands fa-linkedin"></i>`;
  heroSectionLinkTwo.target = "_blank";

  heroSection.appendChild(heroSectionHeadingTop);
  heroSection.appendChild(heroSectionHeadingMiddle);
  heroSection.appendChild(heroSectionHeadingBottom);
  heroSectionLinkContainer.appendChild(heroSectionLinkOne);
  heroSectionLinkContainer.appendChild(heroSectionLinkTwo);
  heroSection.appendChild(heroSectionLinkContainer);
  hero.appendChild(heroSection);
  header.appendChild(hero);
};

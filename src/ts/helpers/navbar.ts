export const navbar = () => {
  const navContainer: HTMLDivElement = document.createElement(
    "div"
  ) as HTMLDivElement;

  navContainer.classList.add("navi");

  const navLogoContainer: HTMLDivElement = document.createElement("div");
  const navLogo: HTMLAnchorElement = document.createElement("a");
  navLogoContainer.classList.add("navi__logoContainer");
  navLogo.classList.add("navi__logoContainer--logo");

  navLogo.href = "#hero";
  navLogo.innerHTML = `<i class="fa-solid fa-mountain-sun"></i>`;

  const navLinkContainer: HTMLDivElement = document.createElement("div");
  const navLinkPortfolio: HTMLAnchorElement = document.createElement("a");
  const navLinkAbout: HTMLAnchorElement = document.createElement("a");
  const navLinkContact: HTMLAnchorElement = document.createElement("a");

  navLinkContainer.classList.add("navi__linkContainer");
  navLinkPortfolio.classList.add("navi__linkContainer--link");
  navLinkAbout.classList.add("navi__linkContainer--link");
  navLinkContact.classList.add("navi__linkContainer--link");

  navLinkPortfolio.href = "#portfolio";
  navLinkPortfolio.innerHTML = "#myWork";
  navLinkAbout.href = "#about";
  navLinkAbout.innerHTML = "#aboutMe";
  navLinkContact.href = "#contact";
  navLinkContact.innerHTML = "#contactMe";

  navLogoContainer.appendChild(navLogo);

  navLinkContainer.appendChild(navLinkPortfolio);
  navLinkContainer.appendChild(navLinkAbout);
  navLinkContainer.appendChild(navLinkContact);

  navContainer.appendChild(navLogoContainer);
  navContainer.appendChild(navLinkContainer);

  document.body.appendChild(navContainer);
};

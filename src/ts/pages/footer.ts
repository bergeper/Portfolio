export const createHtmlForFooter = () => {
  const footer: HTMLDivElement = document.getElementById(
    "footer"
  ) as HTMLDivElement;

  const footerLeft: HTMLDivElement = document.createElement("div");
  const footerLeftCopy: HTMLParagraphElement = document.createElement("p");
  footerLeft.classList.add("footer__left");
  footerLeftCopy.innerHTML = "@Kopyrajt";

  const footerRight: HTMLDivElement = document.createElement("div");
  const footerRightLinkOne: HTMLAnchorElement = document.createElement("a");
  const footerRightLinkTwo: HTMLAnchorElement = document.createElement("a");
  footerRight.classList.add("footer__right");
  footerRightLinkOne.classList.add("linkSM");
  footerRightLinkTwo.classList.add("linkSM");

  footerRightLinkOne.href = "https://github.com/bergeper";
  footerRightLinkOne.innerHTML = `<i class="fa-brands fa-github"></i>`;
  footerRightLinkOne.target = "_blank";
  footerRightLinkTwo.href = "https://www.linkedin.com/in/per-berge-5b0b36250/";
  footerRightLinkTwo.innerHTML = `<i class="fa-brands fa-linkedin"></i>`;
  footerRightLinkTwo.target = "_blank";

  footerLeft.appendChild(footerLeftCopy);

  footerRight.appendChild(footerRightLinkOne);
  footerRight.appendChild(footerRightLinkTwo);

  footer.appendChild(footerLeft);
  footer.appendChild(footerRight);
};

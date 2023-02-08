import { contentAni, titleAni, titleBGAni } from "./helpers/animations";
import { gitrepo } from "./services/GitRepo";
import { createHtmlForPortfolio } from "./portfolio";
import { createHtmlForAbout } from "./about";
import { createHtmlForContact } from "./contact";

gitrepo();

function runApp() {
  createHtmlForPortfolio();
  createHtmlForAbout();
  createHtmlForContact();
}

runApp();

window.addEventListener("scroll", titleBGAni);
window.addEventListener("scroll", titleAni);
window.addEventListener("scroll", contentAni);

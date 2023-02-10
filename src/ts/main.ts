import { contentAni, titleAni, titleBGAni } from "./helpers/animations";
import { gitrepo } from "./services/GitRepo";
import { createHtmlForPortfolio } from "./pages/portfolio";
import { createHtmlForAbout } from "./pages/about";
import { createHtmlForContact } from "./pages/contact";

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

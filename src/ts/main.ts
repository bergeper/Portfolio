import { contentAni, titleAni, titleBGAni } from "./helpers/animations";
import { gitrepo } from "./services/GitRepo";
import { createHtmlForPortfolio } from "./pages/portfolio";
import { createHtmlForAbout } from "./pages/about";
import { createHtmlForContact } from "./pages/contact";
import { heroSection } from "./pages/hero";
import { navbar } from "./helpers/navbar";
import { createHtmlForFooter } from "./pages/footer";

gitrepo();

function runApp() {
  heroSection();
  createHtmlForPortfolio();
  createHtmlForAbout();
  createHtmlForContact();
  createHtmlForFooter();
  navbar();
}

runApp();

window.addEventListener("scroll", titleBGAni);
window.addEventListener("scroll", titleAni);
window.addEventListener("scroll", contentAni);

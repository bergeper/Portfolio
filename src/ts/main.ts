import { contentAni, titleAni, titleBGAni } from "./helpers/animations";
import { gitrepo } from "./services/GitRepo";
import { createHtmlForRepos } from "./projects";

gitrepo();
createHtmlForRepos();

window.addEventListener("scroll", titleBGAni);
window.addEventListener("scroll", titleAni);
window.addEventListener("scroll", contentAni);

import { contentAni, titleAni } from "./helpers/animations";
import { gitrepo } from "./services/GitRepo";

gitrepo();

window.addEventListener("scroll", titleAni);
window.addEventListener("scroll", contentAni);

export const titleAni = () => {
  let reveals = document.querySelectorAll(".reveal--left");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};

export const contentAni = () => {
  let reveals = document.querySelectorAll(".reveal--right");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};

export const titleBGAni = () => {
  let reveals = document.querySelectorAll(".reveal--bg");
  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 150;
    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
};

let anis = `
<section class="content--left reveal--bg">
  <section
    id="content--title"
    class="content--title__width reveal--left"
  ></section>
</section>
<section class="content--right reveal--right">
  <section id="content--right"></section>
</section>
`;

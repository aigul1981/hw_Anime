const section = document.querySelectorAll(".section");

window.addEventListener("scroll", checkSections);

checkSections();

function checkSections() {
  const bottomScrollTrigger = window.innerHeight / 2;

  section.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < bottomScrollTrigger) {
      section.classList.add("show");
    } else {
      section.classList.remove("show");
    }
  });
}

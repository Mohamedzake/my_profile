window.addEventListener("scroll", function () {
  const image = document.getElementById("avatar");
  const middleSection = document.querySelector(".middle");
  const rect = middleSection.getBoundingClientRect();
  console.log(rect.bottom);
  // Check if the middle section is out of the viewport
  if (rect.bottom < 200) {
    image.classList.add("hidden");
    // Add hidden class when scrolled
  } else {
    image.classList.remove("hidden");
    // Remove hidden class when in viewport
  }
});
//////////////////////////
const sectionHeroEl = document.querySelector(".section1");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);

    if (ent.isIntersecting === false) {
      // document.querySelector(".header1").classList.add("sticky");
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    // rootMargin: "-80px",
    rootMargin: "-570px 0px 0px 0px",
  }
);
obs.observe(sectionHeroEl);
////////////////////////////////////////////////////////
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    const href = link.getAttribute("href");
    if (href === "#") {
      // Special case for "scroll back to top"
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      // return;
    }
    // Check if the link is internal (starts with "#")
    if (href.startsWith("#")) {
      e.preventDefault(); // Prevent default scrolling behavior

      // Scroll to the section smoothly
      const sectionEl = document.querySelector(href);
      if (sectionEl) {
        sectionEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});
/////////////////////////////////////////////////////////////////////////////////////

const buttons = document.querySelectorAll(".tab-button");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons and contents
    buttons.forEach((btn) => btn.classList.remove("active"));
    contents.forEach((content) => content.classList.remove("active"));

    // Add active class to the clicked button and corresponding content
    button.classList.add("active");
    const targetContent = document.getElementById(button.dataset.target);
    targetContent.classList.add("active");
  });
});

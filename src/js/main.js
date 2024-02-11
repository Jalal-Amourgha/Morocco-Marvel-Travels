// Select the Buttons
const buttons = document.querySelectorAll(".question");
// Toggle the visibility
let show = false;
// Create screen width
let screenWidth = 0;

let moreBtn = document.getElementById("moreBtn");

// Function for handle show answear
buttons.forEach((btn) =>
  btn.addEventListener("click", function () {
    // Selected the box clicked
    var selectBox = btn.children[1].id;
    // chnage arrow icon
    var changeIcon = btn.children[0].children[1].children[0];

    // Logic for icon
    if (changeIcon.classList[1] === "fa-chevron-down") {
      changeIcon.classList.remove("fa-chevron-down");
      changeIcon.classList.add("fa-chevron-up");
    } else {
      changeIcon.classList.add("fa-chevron-down");
      changeIcon.classList.remove("fa-chevron-up");
    }

    // Showing the box
    if (document.getElementById(`${selectBox}`).style.display !== "inline") {
      document.getElementById(`${selectBox}`).style.display = "inline";

      btn.style.height = "fit-content";

      document
        .getElementById(`${selectBox}`)
        .parentElement.classList.add("show");
    } else {
      document.getElementById(`${selectBox}`).style.display = "none";

      btn.style.height = "fit-content";

      document
        .getElementById(`${selectBox}`)
        .parentElement.classList.remove("show");
    }
  })
);

// Function to handle window resize
function handleResize() {
  screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
}

// Attach the handleResize function to the window resize event
window.addEventListener("resize", handleResize);

// Call the handleResize function once to log the initial screen width
handleResize();

// More Packages Fucntion
function morePackages() {
  document.getElementById("morePackages").classList.remove("d-none");
  document.getElementById("showMoreBtn").classList.add("d-none");
}

window.addEventListener("scroll", function () {
  var header = document.querySelector("nav");
  header.classList.toggle("sticky", window.scrollY > 0);
});

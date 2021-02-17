// Grabbing the list items of the nav bar & dropdown
const navItems = document.querySelectorAll(".cool > li");
const background = document.querySelector(".dropdownBackground");
const nav = document.querySelector(".top");

// Adding Event listeners
navItems.forEach((element) =>
  element.addEventListener("mouseenter", handleEnter)
);
navItems.forEach((element) =>
  element.addEventListener("mouseleave", handleLeave)
);

// The main function to display the dropdown
function handleEnter() {
  this.classList.add("trigger-enter");
  setTimeout(
    () =>
      this.classList.contains("trigger-enter") &&
      this.classList.add("trigger-enter-active"),
    150
  );
  background.classList.add("open");

  const dropdown = this.querySelector(".dropdown");
  const dropdownCoordinates = dropdown.getBoundingClientRect();
  const navCoordinates = nav.getBoundingClientRect();

  const { width, height } = dropdownCoordinates;

  const top = dropdownCoordinates.top - navCoordinates.top;
  const left = dropdownCoordinates.left - navCoordinates.left;

  background.style.setProperty("width", `${width}px`);
  background.style.setProperty("height", `${height}px`);

  background.style.setProperty("transform", `translate(${left}px, ${top}px)`);
}

// Function to handle the leave event
function handleLeave() {
  this.classList.remove("trigger-enter", "trigger-enter-active");
  background.classList.remove("open");
}

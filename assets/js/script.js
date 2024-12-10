'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    const targetPage = this.getAttribute("data-target");

    // Loop through all pages to activate the target one
    for (let j = 0; j < pages.length; j++) {
      if (pages[j].dataset.page === targetPage) {
        pages[j].classList.add("active");
      } else {
        pages[j].classList.remove("active");
      }
    }

    // Loop through navigation links to set active class
    for (let k = 0; k < navigationLinks.length; k++) {
      if (navigationLinks[k] === this) {
        navigationLinks[k].classList.add("active");
      } else {
        navigationLinks[k].classList.remove("active");
      }
    }

    // Scroll to top of the page
    window.scrollTo(0, 0);
  });
}

// Project modal variables
const projectItems = document.querySelectorAll("[data-filter-item]");
const projectModalContainer = document.querySelector("[data-project-modal-container]");
const projectModalCloseBtn = document.querySelector("[data-project-modal-close-btn]");
const projectOverlay = document.querySelector("[data-project-overlay]");

// Modal content selectors
const projectModalImg = document.querySelector("[data-project-modal-img]");
const projectModalTitle = document.querySelector("[data-project-modal-title]");
const projectModalDate = document.querySelector("[data-project-modal-date]");
const projectModalText = document.querySelector("[data-project-modal-text]");

// Function to toggle the modal
const toggleProjectModal = function () {
  projectModalContainer.classList.toggle("active");
  projectOverlay.classList.toggle("active");
};

// Add event listener to each project item
projectItems.forEach((item) => {
  item.addEventListener("click", function () {
    // Retrieve details from the project item
    const imgSrc = this.querySelector("img").src;
    const imgAlt = this.querySelector("img").alt;
    const title = this.querySelector(".project-title").innerText;
    const description = "Detailed description of the project. Replace this with actual project details.";
    const date = "2024-10-13"; // Replace with dynamic data if applicable

    // Populate modal with project details
    projectModalImg.src = imgSrc;
    projectModalImg.alt = imgAlt;
    projectModalTitle.innerText = title;
    projectModalText.innerHTML = `<p>${description}</p>`;
    projectModalDate.innerText = date;

    // Show the modal
    toggleProjectModal();
  });
});

// Add event listener to close button and overlay
projectModalCloseBtn.addEventListener("click", toggleProjectModal);
projectOverlay.addEventListener("click", toggleProjectModal);

document.addEventListener("DOMContentLoaded", () => {
  // Select all modals, overlays, and close buttons
  const modalContainers = document.querySelectorAll("[data-modal-container]");
  const closeModalButtons = document.querySelectorAll("[data-modal-close-btn]");
  const overlays = document.querySelectorAll("[data-overlay]");

  // Function to open a modal
  const openModal = (modalIndex) => {
    modalContainers[modalIndex].classList.add("active");
  };

  // Function to close a modal
  const closeModal = (modalIndex) => {
    modalContainers[modalIndex].classList.remove("active");
  };

  // Add event listeners for opening modals
  const modalTriggers = document.querySelectorAll("[data-modal-trigger]"); // Add a trigger attribute to open specific modals
  modalTriggers.forEach((trigger, index) => {
    trigger.addEventListener("click", () => {
      openModal(index);
    });
  });

  // Add event listeners for closing modals
  closeModalButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      closeModal(index);
    });
  });

  // Add event listeners for overlays to close modals
  overlays.forEach((overlay, index) => {
    overlay.addEventListener("click", () => {
      closeModal(index);
    });
  });
});


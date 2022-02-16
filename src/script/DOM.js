const openAsideButton = document.querySelector("#open-aside");
const closeAsideButton = document.querySelector("#close-aside");
const aside = document.querySelector("#aside");

const anchorInsideNav = document.querySelectorAll("#aside a");

const handleAside = (aside, isClose = false) => {
  if (!isClose) {
    aside?.classList.toggle("hidden");
    document?.documentElement.classList.toggle("overflow-y-hidden");
    setTimeout(() => {
      aside?.classList.toggle("opacity-100");
      aside?.classList.toggle("opacity-0");
    }, 100);
  }
  if (isClose) {
    aside?.classList.toggle("opacity-100");
    aside?.classList.toggle("opacity-0");
    setTimeout(() => {
      document?.documentElement.classList.toggle("overflow-y-hidden");
      aside?.classList.toggle("hidden");
    }, 200);
  }
};

/**
 * `eventMaker` is a function that takes three arguments: `element`, `type`, and `callback`. It adds an
 * event listener to the `element` with the `type` and `callback` function
 * @param {HTMLElement} element - The element that you want to attach the event to.
 * @param {keyof HTMLElementEventMap} type - The type of event to listen for.
 * @param {() => any} callback - The function that will be called when the event is triggered.
 */
const eventMaker = (element, type, callback) => element.addEventListener(type, callback);

eventMaker(openAsideButton, "click", () => handleAside(aside));
eventMaker(closeAsideButton, "click", () => handleAside(aside, true));
anchorInsideNav.forEach((element) => eventMaker(element, "click", () => handleAside(aside, true)));

const openAsideButton = document.querySelector("#open-aside");
const closeAsideButton = document.querySelector("#close-aside");
const aside = document.querySelector("#aside");

const anchorInsideNav = document.querySelectorAll("#aside a");
const navMobile = document.querySelector("#nav-mobile");
const navDesktop = document.querySelector("#nav-desktop");

const navMenus = ["Cryptocurrency", "Exchanges", "Watchlist", "NFT", "Portfolio", "Products"];

const handleAside = (aside, isClose = false) => {
  if (!isClose) {
    aside?.classList?.toggle("hidden");
    document?.body?.classList.toggle("overflow-y-hidden");
    setTimeout(() => {
      aside?.classList?.toggle("opacity-100");
      aside?.classList?.toggle("opacity-0");
    }, 100);
  }
  if (isClose) {
    aside?.classList?.toggle("opacity-100");
    aside?.classList?.toggle("opacity-0");
    setTimeout(() => {
      document?.body?.classList.toggle("overflow-y-hidden");
      aside?.classList?.toggle("hidden");
    }, 200);
  }
};

/**
 * `doEvent` is a function that takes three arguments: `element`, `type`, and `callback`. It adds an
 * event listener to the `element` with the `type` and `callback` function
 * @param {HTMLElement} element - The element that you want to attach the event to.
 * @param {keyof HTMLElementEventMap} type - The type of event to listen for.
 * @param {() => any} callback - The function that will be called when the event is triggered.
 */
const doEvent = (element, type, callback) => element?.addEventListener(type, callback);

/**
 * Create a list of links and append them to the target element
 * @param {HTMLElement} target - The element that will contain the menu.
 * @param {Array<string>} menu - an array of strings that will be used to populate the menu.
 * @param {string} className - The class name of the menu.
 */
const populateMenu = (target, menu, className) => {
  menu.map((item) => {
    const element = document.createElement("a");
    element.setAttribute("href", "#");
    element.setAttribute("class", className);
    if (item === "Products") {
      element.innerHTML = `${item} <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" view-box="0 0 20 20 fill="currentColor">
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd" />
            </svg>`;
    } else {
      element.textContent = item;
    }
    target.append(element);
  });
};

populateMenu(navMobile, navMenus, "inline-flex items-center py-3 px-4");
populateMenu(navDesktop, navMenus, "hover:text-primary-50 inline-flex items-center font-medium");

doEvent(openAsideButton, "click", () => handleAside(aside));
doEvent(closeAsideButton, "click", () => handleAside(aside, true));
anchorInsideNav.forEach((element) => doEvent(element, "click", () => handleAside(aside, true)));

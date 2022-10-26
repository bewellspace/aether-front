export const scrollToAnchor = (anchorName, isMobile = false) => {
  if (anchorName) {
    let tabBar = document.getElementById("nav").offsetHeight;
    if (isMobile) {
      tabBar = document.getElementById("MobileNav").offsetHeight - 50;
    }
    let anchorElement = document.getElementById(anchorName);
    if (anchorElement) {
      window.scrollTo({
        top: anchorElement.offsetTop - tabBar,
        behavior: "smooth",
      });
    }
  }
};

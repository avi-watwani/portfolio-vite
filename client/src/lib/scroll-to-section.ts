export function scrollToSection(sectionId: string) {
  const element = document.querySelector(sectionId);
  if (!element) return;

  // Wait for layout changes (e.g. mobile menu closing) before scrolling.
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

const PENDING_SCROLL_KEY = "portfolio-scroll-to";

/** Navigate to a home-page section, even when currently on another route. */
export function goToHomeSection(
  sectionId: string,
  navigateHome: () => void,
) {
  if (window.location.pathname === "/") {
    scrollToSection(sectionId);
    return;
  }

  sessionStorage.setItem(PENDING_SCROLL_KEY, sectionId);
  navigateHome();
}

/** Call on the home page after mount to honor a pending section scroll. */
export function consumePendingHomeScroll() {
  const fromStorage = sessionStorage.getItem(PENDING_SCROLL_KEY);
  if (fromStorage) {
    sessionStorage.removeItem(PENDING_SCROLL_KEY);
    scrollToSection(fromStorage);
    return;
  }

  if (window.location.hash) {
    scrollToSection(window.location.hash);
  }
}

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

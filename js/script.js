// Portfolio interactions — no backend required.
document.addEventListener("DOMContentLoaded", () => {
  const year = document.getElementById("currentYear");
  if (year) year.textContent = new Date().getFullYear();

  const progress = document.getElementById("scrollProgress");
  const backToTop = document.getElementById("backToTop");

  const updateScrollUI = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const percent = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
    if (progress) progress.style.width = `${percent}%`;
    if (backToTop) backToTop.classList.toggle("visible", window.scrollY > 450);
  };

  window.addEventListener("scroll", updateScrollUI, { passive: true });
  updateScrollUI();

  if (backToTop) {
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Close the mobile navigation after selecting a section.
  document.querySelectorAll(".navbar-nav .nav-link, .navbar-nav .nav-contact").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("mainNav");
      if (menu && menu.classList.contains("show") && window.bootstrap) {
        window.bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // A static GitHub Pages site cannot process form submissions.
  // This form prepares an email in the visitor's default email application.
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", event => {
      event.preventDefault();

      const name = document.getElementById("visitorName").value.trim();
      const email = document.getElementById("visitorEmail").value.trim();
      const subject = document.getElementById("visitorSubject").value.trim();
      const message = document.getElementById("visitorMessage").value.trim();

      if (!name || !email || !subject || !message) {
        alert("Please complete all fields.");
        return;
      }

      const recipient = "aragawbayuh@gmail.com";
      const mailSubject = encodeURIComponent(`[Portfolio] ${subject}`);
      const mailBody = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\n${message}`
      );

      const hint = document.getElementById("formHint");
      if (hint) hint.textContent = "Opening your email application. If it does not open, email aragawbayuh@gmail.com directly.";

      window.location.href = `mailto:${recipient}?subject=${mailSubject}&body=${mailBody}`;
    });
  }
});

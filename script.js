// ====== EDIT THESE TWO VALUES BEFORE PUBLISHING ======
const WHATSAPP_NUMBER = "919579597030"; // Example: 919876543210
const FIRM_NAME = "Gupta Consultancy";

document.getElementById("year").textContent = new Date().getFullYear();

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
menuBtn.addEventListener("click", () => navLinks.classList.toggle("open"));
document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

const whatsappBtn = document.getElementById("whatsapp-btn");
if (WHATSAPP_NUMBER !== "YOUR_WHATSAPP_NUMBER") {
  whatsappBtn.href = `https://wa.me/${WHATSAPP_NUMBER}`;
} else {
  whatsappBtn.addEventListener("click", e => {
    e.preventDefault();
    alert("Please add your WhatsApp number in script.js before publishing.");
  });
}

document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const message = document.getElementById("message").value.trim();

  if (WHATSAPP_NUMBER === "YOUR_WHATSAPP_NUMBER") {
    alert("Demo mode: add your WhatsApp number in script.js first.");
    return;
  }

  const text =
    `Hello ${FIRM_NAME},%0A%0A` +
    `Name: ${encodeURIComponent(name)}%0A` +
    `Phone: ${encodeURIComponent(phone)}%0A` +
    `Service: ${encodeURIComponent(service)}%0A` +
    `Requirement: ${encodeURIComponent(message || "Not specified")}`;

  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
});

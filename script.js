// Configure business contact details before launch.
const WHATSAPP_NUMBER = "919579597030"; // e.g. 919876543210, no + or spaces
const BUSINESS_PHONE = "919579597030"; // e.g. 919876543210
const BUSINESS_EMAIL = "guptaconsultancy1026@gmail.com";
const FIRM_NAME = "Gupta Consultancy";
document.getElementById("year").textContent = new Date().getFullYear();
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");
menu.addEventListener("click",()=>{const opened=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(opened));});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu.setAttribute("aria-expanded","false");}));
function setLink(id,value,prefix,label){const el=document.getElementById(id);if(value&&!value.startsWith("YOUR_")){el.href=prefix+value;if(label)el.textContent=label;}}
setLink("phone-link",BUSINESS_PHONE,"tel:",BUSINESS_PHONE);
setLink("email-link",BUSINESS_EMAIL,"mailto:",BUSINESS_EMAIL);
setLink("footemail",BUSINESS_EMAIL,"mailto:",BUSINESS_EMAIL);
const wa=document.getElementById("wa");
if(WHATSAPP_NUMBER&&!WHATSAPP_NUMBER.startsWith("YOUR_")){wa.href=`https://wa.me/${WHATSAPP_NUMBER}`;wa.target="_blank";wa.rel="noopener";}else{wa.addEventListener("click",e=>{e.preventDefault();alert("Add the business WhatsApp number in script.js before publishing.");});}
document.getElementById("enquiry").addEventListener("submit",e=>{e.preventDefault();if(!WHATSAPP_NUMBER||WHATSAPP_NUMBER.startsWith("YOUR_")){alert("Add the business WhatsApp number in script.js before publishing.");return;}const name=document.getElementById("name").value.trim(),phone=document.getElementById("phone").value.trim(),service=document.getElementById("service").value,message=document.getElementById("message").value.trim();const body=`Hello ${FIRM_NAME},\n\nI have a website enquiry.\nName: ${name}\nPhone: ${phone}\nService: ${service}\nRequirement: ${message||"Not specified"}`;window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(body)}`,"_blank","noopener");});

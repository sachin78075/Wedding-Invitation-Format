/* ============================================================
SACHIN WEDS VINISHA — script.js
============================================================ */

/* ── Countdown Timer ────────────────────────────────────────── */

// Wedding date: 5 May 2026, 7:11 PM (Shubh Muhurat)
var WEDDING_DATE = new Date(“2026-05-05T19:11:00”).getTime();

function pad(n) {
return n < 10 ? “0” + n : “” + n;
}

function updateCountdown() {
var now  = new Date().getTime();
var diff = WEDDING_DATE - now;

if (diff <= 0) {
document.getElementById(“days”).textContent    = “00”;
document.getElementById(“hours”).textContent   = “00”;
document.getElementById(“minutes”).textContent = “00”;
document.getElementById(“seconds”).textContent = “00”;
clearInterval(countdownInterval);
return;
}

var days    = Math.floor(diff / (1000 * 60 * 60 * 24));
var hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((diff % (1000 * 60)) / 1000);

document.getElementById(“days”).textContent    = pad(days);
document.getElementById(“hours”).textContent   = pad(hours);
document.getElementById(“minutes”).textContent = pad(minutes);
document.getElementById(“seconds”).textContent = pad(seconds);
}

// Run immediately on load
updateCountdown();

// Then update every second
var countdownInterval = setInterval(updateCountdown, 1000);

/* ── Scroll Reveal Animation ─────────────────────────────────── */

function initScrollReveal() {
var elements = document.querySelectorAll(
“.event-card, .person-card, .venue-box, .count-box”
);

if (!(“IntersectionObserver” in window)) {
// Fallback: just show all elements if IntersectionObserver not supported
elements.forEach(function(el) {
el.style.opacity   = “1”;
el.style.transform = “none”;
});
return;
}

var observer = new IntersectionObserver(
function(entries) {
entries.forEach(function(entry) {
if (entry.isIntersecting) {
entry.target.style.opacity   = “1”;
entry.target.style.transform = “translateY(0)”;
}
});
},
{ threshold: 0.15 }
);

elements.forEach(function(el) {
el.style.opacity    = “0”;
el.style.transform  = “translateY(30px)”;
el.style.transition = “opacity 0.7s ease, transform 0.7s ease”;
observer.observe(el);
});
}

// Wait for DOM to be fully loaded
if (document.readyState === “loading”) {
document.addEventListener(“DOMContentLoaded”, initScrollReveal);
} else {
initScrollReveal();
}
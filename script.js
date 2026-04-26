/* ============================================================
SACHIN WEDS VINISHA — Wedding Website JavaScript
script.js
============================================================ */

/* ── Countdown Timer ────────────────────────────────────────── */

/** Target: 5 May 2026, Shubh Muhurat 7:11 PM */
const WEDDING_DATE = new Date(‘2026-05-05T19:11:00’).getTime();

/**

- Pads a number to 2 digits with leading zero.
- @param {number} n
- @returns {string}
  */
  function pad(n) {
  return String(n).padStart(2, ‘0’);
  }

/**

- Calculates remaining time and updates countdown DOM elements.
- Clears the interval if the wedding date has passed.
  */
  function updateCountdown() {
  const now  = new Date().getTime();
  const diff = WEDDING_DATE - now;

if (diff <= 0) {
[‘days’, ‘hours’, ‘minutes’, ‘seconds’].forEach(id => {
document.getElementById(id).textContent = ‘00’;
});
clearInterval(countdownInterval);
return;
}

const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((diff % (1000 * 60)) / 1000);

document.getElementById(‘days’).textContent    = pad(days);
document.getElementById(‘hours’).textContent   = pad(hours);
document.getElementById(‘minutes’).textContent = pad(minutes);
document.getElementById(‘seconds’).textContent = pad(seconds);
}

// Run immediately, then tick every second
updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);

/* ── Scroll Reveal Animation ────────────────────────────────── */

/**

- Uses IntersectionObserver to fade-in elements as they
- enter the viewport during scroll.
  */
  function initScrollReveal() {
  const REVEAL_SELECTORS = [
  ‘.event-card’,
  ‘.person-card’,
  ‘.venue-box’,
  ‘.count-box’,
  ];

const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.style.opacity   = ‘1’;
entry.target.style.transform = ‘translateY(0)’;
}
});
},
{ threshold: 0.15 }
);

document.querySelectorAll(REVEAL_SELECTORS.join(’, ’)).forEach((el) => {
el.style.opacity    = ‘0’;
el.style.transform  = ‘translateY(30px)’;
el.style.transition = ‘opacity 0.7s ease, transform 0.7s ease’;
observer.observe(el);
});
}

// Initialise scroll reveal after DOM is ready
document.addEventListener(‘DOMContentLoaded’, initScrollReveal);
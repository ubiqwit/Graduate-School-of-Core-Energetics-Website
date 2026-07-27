/* ==========================================================================
   HERO VIDEO
   Accessibility: pause the looping background video on its first frame
   for anyone with prefers-reduced-motion enabled, instead of forcing
   autoplaying motion on them.
   ========================================================================== */

(function () {
  const video = document.querySelector('.hero-video');
  if (!video) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) {
    video.removeAttribute('loop');
    video.addEventListener('loadeddata', () => video.pause(), { once: true });
  }
})();

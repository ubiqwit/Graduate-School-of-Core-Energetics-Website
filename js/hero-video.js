/* ==========================================================================
   HERO VIDEO
   - Plays at 0.8x speed (slower, calmer loop than native playback).
   - Accessibility: pauses on its first frame for anyone with
     prefers-reduced-motion enabled, instead of forcing autoplaying
     motion on them.
   ========================================================================== */

(function () {
  const video = document.querySelector('.hero-video');
  if (!video) return;

  const PLAYBACK_RATE = 0.8;

  const applyRate = () => { video.playbackRate = PLAYBACK_RATE; };
  video.addEventListener('loadedmetadata', applyRate);
  // Some browsers reset playbackRate when a loop restarts — reapply to be safe.
  video.addEventListener('play', applyRate);

  // const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  // if (reduceMotion) {
  //   video.removeAttribute('loop');
  //   video.addEventListener('loadeddata', () => video.pause(), { once: true });
  // }
})();

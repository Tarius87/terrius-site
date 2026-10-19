/* QS promo ticker (Oct 19 2026, Justin approved). Prepended to every one of our section scripts (home-b, store360, pdp, collections);
   the first one to run inserts it, the rest see #qs-tk and skip. Thin burgundy bar where the theme's announcement bar sits (top of the page,
   above the sticky header; scrolls away with the page like the theme bar did), white spaced caps, scrolls right-to-left at ~60 px/s (one pass
   across a 1440 px screen ~24 s), pauses on hover/focus, static under prefers-reduced-motion. Links to /collections/all. The theme's static
   announcement bar is hidden only on pages that carry this ticker (html.qs-tk-on). Plain 2D element, outside the 360 scene; no backdrop-filter.
   Oct 19 2026 16:20 (Justin): z-index 12 -> 10 so the theme drawers (aside.drawer, fixed, z 11: mobile menu) sit ABOVE the ticker
   (it was covering the menu's close X). Home: the ticker sits directly under the hero instead of at the top. When the home section
   (246a3a20) is on the page the ticker is NOT inserted at the top; it is left in window.__qsTkEl and qs-home-b.js places it right after
   .qsa-wrap (fallback: top of the page if that never happens). Theme announcement bar still hidden there (one promo bar only).
   Source: site-build/ticker/qs-ticker.js */
(function () {
  try {
    if (window.__qsTk || document.getElementById('qs-tk')) return; window.__qsTk = 1;
    var TXT = 'Free US shipping over $75 \u00a0\u00b7\u00a0 or 15% off with code FIRSTDROP';
    var css = 'html.qs-tk-on [id^="fw-section-announcement-bar"],html.qs-tk-on section.announcement-bar{display:none!important}' +
      '#qs-tk{display:block;position:relative;z-index:10;width:100%;height:34px;overflow:hidden;background:#6E0B22;color:#fff!important;text-decoration:none!important;' +
      'font-family:inherit;font-size:11.5px;font-weight:600;line-height:34px;letter-spacing:.22em;text-transform:uppercase;white-space:nowrap;-webkit-font-smoothing:antialiased;border:0;margin:0;padding:0;box-shadow:none}' +
      '#qs-tk .qs-tk-r{display:inline-flex;will-change:transform;animation:qs-tk-m var(--qs-tk-d,40s) linear infinite}' +
      '#qs-tk .qs-tk-h{display:inline-flex}#qs-tk .qs-tk-i{display:inline-block;padding:0 3.2em 0 0;color:#fff}' +
      '#qs-tk:hover .qs-tk-r,#qs-tk:focus-visible .qs-tk-r{animation-play-state:paused}#qs-tk:focus-visible{outline:2px solid #fff;outline-offset:-4px}' +
      '@keyframes qs-tk-m{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}' +
      '@media (min-width:900px){#qs-tk{font-size:12px;height:36px;line-height:36px}}' +
      '@media (prefers-reduced-motion:reduce){#qs-tk{text-align:center}#qs-tk .qs-tk-r{animation:none;display:block}#qs-tk .qs-tk-h+.qs-tk-h,#qs-tk .qs-tk-i+.qs-tk-i{display:none}#qs-tk .qs-tk-i{padding:0}}';
    var st = document.createElement('style'); st.id = 'qs-tk-css'; st.textContent = css; (document.head || document.documentElement).appendChild(st);
    var a = document.createElement('a'); a.id = 'qs-tk'; a.href = '/collections/all';
    a.setAttribute('aria-label', 'Free US shipping over $75, or 15% off with code FIRSTDROP. Shop all');
    var one = '<span class="qs-tk-i" aria-hidden="true">' + TXT + '</span>', half = '<span class="qs-tk-h">' + one + one + one + one + '</span>';
    a.innerHTML = '<span class="qs-tk-r">' + half + half + '</span>';
    var top = function () {
      if (a.isConnected) return;
      var ab = document.querySelector('[id^="fw-section-announcement-bar"]');
      if (ab && ab.parentNode) ab.parentNode.insertBefore(a, ab);
      else { var hd = document.getElementById('fw-section-header'); if (hd && hd.parentNode) hd.parentNode.insertBefore(a, hd); else { var pg = document.querySelector('.page') || document.body; pg.insertBefore(a, pg.firstChild); } }
    };
    window.__qsTkEl = a;
    if (document.querySelector('[class*="custom-html-246a3a20"]')) {
      /* home: qs-home-b.js moves it under the hero; safety net if it never does */
      var late = function () { if (!a.isConnected) top(); };
      if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { setTimeout(late, 0); }); else setTimeout(late, 0);
    } else top();
    document.documentElement.classList.add('qs-tk-on');
    /* constant speed whatever the text width: duration = half-track width / 60 px per s */
    var sp = function () { var h = a.querySelector('.qs-tk-h'); if (h && h.offsetWidth) a.style.setProperty('--qs-tk-d', Math.max(20, h.offsetWidth / 60).toFixed(1) + 's'); };
    sp(); setTimeout(sp, 50); if (document.fonts && document.fonts.ready) document.fonts.ready.then(sp);
  } catch (e) {}
})();

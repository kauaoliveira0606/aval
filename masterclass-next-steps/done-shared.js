// Shared body of the registered view. Used by /masterclass-next-steps (no purchase) and
// /masterclass-confirmation-purchase, so an edit here changes both pages.
// Only the headline block above this differs between the two.
(function () {
  // Masterclass schedule: weekly, day of week (0 = Sunday) at HOUR:00 New York time.
  // Keep in step with the constants in /masterclass/index.html.
  var MASTERCLASS_DAY = 0;
  var MASTERCLASS_HOUR = 19;
  // Pinned session (New York date). While it is in the future it wins over the weekly rule
  // and WebinarJam; once it passes, the weekly rule takes over again. Set to '' to unpin.
  var MASTERCLASS_DATE = '2026-12-06';
  var MASTERCLASS_MINUTES = 60;
  var EVENT_TITLE = 'Mind Over Market Live Masterclass';
  var EVENT_URL = 'https://event.webinarjam.com/qwk59l/go/live/k50k29izins2s1';
  // Apple Wallet pass (koconsultings.com/wallet, event aval-masterclass). src tells the pages apart.
  var PASS_URL = 'https://www.koconsultings.com/wallet/e/mom-19ureb?src=' +
    (location.pathname.indexOf('purchase') > -1 ? 'masterclass-confirmation-purchase' : 'masterclass-next-steps');
  var EVENT_DETAILS = 'Join the live masterclass here: ' + EVENT_URL + '\n\nLive masterclass with Benicio Valentin (AvalTrades). Your link is also in your confirmation email.';

  var ICON = '<svg class="done-step-icon" width="52" height="58" viewBox="0 0 52 58" fill="none" aria-hidden="true">' +
    '<rect x="3" y="8" width="46" height="47" rx="6" stroke="#d9a93b" stroke-width="5"/>' +
    '<rect x="3" y="8" width="46" height="13" fill="#d9a93b"/>' +
    '<rect x="12" y="1" width="6" height="12" rx="2" fill="#d9a93b"/><rect x="34" y="1" width="6" height="12" rx="2" fill="#d9a93b"/>' +
    '<g fill="#d9a93b"><rect x="12" y="28" width="7" height="6" rx="1"/><rect x="22.5" y="28" width="7" height="6" rx="1"/><rect x="33" y="28" width="7" height="6" rx="1"/>' +
    '<rect x="12" y="39" width="7" height="6" rx="1"/><rect x="22.5" y="39" width="7" height="6" rx="1"/><rect x="33" y="39" width="7" height="6" rx="1"/></g></svg>';

  // Step 4 FAQ videos (VTurb), shown two per row. Add one line per video: [title, player id].
  var FAQS = [
    ['How much time do you need?', '6ad230e5c1968bdb4858ce48'],
    ['Why is there no replay?', '6ad230c510de2de20c82165c'],
    ['What happens in the masterclass?', '6ad230b747bad47720470509'],
    ['How much capital do you need?', '6ad230a820c62309b1716101'],
    ['Do I need prior experience?', '6ad2309cd84c820fad5a362a'],
    ["How do I know you're legit?", '6ad23098c1bda537efa1ee7c'],
    ['Results people have gotten on this masterclass', '6ad230bf7aeeb084bd48c6fe'],
  ];

  var faqHtml = FAQS.map(function (f) {
    return '<div class="done-faq-item"><div class="done-faq-q">' + f[0] + '</div>' +
      '<vturb-smartplayer id="vid-' + f[1] + '" style="display: block; margin: 0 auto; width: 100%;"><div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: 56.25% 0 0; z-index: 0; background-color: black;"></div></vturb-smartplayer></div>';
  }).join('');

  var passCss = document.createElement('style');
  passCss.textContent = '.done-pass{text-align:center;margin:4px 0 16px}' +
    '.done-pass-btn{display:flex;align-items:center;justify-content:center;gap:10px;width:100%;padding:15px 20px;border-radius:999px;background:#0b0b0b;color:#fff;font-size:1.05rem;font-weight:700;text-decoration:none;transition:transform .15s}' +
    '.done-pass-btn:hover{transform:translateY(-1px)}';
  document.head.appendChild(passCss);

  var html = `
  <p class="done-lead">__LEAD__</p>

  <!-- VTurb player. Its script is loaded below, since a script tag set through innerHTML never runs.
       The wrapper holds the spacing because the player resets its own margin once it loads. -->
  <div class="done-video"><vturb-smartplayer id="vid-6ace5b8f5cf0c310640b80dd" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"><div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: 177.77777777777777% 0 0; z-index: 0; background-color: black;"></div></vturb-smartplayer></div>
  __AFTER_VIDEO__
  <svg class="done-arrow" width="26" height="46" viewBox="0 0 26 46" fill="none" aria-hidden="true"><path d="M13 2v40M3 31l10 11 10-11" stroke="#d9a93b" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>

  <div class="done-step" style="margin-top:18px;">
    <div class="done-step-pill">STEP 1:</div>
    ${ICON}
    <h2>Add The Date And Time To Your <span>Calendar</span></h2>
    <div class="done-step-card">
      <p>You'll get everything you need in your confirmation email, but put it in your calendar now so life doesn't get in the way.</p>
      <div class="done-when js-done-when"></div>
      <div class="done-cal">
        <button type="button" class="done-btn js-cal-toggle">Add It To My Calendar</button>
        <div class="done-cal-menu js-cal-menu">
          <a class="js-cal-google" target="_blank" rel="noopener">&#128197; Google</a>
          <a class="js-cal-ics">&#127822; Apple</a>
        </div>
      </div>
    </div>
  </div>

  <div class="done-step">
    <div class="done-step-pill">STEP 2:</div>
    ${ICON}
    <h2>Apply For The Live <span>Hot Seat</span></h2>
    <div class="done-step-card">
      <p>Fill this out if you want Benny to review your charts and blown accounts live on screen.</p>
      <div class="done-form" data-tf-live="01M3R1H2PWCEDWQAE0GD74MXQJ"></div>
    </div>
  </div>

  <div class="done-step">
    <div class="done-step-pill">STEP 3:</div>
    <svg class="done-step-icon" width="52" height="58" viewBox="0 0 52 58" fill="none" aria-hidden="true"><rect x="4" y="9" width="44" height="42" rx="8" stroke="#d9a93b" stroke-width="5"/><path d="M4 19h36" stroke="#d9a93b" stroke-width="5"/><rect x="30" y="27" width="18" height="12" rx="4" fill="#d9a93b"/></svg>
    <h2>Get Your <span>Pass</span> On Your Phone</h2>
    <div class="done-step-card">
      <div class="done-pass"><a class="done-pass-btn" href="${PASS_URL}"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="15" rx="3"/><path d="M3 9h14"/><rect x="14" y="12" width="7" height="4" rx="1.5"/></svg>Get My Pass</a></div>
      <p style="text-align:center;">Your pass puts the masterclass on your lock screen a few hours before we start, with the join link one tap away. Tap the button to get it onto your iPhone.</p>
    </div>
  </div>

  __BEFORE_EMAIL__
  <div class="done-step">
    <div class="done-step-pill">STEP 4:</div>
    ${ICON}
    <h2>Check Your <span>Email</span></h2>
    <div class="done-step-card">
      <p>Find the email from me with your masterclass details. Don't see it in the next few minutes?</p>
      <p>Check promotions or spam, then drag it into your main inbox so you get every reminder.</p>
      <p>I'll be emailing exclusive pre-training breakdowns before Sunday so you walk into the live room completely prepared.</p>
      <div class="done-mail">
        <a class="done-btn js-mail-gmail" href="https://mail.google.com/mail/u/0/#search/masterclass+in%3Aanywhere" target="_blank" rel="noopener">Open Gmail</a>
        <a class="done-btn done-btn-alt js-mail-apple" href="message://">Open Apple Mail</a>
      </div>
    </div>
  </div>

  ${FAQS.length ? `<div class="done-step">
    <div class="done-step-pill">STEP 5:</div>
    ${ICON}
    <h2>Get Your Questions <span>Answered</span></h2>
    <div class="done-faq-grid">${faqHtml}</div>
  </div>` : ''}
`;
  // A page can add its own steps after these (data-extra-steps), so the count in the lead line includes them.
  var STEP_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six'];
  document.querySelectorAll('.js-done-shared').forEach(function (el) {
    var steps = (FAQS.length ? 5 : 4) + (+el.getAttribute('data-extra-steps') || 0);
    // A page can set its own lead line with data-lead (__STEPS__ = the count in words, __N__ = as a digit).
    var lead = el.getAttribute('data-lead') ||
      "Before you close this tab, complete these __STEPS__ steps to make sure you're <b>fully set up for the masterclass</b>";
    // A page can add a line right below the video with data-after-video.
    var afterVideo = el.getAttribute('data-after-video');
    // A page can put its own steps above the email step with <template id="done-before-email">.
    var tplEmail = document.getElementById('done-before-email');
    el.innerHTML = html
      .replace('__LEAD__', lead)
      .replace('__AFTER_VIDEO__', afterVideo ? '<p class="done-after-video">' + afterVideo + '</p>' : '')
      .replace('__BEFORE_EMAIL__', tplEmail ? tplEmail.innerHTML : '')
      .replace('__STEPS__', STEP_WORDS[steps]).replace('__N__', String(steps));
    // A page can set its own FAQ step headline with data-faq-heading (HTML allowed).
    var faqHeading = el.getAttribute('data-faq-heading');
    if (faqHeading) {
      var faqGrid = el.querySelector('.done-faq-grid');
      var faqH2 = faqGrid && faqGrid.parentNode.querySelector('h2');
      if (faqH2) faqH2.innerHTML = faqHeading;
    }
    // With data-renumber, step pills are numbered in page order (for pages that add steps).
    if (el.hasAttribute('data-renumber')) {
      el.querySelectorAll('.done-step-pill').forEach(function (p, i) { p.textContent = 'STEP ' + (i + 1) + ':'; });
    }
    // A page can swap the calendar dropdown for Google / Apple / Outlook buttons with data-cal-buttons,
    // plus a line under them with data-cal-note.
    if (el.hasAttribute('data-cal-buttons')) {
      var svg = function (inner) { return '<svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + inner + '</svg>'; };
      var calIcon = svg('<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>');
      var gridIcon = svg('<rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01M16 18h.01"/>');
      var mailIcon = svg('<rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/>');
      el.querySelectorAll('.done-cal').forEach(function (c) {
        c.className = 'done-cal-btns';
        c.innerHTML =
          '<a class="done-cal-btn js-cal-google" target="_blank" rel="noopener">' + calIcon + 'Google Calendar</a>' +
          '<a class="done-cal-btn js-cal-ics">' + gridIcon + 'Apple Calendar</a>' +
          '<a class="done-cal-btn js-cal-outlook" target="_blank" rel="noopener">' + mailIcon + 'Outlook Calendar</a>';
        var note = el.getAttribute('data-cal-note');
        if (note) {
          var p = document.createElement('p');
          p.className = 'done-cal-note';
          p.textContent = note;
          c.parentNode.insertBefore(p, c.nextSibling);
        }
      });
    }
  });

  // Main video (VTurb).
  var vt = document.createElement('script');
  vt.src = 'https://scripts.converteai.net/d45760cb-3951-477f-9bee-846f01ee39f4/players/6ace5b8f5cf0c310640b80dd/v4/player.js';
  vt.async = true;
  document.head.appendChild(vt);

  // Step 4 FAQ videos (VTurb).
  FAQS.forEach(function (f) {
    var fs = document.createElement('script');
    fs.src = 'https://scripts.converteai.net/d45760cb-3951-477f-9bee-846f01ee39f4/players/' + f[1] + '/v4/player.js';
    fs.async = true;
    document.head.appendChild(fs);
  });

  // Intake form (Typeform).
  var tf = document.createElement('script');
  tf.src = 'https://embed.typeform.com/next/embed.js';
  document.body.appendChild(tf);

  /* ---------- Next session (New York time) ---------- */
  function nyParts(date) {
    var parts = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York', hourCycle: 'h23',
      year: 'numeric', month: 'numeric', day: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric', weekday: 'short'
    }).formatToParts(date);
    var out = {};
    parts.forEach(function (p) { out[p.type] = p.value; });
    return out;
  }
  function nyOffset(date) {
    var p = nyParts(date);
    var asUtc = Date.UTC(+p.year, +p.month - 1, +p.day, +p.hour, +p.minute, +p.second);
    return asUtc - Math.floor(date.getTime() / 1000) * 1000;
  }
  // New York wall-clock time (as UTC fields) turned into a real instant.
  function fromNyWall(wallUtc) {
    var guess = new Date(wallUtc - nyOffset(new Date(wallUtc)));
    return new Date(wallUtc - nyOffset(guess));
  }
  // True while the pinned session is still the next one.
  function pinActive() {
    return !!MASTERCLASS_DATE && nextSession(new Date()).getTime() === nextSession(new Date(0)).getTime();
  }

  // A session stays "next" through the whole day it runs (New York time), so people who are
  // late still get today's session; it rolls to the following week at midnight. A pinned date
  // wins until that point; after that the weekly schedule takes over.
  // Keep in step with /api/masterclass-ics.js.
  function nextSession(now) {
    if (MASTERCLASS_DATE) {
      var d = MASTERCLASS_DATE.split('-');
      var dayAfter = fromNyWall(Date.UTC(+d[0], +d[1] - 1, +d[2] + 1, 0, 0, 0));
      if (now < dayAfter) return fromNyWall(Date.UTC(+d[0], +d[1] - 1, +d[2], MASTERCLASS_HOUR, 0, 0));
    }
    var p = nyParts(now);
    var dow = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday);
    var days = (MASTERCLASS_DAY - dow + 7) % 7;
    var wallUtc = Date.UTC(+p.year, +p.month - 1, +p.day + days, MASTERCLASS_HOUR, 0, 0);
    var guess = new Date(wallUtc - nyOffset(new Date(wallUtc)));
    return new Date(wallUtc - nyOffset(guess));
  }

  // Paints the date and builds the calendar links for a session start time.
  function applyStart(start) {
    var end = new Date(start.getTime() + MASTERCLASS_MINUTES * 60000);

    var clock = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: '2-digit' }).format(start).replace(':00', '').replace(' ', '');
    var dayLabel = new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', weekday: 'long', month: 'long', day: 'numeric' }).format(start);
    document.querySelectorAll('.js-done-when').forEach(function (el) { el.textContent = dayLabel + ' @' + clock + ' ET'; });

    /* ---------- Add to calendar ---------- */
    function stamp(d) { return d.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, ''); }
    var google = 'https://calendar.google.com/calendar/render?action=TEMPLATE' +
      '&text=' + encodeURIComponent(EVENT_TITLE) +
      '&dates=' + stamp(start) + '/' + stamp(end) +
      '&details=' + encodeURIComponent(EVENT_DETAILS) +
      '&location=' + encodeURIComponent(EVENT_URL);
    // A real .ics URL (not a data: link) so iPhone Safari opens its Add to Calendar sheet.
    var icsHref = '/api/masterclass-ics?start=' + encodeURIComponent(start.toISOString()) +
      '&end=' + encodeURIComponent(end.toISOString());

    document.querySelectorAll('.js-cal-google').forEach(function (a) { a.href = google; });
    document.querySelectorAll('.js-cal-ics').forEach(function (a) { a.href = icsHref; });
    var outlook = 'https://outlook.live.com/calendar/0/deeplink/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent' +
      '&subject=' + encodeURIComponent(EVENT_TITLE) +
      '&startdt=' + encodeURIComponent(start.toISOString()) +
      '&enddt=' + encodeURIComponent(end.toISOString()) +
      '&body=' + encodeURIComponent(EVENT_DETAILS) +
      '&location=' + encodeURIComponent(EVENT_URL);
    document.querySelectorAll('.js-cal-outlook').forEach(function (a) { a.href = outlook; });
    // Headline date, e.g. "Sunday, November 8th @ 7:00 PM ET" (any .js-done-date on the page).
    var hp = {};
    new Intl.DateTimeFormat('en-US', { timeZone: 'America/New_York', weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit', hour12: true })
      .formatToParts(start).forEach(function (x) { hp[x.type] = x.value; });
    var hd = +hp.day, sfx = (hd % 100 >= 11 && hd % 100 <= 13) ? 'th' : ({ 1: 'st', 2: 'nd', 3: 'rd' }[hd % 10] || 'th');
    var headline = hp.weekday + ', ' + hp.month + ' ' + hd + sfx + ' @ ' + hp.hour + ':' + hp.minute + ' ' + hp.dayPeriod + ' ET';
    document.querySelectorAll('.js-done-date').forEach(function (el) { el.textContent = headline; });
  }
  applyStart(nextSession(new Date()));

  // The real schedule lives in WebinarJam. Ask it for the next session so this page matches
  // the registration form; the weekly rule above is the fallback.
  fetch('https://event.webinarjam.com/register/k50k29iz/convert-dates', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' },
    body: 'offset=' + (-(new Date()).getTimezoneOffset()) + '&limit=3&source=bar'
  }).then(function (r) { return r.json(); }).then(function (data) {
    var next = (data.registrationDates || []).filter(function (d) { return d.ts * 1000 > Date.now(); })[0];
    if (next && !pinActive()) applyStart(new Date(next.ts * 1000));
  }).catch(function (err) { console.log('WebinarJam schedule unavailable: ' + err.message); });

  /* ---------- Open email buttons ---------- */
  // Phones open the mail app itself; desktop Gmail opens the web inbox searched for the email.
  // Apple Mail (message://) only exists on iPhone, iPad and Mac, so it's hidden elsewhere.
  var ua = navigator.userAgent;
  var isIOS = /iPhone|iPad|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var isAndroid = /Android/.test(ua);
  var isMac = !isIOS && /Macintosh/.test(ua);
  document.querySelectorAll('.js-mail-gmail').forEach(function (a) {
    if (isIOS) { a.href = 'googlegmail://'; a.removeAttribute('target'); }
    else if (isAndroid) {
      a.href = 'intent://#Intent;package=com.google.android.gm;action=android.intent.action.MAIN;category=android.intent.category.LAUNCHER;S.browser_fallback_url=' +
        encodeURIComponent('https://mail.google.com/mail/u/0/#inbox') + ';end';
      a.removeAttribute('target');
    }
  });
  if (!isIOS && !isMac) document.querySelectorAll('.js-mail-apple').forEach(function (a) { a.remove(); });

  document.querySelectorAll('.js-cal-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () { btn.parentNode.querySelector('.js-cal-menu').classList.toggle('open'); });
  });
})();

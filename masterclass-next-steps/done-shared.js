// Shared body of the registered view. Used by /masterclass-next-steps (no purchase) and
// /masterclass-confirmation-purchase, so an edit here changes both pages.
// Only the headline block above this differs between the two.
(function () {
  // Masterclass schedule: weekly, day of week (0 = Sunday) at HOUR:00 New York time.
  // Keep in step with the constants in /masterclass/index.html.
  var MASTERCLASS_DAY = 0;
  var MASTERCLASS_HOUR = 19;
  var MASTERCLASS_MINUTES = 60;
  var EVENT_TITLE = 'Mind Over Market Live Masterclass';
  var EVENT_URL = 'https://event.webinarjam.com/qwk59l/go/live/k50k29izins2s1';
  var EVENT_DETAILS = 'Join the live masterclass here: ' + EVENT_URL + '\n\nLive masterclass with Benicio Valentin (AvalTrades). Your link is also in your confirmation email.';

  var ICON = '<svg class="done-step-icon" width="52" height="58" viewBox="0 0 52 58" fill="none" aria-hidden="true">' +
    '<rect x="3" y="8" width="46" height="47" rx="6" stroke="#16a34a" stroke-width="5"/>' +
    '<rect x="3" y="8" width="46" height="13" fill="#16a34a"/>' +
    '<rect x="12" y="1" width="6" height="12" rx="2" fill="#16a34a"/><rect x="34" y="1" width="6" height="12" rx="2" fill="#16a34a"/>' +
    '<g fill="#16a34a"><rect x="12" y="28" width="7" height="6" rx="1"/><rect x="22.5" y="28" width="7" height="6" rx="1"/><rect x="33" y="28" width="7" height="6" rx="1"/>' +
    '<rect x="12" y="39" width="7" height="6" rx="1"/><rect x="22.5" y="39" width="7" height="6" rx="1"/><rect x="33" y="39" width="7" height="6" rx="1"/></g></svg>';

  // Step 4 FAQ videos (VTurb), shown two per row. Add one line per video: [title, player id].
  var FAQS = [
    ['How much time do you need?', '6ad230e5c1968bdb4858ce48'],
    ['Why is there no replay?', '6ad230c510de2de20c82165c'],
    ['What happens in the masterclass?', '6ad230b747bad47720470509'],
    ['How much capital do you need?', '6ad230a820c62309b1716101'],
  ];

  var faqHtml = FAQS.map(function (f) {
    return '<div class="done-faq-item"><div class="done-faq-q">' + f[0] + '</div>' +
      '<vturb-smartplayer id="vid-' + f[1] + '" style="display: block; margin: 0 auto; width: 100%;"><div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: 56.25% 0 0; z-index: 0; background-color: black;"></div></vturb-smartplayer></div>';
  }).join('');

  var html = `
  <p class="done-lead">Before you close this tab, complete these ${FAQS.length ? 'four' : 'three'} steps to make sure you're <b>fully set up for the masterclass</b></p>

  <!-- VTurb player. Its script is loaded below, since a script tag set through innerHTML never runs.
       The wrapper holds the spacing because the player resets its own margin once it loads. -->
  <div class="done-video"><vturb-smartplayer id="vid-6ace5b8f5cf0c310640b80dd" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"><div class="vturb-player-placeholder" style="position: relative; width: 100%; padding: 177.77777777777777% 0 0; z-index: 0; background-color: black;"></div></vturb-smartplayer></div>
  <svg class="done-arrow" width="26" height="46" viewBox="0 0 26 46" fill="none" aria-hidden="true"><path d="M13 2v40M3 31l10 11 10-11" stroke="#16a34a" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>

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
          <a class="js-cal-outlook" target="_blank" rel="noopener">&#128231; Outlook</a>
          <a class="js-cal-ics">&#11015;&#65039; .ICS Download</a>
        </div>
      </div>
    </div>
  </div>

  <div class="done-step">
    <div class="done-step-pill">STEP 2:</div>
    ${ICON}
    <h2>Fill Out This Short Masterclass <span>Intake Form</span></h2>
    <div class="done-step-card">
      <p>Before we go live, I want to know exactly where you're at so I can cover what you actually need. It takes two minutes.</p>
      <div class="done-form" data-tf-live="01M3R1H2PWCEDWQAE0GD74MXQJ"></div>
    </div>
  </div>

  <div class="done-step">
    <div class="done-step-pill">STEP 3:</div>
    ${ICON}
    <h2>Check Your <span>Inbox</span></h2>
    <div class="done-step-card">
      <p>Find the email from me with your masterclass details. Don't see it in the next few minutes?</p>
      <p>Check promotions or spam, then drag it into your main inbox so you get every reminder.</p>
    </div>
  </div>

  ${FAQS.length ? `<div class="done-step">
    <div class="done-step-pill">STEP 4:</div>
    ${ICON}
    <h2>Get Your Questions <span>Answered</span></h2>
    <div class="done-faq-grid">${faqHtml}</div>
  </div>` : ''}
`;
  document.querySelectorAll('.js-done-shared').forEach(function (el) { el.innerHTML = html; });

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
  function nextSession(now) {
    var p = nyParts(now);
    var dow = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].indexOf(p.weekday);
    var days = (MASTERCLASS_DAY - dow + 7) % 7;
    var secsIntoDay = (+p.hour) * 3600 + (+p.minute) * 60 + (+p.second);
    if (days === 0 && secsIntoDay >= MASTERCLASS_HOUR * 3600) days = 7;
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
    // .ics text values: commas, semicolons and line breaks have to be escaped.
    function icsText(t) { return t.replace(/\\/g, '\\\\').replace(/([,;])/g, '\\$1').replace(/\n/g, '\\n'); }
    var google = 'https://calendar.google.com/calendar/render?action=TEMPLATE' +
      '&text=' + encodeURIComponent(EVENT_TITLE) +
      '&dates=' + stamp(start) + '/' + stamp(end) +
      '&details=' + encodeURIComponent(EVENT_DETAILS) +
      '&location=' + encodeURIComponent(EVENT_URL);
    var outlook = 'https://outlook.live.com/calendar/0/deeplink/compose?path=/calendar/action/compose&rru=addevent' +
      '&subject=' + encodeURIComponent(EVENT_TITLE) +
      '&startdt=' + encodeURIComponent(start.toISOString()) +
      '&enddt=' + encodeURIComponent(end.toISOString()) +
      '&body=' + encodeURIComponent(EVENT_DETAILS.replace(/\n/g, '<br>')) +
      '&location=' + encodeURIComponent(EVENT_URL);
    var ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Mind Over Market//Live Masterclass//EN', 'BEGIN:VEVENT',
      'UID:masterclass-' + stamp(start) + '@mindovermarket.com', 'DTSTAMP:' + stamp(new Date()),
      'DTSTART:' + stamp(start), 'DTEND:' + stamp(end),
      'SUMMARY:' + EVENT_TITLE, 'DESCRIPTION:' + icsText(EVENT_DETAILS),
      'LOCATION:' + icsText(EVENT_URL), 'URL:' + EVENT_URL,
      'BEGIN:VALARM', 'TRIGGER:-PT30M', 'ACTION:DISPLAY', 'DESCRIPTION:' + EVENT_TITLE, 'END:VALARM',
      'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
    var icsHref = 'data:text/calendar;charset=utf-8,' + encodeURIComponent(ics);

    document.querySelectorAll('.js-cal-google').forEach(function (a) { a.href = google; });
    document.querySelectorAll('.js-cal-outlook').forEach(function (a) { a.href = outlook; });
    document.querySelectorAll('.js-cal-ics').forEach(function (a) { a.href = icsHref; a.setAttribute('download', 'mind-over-market-masterclass.ics'); });
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
    if (next) applyStart(new Date(next.ts * 1000));
  }).catch(function (err) { console.log('WebinarJam schedule unavailable: ' + err.message); });

  document.querySelectorAll('.js-cal-toggle').forEach(function (btn) {
    btn.addEventListener('click', function () { btn.parentNode.querySelector('.js-cal-menu').classList.toggle('open'); });
  });
})();

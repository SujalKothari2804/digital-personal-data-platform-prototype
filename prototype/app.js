/* ══════════════════════════════════════════
   SLICE DPDP PROTOTYPE — APP LOGIC v3
   Violet brand, purpose sheets, real policy
════════════════════════════════════════════ */

// ── Phone frame ────────────────────────────
(function () {
  const f = document.createElement('div');
  f.className = 'phone-frame';
  while (document.body.firstChild) f.appendChild(document.body.firstChild);
  document.body.appendChild(f);
})();

// ── Nav stack ──────────────────────────────
const stack = ['s-splash'];
let cur = 's-splash';

function navigate(id) {
  if (id === cur) return;
  document.getElementById(cur).classList.remove('active');
  const to = document.getElementById(id);
  if (!to) return;
  to.classList.add('active');
  stack.push(id);
  cur = id;
  // Scroll top
  const s = to.querySelector('.scroll-area, .home-scroll, .confirm-wrap');
  if (s) s.scrollTop = 0;
}

function navigateBack() {
  if (stack.length <= 1) return;
  stack.pop();
  document.getElementById(cur).classList.remove('active');
  cur = stack[stack.length - 1];
  document.getElementById(cur).classList.add('active');
}

// ── Splash ─────────────────────────────────
window.addEventListener('load', () => {
  setTimeout(() => navigate('s-consent'), 2100);
});

// ── Consent accept ─────────────────────────
function onConsentAccept() {
  const btn = document.getElementById('btn-accept');
  if (!btn || btn.disabled) return;
  btn.textContent = 'Saving…';
  btn.disabled = true;

  // Sync toggles to manage-consent screen
  ['analytics', 'personal', 'marketing'].forEach(k => {
    const src  = document.getElementById(`tog-${k}`);
    const dest = document.getElementById(`mc-tog-${k}`);
    if (src && dest) dest.checked = src.checked;
  });

  setTimeout(() => {
    btn.textContent = 'Save & continue';
    btn.disabled = false;
    navigate('s-home');
  }, 700);
}

// ── Manage consent save ────────────────────
function onManageConsentSave() {
  showToast('Preferences saved ✓');
  setTimeout(navigateBack, 350);
}

// ── Data download ──────────────────────────
function onDataDownload() {
  const btn = document.querySelector('#s-download .btn-violet');
  if (!btn || btn.disabled) return;
  btn.textContent = 'Submitting…';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Submit data request';
    btn.disabled = false;
    navigate('s-request-done');
  }, 900);
}

// ── Correct submit ─────────────────────────
function onCorrectSubmit() {
  const btn = document.querySelector('#s-correct .btn-violet');
  if (!btn || btn.disabled) return;
  btn.textContent = 'Submitting…';
  btn.disabled = true;
  setTimeout(() => {
    btn.textContent = 'Submit correction request';
    btn.disabled = false;
    showToast('Correction submitted — review within 30 days');
    setTimeout(navigateBack, 400);
  }, 900);
}

// ── Delete flow ────────────────────────────
function checkDelete(input) {
  const btn = document.getElementById('btn-delete');
  if (btn) btn.disabled = input.value.trim() !== 'DELETE';
}

function onDelete() {
  const btn = document.getElementById('btn-delete');
  if (!btn) return;
  btn.textContent = 'Processing…';
  btn.disabled = true;
  setTimeout(() => {
    showToast('Account deletion request submitted');
    setTimeout(() => {
      document.getElementById(cur).classList.remove('active');
      stack.length = 0;
      stack.push('s-splash');
      cur = 's-splash';
      document.getElementById('s-splash').classList.add('active');
      document.getElementById('del-input').value = '';
      btn.textContent = 'Yes, delete my account';
      setTimeout(() => navigate('s-consent'), 2200);
    }, 1200);
  }, 1000);
}

// ── Format picker ──────────────────────────
function selectFmt(el) {
  document.querySelectorAll('.fmt-opt').forEach(o => o.classList.remove('sel'));
  el.classList.add('sel');
  const r = el.querySelector('input[type=radio]');
  if (r) r.checked = true;
}

// ── Purpose detail sheets ──────────────────
const purposeData = {
  analytics: {
    title: 'Analytics & Performance',
    rows: [
      { label: 'Data collected',    val: 'App usage events, screen views, crash logs, feature engagement metrics.' },
      { label: 'Legal basis',       val: 'Consent (DPDP Act §6). You may withdraw at any time.' },
      { label: 'Data processors',   val: 'Firebase Analytics (Google), Sentry (Functional Software Inc.)' },
      { label: 'Retention',         val: '12 months from collection date. Anonymised aggregates retained longer.' },
      { label: 'Transfers',         val: 'Processed outside India (Firebase servers). Adequate protection via standard contractual clauses.' },
      { label: 'DPDP classification', chips: [{ text: 'Consent-gated', cls: 'chip-violet' }, { text: 'Anonymised', cls: 'chip-green' }] },
    ]
  },
  personalisation: {
    title: 'Personalisation',
    rows: [
      { label: 'Data collected',    val: 'Spend categories, transaction frequency, payment timing patterns, dashboard preferences.' },
      { label: 'Legal basis',       val: 'Consent (DPDP Act §6). Required for smart alerts and custom dashboard.' },
      { label: 'Data processors',   val: 'Processed on slice servers only. Not shared with third parties.' },
      { label: 'Retention',         val: 'Account lifetime. Erased upon account deletion.' },
      { label: 'Impact of withdrawal', val: 'Spend categories, smart alerts, and personalised bill reminders will be disabled. Core bill tracking continues.' },
      { label: 'DPDP classification', chips: [{ text: 'Consent-gated', cls: 'chip-violet' }, { text: 'First-party only', cls: 'chip-green' }] },
    ]
  },
  marketing: {
    title: 'Marketing & Cashback Offers',
    rows: [
      { label: 'Data collected',    val: 'Spend patterns, card usage, product interactions used to generate relevant offers.' },
      { label: 'Legal basis',       val: 'Consent (DPDP Act §6). Fully optional.' },
      { label: 'Third-party sharing', val: 'Selected fintech partners under separate consent flows. You will be asked again before your data is shared.' },
      { label: 'Retention',         val: '24 months from last interaction. Erased upon withdrawal.' },
      { label: 'Impact of withdrawal', val: 'Cashback offers, reward programs, and push promotional notifications will stop. Bill tracking and UPI are unaffected.' },
      { label: 'DPDP classification', chips: [{ text: 'Consent-gated', cls: 'chip-violet' }, { text: 'Third-party', cls: 'chip-amber' }, { text: 'Optional', cls: 'chip-green' }] },
    ]
  }
};

function openPurpose(key) {
  const data = purposeData[key];
  if (!data) return;
  document.getElementById('ps-title').textContent = data.title;

  const html = data.rows.map(r => {
    if (r.chips) {
      return `<div class="ps-row">
        <p class="ps-row-label">${r.label}</p>
        <p>${r.chips.map(c => `<span class="ps-row-chip ${c.cls}">${c.text}</span>`).join('')}</p>
      </div>`;
    }
    return `<div class="ps-row"><p class="ps-row-label">${r.label}</p><p class="ps-row-val">${r.val}</p></div>`;
  }).join('');

  document.getElementById('ps-content').innerHTML = html;
  document.getElementById('purpose-overlay').classList.add('open');
}

function closePurpose(e) {
  if (e.target === document.getElementById('purpose-overlay')) {
    document.getElementById('purpose-overlay').classList.remove('open');
  }
}

// ── Global toast ───────────────────────────
function showToast(msg) {
  const t = document.getElementById('g-toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}

// ── Press scale effect ─────────────────────
document.addEventListener('pointerdown', e => {
  const b = e.target.closest('button');
  if (b && !b.disabled) {
    b.style.transform = 'scale(0.97)';
    const up = () => { b.style.transform = ''; document.removeEventListener('pointerup', up); };
    document.addEventListener('pointerup', up);
  }
});

// ── Keyboard ───────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    const overlay = document.getElementById('purpose-overlay');
    if (overlay && overlay.classList.contains('open')) {
      overlay.classList.remove('open');
    } else {
      navigateBack();
    }
  }
});

// ── Auto-hide home toast ───────────────────
setTimeout(() => {
  const t = document.getElementById('home-toast');
  if (t) { t.style.transition = 'opacity 0.5s'; t.style.opacity = '0'; }
}, 4500);

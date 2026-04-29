'use strict';

// UI language based on site language set by Hugo
const siteLang = (typeof window.SITE_LANG !== 'undefined' && window.SITE_LANG === 'nl') ? 'nl' : 'en';

// Email language starts equal to site language, can be toggled independently
let emailLang = siteLang;
let lastGeneratedBody = '';

// All UI strings in both languages
const t = {
  nl: {
    otherOption:       'Ander bedrijf (handmatig invoeren)',
    brokerCount:       (n) => `${n} Nederlandse data brokers beschikbaar`,
    alertFillIn:       'Vul je naam en e-mailadres in en selecteer een bedrijf.',
    alertOtherCompany: 'Voer de bedrijfsnaam in (en bij voorkeur het privacy-e-mailadres).',
    noPubChannel:      'Geen publiek contactkanaal',
    noPubChannelDesc:  (c) => `<strong>${c}</strong> heeft geen openbaar e-mailadres of formulier voor GDPR-verzoeken. Verzoeken kunnen alleen via de ingelogde accountpagina op hun website worden ingediend.`,
    formRequired:      'Formulier vereist',
    formRequiredCopied:'Formulier vereist — tekst gekopieerd',
    formDesc:          (c) => `<strong>${c}</strong> accepteert geen e-mail meer voor GDPR-verzoeken. Gebruik hun contactformulier. De verzoektekst is naar je klembord gekopieerd.`,
    formDescManual:    'Kopieer de tekst hieronder en plak deze in het formulier.',
    openForm:          'Open contactformulier',
    darkPatternNote:   'E-mail vervangen door formulieren is een frictietactiek die GDPR opt-outs vermindert. Overweeg dit te <a href="https://www.autoriteitpersoonsgegevens.nl/nl/zelf-doen/gebruik-uw-privacyrechten/klacht-melden-bij-de-ap" target="_blank" rel="noopener noreferrer" class="text-muted">melden bij de AP</a>.',
    readyToSend:       'Klaar om te verzenden',
    toLabel:           'Aan:',
    subjectLabel:      'Onderwerp:',
    openEmail:         'Openen in e-mailprogramma',
    copyText:          'Kopieer tekst',
    copied:            'Gekopieerd!',
    copyFallback:      'Kan niet kopiëren naar klembord. Kopieer handmatig.',
    emailClientNote:   'Als "Openen in e-mailprogramma" niet werkt, gebruik "Kopieer tekst" en plak in je mailapp.',
  },
  en: {
    otherOption:       'Other company (enter manually)',
    brokerCount:       (n) => `${n} Dutch data brokers available`,
    alertFillIn:       'Please fill in your name, email and select a company.',
    alertOtherCompany: 'Please enter the company name (and preferably its privacy email).',
    noPubChannel:      'No public contact channel',
    noPubChannelDesc:  (c) => `<strong>${c}</strong> has no public email or form for GDPR requests. Requests can only be made through the logged-in account area on their website.`,
    formRequired:      'Form required',
    formRequiredCopied:'Form required — text copied to clipboard',
    formDesc:          (c) => `<strong>${c}</strong> no longer accepts email for GDPR requests. Use their contact form. The request text has been copied to your clipboard.`,
    formDescManual:    'Copy the text below and paste it into the form.',
    openForm:          'Open contact form',
    darkPatternNote:   'Replacing email with forms is a friction tactic that reduces GDPR opt-outs. Consider <a href="https://www.edpb.europa.eu/about-edpb/members_en" target="_blank" rel="noopener noreferrer" class="text-muted">reporting this to your national DPA</a>.',
    readyToSend:       'Ready to send',
    toLabel:           'To:',
    subjectLabel:      'Subject:',
    openEmail:         'Open in email client',
    copyText:          'Copy text',
    copied:            'Copied!',
    copyFallback:      'Could not copy to clipboard. Please copy manually.',
    emailClientNote:   'If "Open in email client" doesn\'t work, use "Copy text" and paste into your mail app.',
  }
}[siteLang];

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function toggleEmailLang() {
  emailLang = emailLang === 'nl' ? 'en' : 'nl';
  document.getElementById('lang-toggle').textContent = `Email: ${emailLang.toUpperCase()}`;
}

// Sync initial button label with site language
document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = `Email: ${emailLang.toUpperCase()}`;
});

function copyLastBody() {
  if (!lastGeneratedBody) return;
  navigator.clipboard.writeText(lastGeneratedBody).then(() => {
    const btn = document.getElementById('copy-btn');
    if (btn) {
      btn.innerHTML = `<i class="bi bi-check-lg me-1"></i>${t.copied}`;
      btn.classList.replace('btn-outline-secondary', 'btn-success');
      setTimeout(() => {
        btn.innerHTML = `<i class="bi bi-clipboard me-1"></i>${t.copyText}`;
        btn.classList.replace('btn-success', 'btn-outline-secondary');
      }, 2000);
    }
  }).catch(() => alert(t.copyFallback));
}

const brokers = [
  // === CREDIT BUREAUS & DATA ENRICHMENT ===
  { name: "Experian Nederland", email: "privacy@experian.nl", category: "Credit Bureaus", note: "AP fine €2.7M (2025) for insufficient vendor disclosure" },
  { name: "Graydon", email: "privacy@graydon.nl", category: "Credit Bureaus" },
  { name: "Creditsafe", email: "privacy@creditsafe.com", category: "Credit Bureaus" },
  { name: "Focum BV", email: "privacy@focum.nl", category: "Credit Bureaus" },
  { name: "Dun & Bradstreet", email: "privacy@dnb.com", category: "Credit Bureaus" },
  { name: "Bisnode (Dun & Bradstreet)", email: "privacy@bisnode.nl", category: "Credit Bureaus" },

  // === AD-TECH & TRACKING ===
  { name: "Google (Ads/Analytics)", email: "privacy@google.com", category: "Ad-Tech & Tracking", note: 'Present on 100% of tested NL news sites. (Source: Research Volkskrant &amp; Telegraaf)' },
  { name: "Criteo", email: "privacy@criteo.com", category: "Ad-Tech & Tracking", note: "Present on 80% of tested NL news sites" },
  { name: "Index Exchange", email: "privacy@indexexchange.com", category: "Ad-Tech & Tracking", note: "Present on 80% of tested NL news sites" },
  {
    name: "Xandr (Microsoft Advertising)",
    email: "FORM_REQUIRED",
    formUrl: "https://account.microsoft.com/privacy/privacy-request-signedout",
    category: "Ad-Tech & Tracking",
    note: "privacy@microsoft.com bounces; not set up for privacy requests. Use the Microsoft privacy form (requires Microsoft account). 0% GDPR response rate (noyb 2024).",
    isForm: true
  },
  {
    name: "Meta (Facebook/Instagram)",
    email: "FORM_REQUIRED",
    formUrl: "https://www.facebook.com/help/contact/540977946302970",
    category: "Ad-Tech & Tracking",
    note: "Email no longer works since March 2026. Form required (dark pattern).",
    isForm: true
  },
  { name: "Outbrain", email: "privacy@outbrain.com", category: "Ad-Tech & Tracking" },
  { name: "Taboola", email: "privacy@taboola.com", category: "Ad-Tech & Tracking" },
  { name: "Magnite (Rubicon)", email: "privacy@magnite.com", category: "Ad-Tech & Tracking" },
  { name: "PubMatic", email: "privacy@pubmatic.com", category: "Ad-Tech & Tracking" },
  { name: "OpenX", email: "privacy@openx.com", category: "Ad-Tech & Tracking" },
  { name: "LinkedIn Marketing", email: "privacy@linkedin.com", category: "Ad-Tech & Tracking" },
  { name: "TikTok", email: "privacy@tiktok.com", category: "Ad-Tech & Tracking" },
  { name: "Snap Inc. (Snapchat)", email: "privacy@snap.com", category: "Ad-Tech & Tracking" },
  { name: "Twitter / X Corp", email: "privacy@twitter.com", category: "Ad-Tech & Tracking" },
  {
    name: "Pinterest",
    email: "FORM_REQUIRED",
    formUrl: "https://help.pinterest.com/nl/contact?current_page=about_you_page&personal_data=personal_data_adjust#no-back",
    category: "Ad-Tech & Tracking",
    note: "privacy@pinterest.com bounces; not set up for privacy requests. Use the contact form.",
    isForm: true
  },
  { name: "Amazon Ads", email: "privacy@amazon.com", category: "Ad-Tech & Tracking" },
  { name: "AdForm", email: "privacy@adform.com", category: "Ad-Tech & Tracking" },
  { name: "Sizmek (Amazon)", email: "privacy@sizmek.com", category: "Ad-Tech & Tracking" },
  { name: "The Trade Desk", email: "privacy@thetradedesk.com", category: "Ad-Tech & Tracking" },
  { name: "MediaMath", email: "privacy@mediamath.com", category: "Ad-Tech & Tracking" },

  // === MEDIA & PUBLISHERS ===
  {
    name: "DPG Media (NU.nl, AD.nl, Qmusic)",
    email: "FORM_REQUIRED",
    formUrl: "https://privacy.dpgmedia.nl/nl/privacy-rights",
    category: "Media & Publishers",
    note: "privacy@dpgmedia.nl bounces; use the DPG Media form for access, correction, deletion and objection. 104 of 121 ad-partners not named in cookie banner.",
    isForm: true
  },
  { name: "RTL Nederland", email: "privacy@rtl.nl", category: "Media & Publishers" },
  { name: "Sanoma Media", email: "privacy@sanoma.com", category: "Media & Publishers" },
  { name: "NPO / NOS", email: "privacy@npo.nl", category: "Media & Publishers", note: "Pre-consent tracking detected (cookies placed before banner appears)" },
  { name: "Mediahuis (Telegraaf, NHD)", email: "privacy@mediahuis.nl", category: "Media & Publishers" },
  { name: "Talpa Network", email: "privacy@talpanetwork.com", category: "Media & Publishers" },
  { name: "Wayback Machine / Internet Archive", email: "info@archive.org", category: "Media & Publishers", note: "Reageert zeer traag op GDPR-verzoeken. Stuur gerust meerdere mails als je na enkele weken geen reactie ontvangt." },

  // === TELECOM ===
  { name: "KPN", email: "privacy@kpn.com", category: "Telecom" },
  { name: "VodafoneZiggo", email: "privacy@vodafoneziggo.nl", category: "Telecom" },
  { name: "T-Mobile / Odido", email: "dpo@odido.nl", category: "Telecom", note: "Data breach January 2026 (potentially affected)" },
  { name: "Tele2", email: "privacy@tele2.nl", category: "Telecom" },
  { name: "Youfone", email: "privacy@youfone.nl", category: "Telecom" },
  { name: "Simyo", email: "privacy@simyo.nl", category: "Telecom" },
  { name: "Lebara", email: "privacy@lebara.nl", category: "Telecom" },

  // === RETAIL & E-COMMERCE ===
  { name: "Kruidvat Loyalty", email: "vragen@klantenservice.kruidvat.nl", category: "Retail & E-Commerce", note: "AP fine €600k for cookie wall" },
  { name: "Albert Heijn Bonus", email: "dpo@aholddelhaize.com", category: "Retail & E-Commerce" },
  {
    name: "Bol.com",
    email: "FORM_REQUIRED",
    category: "Retail & E-Commerce",
    note: "privacy@bol.com bounces; requests only via the logged-in account area (no public email or form). Data viewable for 7 days then deleted. Best practice: 100% vendor disclosure (13/13).",
    isForm: true,
    loginOnly: true
  },
  { name: "Coolblue", email: "privacy@coolblue.nl", category: "Retail & E-Commerce", note: "AP fine €40k for pre-consent tracking" },
  { name: "Wehkamp", email: "privacy@wehkamp.nl", category: "Retail & E-Commerce" },
  { name: "Zalando", email: "mijngegevens@zalando.nl", category: "Retail & E-Commerce" },
  { name: "HEMA", email: "hemaklantenservice@hema.nl", category: "Retail & E-Commerce" },
  { name: "Action", email: "privacy@action.nl", category: "Retail & E-Commerce" },
  { name: "MediaMarkt", email: "privacy@mediamarkt.nl", category: "Retail & E-Commerce" },
  { name: "Jumbo Supermarkten", email: "privacy@jumbo.com", category: "Retail & E-Commerce" },

  // === ANALYTICS & DATA PLATFORMS ===
  { name: "SmartOcto", email: "dpo@smartocto.com", category: "Analytics", note: "DPO verified from official privacy policy. NL-based, GDPR compliant." },
  { name: "Content Insights", email: "privacy@contentinsights.com", category: "Analytics" },
  { name: "Piano Analytics", email: "privacy@piano.io", category: "Analytics" },
  { name: "Comscore", email: "privacy@comscore.com", category: "Analytics" },
  { name: "Nielsen", email: "privacy@nielsen.com", category: "Analytics" },
  { name: "Chartbeat", email: "privacy@chartbeat.com", category: "Analytics" },

  // === MARKETING CLOUDS ===
  { name: "Salesforce Marketing Cloud", email: "privacy@salesforce.com", category: "Marketing" },
  { name: "Adobe Marketing Cloud", email: "privacy@adobe.com", category: "Marketing" },
  { name: "Oracle Marketing Cloud", email: "privacy@oracle.com", category: "Marketing" },
  { name: "HubSpot", email: "privacy@hubspot.com", category: "Marketing" },
  { name: "Mailchimp", email: "privacy@mailchimp.com", category: "Marketing" }
];

// --- Populate company <select> with optgroups ---
const companySelect = document.getElementById('company');
const categories = {};

brokers.forEach(b => {
  if (!categories[b.category]) categories[b.category] = [];
  categories[b.category].push(b);
});

Object.keys(categories).sort().forEach(cat => {
  const group = document.createElement('optgroup');
  group.label = `${cat} (${categories[cat].length})`;
  categories[cat].forEach(b => {
    const opt = document.createElement('option');
    opt.value = b.name;
    opt.textContent = b.name;
    group.appendChild(opt);
  });
  companySelect.appendChild(group);
});

const otherOpt = document.createElement('option');
otherOpt.value = 'other';
otherOpt.textContent = t.otherOption;
companySelect.appendChild(otherOpt);

// Update broker count badge
document.getElementById('broker-count').textContent = t.brokerCount(brokers.length);

// ── Form state persistence (survives language switch) ──────────────────────
const FORM_KEY = 'nl-optout-form';

function saveFormState() {
  try {
    sessionStorage.setItem(FORM_KEY, JSON.stringify({
      fullname:  document.getElementById('fullname')?.value || '',
      email:     document.getElementById('email')?.value    || '',
      type:      document.getElementById('type')?.value     || '',
      emailLang
    }));
  } catch (_) {}
}

function restoreFormState() {
  try {
    const raw = sessionStorage.getItem(FORM_KEY);
    if (!raw) return;
    const s = JSON.parse(raw);
    if (s.fullname) document.getElementById('fullname').value = s.fullname;
    if (s.email)    document.getElementById('email').value    = s.email;
    if (s.type)     document.getElementById('type').value     = s.type;
    if (s.emailLang) {
      emailLang = s.emailLang;
      const btn = document.getElementById('lang-toggle');
      if (btn) btn.textContent = `Email: ${emailLang.toUpperCase()}`;
    }
  } catch (_) {}
}

// Auto-save on every change (company intentionally excluded)
['fullname', 'email', 'type'].forEach(id => {
  document.getElementById(id)?.addEventListener('input', saveFormState);
  document.getElementById(id)?.addEventListener('change', saveFormState);
});

// Save state before navigating to other language
document.querySelectorAll('.lang-link').forEach(link => {
  link.addEventListener('click', saveFormState);
});

// Restore state after select is populated
restoreFormState();

// --- Company select: toggle "other" input + per-company notice ---
companySelect.addEventListener('change', () => {
  document.getElementById('other-company-group').classList.toggle('d-none', companySelect.value !== 'other');

  const selected = brokers.find(b => b.name === companySelect.value);
  const banner = document.getElementById('update-banner');
  const text = document.getElementById('update-text');

  if (selected && (selected.note || selected.isForm)) {
    let msg = selected.note || '';
    if (selected.isForm) {
      msg = `<strong>${escapeHtml(selected.name)}</strong> — formulier vereist. ${msg}`;
    }
    text.innerHTML = msg;
    banner.classList.remove('d-none');
  } else {
    banner.classList.add('d-none');
  }
});

// --- Main generator ---
function generateMail() {
  const name    = document.getElementById('fullname').value.trim();
  const email   = document.getElementById('email').value.trim();
  const company = companySelect.value;
  const extra   = document.getElementById('extra-company').value.trim();
  const type    = document.getElementById('type').value;
  const resultEl = document.getElementById('result');

  if (!name || !email || !company) {
    alert(t.alertFillIn);
    return;
  }

  let recipient  = '';
  let companyName = company;
  let isForm     = false;
  let formUrl    = '';
  let loginOnly  = false;

  if (company === 'other') {
    if (!extra) {
      alert(t.alertOtherCompany);
      return;
    }
    const separators = [' | ', ' — ', ' – ', ' - '];
    let sepIdx = -1, sepLen = 0;
    for (const sep of separators) {
      const i = extra.indexOf(sep);
      if (i !== -1 && (sepIdx === -1 || i < sepIdx)) { sepIdx = i; sepLen = sep.length; }
    }
    if (sepIdx !== -1) {
      companyName = extra.slice(0, sepIdx).trim();
      recipient   = extra.slice(sepIdx + sepLen).trim() || `privacy@${companyName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`;
    } else {
      companyName = extra;
      recipient   = `privacy@${companyName.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`;
    }
  } else {
    const sel = brokers.find(b => b.name === company);
    if (sel) {
      isForm    = !!sel.isForm;
      formUrl   = sel.formUrl || '';
      loginOnly = !!sel.loginOnly;
      if (!isForm) recipient = sel.email;
    } else {
      recipient = `privacy@${company.toLowerCase().replace(/[^a-z0-9]/g, '')}.com`;
    }
  }

  const subjects = emailLang === 'en' ? {
    objection: 'Objection to personal data processing (GDPR Art. 21)',
    erase:     'Request for erasure of personal data (GDPR Art. 17)',
    access:    'Request for access to personal data (GDPR Art. 15)',
    both:      'Objection + erasure of personal data (GDPR Art. 21 & 17)'
  } : {
    objection: 'Bezwaar tegen verwerking persoonsgegevens (AVG Art. 21)',
    erase:     'Verzoek tot wissen persoonsgegevens (AVG Art. 17)',
    access:    'Verzoek tot inzage persoonsgegevens (AVG Art. 15)',
    both:      'Bezwaar + wissen persoonsgegevens (AVG Art. 21 & 17)'
  };
  const subject = subjects[type];

  const objLine   = (type === 'objection' || type === 'both');
  const eraseLine  = (type === 'erase' || type === 'both');
  const accessLine = type === 'access';

  const body = emailLang === 'en'
    ? `Dear Sir/Madam,

My name is ${name} and my email address is ${email}.

I hereby formally exercise my rights under the GDPR:

${objLine   ? `- Objection to the processing of my personal data for marketing, profiling, tracking, etc. (Art. 21 GDPR). I request that ${companyName} ceases all such processing.\n` : ''}${eraseLine  ? `- Request for erasure of all my personal data (Art. 17 GDPR, right to be forgotten).\n` : ''}${accessLine ? `- Request for access to all personal data you process about me (Art. 15 GDPR), including a copy.\n` : ''}
Please confirm within 1 month and provide proof of action. In case of refusal: a reasoned explanation.

Kind regards,
${name}`
    : `Geachte heer/mevrouw,

Mijn naam is ${name} en mijn e-mailadres is ${email}.

Ik oefen hierbij formeel mijn rechten uit onder de AVG/GDPR:

${objLine   ? `- Bezwaar tegen verwerking van mijn persoonsgegevens voor marketing, profiling, tracking e.d. (Art. 21 AVG). Ik verzoek ${companyName} alle verdere verwerking te staken.\n` : ''}${eraseLine  ? `- Verzoek tot wissen van al mijn persoonsgegevens (Art. 17 AVG, recht om vergeten te worden).\n` : ''}${accessLine ? `- Verzoek tot inzage in alle persoonsgegevens die u van mij verwerkt (Art. 15 AVG), inclusief een kopie.\n` : ''}
Graag ontvang ik binnen 1 maand bevestiging en bewijs van actie. Bij weigering: een gemotiveerde uitleg.

Met vriendelijke groet,
${name}`;

  lastGeneratedBody = body;

  // Case 1: company only accepts logged-in requests
  if (loginOnly) {
    resultEl.innerHTML = `
      <div class="result-card" style="border-left:3px solid var(--border);">
        <p class="fw-medium mb-1" style="font-size:.875rem;">${t.noPubChannel}</p>
        <p style="font-size:.8125rem; color:var(--ink-muted); margin-bottom:0;">
          ${t.noPubChannelDesc(escapeHtml(companyName))}
        </p>
      </div>`;
    return;
  }

  // Case 2: form required instead of email
  if (isForm) {
    const renderFormResult = (copied) => {
      resultEl.innerHTML = `
        <div class="result-card" style="border-left:3px solid var(--amber);">
          <p class="fw-medium mb-1" style="font-size:.875rem;">
            ${copied ? t.formRequiredCopied : t.formRequired}
          </p>
          ${copied
            ? `<p style="font-size:.8125rem; color:var(--ink-muted);" class="mb-3">
                 ${t.formDesc(escapeHtml(companyName))}
               </p>`
            : `<p style="font-size:.8125rem; color:var(--ink-muted);" class="mb-3">
                 ${t.formDescManual}
               </p>`
          }
          <pre class="rounded p-3 mb-3" id="form-body-pre"
               style="background:var(--cream-dark);border:1px solid var(--border);max-height:260px;overflow:auto;white-space:pre-wrap;font-size:.8125rem;"></pre>
          <div class="d-flex flex-wrap gap-2 mb-3">
            <a href="${escapeHtml(formUrl)}" class="btn-primary-custom" target="_blank" rel="noopener noreferrer">
              <i class="bi bi-box-arrow-up-right me-1"></i>${t.openForm}
            </a>
          </div>
          ${copied
            ? `<p style="font-size:.75rem; color:var(--ink-muted);" class="mb-0">
                 ${t.darkPatternNote}
               </p>`
            : ''
          }
        </div>`;
      document.getElementById('form-body-pre').textContent = body;
    };

    navigator.clipboard.writeText(body)
      .then(() => renderFormResult(true))
      .catch(() => renderFormResult(false));
    return;
  }

  // Case 3: normal email
  const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  resultEl.innerHTML = `
    <div class="result-card" style="border-left:3px solid #4ade80;">
      <p class="fw-medium mb-3" style="font-size:.875rem;">${t.readyToSend}</p>
      <p class="mb-1" style="font-size:.8125rem; color:var(--ink-muted);"><strong style="color:var(--ink);">${t.toLabel}</strong> ${escapeHtml(recipient)}</p>
      <p class="mb-3" style="font-size:.8125rem; color:var(--ink-muted);"><strong style="color:var(--ink);">${t.subjectLabel}</strong> ${escapeHtml(subject)}</p>
      <pre class="rounded p-3 mb-3" id="email-body-pre"
           style="background:var(--cream-dark);border:1px solid var(--border);max-height:260px;overflow:auto;white-space:pre-wrap;font-size:.8125rem;"></pre>
      <div class="d-flex flex-wrap gap-2 mb-3">
        <a href="${escapeHtml(mailto)}" class="btn-primary-custom">
          <i class="bi bi-envelope me-1"></i>${t.openEmail}
        </a>
        <button id="copy-btn" class="btn-outline-custom" onclick="copyLastBody()">
          <i class="bi bi-clipboard me-1"></i>${t.copyText}
        </button>
      </div>
      <p style="font-size:.75rem; color:var(--ink-muted);" class="mb-0">
        ${t.emailClientNote}
      </p>
    </div>`;
  document.getElementById('email-body-pre').textContent = body;
}

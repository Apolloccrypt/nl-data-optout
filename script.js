let emailLang = 'nl';

function toggleEmailLang() {
  emailLang = emailLang === 'nl' ? 'en' : 'nl';
  document.getElementById('lang-toggle').textContent = `Email: ${emailLang.toUpperCase()}`;
}

const brokers = [
  // === CREDIT BUREAUS & DATA ENRICHMENT ===
  { name: "Experian Nederland", email: "privacy@experian.nl", category: "Credit Bureaus", note: "AP boete 2.7M (2025) voor onvoldoende vendor disclosure" },
  { name: "Graydon", email: "privacy@graydon.nl", category: "Credit Bureaus" },
  { name: "Creditsafe", email: "privacy@creditsafe.com", category: "Credit Bureaus" },
  { name: "Focum BV", email: "privacy@focum.nl", category: "Credit Bureaus" },
  { name: "Dun & Bradstreet", email: "privacy@dnb.com", category: "Credit Bureaus" },
  { name: "Bisnode (Dun & Bradstreet)", email: "privacy@bisnode.nl", category: "Credit Bureaus" },

  // === AD-TECH & TRACKING ===
  { name: "Google (Ads/Analytics)", email: "privacy@google.com", category: "Ad-Tech & Tracking", note: "Aanwezig op 100% van geteste NL nieuwssites. Bron: <a href=\"https://medium.com/@mick.ronan.beer\" target=\"_blank\" rel=\"noopener noreferrer\">Onderzoek Volkskrant &amp; Telegraaf (Medium)</a>" },
  { name: "Criteo", email: "privacy@criteo.com", category: "Ad-Tech & Tracking", note: "Aanwezig op 80% van geteste NL nieuwssites" },
  { name: "Index Exchange", email: "privacy@indexexchange.com", category: "Ad-Tech & Tracking", note: "Aanwezig op 80% van geteste NL nieuwssites" },
  {
    name: "Xandr (Microsoft Advertising)",
    email: "FORM_REQUIRED",
    formUrl: "https://account.microsoft.com/privacy/privacy-request-signedout",
    category: "Ad-Tech & Tracking",
    note: "E-mail privacy@microsoft.com bouncet; dit adres is niet ingericht voor privacyverzoeken. Gebruik het Microsoft privacy formulier (vereist Microsoft-account). 0% GDPR response rate (noyb 2024).",
    isForm: true
  },
  {
    name: "Meta (Facebook/Instagram)",
    email: "FORM_REQUIRED",
    formUrl: "https://www.facebook.com/help/contact/540977946302970",
    category: "Ad-Tech & Tracking",
    note: "Email werkt niet meer sinds maart 2026. Verplicht formulier (dark pattern).",
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
    note: "E-mail privacy@pinterest.com bouncet; dit adres is niet ingericht voor privacyverzoeken. Gebruik het contactformulier.",
    isForm: true
  },
  { name: "Amazon Ads", email: "privacy@amazon.com", category: "Ad-Tech & Tracking" },
  { name: "AppNexus (Xandr)", email: "privacy@xandr.com", category: "Ad-Tech & Tracking" },
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
    note: "E-mail privacy@dpgmedia.nl bouncet; dit adres is niet ingericht voor privacyverzoeken. Gebruik het DPG Media formulier voor inzage, correctie, verwijdering en bezwaar. 104 van 121 partners niet genoemd in cookie banner.",
    isForm: true
  },
  { name: "RTL Nederland", email: "privacy@rtl.nl", category: "Media & Publishers" },
  { name: "Sanoma Media", email: "privacy@sanoma.com", category: "Media & Publishers" },
  { name: "NPO / NOS", email: "privacy@npo.nl", category: "Media & Publishers", note: "Pre-consent tracking gedetecteerd (cookies voor banner)" },
  { name: "Mediahuis (Telegraaf, NHD)", email: "privacy@mediahuis.nl", category: "Media & Publishers" },
  { name: "Talpa Network", email: "privacy@talpanetwork.com", category: "Media & Publishers" },
  { name: "Wayback Machine / Internet Archive", email: "info@archive.org", category: "Media & Publishers" },

  // === TELECOM ===
  { name: "KPN", email: "privacy@kpn.com", category: "Telecom" },
  { name: "VodafoneZiggo", email: "privacy@vodafoneziggo.nl", category: "Telecom" },
  { name: "T-Mobile / Odido", email: "dpo@odido.nl", category: "Telecom", note: "Data lek januari 2026 (mogelijk betrokken)" },
  { name: "Tele2", email: "privacy@tele2.nl", category: "Telecom" },
  { name: "Youfone", email: "privacy@youfone.nl", category: "Telecom" },
  { name: "Simyo", email: "privacy@simyo.nl", category: "Telecom" },
  { name: "Lebara", email: "privacy@lebara.nl", category: "Telecom" },

  // === RETAIL & E-COMMERCE ===
  { name: "Kruidvat Loyalty", email: "vragen@klantenservice.kruidvat.nl", category: "Retail & E-Commerce", note: "AP boete 600k voor cookie wall" },
  { name: "Albert Heijn Bonus", email: "dpo@aholddelhaize.com", category: "Retail & E-Commerce" },
  {
    name: "Bol.com",
    email: "FORM_REQUIRED",
    category: "Retail & E-Commerce",
    note: "E-mail privacy@bol.com bouncet; dit adres is niet ingericht voor privacyverzoeken. Verzoeken verlopen alleen via de ingelogde account-omgeving; geen publiek e-mail of formulier beschikbaar. Gegevens zijn 7 dagen inzichtelijk en worden daarna verwijderd. Best practice: 100% vendor disclosure (13/13).",
    isForm: true,
    loginOnly: true
  },
  { name: "Coolblue", email: "privacy@coolblue.nl", category: "Retail & E-Commerce", note: "AP boete 40k voor pre-consent tracking" },
  { name: "Wehkamp", email: "privacy@wehkamp.nl", category: "Retail & E-Commerce" },
  { name: "Zalando", email: "mijngegevens@zalando.nl", category: "Retail & E-Commerce" },
  { name: "HEMA", email: "hemaklantenservice@hema.nl", category: "Retail & E-Commerce" },
  { name: "Action", email: "privacy@action.nl", category: "Retail & E-Commerce" },
  { name: "MediaMarkt", email: "privacy@mediamarkt.nl", category: "Retail & E-Commerce" },
  { name: "Jumbo Supermarkten", email: "privacy@jumbo.com", category: "Retail & E-Commerce" },

  // === ANALYTICS & DATA PLATFORMS ===
  {
    name: "SmartOcto",
    email: "dpo@smartocto.com",
    category: "Analytics",
    note: "DPO verified from official privacy policy. NL-based, GDPR compliant."
  },
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

// Populate the <select> dynamically with optgroups per category
const companySelect = document.getElementById('company');
const categories = {};

brokers.forEach(broker => {
  if (!categories[broker.category]) {
    categories[broker.category] = [];
  }
  categories[broker.category].push(broker);
});

Object.keys(categories).sort().forEach(cat => {
  const optgroup = document.createElement('optgroup');
  optgroup.label = `${cat} (${categories[cat].length})`;
  categories[cat].forEach(broker => {
    const opt = document.createElement('option');
    opt.value = broker.name;
    opt.textContent = broker.name;
    optgroup.appendChild(opt);
  });
  companySelect.appendChild(optgroup);
});

// Other option
const otherOpt = document.createElement('option');
otherOpt.value = 'other';
otherOpt.textContent = 'Ander bedrijf (handmatig invoeren)';
companySelect.appendChild(otherOpt);

// Extra input for 'other'
const extraLabel = document.createElement('label');
extraLabel.htmlFor = 'extra-company';
extraLabel.textContent = 'Ander bedrijf (naam + eventueel email privacy@...)';
extraLabel.style.display = 'none';
const extraInput = document.createElement('input');
extraInput.type = 'text';
extraInput.id = 'extra-company';
extraInput.placeholder = 'Bijv. Bedrijfsnaam - privacy@bedrijf.nl';
extraInput.style.display = 'none';
companySelect.insertAdjacentElement('afterend', extraInput);
companySelect.insertAdjacentElement('afterend', extraLabel);

companySelect.addEventListener('change', () => {
  const show = companySelect.value === 'other';
  extraLabel.style.display = show ? 'block' : 'none';
  extraInput.style.display = show ? 'block' : 'none';

  const selected = brokers.find(b => b.name === companySelect.value);
  const banner = document.getElementById('update-banner');
  const text = document.getElementById('update-text');

  if (selected && (selected.note || selected.isForm)) {
    let message = selected.note || '';
    if (selected.isForm) {
      message = `${selected.name} vereist een formulier (geen email). ${message}`;
    }
    text.innerHTML = message;
    banner.style.display = 'block';
  } else {
    banner.style.display = 'none';
  }
});

const PRE_STYLE = 'background:#f5f5f5; padding:1rem; border-radius:6px; overflow:auto; max-height:300px; border:1px solid #ddd;';

function generateMail() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  let company = companySelect.value;
  const extra = extraInput.value.trim();
  const type = document.getElementById('type').value;

  if (!name || !email || !company) {
    alert('Vul aub naam, email en een bedrijf in!');
    return;
  }

  let recipient = '';
  let companyName = company;
  let isForm = false;
  let formUrl = '';

  if (company === 'other') {
    if (!extra) {
      alert('Vul aub naam (en liefst email) van het bedrijf in!');
      return;
    }
    // Split only on the first spaced dash (including en/em dashes) to preserve hyphens in company names
    const separators = [' - ', ' – ', ' — '];
    let sepIndex = -1;
    let sepLength = 0;
    for (const sep of separators) {
      const i = extra.indexOf(sep);
      if (i !== -1 && (sepIndex === -1 || i < sepIndex)) {
        sepIndex = i;
        sepLength = sep.length;
      }
    }
    if (sepIndex !== -1) {
      companyName = extra.slice(0, sepIndex).trim();
      const recipientPart = extra.slice(sepIndex + sepLength).trim();
      recipient = recipientPart || `privacy@${companyName.toLowerCase().replace(/[^a-z0-9]/g,'')}.nl`;
    } else {
      companyName = extra;
      recipient = `privacy@${companyName.toLowerCase().replace(/[^a-z0-9]/g,'')}.nl`;
    }
  } else {
    const selected = brokers.find(b => b.name === company);
    if (selected) {
      if (selected.isForm) {
        isForm = true;
        formUrl = selected.formUrl;
      } else {
        recipient = selected.email;
      }
    } else {
      recipient = `privacy@${company.toLowerCase().replace(/[^a-z0-9]/g,'')}.nl`;
    }
  }

  const subjectMap = emailLang === 'en' ? {
    objection: 'Objection to personal data processing (GDPR Art. 21)',
    erase: 'Request for erasure of personal data (GDPR Art. 17)',
    access: 'Request for access to personal data (GDPR Art. 15)',
    both: 'Objection + erasure of personal data (GDPR Art. 21 & 17)'
  } : {
    objection: 'Bezwaar tegen verwerking persoonsgegevens (GDPR Art. 21)',
    erase: 'Verzoek tot wissen persoonsgegevens (GDPR Art. 17)',
    access: 'Verzoek tot inzage persoonsgegevens (GDPR Art. 15)',
    both: 'Bezwaar + wissen persoonsgegevens (GDPR Art. 21 & 17)'
  };
  const subject = subjectMap[type];

  const body = emailLang === 'en'
    ? `Dear Sir/Madam,

My name is ${name} and my email address is ${email}.

I hereby formally exercise my rights under the GDPR:

${
  (type === 'objection' || type === 'both')
    ? `- Objection to the processing of my personal data for marketing, profiling, tracking, etc. (Art. 21 GDPR). I request that ${companyName} ceases all such processing.\n`
    : ''
}${
  (type === 'erase' || type === 'both')
    ? `- Request for erasure of all my personal data (Art. 17 GDPR, right to be forgotten).\n`
    : ''
}${
  type === 'access'
    ? `- Request for access to all personal data you process about me (Art. 15 GDPR), including a copy.\n`
    : ''
}
Please confirm within 1 month and provide proof of action. In case of refusal: a reasoned explanation.

Kind regards,
${name}`
    : `Geachte heer/mevrouw,

Mijn naam is ${name} en mijn email is ${email}.

Ik oefen hierbij formeel mijn rechten uit onder de AVG/GDPR:

${
  (type === 'objection' || type === 'both')
    ? `- Bezwaar tegen verwerking van mijn persoonsgegevens voor marketing, profiling, tracking e.d. (Art. 21 GDPR). Ik wil geen verdere verwerking door ${companyName}.\n`
    : ''
}${
  (type === 'erase' || type === 'both')
    ? `- Verzoek tot wissen van al mijn persoonsgegevens (Art. 17 GDPR, recht om vergeten te worden).\n`
    : ''
}${
  type === 'access'
    ? `- Verzoek tot inzage in alle persoonsgegevens die u van mij verwerkt (Art. 15 GDPR), inclusief een kopie.\n`
    : ''
}
Graag ontvang ik binnen 1 maand bevestiging en bewijs van actie. Bij weigering: gemotiveerde uitleg.

Met vriendelijke groet,
${name}`;

  const selected = brokers.find(b => b.name === company);
  const loginOnly = selected && selected.loginOnly;

  const resultEl = document.getElementById('result');

  if (isForm) {
    if (loginOnly) {
      resultEl.innerHTML = '';
      const h3 = document.createElement('h3');
      h3.textContent = 'Geen publiek contactkanaal beschikbaar';
      resultEl.appendChild(h3);
      const warningDiv = document.createElement('div');
      warningDiv.className = 'warning';
      const p1 = document.createElement('p');
      const strong1 = document.createElement('strong');
      strong1.textContent = companyName;
      p1.appendChild(strong1);
      p1.appendChild(document.createTextNode(' heeft geen publiek e-mailadres of formulier voor GDPR-verzoeken.'));
      warningDiv.appendChild(p1);
      const p2 = document.createElement('p');
      p2.textContent = 'Verzoeken verlopen alleen via de ingelogde account-omgeving op hun website.';
      warningDiv.appendChild(p2);
      resultEl.appendChild(warningDiv);
      return;
    }

    const renderFormResult = (copied) => {
      resultEl.innerHTML = '';
      const h3 = document.createElement('h3');
      h3.textContent = copied ? 'Let op: Dit bedrijf vereist een formulier' : 'Formulier vereist';
      resultEl.appendChild(h3);

      if (copied) {
        const warningDiv = document.createElement('div');
        warningDiv.className = 'warning';
        const p1 = document.createElement('p');
        const strong1 = document.createElement('strong');
        strong1.textContent = companyName;
        p1.appendChild(strong1);
        p1.appendChild(document.createTextNode(' accepteert geen email meer voor GDPR-verzoeken.'));
        warningDiv.appendChild(p1);
        const p2 = document.createElement('p');
        p2.textContent = 'Je moet hun contact formulier gebruiken. De tekst is gekopieerd naar je clipboard.';
        warningDiv.appendChild(p2);
        resultEl.appendChild(warningDiv);
        const h4 = document.createElement('h4');
        h4.textContent = 'Template (gekopieerd):';
        resultEl.appendChild(h4);
      } else {
        const p = document.createElement('p');
        p.textContent = 'Kopieer onderstaande tekst en plak in het formulier:';
        resultEl.appendChild(p);
      }

      const pre = document.createElement('pre');
      pre.style.cssText = PRE_STYLE;
      pre.textContent = body;
      resultEl.appendChild(pre);

      const btn = document.createElement('button');
      btn.textContent = 'Open Contact Formulier';
      btn.addEventListener('click', () => window.open(formUrl, '_blank', 'noopener,noreferrer'));
      resultEl.appendChild(btn);

      if (copied) {
        const infoDiv = document.createElement('div');
        infoDiv.className = 'info';
        infoDiv.style.marginTop = '1rem';
        const strong2 = document.createElement('strong');
        strong2.textContent = 'Dark Pattern Alert:';
        infoDiv.appendChild(strong2);
        infoDiv.appendChild(document.createTextNode(' Dit is een voorbeeld van een "dark pattern" - bedrijven maken GDPR-verzoeken moeilijker door email te vervangen met formulieren. Dit verhoogt friction en vermindert het aantal opt-outs. Overweeg dit te melden bij de '));
        const link = document.createElement('a');
        link.href = 'https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/privacyrechten/melden';
        link.textContent = 'Autoriteit Persoonsgegevens';
        infoDiv.appendChild(link);
        infoDiv.appendChild(document.createTextNode('.'));
        resultEl.appendChild(infoDiv);
      }
    };

    navigator.clipboard.writeText(body).then(() => {
      renderFormResult(true);
    }).catch(() => {
      alert('Kon tekst niet kopieren naar clipboard. Kopieer handmatig uit onderstaand vak.');
      renderFormResult(false);
    });
  } else {
    const mailto = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    resultEl.innerHTML = '';
    const h3 = document.createElement('h3');
    h3.textContent = 'Klaar! Open de mail:';
    resultEl.appendChild(h3);

    const pTo = document.createElement('p');
    const strongTo = document.createElement('strong');
    strongTo.textContent = 'Naar:';
    pTo.appendChild(strongTo);
    pTo.appendChild(document.createTextNode(' ' + recipient));
    resultEl.appendChild(pTo);

    const pSubject = document.createElement('p');
    const strongSubject = document.createElement('strong');
    strongSubject.textContent = 'Onderwerp:';
    pSubject.appendChild(strongSubject);
    pSubject.appendChild(document.createTextNode(' ' + subject));
    resultEl.appendChild(pSubject);

    const h4 = document.createElement('h4');
    h4.textContent = 'Template:';
    resultEl.appendChild(h4);

    const pre = document.createElement('pre');
    pre.style.cssText = 'background:#f5f5f5; padding:1rem; border-radius:6px; overflow:auto; max-height:300px; border:1px solid #ddd;';
    pre.textContent = body;
    resultEl.appendChild(pre);

    const openBtn = document.createElement('button');
    openBtn.textContent = 'Open in mailprogramma';
    openBtn.addEventListener('click', () => { window.location = mailto; });
    resultEl.appendChild(openBtn);

    const copyBtn = document.createElement('button');
    copyBtn.className = 'secondary';
    copyBtn.textContent = 'Kopieer Tekst';
    copyBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(body).then(() => alert('Tekst gekopieerd naar clipboard!'));
    });
    resultEl.appendChild(copyBtn);

    const tip = document.createElement('p');
    tip.style.cssText = 'margin-top:1rem; font-size:0.9rem; color:#666;';
    const tipStrong = document.createElement('strong');
    tipStrong.textContent = 'Tip:';
    tip.appendChild(tipStrong);
    tip.appendChild(document.createTextNode(' Werkt "mailto:" niet? Gebruik "Kopieer Tekst" en plak in je mail-app.'));
    resultEl.appendChild(tip);
  }
}

document.getElementById('broker-count').innerHTML = `<strong>${brokers.length} Europese data brokers</strong> beschikbaar`;

# Changelog

Alle noemenswaardige wijzigingen aan dit project worden in dit bestand bijgehouden.

Het formaat is gebaseerd op [Keep a Changelog](https://keepachangelog.com/nl/1.1.0/),
dit project hanteert [Semantic Versioning](https://semver.org/lang/nl/),
en commit-berichten volgen grotendeels de stijl van [Conventional Commits](https://www.conventionalcommits.org/nl/v1.0.0/).

---

## [1.2.0] - 2026-03-31

### Added
- **Bronlink bij Google** – update-banner toont nu een klikbare bronverwijzing naar het Medium-onderzoek (Volkskrant & Telegraaf)

### Changed
- **Naamgeving consistentie** – alle code-identifiers omgezet naar Engels en consistente conventies: camelCase voor JS-variabelen en -functies, kebab-case voor HTML IDs en CSS-klassen (`genereerMail` → `generateMail`, `bedrijf` → `company`, `ontvanger` → `recipient`, etc.)
- **Form-waarden** – interne option-values omgezet naar Engels (`bezwaar` → `objection`, `wissen` → `erase`, `inzage` → `access`, `beide` → `both`)
- **Donatie-knop** – minder opdringerig; verplaatst van prominente gele box naar een subtiele regel in de footer
- **HTML/JS/CSS gesplitst** – code uitgesplitst in aparte bestanden voor betere onderhoudbaarheid (script.js, style.css) ([#1](https://github.com/Apolloccrypt/nl-data-optout/issues/1), [#2](https://github.com/Apolloccrypt/nl-data-optout/issues/2))
- **UI** – flashy kleuren en emoji gereduceerd voor een rustigere leeservaring ([#3](https://github.com/Apolloccrypt/nl-data-optout/issues/3), [#4](https://github.com/Apolloccrypt/nl-data-optout/issues/4))

### Fixed
- **Broken Medium URLs** – alle verwijzingen naar `medium.com/p/75744f8645c6` en het lange artikel-pad vervangen door `https://medium.com/@mick.ronan.beer` (index.html, script.js, README.md)
- **LinkedIn URL** – alle verwijzingen gecorrigeerd naar `https://www.linkedin.com/in/mick-beer/` (met `www.` en trailing slash) in index.html, README.md, CONTRIBUTING.md, DEPLOYMENT.md en config.yml; `@mickbeer`-mention is nu een klikbare link
- **Relatieve links** – `CHANGELOG.md` en `LICENSE` in de footer verwijzen nu relatief, zodat de site niet breekt bij hosting buiten GitHub Pages
- **Result div leeg** – lege `#result` div werd altijd getoond als groene balk; verborgen via `#result:empty { display: none }` in CSS
- **Update-banner links** – note-tekst gebruikt nu `innerHTML` zodat bronlinks correct renderen
- **Versie-inconsistentie** – site toonde v1.1.1 maar changelog liep slechts tot v1.1.0; v1.1.1 is nu alsnog gedocumenteerd (zie hieronder)

---

## [1.1.1] - 2026-03-22

### Fixed
- **Xandr e-mail** – `privacy@xandr.com` bouncete; vervangen door Microsoft privacy formulier met `isForm: true`
- **SmartOcto e-mail** – `privacy@smartocto.com` bouncete; vervangen door geverifieerd DPO-adres `dpo@smartocto.com`
- **JavaScript syntax** – ontbrekende komma's in brokers array veroorzaakten parse-fouten
- **Ontbrekende category-velden** – Xandr en SmartOcto misten een `category` property
- **Contact emails** – meerdere bedrijven bijgewerkt naar actuele adressen

### Added
- **Compliance waarschuwing Xandr** – notitie toegevoegd: 0% GDPR response rate (noyb 2024)

---

## [1.1.0] - 2026-03-21

### Added
- **Meta/Facebook formulier fix** – detecteert dat Meta geen email meer accepteert, geeft formulier instructies
- **Notes systeem** – waarschuwingsbanner voor bedrijven met speciale instructies
- **60+ brokers** – uitgebreide lijst (was 25)
- **Categorieën teller** – toont aantal brokers per categorie in dropdown
- **Dark pattern waarschuwing** – bij formulier-vereiste bedrijven
- **Kopieer naar clipboard** knop – makkelijker copy-paste
- **Changelog link** in footer
- **Bug report link** in disclaimer
- **GitHub Issues templates** (broken contact, feature request)

### Changed
- **UI verbeteringen** – betere warnings, info boxes, button styling
- **Broker object structuur** – toegevoegd: `note`, `isForm`, `formUrl` fields
- **Email template** – duidelijkere formatting
- **Footer** – LinkedIn link, versie nummer, changelog link
- **Result box** – betere formatting, copy button, tips

### Fixed
- **Meta contact** – `datarequests@support.facebook.com` vervangen door formulier
- **JavaScript escaping** – backticks en dollar signs in template copy
- **Mobile responsive** – betere display op kleine schermen

### Documentation
- README.md volledig herschreven
- CONTRIBUTING.md toegevoegd
- Issue templates toegevoegd
- Changelog gestart

---

## [1.0.0] - 2026-03-20

### Added
- **Eerste release** – 25 Nederlandse data brokers
- **GDPR Art. 21, 17, 15** – bezwaar, wissen, inzage
- **Categorieën** – Credit Bureaus, Ad-Tech, Media, Telecom, Retail
- **"Ander bedrijf" optie** – handmatige invoer
- **100% lokaal** – geen server, geen tracking
- **MIT License** – open source
- **GitHub Pages** – live hosting

### Features
- Naam + email input
- Bedrijf selectie (dropdown met categorieën)
- Type verzoek (bezwaar / wissen / inzage / beide)
- Automatische mailto: link generatie
- Email template met GDPR artikelen
- Volledige disclaimer
- Mobile-friendly design

---

## Toekomstige Updates

### Geplanned
- [ ] **English version** (international brokers)
- [ ] **CSV export** – track welke verzoeken je verstuurd hebt
- [ ] **Response tracker** – check of bedrijven binnen 1 maand reageren
- [ ] **EU brokers** – uitbreiding naar andere EU landen
- [ ] **API voor automatisering** – bulk verzoeken (optioneel)

### Community Requests
- [ ] Browser extension (optioneel)
- [ ] Template customization (eigen tekst)
- [ ] Multi-language support

---

## Contact veranderingen

### Meta/Facebook (maart 2026)
- **Oud:** `datarequests@support.facebook.com`
- **Nieuw:** Contact formulier verplicht
- **URL:** https://www.facebook.com/help/contact/540977946302970
- **Reden:** Dark pattern – email vervangen door formulier (meer friction)
- **Gemeld door:** Tobias L. (LinkedIn community)
- **Fix:** v1.1.0

### Rapporteer contact wijzigingen via GitHub Issues!

---

## Versie Nummering

We gebruiken [Semantic Versioning](https://semver.org/):

- **MAJOR** (1.x.x) – Breaking changes (bijv. volledige UI redesign)
- **MINOR** (x.1.x) – Nieuwe features (bijv. nieuwe brokers, nieuwe functionaliteit)
- **PATCH** (x.x.1) – Bug fixes, contact updates, kleine verbeteringen

---

## Contributors

- **Mick Beer** (@Apolloccrypt) – Creator, maintainer
- **Tobias L.** – Meta contact update report
- **Community** – Bug reports, feature requests

Wil je bijdragen? Zie [CONTRIBUTING.md](CONTRIBUTING.md)!

---

<p align="center">Last update: 31 maart 2026</p>

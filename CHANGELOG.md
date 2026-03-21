# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

<p align="center">Last update: 21 maart 2026</p>

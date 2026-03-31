# Changelog

Alle noemenswaardige wijzigingen aan dit project worden in dit bestand bijgehouden.

Het formaat is gebaseerd op [Keep a Changelog](https://keepachangelog.com/nl/1.1.0/),
dit project hanteert [Semantic Versioning](https://semver.org/lang/nl/),
en commit-berichten volgen grotendeels de stijl van [Conventional Commits](https://www.conventionalcommits.org/nl/v1.0.0/).

---

## [1.2.0] - 2026-03-31

### Added
- bronlink voor Google in de update-banner (onderzoek Volkskrant & Telegraaf)

### Changed
- code uitgesplitst in aparte bestanden: script.js, style.css
- alle code-identifiers omgezet naar Engels met consistente conventies
  (camelCase voor JS, kebab-case voor HTML IDs en CSS)
- interne form-values omgezet naar Engels (bezwaar/wissen/inzage/beide vervallen)
- donatie-knop verplaatst naar footer, minder prominent
- UI rustigere kleuren, geen emoji
- documentatie herschreven: README, CONTRIBUTING, DEPLOYMENT en CHANGELOG ingekort
  en opgeschoond; veel herhaalde, lange en overbodige tekst verwijderd
- REPO-OVERVIEW.md verwijderd

### Fixed
- Microsoft: privacy@microsoft.com bouncet, vervangen door formulier ([#1](https://github.com/Apolloccrypt/nl-data-optout/issues/1))
- Pinterest: privacy@pinterest.com bouncet, vervangen door formulier ([#2](https://github.com/Apolloccrypt/nl-data-optout/issues/2))
- DPG Media: privacy@dpgmedia.nl bouncet, vervangen door privacy-rights formulier ([#3](https://github.com/Apolloccrypt/nl-data-optout/issues/3))
- Bol.com: privacy@bol.com bouncet, ingesteld als login-only ([#4](https://github.com/Apolloccrypt/nl-data-optout/issues/4))
- broken Medium URLs vervangen door https://medium.com/@mick.ronan.beer
- LinkedIn URL gecorrigeerd naar https://www.linkedin.com/in/mick-beer/
- lege result-div werd getoond als groene balk (#result:empty hidden)
- CHANGELOG liep tot v1.1.0 terwijl de site al v1.1.1 toonde
- links naar CHANGELOG.md en LICENSE in footer zijn nu relatief

---

## [1.1.1] - 2026-03-22

### Fixed
- Xandr: privacy@xandr.com bouncet, vervangen door Microsoft privacy formulier
- SmartOcto: privacy@smartocto.com bouncet, vervangen door dpo@smartocto.com
- ontbrekende komma's in de brokers array veroorzaakten parse-fouten
- Xandr en SmartOcto misten een category-veld
- diverse contactadressen bijgewerkt

### Added
- notitie bij Xandr: 0% GDPR response rate (noyb 2024)

---

## [1.1.0] - 2026-03-21

### Added
- detectie van bedrijven die geen email meer accepteren, met formulier-instructies
- waarschuwingsbanner voor bedrijven met speciale instructies
- 60+ brokers (was 25)
- categorieteller in de dropdown
- dark pattern waarschuwing bij formulier-vereiste bedrijven
- kopieer-naar-clipboard knop
- GitHub Issue templates (broken contact, feature request)

### Changed
- broker objectstructuur uitgebreid met note, isForm en formUrl velden
- email template opmaak verbeterd
- footer met versienummer en changelog link

### Fixed
- Meta: datarequests@support.facebook.com vervangen door formulier
- JavaScript escaping voor backticks en dollar signs in clipboard copy
- weergave op kleine schermen

---

## [1.0.0] - 2026-03-20

### Added
- eerste release met 25 Nederlandse data brokers
- GDPR Art. 21 (bezwaar), Art. 17 (wissen), Art. 15 (inzage)
- categorieen: Credit Bureaus, Ad-Tech, Media, Telecom, Retail
- "ander bedrijf" optie voor handmatige invoer
- alles lokaal, geen server
- MIT licentie
- GitHub Pages hosting

# Changelog

Alle noemenswaardige wijzigingen aan dit project worden in dit bestand bijgehouden.

Het formaat is gebaseerd op [Keep a Changelog](https://keepachangelog.com/nl/1.1.0/),
dit project hanteert [Semantic Versioning](https://semver.org/lang/nl/),
en commit-berichten volgen grotendeels de stijl van [Conventional Commits](https://www.conventionalcommits.org/nl/v1.0.0/).

---

## [2.0.2] - 2026-04-19

### Changed
- dubbele GitHub Actions workflow verwijderd (`deploy.yml` conflicteerde met `hugo.yml`)
- alle Actions gepind op SHA-hash voor reproduceerbare en veilige builds
- Actions bijgewerkt naar nieuwste versies: `checkout` v6.0.2, `upload-pages-artifact` v5.0.0, `deploy-pages` v5.0.0
- `baseURL` wordt nu dynamisch berekend via `GITHUB_REPOSITORY_OWNER` en `GITHUB_REPOSITORY`, zodat forks automatisch de juiste paden genereren
- `renovate.json` verwijderd (vereist extern mend.io account); Dependabot beheert voortaan dependency-updates
- Bootstrap bijgewerkt van 5.3.3 naar 5.3.8
- Bootstrap Icons bijgewerkt van 1.11.3 naar 1.13.1
- dubbele AppNexus (Xandr) entry verwijderd uit brokerlijst; de uitgebreide Xandr-entry was al correct en compleet

---

## [2.0.1] - 2026-04-10

### Changed
- visuele stijl gelijkgetrokken met [mickbeer.com](https://mickbeer.com)
- contrast en kleurproblemen opgelost: donate-knop, dark mode kleurtokens, taalschakelaar separator
- footer ingekort: toont nu alleen versienummer en datum

---

## [2.0.0] - 2026-04-10

### Changed
- volledige herbouw als Hugo statische site (van losse index.html naar Hugo-template systeem)
- meertalige ondersteuning: Nederlands (standaard) en Engels via Hugo i18n
- nieuwe visuele stijl geïnspireerd op [mickbeer.com](https://mickbeer.com): crème achtergrond, Playfair Display serif headings, amber accenten
- GitHub Pages URL: `https://apolloccrypt.github.io/nl-data-optout/`
- footer uitgebreid: changelog-link, versienummer, donatie-knop, LinkedIn en Medium links
- donatie-knop (Buy me a coffee) in footer van elke pagina
- GitHub Actions workflow bijgewerkt voor Hugo deploy op push naar `main`
- "Over dit project" sectie uitgebreid met toelichting over reikwijdte: NL-markt + buitenlandse partijen actief in Nederland
- alle UI-strings in script.js tweetalig (Nederlands/Engels) via `window.SITE_LANG`

### Fixed
- broker-teller toont correct "Nederlandse data brokers"

---

## [1.2.1] - 2026-04-06

- Wayback Machine / Internet Archive toegevoegd als data broker
- NL/EN taalschakelaar bij e-mail generatieknop
- Broker-teller gecorrigeerd naar "Nederlandse data brokers"

---

## [1.2.0] - 2026-03-31

- Code uitgesplitst in script.js en style.css
- Identifiers omgezet naar Engels (camelCase JS, kebab-case HTML/CSS)
- Microsoft ([#1](https://github.com/Apolloccrypt/nl-data-optout/issues/1)), Pinterest ([#2](https://github.com/Apolloccrypt/nl-data-optout/issues/2)), DPG Media ([#3](https://github.com/Apolloccrypt/nl-data-optout/issues/3)) omgezet naar formulier; Bol.com ([#4](https://github.com/Apolloccrypt/nl-data-optout/issues/4)) login-only
- Documentatie (README, CONTRIBUTING, DEPLOYMENT, CHANGELOG) ingekort

---

## [1.1.1] - 2026-03-22

- Xandr en SmartOcto contactadressen gecorrigeerd (bouncende e-mails)
- Xandr: 0% GDPR response rate toegevoegd (noyb 2024)
- Parse-fouten in brokers array opgelost

---

## [1.1.0] - 2026-03-21

- 60+ brokers (was 25), verdeeld in categorieen met teller
- Formulierdetectie met waarschuwingsbanner en dark pattern notitie
- Kopieer-naar-klembord knop
- Meta omgezet naar formulier

---

## [1.0.0] - 2026-03-20

- Eerste release: 25 NL data brokers, Art. 15/17/21, lokaal, MIT

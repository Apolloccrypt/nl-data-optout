# NL Data Brokers Opt-Out Tool

Tool voor het versturen van GDPR-verzoeken naar Nederlandse data brokers.

**Live: [apolloccrypt.github.io/nl-data-optout](https://apolloccrypt.github.io/nl-data-optout/)**

[![Preview](preview.avif)](https://apolloccrypt.github.io/nl-data-optout/)

## Gebruik

1. Vul naam en emailadres in
2. Selecteer een bedrijf
3. Kies het type verzoek (bezwaar, wissen, inzage, of beide)
4. Klik "Genereer e-mail"


### Ontwikkelen en bouwen

Deze site gebruikt [Hugo](https://gohugo.io/) als static site generator. Voor lokale ontwikkeling:

1. Installeer Hugo (extended versie aanbevolen)
2. Clone deze repo
3. Start een lokale server met:
	```
	hugo server
	```
4. Of bouw de site voor productie met:
	```
	hugo --minify --baseURL "https://apolloccrypt.github.io/nl-data-optout/"
	```

De output verschijnt in de map `public/`. Open `public/index.html` direct in je browser om te testen.

### Automatische deployment

Bij elke push naar `main` wordt de site automatisch gebouwd en gedeployed naar GitHub Pages via een [GitHub Actions workflow](.github/workflows/deploy.yml). Hierbij wordt de baseURL altijd geforceerd naar de upstream URL (`https://apolloccrypt.github.io/nl-data-optout/`), zodat alle links en assets correct werken.

**Let op:** Alleen de inhoud van `public/` wordt gepubliceerd. De maintainer hoeft niets aan te passen aan zijn GitHub Pages-instellingen.

Wil je bijdragen? Zie [CONTRIBUTING.md](CONTRIBUTING.md).

## Achtergrond

In maart 2026 testte ik 5 Nederlandse nieuwssites op cookie compliance. NU.nl bleek 104 van 121 ad-partners niet bij naam te noemen. NOS.nl plaatst cookies voor de banner verschijnt. Google staat op elke geteste site.

Onderzoek: https://medium.com/@mick.ronan.beer

## Ondersteunde bedrijven

60+ bedrijven verdeeld over credit bureaus, ad-tech, media, telecom, retail, analytics en marketing clouds. Zie `static/js/script.js` voor de volledige lijst. Er is ook een "ander bedrijf" optie voor handmatige invoer.

## Privacy

Alles draait lokaal. Geen server, geen opslag, geen tracking. De tool genereert alleen tekst, jij verstuurt de mail dus zelf.

## Bijdragen

Zie [CONTRIBUTING.md](CONTRIBUTING.md). Verouderd contactadres of bug? Open een [issue](https://github.com/Apolloccrypt/nl-data-optout/issues).

## Licentie

MIT. Zie [LICENSE](LICENSE).

## Contact

Mick Beer — https://mickbeer.com — https://www.linkedin.com/in/mick-beer/

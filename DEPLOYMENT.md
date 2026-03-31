# Deployment

Live site: https://apolloccrypt.github.io/nl-data-optout/

GitHub Pages bouwt automatisch vanuit de `main` branch. Na een push duurt het
ongeveer een minuut voordat de wijziging live is.

## Broker toevoegen

Voeg een entry toe aan de `brokers` array in script.js:

```javascript
{ name: "Bedrijfsnaam", email: "privacy@bedrijf.nl", category: "Ad-Tech & Tracking" }
```

Als een bedrijf alleen een formulier accepteert:

```javascript
{
  name: "Bedrijfsnaam",
  email: "FORM_REQUIRED",
  formUrl: "https://bedrijf.nl/privacy-form",
  category: "Ad-Tech & Tracking",
  note: "Email werkt niet meer. Formulier vereist.",
  isForm: true
}
```

## Versie bijwerken

1. Versienummer en datum aanpassen in de footer van index.html
2. Entry toevoegen aan CHANGELOG.md
3. Committen en pushen

## Testen

Open index.html lokaal in de browser voor je pusht. Geen server nodig.

## Rollback

```bash
git revert HEAD
git push origin main
```

## Contact

https://github.com/Apolloccrypt/nl-data-optout/issues
https://www.linkedin.com/in/mick-beer/

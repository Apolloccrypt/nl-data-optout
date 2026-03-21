# 🛡️ NL Data Brokers Opt-Out Tool

**Genereer GDPR-verzoeken (Art. 21, 17, 15) naar 50+ Nederlandse data brokers in 2 minuten.**

🔗 **Live Tool:** https://apolloccrypt.github.io/nl-data-optout/

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Version](https://img.shields.io/badge/version-1.1.0-green.svg)
![Status](https://img.shields.io/badge/status-active-success.svg)

---

## 📋 Inhoudsopgave

- [Over dit project](#over-dit-project)
- [Features](#features)
- [Gebruik](#gebruik)
- [Ondersteunde Bedrijven](#ondersteunde-bedrijven)
- [Privacy & Veiligheid](#privacy--veiligheid)
- [Juridische Basis](#juridische-basis)
- [Bijdragen](#bijdragen)
- [Licentie](#licentie)
- [Contact](#contact)

---

## 🎯 Over dit project

Deze tool helpt Nederlandse burgers hun **GDPR-rechten** uit te oefenen tegenover data brokers, ad-tech bedrijven, telecom providers en retailers.

**Achtergrond:**  
In maart 2026 testte ik 5 Nederlandse nieuwssites op cookie compliance. Bevindingen:
- **NU.nl:** 121 trackers, maar **104 partners niet bij naam genoemd**
- **NOS.nl:** Pre-consent tracking (cookies **vóór** banner)
- **Google:** Aanwezig op **100% van de geteste sites**

**Probleem:** Als je niet weet welke bedrijven je data hebben, kun je je rechten niet uitoefenen.

**Oplossing:** Deze tool.

📚 **Volledig onderzoek:** https://medium.com/p/75744f8645c6

---

## ✨ Features

- ✅ **50+ Nederlandse data brokers** (ad-tech, credit bureaus, retail, telecom, media)
- ✅ **GDPR Art. 21** (bezwaar), **Art. 17** (wissen), **Art. 15** (inzage)
- ✅ **100% lokaal** – geen server, geen data-opslag, geen tracking
- ✅ **Open source** (MIT license)
- ✅ **Meta formulier-fix** – detecteert bedrijven die email vervingen door formulieren
- ✅ **Notes systeem** – waarschuwt voor AP boetes, dark patterns, pre-consent tracking
- ✅ **Categorieën** – credit bureaus, ad-tech, telecom, retail, media, analytics

---

## 🚀 Gebruik

### **Online (aanbevolen):**

1. Ga naar https://apolloccrypt.github.io/nl-data-optout/
2. Vul je naam en email in
3. Selecteer een bedrijf
4. Kies verzoek type (bezwaar, wissen, inzage, of beide)
5. Klik "Genereer bezwaarmail"
6. Open in je mailprogramma of kopieer de tekst

**Tijd:** 2 minuten per bedrijf

---

### **Lokaal draaien:**

```bash
git clone https://github.com/Apolloccrypt/nl-data-optout.git
cd nl-data-optout
# Open index.html in je browser (geen server nodig)
```

---

## 🏢 Ondersteunde Bedrijven (60+)

### **Credit Bureaus (6)**
- Experian Nederland (€2.7M AP boete 2025)
- Graydon, Creditsafe, Focum BV, Dun & Bradstreet, Bisnode

### **Ad-Tech & Tracking (27)**
- Google (100% aanwezig op NL sites)
- Criteo (80% aanwezig)
- Index Exchange (80% aanwezig)
- Meta/Facebook ⚠️ (formulier vereist sinds maart 2026)
- TikTok, LinkedIn, Twitter/X, Snapchat, Pinterest
- Amazon Ads, The Trade Desk, Magnite, PubMatic, OpenX
- Outbrain, Taboola, Xandr, AppNexus, AdForm, Sizmek
- MediaMath

### **Media & Publishers (6)**
- DPG Media (NU.nl, AD.nl) – 104 van 121 partners niet genoemd
- NPO/NOS – pre-consent tracking
- RTL Nederland, Sanoma, Mediahuis, Talpa

### **Telecom (7)**
- KPN, VodafoneZiggo, T-Mobile/Odido, Tele2
- Youfone, Simyo, Lebara

### **Retail & E-Commerce (10)**
- Kruidvat (€600k AP boete cookie wall)
- Coolblue (€40k AP boete pre-consent)
- Bol.com (best practice: 100% disclosure)
- Albert Heijn, Wehkamp, Zalando, HEMA, Action, MediaMarkt, Jumbo

### **Analytics (6)**
- Smartocto/Content Insights (gebruikt door NOS)
- Piano, Comscore, Nielsen, Chartbeat

### **Marketing Clouds (5)**
- Salesforce, Adobe, Oracle, HubSpot, Mailchimp

**+ "Ander bedrijf" optie** voor handmatige invoer

Volledige lijst: zie `index.html` regel 119-180

---

## 🔒 Privacy & Veiligheid

### **100% Lokaal**
- Geen server-side code
- Geen data-opslag
- Geen cookies
- Geen tracking
- Geen third-party scripts

### **Open Source**
- Volledige broncode beschikbaar
- Auditeerbaar (200 regels JavaScript)
- MIT License (vrij te gebruiken)

### **Hoe het werkt:**
1. JavaScript draait lokaal in je browser
2. Template wordt gegenereerd (client-side)
3. `mailto:` link opent je mail-app
4. **JIJ** verstuurt de mail (niet de tool)

**De tool stuurt NIETS zelf** – het genereert alleen tekst voor jou.

---

## ⚖️ Juridische Basis

### **GDPR Rechten:**

**Art. 21 - Recht op bezwaar:**
> "Je kunt bezwaar maken tegen verwerking voor direct marketing, profiling en tracking."

**Art. 17 - Recht om vergeten te worden:**
> "Je kunt verwijdering van je gegevens eisen als er geen wettelijke bewaarplicht is."

**Art. 15 - Recht op inzage:**
> "Je kunt opvragen welke persoonsgegevens een bedrijf van jou verwerkt."

### **Reactietermijn:**
Bedrijven hebben **1 maand** om te reageren (Art. 12 GDPR).

### **Bij weigering:**
- Vraag gemotiveerde uitleg
- Dien klacht in bij [Autoriteit Persoonsgegevens](https://autoriteitpersoonsgegevens.nl/nl/zelf-doen/privacyrechten/melden)

### **Precedenten:**
- **Experian:** €2.7M boete (oktober 2025) – vendors niet bij naam
- **Kruidvat:** €600k boete – cookie wall
- **Coolblue:** €40k boete – pre-consent tracking

---

## 🛠️ Technologie

- **HTML5** – structuur
- **Vanilla JavaScript** – geen frameworks
- **CSS3** – styling
- **GitHub Pages** – hosting

**Geen build step, geen dependencies, geen npm.** Gewoon HTML/CSS/JS.

---

## 🐛 Bug Melden?

### **Contact veranderd?**
Als een bedrijf zijn privacy-email heeft gewijzigd, [open een Issue](https://github.com/Apolloccrypt/nl-data-optout/issues/new?template=broken-contact.md).

**Voorbeeld:** Meta/Facebook verving `datarequests@support.facebook.com` met een formulier in maart 2026. Gebruiker Tobias L. meldde dit → fix binnen 24u.

### **Nieuw bedrijf toevoegen?**
Open een [Feature Request](https://github.com/Apolloccrypt/nl-data-optout/issues/new?template=feature-request.md) met:
- Bedrijfsnaam
- Privacy email (meestal `privacy@bedrijf.nl`)
- Categorie

---

## 🤝 Bijdragen

Bijdragen welkom! Zie [CONTRIBUTING.md](CONTRIBUTING.md) voor richtlijnen.

### **Pull Requests:**
- Update `brokers` array in `index.html`
- Test lokaal (open `index.html` in browser)
- Update `CHANGELOG.md`
- Submit PR

### **Community:**
- [GitHub Issues](https://github.com/Apolloccrypt/nl-data-optout/issues)
- [LinkedIn: Mick Beer](https://linkedin.com/in/mick-beer)

---

## 📊 Impact

**Doel:** Als 1000 mensen dit gebruiken = 10.000 GDPR-verzoeken verstuurd.

**Kosten voor bedrijven:** €50 per verzoek (handmatige verwerking) = **€500.000 overhead**.

**Effect:** Bij €500k wordt massale tracking economisch onhoudbaar.  
→ Bedrijven moeten kiezen: **transparanter worden** of **stoppen**.

**Collectieve actie werkt.** 💪

---

## 📜 Licentie

**MIT License** – vrij te gebruiken, aanpassen, distribueren.

Zie [LICENSE](LICENSE) voor details.

---

## 📞 Contact

**Maker:** Mick Beer  
**LinkedIn:** https://linkedin.com/in/mick-beer  
**GitHub:** https://github.com/Apolloccrypt  

**Onderzoek:**  
- [Medium artikel](https://medium.com/p/75744f8645c6) (volledig onderzoek)
- [LinkedIn post](https://linkedin.com/posts/mick-beer_nl-data-brokers-opt-out-tool-activity-7441146526682202112-F_v7)

---

## ⚠️ Disclaimer

**Dit is GEEN juridisch advies.**

Deze tool helpt bij uitoefenen GDPR-rechten. Raadpleeg privacy-advocaat of [Autoriteit Persoonsgegevens](https://autoriteitpersoonsgegevens.nl) bij twijfel.

Maker niet aansprakelijk voor gebruik. Eigen verantwoordelijkheid.

Voor juridisch advies: advocaat of AP.

---

## 🌟 Support dit project

**Vind je dit nuttig?**

- ⭐ **Star deze repo** op GitHub
- 🔄 **Deel** met vrienden/familie
- 📢 **Post** op social media
- 🐛 **Meld bugs** via Issues
- 💡 **Voeg bedrijven toe** via PR

**Samen maken we tracking transparanter.** 🛡️

---

## 📚 Bronnen

- [GDPR volledige tekst](https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32016R0679)
- [ePrivacy Richtlijn](https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX:32002L0058)
- [AP Cookie Richtsnoeren](https://autoriteitpersoonsgegevens.nl/themas/internet-telefoon-post/cookies)
- [CJEU Planet49 (C-673/17)](https://curia.europa.eu/juris/document/document.jsf?docid=218462)

---

<p align="center">Made with ❤️ for privacy • Open Source • Community-Driven</p>
<p align="center">v1.1.0 • Last update: March 21, 2026</p>

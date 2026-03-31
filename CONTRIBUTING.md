# Contributing to NL Data Brokers Opt-Out Tool

Thanks for your interest in improving this tool! 🙏

We welcome contributions from the community. Here's how you can help:

---

## 🐛 Reporting Bugs

### Contact Email Changed?
If a broker's privacy email no longer works:

1. [Open an Issue](https://github.com/Apolloccrypt/nl-data-optout/issues/new?template=broken-contact.md)
2. Include:
   - Broker name
   - Old email (if known)
   - New email or contact method
   - How you discovered this (bounce, company website, etc.)

**We aim to fix contact changes within 24-48 hours.**

---

## ✨ Adding New Brokers

Want to add a data broker to the list?

### Requirements:
- Dutch company OR active in Netherlands
- Processes personal data of Dutch citizens
- Has public privacy contact (email or form)

### How to add:

**Option 1: Issue (easiest)**
1. [Open a Feature Request](https://github.com/Apolloccrypt/nl-data-optout/issues/new?template=feature-request.md)
2. Include:
   - Company name
   - Privacy email (usually `privacy@company.nl`)
   - Category (Credit Bureau / Ad-Tech / Telecom / Retail / Media / Analytics / Marketing)
   - Optional: Why it's relevant (e.g., "Used by 5+ Dutch news sites")

**Option 2: Pull Request (advanced)**
1. Fork this repo
2. Edit `index.html` (around line 119)
3. Add broker to `brokers` array:
   ```javascript
   { 
     name: "Company Name", 
     email: "privacy@company.nl", 
     category: "Ad-Tech & Tracking",
     note: "Optional note (e.g., 'Used by XYZ site')"
   },
   ```
4. Test locally (open `index.html` in browser)
5. Update `CHANGELOG.md`
6. Submit PR

---

## 🔧 Code Contributions

### Tech Stack:
- HTML5 (structure)
- Vanilla JavaScript (no frameworks!)
- CSS3 (styling)

**No build step required** – just edit and open in browser.

### Code Style:
- Use existing formatting
- Add comments for complex logic
- Keep JavaScript simple (accessible to non-devs)
- No external dependencies (keep it 100% local)

### Pull Request Process:
1. Fork repo
2. Create feature branch (`git checkout -b feature/new-broker`)
3. Make changes
4. Test locally (open `index.html` in multiple browsers)
5. Update `CHANGELOG.md` (add to `[Unreleased]` section)
6. Commit with clear message (`Add broker: CompanyName`)
7. Push to fork
8. Open Pull Request

**We review PRs within 1-3 days.**

---

## 📝 Documentation

Help improve docs:
- Fix typos in README
- Clarify usage instructions
- Add examples
- Translate (future: English version)

---

## 🌍 Internationalization

**Future goal:** Support EU-wide brokers.

Interested in creating an English version or adding international brokers?  
Open a Discussion or Issue to coordinate!

---

## 🚫 What We Don't Accept

- External dependencies (jQuery, React, npm packages)
- Server-side code (keep it 100% client-side)
- Tracking/analytics scripts
- Non-privacy-related brokers
- Malicious code or spam

---

## 💬 Community

- **GitHub Issues:** Bug reports, feature requests
- **GitHub Discussions:** General questions, ideas
- **LinkedIn:** [@mickbeer](https://www.linkedin.com/in/mick-beer/) – DM for complex questions

---

## 🏆 Recognition

Contributors are credited in:
- `CHANGELOG.md`
- README (if significant contribution)

---

## ⚖️ Legal

By contributing, you agree:
- Your contributions are your own work
- You grant this project rights to use your contribution under MIT License
- No guarantee of merge (we review all PRs)

---

## 🎯 Priority Issues

Looking for where to help? Check these:

**High Priority:**
- ![high-priority](https://img.shields.io/badge/-high%20priority-red) labels
- Contact changes (broken emails)
- Security issues

**Good First Issues:**
- ![good-first-issue](https://img.shields.io/badge/-good%20first%20issue-green) labels
- Adding new brokers
- Documentation improvements

---

## 📞 Questions?

Not sure how to contribute? Open an Issue or DM [@mickbeer](https://www.linkedin.com/in/mick-beer/) on LinkedIn.

**We're friendly and help new contributors!** 👋

---

<p align="center">Thanks for helping make tracking more transparent! 🛡️</p>

# 🚀 Deployment & Update Guide

## Quick Reference

**Live site:** https://apolloccrypt.github.io/nl-data-optout/  
**Repository:** https://github.com/Apolloccrypt/nl-data-optout

---

## 📦 File Structure

```
nl-data-optout/
├── index.html              # Main tool (all-in-one file)
├── README.md               # Documentation
├── CHANGELOG.md            # Version history
├── CONTRIBUTING.md         # Contribution guidelines
├── LICENSE                 # MIT License
├── .gitignore             # Git ignore rules
└── .github/
    └── ISSUE_TEMPLATE/
        ├── config.yml      # Issue template config
        ├── broken-contact.md
        ├── feature-request.md
        └── bug-report.md
```

---

## 🔄 How to Update

### **Option 1: GitHub Web Interface (Easiest)**

1. Go to https://github.com/Apolloccrypt/nl-data-optout
2. Click on `index.html`
3. Click "Edit" (pencil icon)
4. Make changes
5. Scroll down → "Commit changes"
6. Add commit message (e.g., "Add broker: CompanyName")
7. Commit directly to `main` branch
8. **Wait 1-2 minutes** → Changes live at https://apolloccrypt.github.io/nl-data-optout/

---

### **Option 2: Git Command Line**

```bash
# Clone repo
git clone https://github.com/Apolloccrypt/nl-data-optout.git
cd nl-data-optout

# Make changes (edit index.html)

# Test locally
open index.html  # macOS
xdg-open index.html  # Linux
start index.html  # Windows

# Commit
git add .
git commit -m "Add broker: CompanyName"
git push origin main

# Wait 1-2 minutes for GitHub Pages to rebuild
```

---

## ✏️ Common Updates

### **Adding a Broker**

Edit `index.html` around line 119:

```javascript
const brokers = [
  // ... existing brokers ...
  
  { 
    name: "New Company", 
    email: "privacy@newcompany.nl", 
    category: "Ad-Tech & Tracking",
    note: "Optional note about this broker"  // Optional
  },
];
```

**Don't forget:**
1. Update `CHANGELOG.md` (add to `[Unreleased]` section)
2. Test locally (open index.html in browser)
3. Commit with clear message

---

### **Fixing a Contact**

Find the broker in `index.html` (around line 119-180):

**Email changed:**
```javascript
// OLD
{ name: "Company", email: "old@company.nl", category: "Ad-Tech" }

// NEW
{ name: "Company", email: "new@company.nl", category: "Ad-Tech" }
```

**Email replaced by form:**
```javascript
{ 
  name: "Company ⚠️", 
  email: "FORM_REQUIRED",
  formUrl: "https://company.com/contact-form",
  category: "Ad-Tech",
  note: "Email werkt niet meer sinds [datum]. Formulier vereist.",
  isForm: true
}
```

---

### **Updating Version**

When releasing new version:

1. **index.html** (line ~136): Update version comment
   ```html
   <p>v1.2.0 • Laatste update: [datum]</p>
   ```

2. **CHANGELOG.md**: Move `[Unreleased]` to new `[1.2.0] - YYYY-MM-DD`

3. **README.md**: Update version badge and "Last update" footer

4. Commit: `git commit -m "Release v1.2.0"`

5. Tag: `git tag v1.2.0 && git push --tags`

---

## 🧪 Testing

### **Before Pushing:**

1. **Open `index.html` locally** in browser
2. **Test broker selection** (pick 3-5 brokers)
3. **Generate email** (check template looks correct)
4. **Test "Andere" option** (manual entry)
5. **Test form-required broker** (e.g., Meta)
6. **Check mobile** (resize browser window to 375px width)

### **After Pushing:**

1. Wait 1-2 minutes for GitHub Pages
2. Visit https://apolloccrypt.github.io/nl-data-optout/
3. Hard refresh (Ctrl+F5 / Cmd+Shift+R)
4. Test 1-2 brokers to confirm changes live

---

## 📊 Monitoring

### **GitHub Actions**

GitHub Pages auto-builds from `main` branch.  
Check build status: https://github.com/Apolloccrypt/nl-data-optout/actions

### **Analytics** (None!)

This tool has **NO analytics** – 100% privacy.  
Monitor via:
- GitHub star count
- Issue activity
- LinkedIn post engagement

---

## 🐛 Rollback

If you pushed a bug:

```bash
# Revert last commit
git revert HEAD
git push origin main

# Or reset to previous commit (DANGEROUS - only if just pushed)
git reset --hard HEAD~1
git push --force origin main
```

**Better:** Fix forward (commit a fix) rather than rollback.

---

## 🔒 Security

### **No Server = No Server-Side Security Issues**

This is a **static site** – no backend, no database, no API.

**Security concerns:**
- XSS: Minimal risk (no user-generated content rendered)
- Data leaks: Impossible (100% client-side)
- Dependencies: None (no npm packages)

**If security issue found:**
1. Open Issue with `security` label
2. Or DM @mickbeer on LinkedIn
3. Fix ASAP + announce in CHANGELOG

---

## 📞 Need Help?

- **GitHub Issues:** Bug reports, questions
- **LinkedIn:** [@mickbeer](https://linkedin.com/in/mick-beer)
- **Email:** Via LinkedIn (no public email to avoid spam)

---

## ✅ Pre-Launch Checklist

Before announcing updates:

- [ ] Tested locally (multiple browsers)
- [ ] Updated CHANGELOG.md
- [ ] Version number incremented (if appropriate)
- [ ] Pushed to GitHub
- [ ] Confirmed live site updated (1-2 min wait)
- [ ] Tested live site (hard refresh)
- [ ] Mobile test
- [ ] Announced on LinkedIn (if major update)

---

<p align="center">Happy deploying! 🚀</p>

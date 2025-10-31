# 🚀 QUICKSTART.md - 15-Minute Setup Guide

**Get your workflow monetization system live in 15 minutes.**

---

## ✅ Prerequisites 
- GitHub account (free hosting)
- Cloudflare account (free API proxy)  
- Gumroad account (payments)
- n8n or Make.com account (workflows)
- 15 minutes focused time

---

## ⚡ Step 1: Customize Your Template (5 minutes)

**Each file has a search pattern checklist at the top. Simply:**
1. **Open each file** in your code editor
2. **Follow the checklist** using Find/Replace (Ctrl+H) 
3. **Search for EXACT strings** and replace with your values

**✅ Required files:**
- `index.html` - Service name, URLs, form labels
- `assets/js/main.js` - Worker URLs, timezone  
- `assets/js/reviews.js` - Google Sheets ID, form URL
- `assets/js/discord-widget.js` - Discord invite URL
- `backend/cloudflare-workers/webhook-handler.js` - Backend URL

**📝 Optional files:** CSS files for colors/branding (defaults work great)

---

## 🚀 Step 2: Deploy Frontend (3 minutes)

1. **Push to GitHub** repository
2. **Repository Settings** → Pages → Deploy from `main` branch  
3. ✅ **Test:** Visit `https://yourusername.github.io/repo-name`

---

## 🔗 Step 3: Deploy API Proxy (4 minutes)

1. **Go to** [workers.cloudflare.com](https://workers.cloudflare.com)
2. **Create Worker** → Copy-paste `webhook-handler.js` content
3. **Replace** `YOUR_BACKEND_URL_HERE` with your n8n webhook URL
4. **Deploy** and copy your worker URL
5. ✅ **Test:** Visit `https://your-worker.workers.dev`

---

## 🔧 Step 4: Import n8n Workflows (3 minutes)

**Import the included workflows in this order:**

1. **`backend/n8n-workflows/license-validator.json`**
   - Validates Gumroad purchases
   - Configure: Add your Gumroad seller credentials

2. **`backend/n8n-workflows/main-processor.json`**  
   - Your core business logic
   - Configure: Customize for your specific workflow

3. **`backend/n8n-workflows/email-notifier.json`**
   - Sends completion emails
   - Configure: Add your email service credentials

**Import steps:** n8n → Import → Upload JSON → Configure credentials → Activate

---

## 🧪 Step 5: Final Test (2 minutes)

- [ ] ✅ Frontend loads without errors
- [ ] ✅ Free trial generates and works
- [ ] ✅ Paid submission processes correctly
- [ ] ✅ Email notifications sent

---

## 🚨 Common Issues & Quick Fixes

| Problem | Quick Fix |
|---------|-----------|
| Site shows 404 | Enable GitHub Pages: Settings → Pages |
| Worker error | Check `YOUR_BACKEND_URL_HERE` is replaced |
| n8n webhook fails | Verify webhook URL is publicly accessible |
| Emails not sending | Check SMTP credentials in email-notifier workflow |

---

## 🎉 You're Live & Earning!

**Complete system includes:**
- ✅ Professional frontend with anti-abuse
- ✅ Payment processing & validation  
- ✅ Working n8n workflow examples
- ✅ Email notification system
- ✅ Google Sheets review integration
- ✅ Everything needed to start earning

**No consulting needed - everything is included and documented.**

---

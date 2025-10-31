# 🚀 QUICKSTART.md - 15-Minute Setup Guide

**Get your workflow monetization system live in 15 minutes.**

---

## ✅ Prerequisites 
- GitHub account (free hosting)
- Cloudflare account (free API proxy)  
- Gumroad account (payments)
- 15 minutes focused time

---

## ⚡ Step 1: Customize Your Template (5 minutes)

**Each file has a search pattern checklist at the top. Simply:**
1. **Open each file** in your code editor
2. **Follow the checklist** using Find/Replace (Ctrl+H) 
3. **Search for EXACT strings** and replace with your values

**✅ Files to customize:**
- `index.html` - Service name, URLs, form labels
- `assets/js/main.js` - Worker URLs, timezone  
- `assets/js/reviews.js` - Google Sheets ID, form URL
- `assets/js/discord-widget.js` - Discord invite URL
- `backend/cloudflare-workers/webhook-handler.js` - Backend URL

**📝 Optional files:** CSS files for colors/branding (pre-configured defaults work great)

---

## 🚀 Step 2: Deploy Frontend (3 minutes)

1. **Push to GitHub** repository
2. **Repository Settings** → Pages → Deploy from `main` branch  
3. ✅ **Test:** Visit `https://yourusername.github.io/repo-name`

**Expected:** Site loads, form appears, no console errors

---

## 🔗 Step 3: Deploy API Proxy (4 minutes)

1. **Go to** [workers.cloudflare.com](https://workers.cloudflare.com)
2. **Create Worker** → Copy-paste `webhook-handler.js` content
3. **Replace** `YOUR_BACKEND_URL_HERE` with your n8n webhook URL
4. **Deploy** and copy your worker URL
5. ✅ **Test:** Visit `https://your-worker.workers.dev` → Should show "✅ API proxy is running"

---

## 🧪 Step 4: Final Validation (3 minutes)

**Test in this order:**
- [ ] ✅ Frontend loads without errors (F12 console check)
- [ ] ✅ "Try once for free" button works (opens modal)
- [ ] ✅ Free trial generates key successfully  
- [ ] ✅ Main form accepts trial key and processes

**🚨 Issues?** Check browser console for specific error messages.

---

## 🚨 Common Issues & Quick Fixes

| Problem | Quick Fix | Check This |
|---------|-----------|------------|
| Site shows 404 error | Enable GitHub Pages in repo settings | Settings → Pages → Deploy from main |
| "Try once for free" does nothing | VPN detection failed or backend URL wrong | Check browser console (F12) |
| Form submission fails | Cloudflare Worker not configured | Test worker URL directly |
| Worker shows "Service Unavailable" | Backend URL not replaced | Check `YOUR_BACKEND_URL_HERE` in webhook-handler.js |
| Reviews section empty | Google Sheets not public or wrong ID | Share sheet → Anyone with link can view |
| VPN always detected | Normal for some networks/locations | Customers can still use paid version |

---

## 🔧 Success Validation Checklist

### ✅ Technical Setup Complete
- [ ] Frontend deployed and accessible at GitHub Pages URL
- [ ] Cloudflare Worker responding with "✅ API proxy is running"
- [ ] Free trial modal opens and generates keys
- [ ] Main form accepts input and submits without errors
- [ ] Browser console shows no critical errors (red messages)

### ✅ Business Setup Ready
- [ ] Gumroad product created with clear pricing
- [ ] Payment URLs updated in template
- [ ] Service branding updated (name, descriptions)
- [ ] Discord support server created (optional)

---

## 🎯 You're Live! 

**🎉 Congratulations - your workflow business is operational.**

**Next steps:**
- Connect your n8n workflows to the webhook endpoints
- Set up Google Sheets for reviews (optional)
- Start marketing to your audience

---

## 💰 Ready to Launch Checklist

**Before going live:**
- [ ] Test complete user journey (free trial → paid submission)
- [ ] Verify all "YOUR_" placeholders replaced
- [ ] Check mobile responsiveness 
- [ ] Test payment flow with real transaction
- [ ] Prepare customer support process

**Typical setup time:** 15-20 minutes for technical users, 45-60 minutes for beginners.

---

## 🆘 Getting Help

**Self-help first:**
1. **Check browser console** (F12) for specific error messages
2. **Verify all URLs** replaced correctly (no "YOUR_" remaining)
3. **Test each component** individually (frontend → worker → backend)

**Premium support available:**
- **Technical issues:** Check file-specific search pattern checklists first
- **n8n workflow setup:** Discord consultation available (premium add-on)
- **Business strategy:** 1:1 consultation available (premium add-on)
- **Done-for-you setup:** Complete implementation service available

---

## 📋 What's Included vs Add-ons

**✅ Included in base template:**
- Complete frontend with anti-abuse features
- Cloudflare Worker API proxy
- Payment integration framework
- Search pattern customization system
- This setup guide

**💎 Available as premium add-ons:**
- n8n workflow examples and setup consultation
- Google Sheets review system setup
- Custom branding and design modifications  
- Business strategy and pricing optimization
- Done-for-you complete implementation

---

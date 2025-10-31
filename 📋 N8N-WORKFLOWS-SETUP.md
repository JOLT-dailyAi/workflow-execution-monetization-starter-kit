# 🔧 n8n Workflows Setup Guide

**Import all 4 workflows in this order for best results.**

---

## ⚡ Quick Import (5 minutes)

### **Step 1: Import Workflows**
1. **n8n Dashboard** → Import → Upload JSON files in this order:
   - `gumroad-license-validator.json` (payment validation)
   - `data-capture-github-to-ai-ingester.json` (request intake)
   - `main-processor-your-project-name.json` (core logic)
   - `batch-uploader-github-to-ai-ingester.json` (batch processing)

### **Step 2: Configure Credentials** 
**Set up these credential types (⚠️ icons in workflows):**
- **Gumroad API** - Your seller credentials
- **Discord Bot** - Your bot token  
- **Google Sheets** - Service account or OAuth
- **Gmail** - SMTP or OAuth (optional)
- **GitHub** - Personal access token (optional)

### **Step 3: Update Placeholders**
**Each workflow has placeholder values to replace:**
- `YOUR_GUMROAD_PRODUCT_ID` → Your actual product ID
- `YOUR_DATA_DIRECTORY_PATH` → Your file storage path
- `YOUR_DISCORD_SERVER_ID` → Your Discord server ID
- `YOUR_GOOGLE_SHEETS_DOCUMENT_ID` → Your tracking sheet ID

### **Step 4: Test & Activate**
1. Test each workflow with sample data
2. Activate workflows in order: validator → data-capture → main-processor → batch-uploader
3. Check webhook URLs are accessible from your frontend

---

## 🎯 Workflow Purposes

| Workflow | Purpose | Required? |
|----------|---------|-----------|
| **License Validator** | Validates Gumroad purchases | ✅ Yes |
| **Data Capture** | Handles form submissions | ✅ Yes |
| **Main Processor** | Your core business logic | ✅ Yes |
| **Batch Uploader** | Bulk processing (optional) | ⚪ Optional |

---

## 🔧 Customization Points

**🎯 Main Processor Workflow:**
- **Find node:** `Replace with your main WORKFLOW`
- **Replace with:** Your specific business logic (AI processing, data analysis, etc.)
- **Keep everything else:** File handling, notifications, error management

---

## 🆘 Common Issues

| Problem | Solution |
|---------|----------|
| Webhook 404 errors | Check n8n webhook URLs are publicly accessible |
| Credentials not found | Import credentials before activating workflows |  
| File permission errors | Ensure `YOUR_DATA_DIRECTORY_PATH` is writable |
| Discord not posting | Verify bot has permissions in target channels |

---

**🎉 That's it! Your workflows are ready to process requests and generate revenue.**


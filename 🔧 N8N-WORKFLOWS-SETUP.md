# 🔧 n8n Workflows Setup Guide

**Import all 4 workflows to get your complete workflow monetization system running.**

---

## ⚡ Quick Import (10 minutes)

### **Step 1: Import Workflows in Order**
**Go to n8n Dashboard → Import → Upload JSON files:**

1. **`gumroad-license-validator.json`** 
   - **Purpose:** Validates Gumroad purchases and tracks credits
   - **Required:** ✅ Essential for payment processing

2. **`data-capture-github-to-ai-ingester.json`**
   - **Purpose:** Handles form submissions, free trials, and request intake
   - **Required:** ✅ Essential for frontend integration

3. **`main-processor-your-project-name.json`**
   - **Purpose:** Your core business logic framework with customization placeholder
   - **Required:** ✅ Essential for workflow execution

4. **`batch-uploader-github-to-ai-ingester.json`**
   - **Purpose:** Automated batch processing system (runs every 2 minutes)
   - **Required:** ⚪ Optional for advanced users

---

## 🔧 Step 2: Configure Credentials

**Set up these credential types (look for ⚠️ icons in imported workflows):**

### **Required Credentials:**
- **🔑 Gumroad API**
  - Add your Gumroad seller ID and API credentials
  - Used by: License validator workflow

- **🤖 Discord Bot** 
  - Add your Discord bot token
  - Used by: Data capture, main processor, batch uploader

### **Optional Credentials:**
- **📊 Google Sheets** - Service account or OAuth (for request tracking)
- **📧 Gmail** - SMTP or OAuth (for email notifications)
- **🐙 GitHub** - Personal access token (for repository operations)

---

## 🎯 Step 3: Update Placeholders

**Each workflow contains placeholder values you need to replace:**

### **Core Placeholders (Required):**
| Placeholder | Replace With | Found In |
|-------------|--------------|----------|
| `YOUR_GUMROAD_PRODUCT_ID` | Your actual Gumroad product ID | License validator |
| `YOUR_DATA_DIRECTORY_PATH` | Your file storage path (e.g., `/home/user/data`) | All workflows |
| `YOUR_DISCORD_SERVER_ID` | Your Discord server ID | Data capture, main processor |
| `YOUR_DISCORD_CREDENTIALS_ID` | ID from your Discord credential setup | All Discord nodes |

### **Optional Placeholders:**
| Placeholder | Replace With | Used For |
|-------------|--------------|----------|
| `YOUR_GOOGLE_SHEETS_DOCUMENT_ID` | Your tracking spreadsheet ID | Request logging |
| `YOUR_GOOGLE_CREDENTIALS_ID` | ID from Google credential setup | Sheets integration |
| `YOUR_BOT_LOGS_CHANNEL_ID` | Discord channel for bot logs | System notifications |
| `YOUR_WORKFLOW_ID` | Unique workflow identifier | Lock mechanism |

---

## 🎨 Step 4: Customize Your Business Logic

### **🎯 Main Customization Point:**
**In the `main-processor-your-project-name.json` workflow:**

1. **Find the node:** `Replace with your main WORKFLOW`
2. **Replace it with:** Your specific business logic
   - AI processing (OpenAI, Claude, etc.)
   - Data analysis and transformation
   - API integrations (GitHub, databases, etc.)
   - File processing and generation
   - Custom calculations or operations

3. **Keep everything else:** 
   - ✅ File handling system
   - ✅ Discord notifications
   - ✅ Error management
   - ✅ User communication
   - ✅ Request logging

**💡 The framework handles all the infrastructure - you just add your core value!**

---

## ✅ Step 5: Test & Activate

### **Testing Order:**
1. **License Validator** - Test with a real Gumroad license key
2. **Data Capture** - Submit a test form from your frontend
3. **Main Processor** - Verify your custom logic executes correctly
4. **Batch Uploader** - Check batch processing (if using)

### **Activation:**
- **Activate workflows** in the same order as testing
- **Check webhook URLs** are publicly accessible
- **Verify file permissions** for your data directory
- **Test complete user journey** from frontend to completion

---

## 🎯 Workflow Integration Map
Frontend Form Submission
↓
[Data Capture Workflow]
- Validates free trial keys
- Calls license validator
- Stores request data
- Triggers main processor
↓
[Main Processor Workflow]
- Executes your business logic
- Handles file operations
- Sends notifications
- Logs results
↓
[Batch Uploader] (Optional)
- Processes queued requests
- Bulk operations
- Status updates


---

## 🚨 Common Issues & Solutions

| Problem | Solution |
|---------|----------|
| **"Webhook not found" errors** | • Check n8n webhook URLs are publicly accessible<br>• Update webhook URLs in your frontend |
| **"Credentials not found"** | • Import and configure credentials before activating workflows<br>• Match credential IDs in placeholder replacement |
| **File permission errors** | • Ensure `YOUR_DATA_DIRECTORY_PATH` exists and is writable<br>• Check folder permissions (755 or 777) |
| **Discord messages not posting** | • Verify bot has permissions in target channels<br>• Check Discord server and channel IDs are correct |
| **Gumroad validation failing** | • Verify product ID is correct<br>• Check Gumroad API credentials |
| **Workflows not triggering** | • Ensure workflows are activated<br>• Check webhook URLs match frontend configuration |

---

## 📁 Recommended Directory Structure

YOUR_DATA_DIRECTORY_PATH/
├── incoming/ # New requests from frontend
├── processing/ # Currently being processed
├── completed/ # Successfully processed
├── failed/ # Failed processing attempts
├── FreeTrialKeys/ # Trial key management
├── showcase/ # Display data for frontend
└── logs/ # System logs (optional)


**Create these directories before activating workflows for smooth operation.**

---

## 🎉 You're Ready!

**Once configured, your system will:**
- ✅ Accept form submissions from your frontend
- ✅ Validate payments and manage credits
- ✅ Process requests with your custom logic
- ✅ Send notifications and track results
- ✅ Handle errors gracefully
- ✅ Generate revenue automatically

**🚀 Time to start earning from your workflows!**

---

## 💬 Need Help?

- **Technical setup issues:** Check the troubleshooting table above
- **Business logic questions:** Join our Discord community
- **Frontend integration:** Refer to the main QUICKSTART.md guide

**Discord Support Server: https://discord.gg/AEJvSEWcZk**

---


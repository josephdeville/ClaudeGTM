# GTM CONTEXT ENGINE - GITHUB CODESPACES GUIDE

**Run your GTM Engine in a cloud development environment**

---

## 🎯 WHAT IS GITHUB CODESPACES?

GitHub Codespaces is a **cloud-based development environment** (like VS Code in the cloud).

**✅ Good For:**
- Development and testing
- Quick demos
- Temporary development environment
- Collaborative coding

**❌ Not Good For:**
- Permanent hosting (Codespaces shut down after inactivity)
- Production workloads
- 24/7 availability

**For permanent hosting, use:** Railway, Heroku, or AWS (see DEPLOYMENT-GUIDE.md)

---

## 🚀 OPTION 1: RUN IN CODESPACES (QUICK TEST)

### **Step 1: Push Code to GitHub**

```bash
# Navigate to your GTM engine
cd ~/my-gtm-engine

# Initialize git (if not already)
git init
git add .
git commit -m "Initial commit"

# Create repo on GitHub, then:
git remote add origin https://github.com/yourusername/gtm-engine.git
git branch -M main
git push -u origin main
```

### **Step 2: Add Codespaces Configuration**

Create `.devcontainer/devcontainer.json`:

```bash
mkdir -p .devcontainer

cat > .devcontainer/devcontainer.json << 'EOF'
{
  "name": "GTM Context Engine",
  "image": "mcr.microsoft.com/devcontainers/typescript-node:20",
  "features": {
    "ghcr.io/devcontainers/features/node:1": {
      "version": "20"
    }
  },
  "forwardPorts": [3000],
  "portsAttributes": {
    "3000": {
      "label": "GTM Engine API",
      "onAutoForward": "notify"
    }
  },
  "postCreateCommand": "npm install",
  "customizations": {
    "vscode": {
      "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "ms-vscode.vscode-typescript-next"
      ]
    }
  }
}
EOF

git add .devcontainer/
git commit -m "Add Codespaces configuration"
git push
```

### **Step 3: Create Codespace**

**Via GitHub Website:**
1. Go to your repo: `https://github.com/yourusername/gtm-engine`
2. Click **Code** button (green button)
3. Click **Codespaces** tab
4. Click **Create codespace on main**

**Via GitHub CLI:**
```bash
gh codespace create --repo yourusername/gtm-engine
```

### **Step 4: Configure Environment Variables**

**In Codespaces terminal:**

```bash
# Create .env file
echo "ANTHROPIC_API_KEY=sk-ant-your-key-here" > .env

# Verify
cat .env
```

**Or use Codespaces Secrets (Better):**

1. Go to GitHub Settings → Codespaces → Secrets
2. Add secret: `ANTHROPIC_API_KEY`
3. Secret will be available in all your Codespaces

### **Step 5: Build and Run**

**In Codespaces terminal:**

```bash
# Install dependencies (should auto-run via postCreateCommand)
npm install

# Build TypeScript
npm run build

# Run the engine
npm run dev playbook cin7.com -- -t milestone -f "Post-PE funding"

# Or start web server
npm run web
```

### **Step 6: Access the API**

Codespaces will **auto-forward port 3000** and give you a URL:

```
https://username-gtmengine-random.githubpreview.dev
```

**Test it:**

```bash
# Inside Codespaces terminal:
curl http://localhost:3000/health

# From your local machine:
curl https://your-codespace-url.githubpreview.dev/health
```

---

## 🎯 OPTION 2: CODESPACES AS PERMANENT DEV ENVIRONMENT

You can keep a Codespace running for development:

### **Step 1: Configure Auto-Start**

Add to `.devcontainer/devcontainer.json`:

```json
{
  "postStartCommand": "npm run web",
  "remoteUser": "node"
}
```

### **Step 2: Keep Codespace Alive**

**Free tier:** 120 core-hours/month (60 hours on 2-core machine)
**Pro tier:** 180 core-hours/month

**To prevent auto-shutdown:**

```bash
# In Codespaces terminal, keep a process running:
while true; do echo "keep-alive"; sleep 300; done &

# Or use screen/tmux
screen -S gtm-engine
npm run web
# Ctrl+A, D to detach
```

### **Step 3: Make Codespace Public**

By default, Codespace ports are private. To make public:

1. In Codespaces, go to **Ports** panel (bottom)
2. Right-click port 3000
3. Select **Port Visibility → Public**

Now anyone can access: `https://your-codespace-url.githubpreview.dev`

---

## 🎯 OPTION 3: CODESPACES + GITHUB ACTIONS (AUTO-DEPLOY)

Use Codespaces for dev, but auto-deploy to Railway/Heroku on push:

### **Step 1: Create GitHub Action**

```bash
mkdir -p .github/workflows

cat > .github/workflows/deploy.yml << 'EOF'
name: Deploy to Railway

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Install Railway CLI
        run: npm install -g @railway/cli

      - name: Deploy to Railway
        run: railway up
        env:
          RAILWAY_TOKEN: ${{ secrets.RAILWAY_TOKEN }}
EOF

git add .github/
git commit -m "Add auto-deploy workflow"
git push
```

### **Step 2: Add Railway Token**

1. Get Railway token: `railway login && railway whoami --token`
2. Go to GitHub repo → Settings → Secrets
3. Add secret: `RAILWAY_TOKEN`

**Now:** Push to main → Auto-deploys to Railway

---

## 📦 CODESPACES CONFIGURATION FILES

### **Complete .devcontainer/devcontainer.json**

```json
{
  "name": "GTM Context Engine",
  "image": "mcr.microsoft.com/devcontainers/typescript-node:20",

  "features": {
    "ghcr.io/devcontainers/features/node:1": {
      "version": "20"
    },
    "ghcr.io/devcontainers/features/github-cli:1": {}
  },

  "forwardPorts": [3000],

  "portsAttributes": {
    "3000": {
      "label": "GTM Engine API",
      "onAutoForward": "notify",
      "visibility": "public"
    }
  },

  "postCreateCommand": "npm install && npm run build",
  "postStartCommand": "npm run web",

  "customizations": {
    "vscode": {
      "extensions": [
        "dbaeumer.vscode-eslint",
        "esbenp.prettier-vscode",
        "ms-vscode.vscode-typescript-next",
        "rangav.vscode-thunder-client"
      ],
      "settings": {
        "terminal.integrated.defaultProfile.linux": "bash",
        "editor.formatOnSave": true
      }
    }
  },

  "remoteUser": "node"
}
```

### **.gitignore for Codespaces**

```bash
cat > .gitignore << 'EOF'
# Dependencies
node_modules/
package-lock.json

# Build
dist/
*.tsbuildinfo

# Environment
.env
.env.local
.env.production

# Outputs
outputs/*.md
playbooks/*.md

# Logs
*.log
npm-debug.log*

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/*
!.vscode/extensions.json
.idea/
EOF
```

---

## 🔐 ENVIRONMENT VARIABLES IN CODESPACES

### **Method 1: .env File (Quick)**

```bash
# In Codespaces terminal:
echo "ANTHROPIC_API_KEY=sk-ant-your-key" > .env
```

**⚠️ Warning:** Don't commit .env to git!

### **Method 2: Codespaces Secrets (Recommended)**

**Set up once, available in all Codespaces:**

1. Go to: https://github.com/settings/codespaces
2. Click **New secret**
3. Add:
   - Name: `ANTHROPIC_API_KEY`
   - Value: `sk-ant-your-key-here`
4. Select repositories (your gtm-engine repo)

**Access in code:**

```typescript
// Automatically available as process.env.ANTHROPIC_API_KEY
const apiKey = process.env.ANTHROPIC_API_KEY;
```

### **Method 3: Repository Secrets**

**For GitHub Actions:**

1. Go to repo → Settings → Secrets → Actions
2. Add: `ANTHROPIC_API_KEY`
3. Used in workflows

---

## 🚀 QUICK START COMMANDS

### **Create Codespace & Run**

```bash
# 1. Create Codespace (via GitHub website or CLI)
gh codespace create --repo yourusername/gtm-engine

# 2. Code in Codespace opens automatically

# 3. In Codespaces terminal:
echo "ANTHROPIC_API_KEY=your-key" > .env
npm install
npm run build

# 4. Generate playbook
npm run dev playbook cin7.com -- -t milestone -f "Post-PE funding"

# 5. Or start web server
npm run web
```

### **Access from Anywhere**

```bash
# Get Codespace URL
gh codespace list

# Connect via SSH
gh codespace ssh

# Open in browser
gh codespace code

# Port forward to local machine
gh codespace ports forward 3000:3000
```

---

## 📊 CODESPACES LIMITATIONS

### **Free Tier:**
- 120 core-hours/month
- 15 GB storage per Codespace
- 2-core, 8GB RAM machines
- Auto-shutdown after 30 min inactivity

### **Pro Tier ($4/month):**
- 180 core-hours/month
- 20 GB storage
- Up to 32-core machines
- Configurable timeout

### **Why Not for Production:**

❌ **Auto-shutdown:** Codespaces stop after inactivity
❌ **Not always-on:** Needs manual start or activity
❌ **URL changes:** Each Codespace gets new URL
❌ **Resource limits:** Limited by monthly hours

✅ **Use for:** Development, testing, demos
✅ **Use for production:** Railway, Heroku, AWS (see DEPLOYMENT-GUIDE.md)

---

## 🎯 RECOMMENDED WORKFLOW

### **Development (Codespaces)**

```bash
# 1. Create Codespace for dev work
gh codespace create

# 2. Develop and test in Codespace
npm run dev playbook test.com -- -t milestone -f "test"

# 3. Push changes to main
git add .
git commit -m "Add feature"
git push
```

### **Production (Railway - Auto-Deploy)**

```bash
# Setup once:
# 1. Connect GitHub repo to Railway
# 2. Enable auto-deploy on push

# Then every push to main → auto-deploys to Railway
# Your production URL stays constant:
# https://gtm-engine-production.up.railway.app
```

**Best of both worlds:**
- ✅ Develop in Codespaces (free, cloud-based)
- ✅ Auto-deploy to Railway (free tier, always-on)

---

## 🔧 ADVANCED: CODESPACES + NGROK (PUBLIC ACCESS)

If you need to expose Codespace publicly:

### **Step 1: Install ngrok in Codespaces**

```bash
# In Codespaces terminal:
curl -s https://ngrok-agent.s3.amazonaws.com/ngrok.asc | \
  sudo tee /etc/apt/trusted.gpg.d/ngrok.asc >/dev/null && \
  echo "deb https://ngrok-agent.s3.amazonaws.com buster main" | \
  sudo tee /etc/apt/sources.list.d/ngrok.list && \
  sudo apt update && sudo apt install ngrok

# Get authtoken from: https://dashboard.ngrok.com/
ngrok config add-authtoken YOUR_AUTHTOKEN
```

### **Step 2: Expose Port**

```bash
# Start your GTM engine
npm run web &

# Expose via ngrok
ngrok http 3000
```

**You'll get a public URL:**
```
https://abcd-1234.ngrok-free.app
```

**Access from anywhere:**
```bash
curl https://abcd-1234.ngrok-free.app/api/playbook \
  -H "Content-Type: application/json" \
  -d '{"domain":"cin7.com","playbook_type":"milestone","target_focus":"test"}'
```

---

## 🎯 COMPARISON: CODESPACES VS CLOUD HOSTING

| Feature | Codespaces | Railway/Heroku |
|---------|------------|----------------|
| **Always-on** | ❌ No (auto-shutdown) | ✅ Yes |
| **Permanent URL** | ❌ No (changes) | ✅ Yes |
| **Free Tier** | ✅ 120 hours/month | ✅ Yes |
| **Best For** | Development | Production |
| **Setup Time** | 2 minutes | 5 minutes |
| **IDE Included** | ✅ Yes (VS Code) | ❌ No |

**Recommendation:**
- **Development:** Use Codespaces (free cloud IDE)
- **Production:** Use Railway (free always-on hosting)
- **Workflow:** Develop in Codespaces → Auto-deploy to Railway

---

## 📁 CODESPACES FILES TO ADD

**Add these to your repo:**

```bash
# 1. Codespaces config
mkdir -p .devcontainer
# Copy devcontainer.json from above

# 2. GitHub Actions (optional - auto-deploy)
mkdir -p .github/workflows
# Copy deploy.yml from above

# 3. Commit
git add .devcontainer/ .github/
git commit -m "Add Codespaces and CI/CD config"
git push
```

---

## ✅ QUICK ANSWER TO YOUR QUESTION

**Can you deploy to GitHub Codespaces?**

**For Development:** ✅ Yes
- Open Codespace
- Add ANTHROPIC_API_KEY
- Run `npm run web`
- Access via forwarded port

**For Production:** ❌ No (use Railway instead)
- Codespaces auto-shutdown
- Not designed for 24/7 hosting
- URLs change

**Best Practice:**
1. **Develop in Codespaces** (free cloud IDE)
2. **Deploy to Railway** (free always-on hosting)
3. **Auto-deploy on push** (GitHub Actions)

---

## 🚀 EASIEST SETUP

**If you want to try it right now:**

```bash
# 1. Push code to GitHub
git remote add origin https://github.com/yourusername/gtm-engine.git
git push -u origin main

# 2. Open GitHub repo in browser

# 3. Press "." (dot key) - Opens VS Code web editor

# 4. Click "Create Codespace" button

# 5. In terminal:
echo "ANTHROPIC_API_KEY=your-key" > .env
npm install
npm run build
npm run web

# 6. Click "Open in Browser" when port 3000 forwards

# Done! GTM Engine running in cloud
```

**But remember:** This shuts down after 30 min inactivity. For permanent hosting, use Railway (see DEPLOYMENT-GUIDE.md).

---

**Need help setting up Codespaces or deploying to Railway? Let me know!**

# GTM CONTEXT ENGINE - CLOUD DEPLOYMENT GUIDE

**Deploy your GTM Engine to the cloud and access it from anywhere**

---

## 🚀 DEPLOYMENT OPTIONS

### **Option 1: Railway.app** (Recommended - Easiest)
- ✅ Free tier available
- ✅ One-click deploy
- ✅ Automatic builds from GitHub
- ✅ Built-in environment variables
- ⚡ Setup time: 5 minutes

### **Option 2: Heroku**
- ✅ Free tier available (with limits)
- ✅ Easy CLI deployment
- ✅ Good for Node.js apps
- ⚡ Setup time: 10 minutes

### **Option 3: AWS Lambda (Serverless)**
- ✅ Pay per use (very cheap)
- ✅ Scales automatically
- ⚠️ More complex setup
- ⚡ Setup time: 30 minutes

### **Option 4: DigitalOcean App Platform**
- ✅ $5/month
- ✅ Simple deployment
- ✅ Good performance
- ⚡ Setup time: 15 minutes

### **Option 5: Docker + Any Cloud Provider**
- ✅ Most flexible
- ✅ Works everywhere (AWS, GCP, Azure)
- ⚠️ Requires Docker knowledge
- ⚡ Setup time: 20-40 minutes

---

## 🎯 OPTION 1: RAILWAY.APP (RECOMMENDED)

**Why Railway:**
- Easiest deployment
- Free tier (no credit card required)
- Automatic HTTPS
- Built-in environment variables
- GitHub integration

### **Step 1: Prepare Your Code**

```bash
# Navigate to your GTM engine directory
cd ~/my-gtm-engine

# Initialize git repository (if not already)
git init
git add .
git commit -m "Initial commit"

# Create .gitignore
cat > .gitignore << 'EOF'
node_modules/
dist/
.env
*.log
outputs/*.md
playbooks/*.md
EOF

git add .gitignore
git commit -m "Add gitignore"
```

### **Step 2: Push to GitHub**

```bash
# Create new GitHub repo (via GitHub website)
# Then push your code:

git remote add origin https://github.com/yourusername/gtm-engine.git
git branch -M main
git push -u origin main
```

### **Step 3: Deploy to Railway**

1. Go to https://railway.app/
2. Click "Start a New Project"
3. Choose "Deploy from GitHub repo"
4. Select your `gtm-engine` repository
5. Railway will auto-detect Node.js

### **Step 4: Configure Environment Variables**

In Railway dashboard:
1. Click on your project
2. Go to "Variables" tab
3. Add:
   ```
   ANTHROPIC_API_KEY=sk-ant-your-key-here
   PORT=3000
   NODE_ENV=production
   ```

### **Step 5: Configure Build & Start Commands**

In Railway, go to Settings:
- **Build Command:** `npm install && npm run build`
- **Start Command:** `npm start`
- **Root Directory:** `/`

### **Step 6: Deploy!**

Railway automatically deploys. You'll get a URL like:
```
https://gtm-engine-production-xxxx.up.railway.app
```

### **Step 7: Use Your Deployed App**

**From your local machine:**

```bash
# Option A: Use curl
curl -X POST https://your-railway-app.up.railway.app/api/playbook \
  -H "Content-Type: application/json" \
  -d '{
    "domain": "cin7.com",
    "playbook_type": "milestone",
    "target_focus": "Post-PE funding companies"
  }'

# Option B: Create a CLI wrapper
cat > deploy-cli.sh << 'EOF'
#!/bin/bash
API_URL="https://your-railway-app.up.railway.app"
curl -X POST "$API_URL/api/playbook" \
  -H "Content-Type: application/json" \
  -d "{\"domain\":\"$1\",\"playbook_type\":\"$2\",\"target_focus\":\"$3\"}"
EOF

chmod +x deploy-cli.sh

# Use it:
./deploy-cli.sh cin7.com milestone "Post-PE funding"
```

---

## 🎯 OPTION 2: HEROKU

### **Step 1: Install Heroku CLI**

```bash
# macOS
brew install heroku/brew/heroku

# Ubuntu/Debian
curl https://cli-assets.heroku.com/install.sh | sh

# Login
heroku login
```

### **Step 2: Create Heroku App**

```bash
cd ~/my-gtm-engine

# Create app
heroku create my-gtm-engine

# Add buildpack
heroku buildpacks:set heroku/nodejs

# Set environment variables
heroku config:set ANTHROPIC_API_KEY=sk-ant-your-key-here
heroku config:set NODE_ENV=production
```

### **Step 3: Create Procfile**

```bash
echo "web: npm start" > Procfile
git add Procfile
git commit -m "Add Procfile"
```

### **Step 4: Deploy**

```bash
git push heroku main
```

### **Step 5: Access Your App**

```bash
# Your app is now at:
# https://my-gtm-engine.herokuapp.com

# Test it:
curl https://my-gtm-engine.herokuapp.com/health
```

---

## 🎯 OPTION 3: AWS LAMBDA (SERVERLESS)

**Best for:** Pay-per-use, automatic scaling

### **Step 1: Install AWS CLI & SAM**

```bash
# Install AWS CLI
brew install awscli  # macOS
# or download from: https://aws.amazon.com/cli/

# Install SAM CLI
brew install aws-sam-cli  # macOS

# Configure AWS
aws configure
# Enter: Access Key, Secret Key, Region (us-east-1)
```

### **Step 2: Create SAM Template**

```bash
cd ~/my-gtm-engine

cat > template.yaml << 'EOF'
AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31

Globals:
  Function:
    Timeout: 900
    MemorySize: 3008
    Runtime: nodejs20.x

Resources:
  GTMEngineFunction:
    Type: AWS::Serverless::Function
    Properties:
      CodeUri: .
      Handler: dist/lambda.handler
      Environment:
        Variables:
          ANTHROPIC_API_KEY: !Ref AnthropicApiKey
      Events:
        PlaybookApi:
          Type: Api
          Properties:
            Path: /playbook
            Method: post

Parameters:
  AnthropicApiKey:
    Type: String
    NoEcho: true
    Description: Anthropic API Key

Outputs:
  GTMEngineApi:
    Description: "API Gateway endpoint URL"
    Value: !Sub "https://${ServerlessRestApi}.execute-api.${AWS::Region}.amazonaws.com/Prod/playbook/"
EOF
```

### **Step 3: Create Lambda Handler**

```bash
cat > src/lambda.ts << 'EOF'
import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { OctaveOrchestrator } from './modules/octave-orchestrator';
import { PlaybookConfig, PlaybookType } from './types';

export const handler = async (
  event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  try {
    const body = JSON.parse(event.body || '{}');

    const config: PlaybookConfig = {
      domain: body.domain,
      playbook_type: body.playbook_type as PlaybookType,
      target_focus: body.target_focus,
      output_format: 'markdown',
      model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-20250514',
    };

    const orchestrator = new OctaveOrchestrator(config);
    const { playbook } = await orchestrator.execute();

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        success: true,
        playbook,
      }),
    };
  } catch (error: any) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};
EOF

# Add Lambda type definitions
npm install --save-dev @types/aws-lambda
```

### **Step 4: Deploy to AWS**

```bash
# Build
npm run build

# Deploy
sam build
sam deploy --guided

# Follow prompts:
# Stack Name: gtm-engine
# AWS Region: us-east-1
# Parameter AnthropicApiKey: sk-ant-your-key-here
# Confirm changes: Y
# Allow SAM CLI IAM role creation: Y
# Save arguments to config: Y
```

### **Step 5: Use Your Lambda**

```bash
# Get your API endpoint from SAM output
API_URL="https://xxxxxxxxxx.execute-api.us-east-1.amazonaws.com/Prod/playbook"

curl -X POST $API_URL \
  -H "Content-Type: application/json" \
  -d '{
    "domain": "cin7.com",
    "playbook_type": "milestone",
    "target_focus": "Post-PE funding"
  }'
```

---

## 🎯 OPTION 4: DOCKER + DIGITALOCEAN

**Best for:** Full control, consistent environments

### **Step 1: Create Dockerfile**

```bash
cd ~/my-gtm-engine

cat > Dockerfile << 'EOF'
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY src/ ./src/

# Build TypeScript
RUN npm run build

# Expose port
EXPOSE 3000

# Start server
CMD ["node", "dist/web/server.js"]
EOF
```

### **Step 2: Create docker-compose.yml**

```bash
cat > docker-compose.yml << 'EOF'
version: '3.8'

services:
  gtm-engine:
    build: .
    ports:
      - "3000:3000"
    environment:
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
      - NODE_ENV=production
    restart: unless-stopped
EOF
```

### **Step 3: Test Locally**

```bash
# Build image
docker build -t gtm-engine .

# Run container
docker run -p 3000:3000 \
  -e ANTHROPIC_API_KEY=sk-ant-your-key \
  gtm-engine

# Test
curl http://localhost:3000/health
```

### **Step 4: Deploy to DigitalOcean**

**Option A: DigitalOcean App Platform**

1. Go to https://cloud.digitalocean.com/
2. Create new App
3. Connect GitHub repo
4. DigitalOcean auto-detects Dockerfile
5. Add environment variable: `ANTHROPIC_API_KEY`
6. Deploy ($5/month)

**Option B: DigitalOcean Droplet**

```bash
# Create Droplet via web interface (Ubuntu 22.04, $6/month)

# SSH into droplet
ssh root@your-droplet-ip

# Install Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh

# Clone your repo
git clone https://github.com/yourusername/gtm-engine.git
cd gtm-engine

# Create .env file
echo "ANTHROPIC_API_KEY=sk-ant-your-key" > .env

# Run with docker-compose
docker-compose up -d

# Setup nginx reverse proxy (optional)
apt install nginx
cat > /etc/nginx/sites-available/gtm-engine << 'EOF'
server {
    listen 80;
    server_name your-domain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

ln -s /etc/nginx/sites-available/gtm-engine /etc/nginx/sites-enabled/
nginx -t
systemctl restart nginx
```

---

## 🎯 OPTION 5: VERCEL (SERVERLESS EDGE)

**Best for:** Fast global deployment, free tier

### **Step 1: Install Vercel CLI**

```bash
npm install -g vercel
vercel login
```

### **Step 2: Create vercel.json**

```bash
cd ~/my-gtm-engine

cat > vercel.json << 'EOF'
{
  "version": 2,
  "builds": [
    {
      "src": "src/web/server.ts",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "src/web/server.ts"
    }
  ],
  "env": {
    "ANTHROPIC_API_KEY": "@anthropic-api-key"
  }
}
EOF
```

### **Step 3: Deploy**

```bash
# First deployment
vercel

# Add environment variable
vercel env add ANTHROPIC_API_KEY

# Deploy to production
vercel --prod
```

---

## 📡 CREATE A WEB API (FOR ALL OPTIONS)

To make your deployed app accessible via HTTP, add this to `src/web/server.ts`:

```typescript
import express from 'express';
import cors from 'cors';
import { OctaveOrchestrator } from '../modules/octave-orchestrator';
import { PlaybookConfig, PlaybookType } from '../types';

const app = express();
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Generate playbook endpoint
app.post('/api/playbook', async (req, res) => {
  try {
    const { domain, playbook_type, target_focus } = req.body;

    if (!domain || !playbook_type || !target_focus) {
      return res.status(400).json({
        error: 'Missing required fields: domain, playbook_type, target_focus',
      });
    }

    const config: PlaybookConfig = {
      domain,
      playbook_type: playbook_type as PlaybookType,
      target_focus,
      output_format: 'markdown',
      model: process.env.ANTHROPIC_MODEL || 'claude-sonnet-4-20250514',
    };

    const orchestrator = new OctaveOrchestrator(config);
    const { playbook, outputPath } = await orchestrator.execute();

    res.json({
      success: true,
      playbook,
      generated_at: new Date().toISOString(),
    });
  } catch (error: any) {
    res.status(500).json({
      error: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined,
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`GTM Engine API running on port ${PORT}`);
});
```

Then update `package.json`:

```json
{
  "scripts": {
    "start": "node dist/web/server.js",
    "web": "ts-node src/web/server.ts",
    "build": "tsc"
  }
}
```

---

## 🔒 SECURITY BEST PRACTICES

### **1. Environment Variables**

Never commit `.env` files:

```bash
# Add to .gitignore
echo ".env" >> .gitignore
echo ".env.local" >> .gitignore
echo ".env.production" >> .gitignore
```

### **2. API Key Rotation**

```bash
# Rotate keys regularly in Anthropic console
# Update in your cloud provider:

# Railway:
railway variables set ANTHROPIC_API_KEY=new-key

# Heroku:
heroku config:set ANTHROPIC_API_KEY=new-key

# AWS:
sam deploy --parameter-overrides AnthropicApiKey=new-key
```

### **3. Rate Limiting**

Add to `src/web/server.ts`:

```typescript
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 10, // limit each IP to 10 requests per windowMs
});

app.use('/api/', limiter);
```

### **4. Authentication**

Add API key auth:

```typescript
const API_KEY = process.env.API_KEY || 'your-secret-key';

app.use('/api/', (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (apiKey !== API_KEY) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  next();
});
```

---

## 📊 COST COMPARISON

| Provider | Free Tier | Paid Tier | Best For |
|----------|-----------|-----------|----------|
| **Railway** | $5 credit/month | $5-20/month | Simple deployment |
| **Heroku** | 550 hours/month | $7+/month | Traditional apps |
| **AWS Lambda** | 1M requests/month | Pay per use | Sporadic usage |
| **Vercel** | Unlimited | $20/month pro | Edge functions |
| **DigitalOcean** | None | $6/month | Full control |

---

## 🎯 RECOMMENDATION

**For you, I recommend Railway.app:**

1. ✅ Easiest setup (5 minutes)
2. ✅ Free tier ($5 credit/month)
3. ✅ GitHub integration (auto-deploy on push)
4. ✅ Built-in environment variables
5. ✅ Automatic HTTPS
6. ✅ No credit card required for free tier

**Alternative:** If you want full control, use Docker + DigitalOcean ($6/month)

---

## 🚀 QUICK START (RAILWAY)

```bash
# 1. Copy your GTM engine
cp -r /home/user/GTM-ENGINE-EXPORT ~/my-gtm-engine
cd ~/my-gtm-engine

# 2. Initialize git
git init
git add .
git commit -m "Initial commit"

# 3. Push to GitHub
# (Create repo on GitHub first)
git remote add origin https://github.com/yourusername/gtm-engine.git
git push -u origin main

# 4. Deploy to Railway
# Go to railway.app
# Connect GitHub repo
# Add ANTHROPIC_API_KEY environment variable
# Done!

# 5. Use your deployed app
curl -X POST https://your-app.up.railway.app/api/playbook \
  -H "Content-Type: application/json" \
  -H "x-api-key: your-secret-key" \
  -d '{
    "domain": "cin7.com",
    "playbook_type": "milestone",
    "target_focus": "Post-PE funding companies"
  }'
```

---

**Need help with deployment? Let me know which option you want to use!**

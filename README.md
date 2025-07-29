# Baby NEXUS V6 Platform

AI-Powered platform created with NEXUS Platform Factory.

## 🚀 Quick Start

### Development
```bash
npm run dev
```

### Environment Setup
1. Copy `.env.local.example` to `.env.local`
2. Add your OpenAI API key (get from nexus-platform/.env.local.complete)

### DNS Setup
```bash
export GODADDY_API_KEY=your-key
export GODADDY_API_SECRET=your-secret
node setup-dns.js
```

## 🔗 URLs
- Development: http://localhost:3000
- Production: https://baby-nexus-v6-platform.vercel.app
- Custom Domain: https://baby-nexus-v6.thefortaiagency.ai

## 🛠️ Built With
- Next.js 14
- TypeScript
- Tailwind CSS
- OpenAI API
- Vercel

## 📝 Features
- ✅ AI Chatbot with OpenAI
- ✅ Responsive design
- ✅ Multiple pages
- ✅ Auto-deployment from GitHub
- ✅ Custom domain with SSL

## 🚀 Deployment
Any push to the main branch automatically deploys to production.
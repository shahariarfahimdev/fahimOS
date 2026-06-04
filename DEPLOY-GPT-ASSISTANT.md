# FahimOS GPT Assistant Setup

## Important
Your API key must stay only in Vercel Environment Variables. Do not paste it into `index.html`, `app.js`, or GitHub.

## Local test
1. Install Vercel CLI:
   npm i -g vercel
2. Copy `.env.example` to `.env.local`.
3. Add your NEW regenerated OpenAI key to `.env.local`.
4. Run:
   vercel dev
5. Open the localhost URL.
6. In Settings > GPT Assistant API, use:
   /api/assistant

## Vercel deployment
1. Upload this whole folder to GitHub.
2. Import the GitHub repo into Vercel.
3. Vercel > Project Settings > Environment Variables.
4. Add:
   OPENAI_API_KEY = your NEW key
   OPENAI_MODEL = gpt-4.1-mini
5. Redeploy.
6. On the website, Settings > GPT Assistant API should be:
   /api/assistant

## GitHub Pages note
GitHub Pages cannot run `/api/assistant`. Use Vercel for the full GPT assistant.

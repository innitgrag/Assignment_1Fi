EMI Product App
Shows products, variants, and EMI plans using
React + Tailwind + Node + Express + MongoDB.

Run Backend
cd backend
npm install
add .env with MONGO_URI
node seed.js
node server.js

Run Frontend
cd frontend
npm install
npm run dev

API

/api/products

/api/products/:slug

Schema

Product → variants
Variant → emiPlans
EMI Plan → tenure, monthly, interest

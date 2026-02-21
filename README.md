# Ecomix - Modern E-Commerce Platform

![Ecomix Banner](https://via.placeholder.com/1200x400?text=Ecomix+Banner)

## 🚀 Project Overview
Ecomix is a modern e-commerce platform built with **Next.js**, **React**, and **Tailwind CSS**.  
It allows users to browse products, sort by price, and navigate with **pagination**.  
The project includes a **loading skeleton**, responsive design, and is ready to deploy on **Vercel**.

---

## 🛠️ Features

- Product listing with images, title, price, and rating
- Price sorting: Low → High, High → Low
- Pagination for products (8 per page)
- Skeleton loading while fetching products
- Responsive layout: mobile, tablet, and desktop
- Dynamic product details page
- Client-side hydration safe
- Ready to deploy on **Vercel**
- Clean and reusable components (e.g., ProductCard, NavLink)

---

## 📁 Project Structure
app/
├── products/
│ ├── page.jsx # Product listing page
│ └── [id]/page.jsx # Product detail page
├── about/page.jsx # About page
├── contact/page.jsx # Contact page
components/
├── ProductCard.jsx
├── NavLink.jsx
└── Skeleton/
└── ProductsSkeleton.jsx
data/
└── data.json # Sample product data
public/
└── images/ # Product images
next.config.js
package.json
app/
├── products/
│ ├── page.jsx # Product listing page
│ └── [id]/page.jsx # Product detail page
├── about/page.jsx # About page
├── contact/page.jsx # Contact page
components/
├── ProductCard.jsx
├── NavLink.jsx
└── Skeleton/
└── ProductsSkeleton.jsx
data/
└── data.json # Sample product data
public/
└── images/ # Product images
next.config.js
package.json

2. Install Dependencies
npm install
3. Run Locally
npm run dev

Open http://localhost:3000
 to view in browser

4. Build for Production
npm run build
npm run start
🌐 Deployment

This project can be deployed on Vercel easily:

Push project to GitHub

Sign in to Vercel
 → Import GitHub repository

Deploy project →[ Live URL auto-generated](https://ecomix-six.vercel.app/)

Every push to main branch → Auto redeploy

📝 Available Pages

Home / Products: /products

Product Details: /products/[id]

About Us: /about

Contact: /contact

📌 Future Improvements

Price range slider filter

Search by product name

Sort by rating or popularity

Add to cart functionality

User authentication (login/signup)

Checkout & payment integration


👍 Author

Arman Hossain Atunu

LinkedIn

GitHub
🛒 E-Commerce Store
A modern and responsive E-Commerce web app built with Next.js 14, TypeScript, Tailwind CSS, and Fake Store API.

✨ Features
🛍️ Browse a wide variety of products

🔎 Search products by name

🎯 Filter products by category, rating, and price range

📱 Responsive design for mobile and desktop

⚡ Fast loading and smooth UI/UX

📦 Product details page with full information

🚀 Tech Stack
Next.js 14 (App Router)

TypeScript

Tailwind CSS

Fake Store API (for products data)

React Icons

🛠️ Installation and Setup
Follow these steps to run the project locally:

bash
Copy
Edit
# 1. Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# 2. Move into the project directory
cd E-Commerce

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
The app will be running at:

arduino
Copy
Edit
http://localhost:3000
⚠️ Common Error
❗ Error: You cannot use different slug names for the same dynamic path ('id' !== 'product').

Solution:

Make sure you don't have two dynamic route folders with different names at the same level.

Keep either [id] or [product] folder in /products, not both.

Example correct structure:

bash
Copy
Edit
app/products/[id]/page.tsx
or

bash
Copy
Edit
app/products/[product]/page.tsx
(but not both)

📂 Folder Structure (Example)
pgsql
Copy
Edit
E-Commerce/
├── app/
│   ├── products/
│   │   └── [id]/page.tsx
│   ├── layout.tsx
│   ├── page.tsx
├── public/
├── styles/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── README.md
🙏 Acknowledgements
Fake Store API — for dummy products data.

Next.js Documentation — for awesome web framework.

Tailwind CSS Documentation — for styling.

📞 Contact
Made with ❤️ by [Your Name]

GitHub: your-github-profile

LinkedIn: your-linkedin-profile

🚀 Happy Coding!

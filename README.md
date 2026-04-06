## Live link
::https://greenmin.netlify.app/

***💻Technologies Used***
React.js
Tailwind CSS
Firebase Authentication
Swiper.js / Framer Motion


## 📫 Contact

**Md Sakhawat Hossin**  
GitHub:(https://github.com/sakhawat236hossain) 
Email:hmdsakhawat236@gmail.com

<img width="1438" height="742" alt="image" src="https://github.com/user-attachments/assets/c6adb38c-5398-43a5-b287-b68481cf80ee" />



# 🍃 GreenNest – Indoor Plant Care & Store 


## 🎯 Project Goals

- Build a responsive, visually appealing plant care and store platform.
- Implement secure Firebase authentication (Signup, Login, Google Sign-In, Forgot Password).
- Fetch plant data from JSON for product/service listings.
- Create protected routes for service details and profile management.
- Maintain SPA functionality with a minimalist and calming design.


## 🌿 About GreenNest – Indoor Plant Care & Store (Detailed)

GreenNest – Indoor Plant Care & Store is a complete indoor plant management platform designed to make plant care easier, smarter, and more enjoyable for users. It allows users to browse and purchase a wide variety of indoor plants, view detailed care guides for each plant, and set reminders for watering, sunlight exposure, and fertilizing.

With features like Firebase Authentication, private route protection, dynamic JSON-based data handling, and a modern responsive UI, GreenNest delivers a smooth, nature-inspired user experience. The platform focuses on eco-friendly design and simplicity, making it ideal for both beginners and experienced plant lovers.

### 1. Layout Structure

- **Navbar**
  - Logo: GreenNest
  - Navigation Links: Home, Plants, My Profile
  - Conditional rendering:
    - Logged in → show user avatar + dropdown with displayName and Logout.
    - Logged out → show Login and Register buttons.
- **Footer**
  - Quick Links: About, Contact, Privacy Policy
  - Social Media Icons: Instagram, Facebook, Pinterest
  - `© 2025 GreenNest. All rights reserved.`
- Navbar and Footer remain visible on all routes.
- No crash or reload errors on route navigation.
-## ** project dependencies **

- ### dependencies List
-   "dependencies": {
    "@tailwindcss/vite": "^4.1.15",
    "firebase": "^12.4.0",
    "framer-motion": "^12.23.24",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-fast-marquee": "^1.6.5",
    "react-icons": "^5.5.0",
    "react-router-dom": "^7.9.4",
    "react-toastify": "^11.0.5",
    "swiper": "^12.0.3",
    "tailwindcss": "^4.1.15"

  },
  ### devDependencies
  "devDependencies": {
    "@eslint/js": "^9.36.0",
    "@types/react": "^19.1.16",
    "@types/react-dom": "^19.1.9",
    "@vitejs/plugin-react": "^5.0.4",
    "daisyui": "^5.3.7",
    "eslint": "^9.36.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.22",
    "globals": "^16.4.0",
    "vite": "^7.1.7"
  }

### 2. JSON Data Setup

- `plants.json` file containing at least 6 indoor plant objects with fields:
  - `plantId, plantName, category, price, rating, description, image, availableStock, careLevel, providerName.`
- **Example:**


[
  {
    "plantId": 1,
    "plantName": "Snake Plant",
    "category": "Air Purifier",
    "price": 18,
    "rating": 4.8,
    "availableStock": 10,
    "careLevel": "Easy",
    "description": "A hardy plant that purifies indoor air and thrives in low light.",
    "image": "https://i.postimg.cc/example1.png",
    "providerName": "UrbanGreen Studio"
  }
]

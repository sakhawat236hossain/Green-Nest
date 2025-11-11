# Basic Folder Structure

src/
├── assets/
├── components/
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ ├── PrivateRoute.jsx
│ └── PlantCard.jsx
├── pages/
│ ├── Home.jsx
│ ├── Login.jsx
│ ├── Register.jsx
│ ├── PlantDetails.jsx
│ ├── MyProfile.jsx
├── layout/
│ └── Root.jsx
├── data/
│ └── plants.json
├── provider/
│ └── AuthProvider.jsx
├── router/
│ └── router.jsx
├── firebase/
│ └── firebase.config.js
├── App.jsx
├── main.jsx
└── index.css

# 🍃 GreenNest – Indoor Plant Care & Store (Assignment-09)



## 🎯 Project Goals

- Build a responsive, visually appealing plant care and store platform.
- Implement secure Firebase authentication (Signup, Login, Google Sign-In, Forgot Password).
- Fetch plant data from JSON for product/service listings.
- Create protected routes for service details and profile management.
- Maintain SPA functionality with a minimalist and calming design.

## 🧩 Core Features & Functional Requirements

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

### 2. JSON Data Setup

- `plants.json` file containing at least 6 indoor plant objects with fields:
  - `plantId, plantName, category, price, rating, description, image, availableStock, careLevel, providerName`
- **Example:**

```json
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

***💻Technologies Used***
React.js
Tailwind CSS
Firebase Authentication
Swiper.js / Framer Motion
```

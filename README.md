Experiment 1: Context API + Redux Toolkit (Product & Cart Management)
Objective
To design and implement a Single Page Application (SPA using React and Vite that demonstrates the use of Context API for authentication and Redux Toolkit for global state management, along with role-based access control.

Project Description
This project is a React-based web application that implements authentication and product management functionality.
The Context API is used to manage user authentication, user roles (Admin/User), and login/logout functionality.
The Redux Toolkit is used to manage global application state such as products and cart items.

Role-based access control ensures that:
Admin users can add and delete products
Normal users can view products and add them to the cart

Features
Login system using React Context API
Role-based access control (Admin and User)
Admin functionalities:
Add products
Delete products

User functionalities:
View products
Add products to cart
Remove products from cart

Global state management using Redux Toolkit
Modular and component-based architecture
Clean and user-friendly interface
Fast development using Vite

Roles and Permissions
Role	View Products	Add Product	Delete Product	Add to Cart
User	✅ Yes	❌ No	❌ No	✅ Yes
Admin	✅ Yes	✅ Yes	✅ Yes	❌ No

Tech Stack
React
Vite
JavaScript
React Context API
Redux Toolkit
HTML5
CSS3
Git & GitHub

Folder Structure
src/
├── components/
│   ├── AddProduct.jsx
│   ├── Cart.jsx
│   ├── Login.jsx
│   └── ProductList.jsx
│
├── context/
│   └── AuthContext.jsx
│
├── redux/
│   ├── productsSlice.js
│   ├── cartSlice.js
│   └── store.js
│
├── App.jsx
├── main.jsx
├── index.css
└── App.css

How It Works
Authentication state such as login status, username, and role is managed using Context API.
Product and cart data are stored globally using Redux Toolkit slices.
Components are conditionally rendered based on user role to enforce role-based access.
Admin users cannot access cart functionality.
Normal users cannot access product management features.

How to Run the Project
npm install
npm run dev

Learning Outcomes
Understanding of Context API for authentication
Practical usage of Redux Toolkit for global state management
Implementation of role-based access control
Modular React component design
Hands-on experience with Vite and modern React development
Version control using GitHub

GitHub Repository
https://github.com/taarinik04/exp1-context-redux

Conclusion
This experiment demonstrates a clean separation of concerns between authentication logic and business data management, showcasing real-world usage of React Context API and Redux Toolkit in a scalable SPA.

<div align="center">

# 💬 Chattify

**A real-time full-stack chat application built with the MERN stack.**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Zustand](https://img.shields.io/badge/Zustand-State_Management-orange?style=flat-square)](https://zustand-demo.pmnd.rs/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-DaisyUI-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb&logoColor=white)](https://www.mongodb.com/atlas)
[![Socket.io](https://img.shields.io/badge/Socket.io-Real--Time-010101?style=flat-square&logo=socket.io&logoColor=white)](https://socket.io/)
[![Cloudinary](https://img.shields.io/badge/Cloudinary-Image_Hosting-3448C5?style=flat-square&logo=cloudinary&logoColor=white)](https://cloudinary.com/)
[![JWT](https://img.shields.io/badge/JWT-Auth-000000?style=flat-square&logo=jsonwebtokens&logoColor=white)](https://jwt.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

[Demo](#screenshots--demo) · [Getting Started](#installation--setup) · [Roadmap](#roadmap)

</div>

---

## Overview

Chattify is a real-time messaging web application that allows users to register, set up a profile, and exchange messages with other users instantly. It was built as a personal full-stack project over the course of several months and represents one of my first complete end-to-end applications — covering everything from database design and REST API development, to frontend state management, WebSocket integration, and cloud-based media uploads.

This project was a significant learning curve. Coming in with mostly frontend experience, I had to get comfortable with a lot of new territory: structuring a backend with Node.js and Express, modeling data with Mongoose, managing environment variables, and handling authentication securely with JWTs and bcrypt. One of the bigger learning moments was working with **Postman** for the first time — a tool I had never used before — to manually test API endpoints and verify that routes were responding correctly before the frontend was even connected. That process alone taught me a lot about how HTTP requests, response codes, and middleware actually work under the hood.

Other challenges included debugging Socket.io for real-time delivery, integrating Cloudinary for profile picture uploads, and managing a MongoDB Atlas connection that involved switching between SRV and direct connection strings to resolve environment-specific issues. On the frontend, I worked through Zustand store mismatches, React Router configuration, and Tailwind CSS / DaisyUI version conflicts — all of which pushed my debugging and research skills further than any previous project had.

Chattify is not just a project — it is a record of growth.

---

## Features

Chattify covers the core features you would expect from a modern messaging app, built from scratch without a backend-as-a-service:

- **Real-time messaging** — Messages are delivered instantly using Socket.io WebSockets, with no page refresh required.
- **User authentication** — Users can register and log in securely. Sessions are managed with JSON Web Tokens (JWT) and passwords are hashed using bcrypt before storage.
- **Profile management** — Users can upload and update a profile picture, which is stored and served via Cloudinary's media hosting platform.
- **Online presence indicators** — The app tracks and displays which users are currently online in real time.
- **Responsive UI** — The interface is fully responsive and works across desktop and mobile screen sizes.
- **Theme support** — Light and dark mode are supported out of the box through DaisyUI's theming system.

---

## Tech Stack

### Frontend

The frontend is built with **React 18** and bundled using **Vite**, which provides a significantly faster development experience compared to Create React App. **Zustand** is used for global state management — chosen for its minimal API and lack of boilerplate compared to Redux. Styling is handled with **Tailwind CSS** paired with **DaisyUI**, a component library built on top of Tailwind that provides pre-styled, theme-aware UI components. **React Router** manages client-side navigation, and **Socket.io Client** maintains the WebSocket connection to the server.

### Backend

The backend is a **Node.js** server built with the **Express** framework. It exposes a REST API that handles authentication, user data, and message operations. Data is stored in **MongoDB Atlas**, a cloud-hosted MongoDB service, with **Mongoose** used as the ODM (Object Document Mapper) to define schemas and interact with the database. Real-time communication is handled by a **Socket.io** server running alongside Express. Authentication uses **JSON Web Tokens (JWT)** for stateless session management, and **bcrypt** for secure password hashing. Profile images are uploaded and hosted via the **Cloudinary** API.

| Layer | Technology |
|---|---|
| Frontend Framework | React 18 + Vite |
| State Management | Zustand |
| Styling | Tailwind CSS + DaisyUI |
| Routing | React Router |
| Real-Time | Socket.io (client + server) |
| Backend | Node.js + Express |
| Database | MongoDB Atlas + Mongoose |
| Authentication | JWT + bcrypt |
| Media Hosting | Cloudinary |

---

## Screenshots / Demo

> _Screenshots and a live demo link will be added here._

<!--
  Add your screenshots below. Example:
  ![Login screen](./screenshots/login.png)
  ![Chat window](./screenshots/chat.png)
-->

---

## Installation & Setup

### Prerequisites

Before running this project locally, make sure you have the following set up:

- **Node.js** `v18+` installed on your machine
- A **MongoDB Atlas** account with a cluster and connection string ready
- A **Cloudinary** account for handling image uploads

### 1. Clone the repository

```bash
git clone https://github.com/wlo-dev/chattify.git
cd chattify
```

### 2. Configure environment variables

Create a `.env` file inside the `/backend` directory and add the following:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NODE_ENV=development
```

> ⚠️ Never commit your `.env` file to version control. Make sure `.env` is listed in your `.gitignore`.

### 3. Install dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 4. Run the application

```bash
# Start the backend server (from /backend)
npm run dev

# Start the frontend dev server (from /frontend)
npm run dev
```

Once both servers are running, open `http://localhost:5173` in your browser. The backend API will be available at `http://localhost:5001`.

---

## Roadmap

Chattify is functional as a one-on-one messaging app. Future features I plan to add include:

- [ ] Group chats and channels
- [ ] Message reactions (emoji)
- [ ] Read receipts
- [ ] Message search and filtering
- [ ] Push notifications
- [ ] Voice and video calling

---

## Contributing

Contributions, issues, and feature requests are welcome. If you would like to contribute:

1. Fork the repository
2. Create a feature branch — `git checkout -b feature/your-feature`
3. Commit your changes — `git commit -m "feat: describe your change"`
4. Push to the branch — `git push origin feature/your-feature`
5. Open a Pull Request describing what you changed and why

---

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

<div align="center">

Built by [Willouby](https://wlo-dev.github.io) · [GitHub](https://github.com/wlo-dev) · [LinkedIn](https://www.linkedin.com/in/your-handle) · [Behance](https://www.behance.net/your-handle)

</div>

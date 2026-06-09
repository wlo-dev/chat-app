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


</div>


## Overview

Chattify is a real-time messaging app that lets users register, set up a profile, and chat with other users. It's one of my first full-stack projects, and honestly it was a proper learning curve from start to finish.

Coming in mostly from the frontend side, I had to figure out a lot as I went — structuring a backend with Express, connecting to a database, handling authentication, and getting everything to actually talk to each other. One thing that stood out was using **Postman** for the first time to test my API endpoints. I hadn't used it before and at first it felt like a lot, but it ended up being really useful for checking that routes were working before the frontend was even set up. It also helped me understand HTTP methods and middleware a lot better than just reading about them would have.

There were plenty of moments where things broke in ways I didn't expect — Socket.io not delivering messages, Cloudinary throwing auth errors, MongoDB connection strings causing issues depending on the environment, and a fair amount of Zustand and React Router debugging on the frontend. Each one of those was frustrating at the time but taught me something I wouldn't have picked up otherwise.

This project isn't perfect, but it's mine and I'm proud of how far it pushed me.



# Features

- **Real-time messaging** — Messages are sent and received instantly using Socket.io, no refresh needed.
- **Authentication** — Users can register and log in. Passwords are hashed with bcrypt and sessions are managed with JWTs.
- **Profile pictures** — Users can upload and update a profile photo, stored via Cloudinary.
- **Online indicators** — The app shows which users are currently active.
- **Responsive layout** — Works on both desktop and mobile.
- **Light / dark mode** — Theme switching via DaisyUI.

## Tech Stack

The frontend is built with **React** and **Vite**, with **Zustand** handling global state and **Tailwind CSS + DaisyUI** for styling. The backend runs on **Node.js** with **Express**, connected to a **MongoDB Atlas** database through **Mongoose**. Real-time messaging uses **Socket.io** on both ends, authentication is handled with **JWTs** and **bcrypt**, and profile images are managed through the **Cloudinary** API.

| Layer | Technology |
|---|---|
| Frontend | React 18 + Vite |
| State Management | Zustand |
| Styling | Tailwind CSS + DaisyUI |
| Routing | React Router |
| Real-Time | Socket.io |
| Backend | Node.js + Express |
| Database | MongoDB Atlas + Mongoose |
| Auth | JWT + bcrypt |
| Media | Cloudinary |

---

## Screenshots / Demo

> _Will be added once deployed._

---

## Installation & Setup

### Prerequisites

- Node.js `v18+`
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account
- A [Cloudinary](https://cloudinary.com/) account

### 1. Clone the repo

```bash
git clone https://github.com/wlo-dev/chattify.git
cd chattify
```

### 2. Set up environment variables

Create a `.env` file in the `/backend` folder:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NODE_ENV=development
```

> Make sure `.env` is in your `.gitignore` — don't commit credentials.

### 3. Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 4. Run locally

```bash
# From /backend
npm run dev

# From /frontend
npm run dev
```

Frontend runs at `http://localhost:5173`, backend at `http://localhost:5001`.

---

## Roadmap

There's still a lot I want to add to this:

- [ ] Group chats
- [ ] Message reactions
- [ ] Read receipts
- [ ] Message search
- [ ] Push notifications

---

## Contributing

Feel free to open an issue or submit a pull request if you spot something or want to contribute.

1. Fork the repo
2. Create a branch — `git checkout -b feature/your-feature`
3. Commit — `git commit -m "feat: your change"`
4. Push — `git push origin feature/your-feature`
5. Open a Pull Request

<div align="center">

Built by [Willouby](https://wlo-dev.github.io) · [GitHub](https://github.com/wlo-dev) · [LinkedIn](https://www.linkedin.com/in/your-handle) · [Behance](https://www.behance.net/your-handle)

</div>

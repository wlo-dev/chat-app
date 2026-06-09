<div align="center">

# 💬 Chattify

**A real-time full-stack chat application built with the MERN stack.**

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-339933?style=flat-square&logo=node.js)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248?style=flat-square&logo=mongodb)](https://www.mongodb.com/atlas)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

[Demo](#screenshots--demo) · [Getting Started](#installation--setup) · [Roadmap](#roadmap)

</div>

---

## Overview

Chattify is a real-time messaging application that lets users sign up, set up a profile, and chat with other users instantly. Built over several months as a full-stack project, it covers authentication, live messaging via WebSockets, image uploads, and a clean responsive UI — all wired together from the database layer up.

---

## Features

- **Real-time messaging** — Instant message delivery powered by Socket.io
- **User authentication** — Secure sign-up and login with JWT-based sessions
- **Profile management** — Upload and update a profile picture via Cloudinary
- **Online presence** — See which users are currently active
- **Responsive design** — Works across desktop and mobile viewports
- **Theme support** — Light and dark mode via DaisyUI

---

## Tech Stack

### Frontend
| Technology | Role |
|---|---|
| React 18 | UI framework |
| Vite | Build tool & dev server |
| Zustand | Global state management |
| Tailwind CSS + DaisyUI | Styling & component library |
| React Router | Client-side routing |
| Socket.io Client | Real-time communication |

### Backend
| Technology | Role |
|---|---|
| Node.js + Express | REST API server |
| MongoDB Atlas | Cloud database |
| Mongoose | ODM / schema modeling |
| Socket.io | WebSocket server |
| JSON Web Tokens | Authentication |
| Cloudinary | Image hosting & upload |
| bcrypt | Password hashing |

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

- Node.js `v18+`
- A [MongoDB Atlas](https://www.mongodb.com/atlas) account
- A [Cloudinary](https://cloudinary.com/) account

### 1. Clone the repository

```bash
git clone https://github.com/wlo-dev/chattify.git
cd chattify
```

### 2. Configure environment variables

Create a `.env` file in the `/backend` directory:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NODE_ENV=development
```

### 3. Install dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### 4. Run the app

```bash
# Start the backend server (from /backend)
npm run dev

# Start the frontend dev server (from /frontend)
npm run dev
```

The frontend will be available at `http://localhost:5173` and the backend at `http://localhost:5001`.

---

## Roadmap

- [ ] Group chats
- [ ] Message reactions (emoji)
- [ ] Read receipts
- [ ] Message search
- [ ] Push notifications
- [ ] Voice / video calling

---

## Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch — `git checkout -b feature/your-feature`
3. Commit your changes — `git commit -m "feat: add your feature"`
4. Push to the branch — `git push origin feature/your-feature`
5. Open a Pull Request

---

## License

Distributed under the MIT License. See [`LICENSE`](LICENSE) for more information.

---

<div align="center">

Built by [Willouby](https://wlo-dev.github.io) · [GitHub](https://github.com/wlo-dev) · [LinkedIn](https://www.linkedin.com/in/your-handle) · [Behance](https://www.behance.net/your-handle)

</div>

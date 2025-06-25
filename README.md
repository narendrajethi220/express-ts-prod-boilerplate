# express-ts-prod-boilerplate

A scalable, production‑ready Express.js boilerplate built with **TypeScript** and **Winston** logging.
Clone it, install dependencies, and start building robust REST APIs with battle‑tested best practices baked in.

---

## ✨ Features

* ✅ **TypeScript‑first** Express server (ES2020 target)
* ✅ Scalable, opinionated folder structure
* ✅ Centralized error‑handling middleware
* ✅ Environment variable support via `.env`
* ✅ **Winston logger** for tracking events, debug issues, and monitor application behavior.
* ✅ Request validation with **Zod**
* ✅ Modular routing & controller architecture


---

## 📁 Folder Structure

```text
.
├── src
│   ├── config          # App & environment config helpers
│   ├── controllers      # Request handlers / business logic
│   ├── middlewares      # Error handling, auth, etc.
│   ├── routes           # Express routers
│   ├── utils            # Logger, helpers
│   ├── validators       # Zod schemas
│   └── server.ts        # App entrypoint
├── logs                 # Winston log output (git‑ignored)
├── .env                 # Your env vars (never commit!)
├── tsconfig.json
├── package.json
└── README.md
```

---

## 🚀 Getting Started

```bash
https://github.com/narendrajethi220/express-ts-prod-boilerplate.git
cd express-ts-prod-boilerplate
npm install
npm run dev
```

---

## 📦 NPM Scripts

| Command         | Description                                    |
| --------------- | ---------------------------------------------- |
| `npm run dev`   | Run in development with nodemon      |
|
| `npm start`     | Run in development with typescript   |

---

## 👤 Author

Developed by Narendra Singh Jethi as a part of Lambda 4.0 Backend Bootcamp – happy coding!

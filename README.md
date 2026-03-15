# Express Info Server

A small Express.js project that exposes a few routes, serves static HTML, and provides a simple JSON API.

## 📦 Features

- ✅ `/` - Welcome message
- ✅ `/about` - About the project
- ✅ `/contact` - Contact info (served from `public/contact.html`)
- ✅ `/api/users` - JSON list of users (GET)
- ✅ `/api/users` - Add a user (POST)
- ✅ `/weather/:city` - Returns weather JSON for a city
- ✅ Middleware that logs every request
- ✅ Static file serving from `public/`

## 🚀 Getting Started

Install dependencies:

```bash
npm install
```

Start the server:

```bash
npm start
```

Development (auto-reload):

```bash
npm run dev
```

Then open http://localhost:3000 in your browser.

## 🧪 Example API

### GET /api/users

```json
[
  {"id": 1, "name": "Rahul"},
  {"id": 2, "name": "Aditi"}
]
```

### POST /api/users

Request body:

```json
{ "name": "Your Name" }
```

### GET /weather/:city

Example response:

```json
{"city": "Delhi", "temp": "30°C"}
```

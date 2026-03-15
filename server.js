const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// In-memory users store (reset on restart)
const users = [
  { id: 1, name: 'Rahul' },
  { id: 2, name: 'Aditi' }
];

// Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Serve static files from public/
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Express Info Server!');
});

app.get('/about', (req, res) => {
  res.send('This is a mini Express info server project built with Express.js.');
});

app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const { name } = req.body;
  if (!name || typeof name !== 'string' || !name.trim()) {
    return res.status(400).json({ error: 'name is required' });
  }

  const id = users.length ? Math.max(...users.map((u) => u.id)) + 1 : 1;
  const user = { id, name: name.trim() };
  users.push(user);

  res.status(201).json(user);
});

app.get('/weather/:city', (req, res) => {
  const { city } = req.params;
  const temp = `${Math.floor(20 + Math.random() * 15)}°C`;
  res.json({ city, temp });
});

// 404
app.use((req, res) => {
  res.status(404).send('Not found');
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});

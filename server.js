// server.js
import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend')));

app.post('/api/greet', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ greeting: 'Please provide a name!' });
  }

  res.json({ greeting: `Hi ${name}, nice to meet you! 👋` });
});

// Only start server if this is run directly
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}

export default app;

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3000;

// Get the current directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// Serve the frontend static files from the 'frontend' directory
app.use(express.static(path.join(__dirname, '../frontend')));

app.post('/api/greet', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ greeting: 'Please provide a name!' });
  }

  res.json({ greeting: `Hi ${name}, nice to meet you! 👋` });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

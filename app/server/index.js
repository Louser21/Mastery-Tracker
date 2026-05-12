import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// MongoDB Connection
const rawUri = process.env.MONGO_URI || 'mongodb://localhost:27017/mastery-tracker';
const MONGO_URI = rawUri.trim().replace(/^["']|["']$/g, '');
mongoose.connect(MONGO_URI)
  .then(() => console.log(`[${new Date().toLocaleTimeString()}] Connected to MongoDB`))
  .catch(err => console.error('MongoDB connection error:', err));

// Define Schema and Model
const StateSchema = new mongoose.Schema({
  userId: { type: String, default: 'default_user' }, // Allows multi-user in the future
  checks: Object,
  revChecks: Object,
  statuses: Object,
  notes: Object,
  dailyTasks: Array,
  weeklyGoals: Array,
  monthlyGoals: Array,
  gradeLog: Array,
  dailyMetrics: Object,
  _savedAt: { type: Date, default: Date.now }
}, { minimize: false }); // minimize: false ensures empty objects {} are saved

const StateModel = mongoose.model('State', StateSchema);

// GET /api/state — Load saved state
app.get('/api/state', async (req, res) => {
  try {
    const state = await StateModel.findOne({ userId: 'default_user' });
    if (state) {
      console.log(`[${new Date().toLocaleTimeString()}] State loaded from MongoDB`);
      res.json({ success: true, data: state });
    } else {
      console.log(`[${new Date().toLocaleTimeString()}] No saved state found in MongoDB, returning defaults`);
      res.json({ success: true, data: null });
    }
  } catch (err) {
    console.error('Error loading state:', err.message);
    res.status(500).json({ success: false, error: 'Failed to load state' });
  }
});

// PUT /api/state — Save full state
app.put('/api/state', async (req, res) => {
  try {
    const stateData = req.body;
    if (!stateData || typeof stateData !== 'object') {
      return res.status(400).json({ success: false, error: 'Invalid state data' });
    }

    stateData._savedAt = new Date();

    const updatedState = await StateModel.findOneAndUpdate(
      { userId: 'default_user' },
      { $set: stateData },
      { returnDocument: 'after', upsert: true }
    );

    console.log(`[${new Date().toLocaleTimeString()}] State saved to MongoDB`);
    res.json({ success: true, savedAt: updatedState._savedAt });
  } catch (err) {
    console.error('Error saving state:', err.message);
    res.status(500).json({ success: false, error: 'Failed to save state' });
  }
});

// POST /api/state/reset — Reset to defaults
app.post('/api/state/reset', async (req, res) => {
  try {
    await StateModel.deleteOne({ userId: 'default_user' });
    console.log(`[${new Date().toLocaleTimeString()}] State reset in MongoDB`);
    res.json({ success: true, message: 'State reset to defaults' });
  } catch (err) {
    console.error('Error resetting state:', err.message);
    res.status(500).json({ success: false, error: 'Failed to reset state' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`\n  ⚡ Mastery Tracker API running at http://localhost:${PORT}`);
  console.log(`  🗄️  MongoDB Database connected\n`);
});

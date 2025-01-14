const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;

app.set('trust proxy', 1);

const contactRoute = require('./routes/contact');

// Liste des origines autorisées
const allowedOrigins = [
  'http://localhost:3000',
  'http://localhost:3001', // Pour le développement local
  'https://portfolio-p8.vercel.app',
];

// Configuration CORS
app.use(cors({
  origin: function (origin, callback) {
    // Autorise uniquement les requêtes provenant des origines dans `allowedOrigins`
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // gestion des cookies si je veux add une authentification
}));

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  }

  if (req.method === 'OPTIONS') {
    return res.status(200).end(); // Répond immédiatement aux requêtes OPTIONS
  }

  next();
});

// Middleware de sécurité et de gestion
app.use(helmet());
app.use(express.json());
app.use(morgan('combined'));

// Route de test pour vérifier que le serveur fonctionne
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Utilisation de la route de contact
app.use('/contact', contactRoute);

// Démarrage du serveur
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


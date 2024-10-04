const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 5000;

// Importer les routes
const contactRoute = require('./routes/contact');

// Liste des origines autorisées
const allowedOrigins = [
  'http://localhost:3000', // Pour le développement local
  'https://portfolio-p8-ygbv8zlvi-sarahs-projects-13498ccf.vercel.app' // URL de ton front-end déployé sur Vercel
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
  credentials: true, // Active cette option si tu gères des sessions ou des cookies entre le front-end et le back-end
}));

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
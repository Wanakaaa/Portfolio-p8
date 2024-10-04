const express = require('express');
const router = express.Router();
const { handleContactForm } = require('../controllers/contactController');
const rateLimit = require('express-rate-limit')

const contactLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 5,
    message: "Vous avez déjà envoyé 5 messages, merci de réessayer dans 15 minutes."
})

// Définition de la route POST /contact
router.post('/', contactLimiter, handleContactForm);

module.exports = router;
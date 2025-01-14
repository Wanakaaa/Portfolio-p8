const sendMail = require('../mail');

// Contrôleur pour traiter le formulaire de contact
exports.handleContactForm = (req, res) => {
  const { name, email, message, honp } = req.body;

  // Vérifier le champ honeypot (si ce champ est rempli, on bloque l'envoi)
  if (honp) {
    console.log('Bot détecté. Requête bloquée.');
    return res.status(400).json({ error: "Bot détecté. Message non envoyé." });
  }

  // Vérification que tous les champs sont bien remplis
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Tous les champs (nom, email, message) sont obligatoires.' });
  }

  // Logique de traitement (ici on simule juste une sauvegarde)
  console.log(`Message reçu de ${name} (${email}): ${message}`);

  // Envoi de l'email avec Nodemailer
  sendMail(process.env.RECEIVER_EMAIL, 'Nouveau message de contact', `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`)
    .then(() => {
      console.log('Email envoyé avec succès');
      return res.status(200).json({ message: `Merci de m'avoir contacté !`});
    })
    .catch((error) => {
      console.log(`Erreur lors de l\'envoi de l\'email:`, error);
      return res.status(500).json({ error: `Erreur lors de l\'envoi de l\'email.` });
    });
};
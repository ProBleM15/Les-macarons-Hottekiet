const express = require("express");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");

const app = express();
app.use(bodyParser.json());

// Remplacez 'YOUR_SENDGRID_API_KEY' par votre clé API SendGrid
sgMail.setApiKey("LCRVHRZ8QMKNRZXZKCC29P95");

app.post("/envoyer-commande", (req, res) => {
    const { nom, prenom, email, telephone, boite, parfums, date, time, paymentOption, deliveryMethod } = req.body;

    const msg = {
        to: "baptistegautreau07@gmail.com",
        from: "baptistegautreau07@gmail.com", // L'adresse email vérifiée sur SendGrid
        subject: "Nouvelle commande de macarons",
        html: `
            <h1>Nouvelle commande de macarons</h1>
            <p><strong>Nom :</strong> ${nom}</p>
            <p><strong>Prénom :</strong> ${prenom}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Téléphone :</strong> ${telephone}</p>
            <p><strong>Boîte :</strong> ${boite}</p>
            <p><strong>Parfums :</strong> ${parfums.join(", ")}</p>
            <p><strong>Date de retrait :</strong> ${date}</p>
            <p><strong>Heure de retrait :</strong> ${time}</p>
            <p><strong>Mode de paiement :</strong> ${paymentOption}</p>
            <p><strong>Mode de livraison :</strong> ${deliveryMethod}</p>
        `
    };

    sgMail
        .send(msg)
        .then(() => {
            console.log("Email envoyé");
            res.json({ success: true });
        })
        .catch((error) => {
            console.error("Erreur d'envoi de l'email:", error);
            res.status(500).json({ success: false, error });
        });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});

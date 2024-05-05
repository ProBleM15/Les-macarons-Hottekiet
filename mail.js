// Initialisation de Email.js
(function () {
    emailjs.init("CWjD-bBgvT0VEO-5JAzjl");
})();
// Sélection des éléments HTML
const contactForm = document.querySelector('.cs-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const messageContainer = document.getElementById('mail_envoye');

// Fonction de validation du formulaire
function validateForm(event) {
    event.preventDefault();

    // Vérification des champs requis
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || phoneInput.value.trim() === '' || messageInput.value.trim() === '') {
        showMessage('Veuillez remplir tous les champs.');
        return;
    }

    // Vérification du format de l'email
    if (!isValidEmail(emailInput.value)) {
        showMessage('Veuillez saisir une adresse e-mail valide.');
        return;
    }

    // Si le formulaire est valide, envoi de l'email
    sendMail();
}

// Fonction pour afficher le message
function showMessage(message) {
    messageContainer.textContent = message;
    messageContainer.classList.add('mail-envoye');
    messageContainer.style.display = 'block';

    // Supprimer le message après 10 secondes
    setTimeout(() => {
        messageContainer.style.display = 'none';
    }, 10000);
}

// Fonction de validation du format de l'email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Écouteur d'événement pour la soumission du formulaire
if (contactForm) {
    contactForm.addEventListener('submit', validateForm);
}

// Fonction d'envoi d'email
function sendMail() {
    const userID = 'T_xDrTWQ0nkvJxOTD';
    const serviceID = 'mail';
    const templateID = 'template_i3gqnou';

    // Paramètres de l'email
    const params = {
        from_name: nameInput.value,
        from_email: emailInput.value,
        phone: phoneInput.value,
        message: messageInput.value,
        sender_email: emailInput.value,
        sender_phone: phoneInput.value
    };

    // Envoi de l'email via Email.js
    emailjs.send(serviceID, templateID, params, userID)
        .then((response) => {
            console.log('Mail envoyé avec succès !', response);
            // Effacement des champs du formulaire
            nameInput.value = '';
            emailInput.value = '';
            phoneInput.value = '';
            messageInput.value = '';

            // Affichage du message de succès
            showMessage('Votre message a été envoyé avec succès.');
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            // Gestion des erreurs
            showMessage('Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer.');
        });
}
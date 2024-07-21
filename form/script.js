// Définition des parfums disponibles avec leur prix unitaire
const parfumsDisponibles = {
    "Amande": { nom: "Amande", image: "../images/amende.png", prix: 1.50 },
    "Angevin": { nom: "Angevin", image: "../images/angevin.png", prix: 1.50 },
    "Aux Deux Chocolats": { nom: "Aux Deux Chocolats", image: "../images/2chocolats.png", prix: 1.50 },
    "Bergamote": { nom: "Bergamote", image: "../images/bergamote.png", prix: 1.50 },
    "Bonbon à la Fraise": { nom: "Bonbon à la Fraise", image: "../images/bonbon_fraise.png", prix: 1.50 },
    "Bonbon au Caramel": { nom: "Bonbon au Caramel", image: "../images/bonbon_caramel.png", prix: 1.50 },
    "Café": { nom: "Café", image: "../images/cafe.png", prix: 1.50 },
    "Caramel Beurre Salé": { nom: "Caramel Beurre Salé", image: "../images/cbs.png", prix: 1.50 },
    "Cassis": { nom: "Cassis", image: "../images/cassis.png", prix: 1.50 },
    "Céréale Croustillante": { nom: "Céréale Croustillante", image: "../images/cereale_crousti.png", prix: 1.50 },
    "Cerise": { nom: "Cerise", image: "../images/cerise.png", prix: 1.50 },
    "Chocolat": { nom: "Chocolat", image: "../images/chocolat.png", prix: 1.50 },
    "Chocolat Blanc": { nom: "Chocolat Blanc", image: "../images/choco_blanc.png", prix: 1.50 },
    "Chocolat Caramel Cacahuète": { nom: "Chocolat Caramel Cacahuète", image: "../images/Choco_cacahuete.png", prix: 1.50 },
    "Citron": { nom: "Citron", image: "../images/citron.png", prix: 1.50 },
    "Clémentine Amande": { nom: "Clémentine Amande", image: "../images/clementine_amende.png", prix: 1.50 },
    "Coco": { nom: "Coco", image: "../images/coco.png", prix: 1.50 },
    "Cointreau": { nom: "Cointreau", image: "../images/cointreau.png", prix: 1.50 },
    "Combava": { nom: "Combava", image: "../images/combava.png", prix: 1.50 },
    "Coquelicot": { nom: "Coquelicot", image: "../images/coquelicot.png", prix: 1.50 },
    "Fleur d'Oranger": { nom: "Fleur d'Oranger", image: "../images/fleur_oranger.png", prix: 1.50 },
    "Fraise": { nom: "Fraise", image: "../images/fraise.png", prix: 1.50 },
    "Fraise Basilic": { nom: "Fraise Basilic", image: "../images/fraise-basilic.png", prix: 1.50 },
    "Framboise": { nom: "Framboise", image: "../images/framboise.png", prix: 1.50 },
    "Kalamansi": { nom: "Kalamansi", image: "../images/kalamansi.png", prix: 1.50 },
    "Lavande": { nom: "Lavande", image: "../images/lavande.png", prix: 1.50 },
    "Litchi Framboise": { nom: "Litchi Framboise", image: "../images/lichi_framboise.png", prix: 1.50 },
    "Menthe Chocolat": { nom: "Menthe Chocolat", image: "../images/menthe_choco.png", prix: 1.50 },
    "Mojito": { nom: "Mojito", image: "../images/mojito.png", prix: 1.50 },
    "Myrtille": { nom: "Myrtille", image: "../images/myrtille.png", prix: 1.50 },
    "Nougat": { nom: "Nougat", image: "../images/nougat.png", prix: 1.50 },
    "Pamplemousse": { nom: "Pamplemousse", image: "../images/pamplemousse.png", prix: 1.50 },
    "Pâte à Tartiner": { nom: "Pâte à Tartiner", image: "../images/pate_tartiner.png", prix: 1.50 },
    "Pistache": { nom: "Pistache", image: "../images/pistache.png", prix: 1.50 },
    "Praliné Feuilletés": { nom: "Praliné Feuilletés", image: "../images/praline_feuilletes.png", prix: 1.50 },
    "Rose": { nom: "Rose", image: "../images/rose.png", prix: 1.50 },
    "Spéculoos": { nom: "Spéculoos", image: "../images/speculoss.png", prix: 1.50 },
    "Vanille": { nom: "Vanille", image: "../images/vanille.png", prix: 1.50 },
    "Yuzu": { nom: "Yuzu", image: "../images/yuzu.png", prix: 1.50 },
    
    "Bleu & Noix": { nom: "Bleu & Noix", image: "../images/amende.png", prix: 2.00 },
    "Chèvre Figue": { nom: "Chèvre Figue", image: "../images/amende.png", prix: 2.00 },
    "Foie Gras": { nom: "Foie Gras", image: "../images/amende.png", prix: 2.00 },
    "Magret de Canard": { nom: "Magret de Canard", image: "../images/amende.png", prix: 2.00 },
    "Saumon Fumé": { nom: "Saumon Fumé", image: "../images/amende.png", prix: 2.00 }
};

// Tableau pour stocker les commandes
let commandes = [];

document.addEventListener('DOMContentLoaded', function() {
    const boiteSelect = document.getElementById('boiteSelect');
    if (boiteSelect) {
        boiteSelect.addEventListener('change', function() {
            const capacite = parseInt(this.value);
            if (capacite > 0) {
                afficherParfums(capacite);
            } else {
                fermerListeParfums();
            }
        });
    } else {
        console.error("L'élément avec l'ID 'boiteSelect' n'a pas été trouvé.");
    }

    initDateTimeSelectors();
    initPaymentSelector();
    document.getElementById('submitCommande').addEventListener('click', function(event) {
        event.preventDefault();
        validerCommande();
    });

    document.getElementById('nom').addEventListener('input', function() { document.getElementById('nomError').textContent = ''; });
    document.getElementById('prenom').addEventListener('input', function() { document.getElementById('prenomError').textContent = ''; });
    document.getElementById('email').addEventListener('input', function() { document.getElementById('emailError').textContent = ''; });
    document.getElementById('telephone').addEventListener('input', function() { document.getElementById('telError').textContent = ''; });
    document.getElementById('dateSelect').addEventListener('input', function() { document.getElementById('dateError').textContent = ''; });
    document.getElementById('timeSelect').addEventListener('input', function() { document.getElementById('timeError').textContent = ''; });

});

function afficherParfums(capacite) {
    const parfumsContainer = document.getElementById('parfumsContainer');
    parfumsContainer.innerHTML = '';

    for (const parfum in parfumsDisponibles) {
        const parfumOption = document.createElement('div');
        parfumOption.classList.add('parfum-option');

        const parfumLabel = document.createElement('label');
        parfumLabel.textContent = parfumsDisponibles[parfum].nom;

        const parfumImage = document.createElement('img');
        parfumImage.src = parfumsDisponibles[parfum].image;
        parfumImage.alt = parfumsDisponibles[parfum].nom;
        parfumImage.classList.add('parfum-image');

        const parfumInput = document.createElement('input');
        parfumInput.type = 'number';
        parfumInput.min = '0';
        parfumInput.value = '0';
        parfumInput.dataset.parfum = parfum;
        parfumInput.classList.add('parfum-input', 'parfum-quantity-input');

        parfumInput.addEventListener('input', function() {
            verifierQuantiteMax(capacite);
        });

        parfumOption.appendChild(parfumLabel);
        parfumOption.appendChild(parfumImage);
        parfumOption.appendChild(parfumInput);
        parfumsContainer.appendChild(parfumOption);
    }

    parfumsContainer.dataset.capacite = capacite;
}

function fermerListeParfums() {
    const parfumsContainer = document.getElementById('parfumsContainer');
    parfumsContainer.innerHTML = '';
    document.getElementById('messageErreur').textContent = '';
}

function verifierQuantiteMax(capacite) {
    const parfumsContainer = document.getElementById('parfumsContainer');
    const parfumInputs = parfumsContainer.querySelectorAll('.parfum-quantity-input');
    let quantiteTotale = 0;

    parfumInputs.forEach(input => {
        quantiteTotale += parseInt(input.value);
    });

    if (quantiteTotale > capacite) {
        document.getElementById('messageErreur').textContent = `Vous avez dépassé la capacité du format de : ${capacite} macarons maximum.`;
        return false; // Return false to indicate invalid state
    } else {
        document.getElementById('messageErreur').textContent = '';
        return true; // Return true to indicate valid state
    }
}

function validerBoite() {
    const parfumsContainer = document.getElementById('parfumsContainer');
    const capacite = parseInt(parfumsContainer.dataset.capacite);
    const parfumInputs = parfumsContainer.querySelectorAll('.parfum-quantity-input');
    let quantiteTotale = 0;
    const parfumsSelectionnes = [];

    parfumInputs.forEach(input => {
        const quantite = parseInt(input.value);
        if (quantite > 0) {
            quantiteTotale += quantite;
            parfumsSelectionnes.push({
                nom: parfumsDisponibles[input.dataset.parfum].nom,
                quantite: quantite,
                prix: parfumsDisponibles[input.dataset.parfum].prix
            });
        }
    });

    if (quantiteTotale !== capacite) {
        document.getElementById('messageErreur').textContent = `La quantité totale de macarons doit correspondre à la capacité du format de : ${capacite} macarons.`;
        return;
    }

    // Déterminer le type de conteneur en fonction de l'option sélectionnée
    let type = '';
    const boiteSelect = document.getElementById('boiteSelect');
    if (boiteSelect) {
        const selectedOption = boiteSelect.options[boiteSelect.selectedIndex];
        if (selectedOption) {
            type = selectedOption.dataset.type;
        }
    }

    commandes.push({
        capacite: capacite,
        type: type,
        parfums: parfumsSelectionnes
    });

    afficherRecapitulatif();
    resetForm();
}




function resetForm() {
    document.getElementById('boiteSelect').selectedIndex = 0;
    fermerListeParfums();
    document.getElementById('commandeForm').reset(); // Reset the entire form
}

function afficherRecapitulatif() {
    const commandesRecap = document.getElementById('commandesRecap');
    commandesRecap.innerHTML = '';

    commandes.forEach((commande, index) => {
        const boiteDiv = document.createElement('div');
        boiteDiv.classList.add('boite-recap');

        // Afficher le type et la capacité correcte
        const boiteTitre = document.createElement('h3');
        let typeLabel = '';
        switch (commande.type) {
            case 'coffret':
                typeLabel = 'COFFRET';
                break;
            case 'boite':
                typeLabel = 'BOÎTE';
                break;
            case 'pyramide':
                typeLabel = 'PYRAMIDE';
                break;
            case 'sachet':
                typeLabel = 'SACHET';
                break;
            default:
                typeLabel = '';
        }
        boiteTitre.textContent = `${typeLabel} DE ${commande.capacite} MACARONS`;
        boiteDiv.appendChild(boiteTitre);

        const ul = document.createElement('ul');
        commande.parfums.forEach(parfum => {
            const li = document.createElement('li');
            li.textContent = `${parfum.nom} : ${parfum.quantite}`;
            ul.appendChild(li);
        });

        boiteDiv.appendChild(ul);

        const supprimerButton = document.createElement('button');
        supprimerButton.textContent = 'Supprimer';
        supprimerButton.addEventListener('click', function() {
            supprimerBoite(index);
        });
        boiteDiv.appendChild(supprimerButton);

        commandesRecap.appendChild(boiteDiv);
    });

    afficherTotal();
}




function supprimerBoite(index) {
    commandes.splice(index, 1);
    afficherRecapitulatif();
}

function afficherTotal() {
    const totalDiv = document.getElementById('total');
    totalDiv.innerHTML = '';

    let totalPrix = 0;

    commandes.forEach(commande => {
        const capaciteBoite = commande.capacite;
        let prixTotalMacarons = 0;
        let surcout = 0;

        // Calculer le prix total des macarons dans la boîte
        commande.parfums.forEach(parfum => {
            prixTotalMacarons += parfum.quantite * parfum.prix;
        });

        // Appliquer les surcoûts pour les coffrets uniquement
        switch (capaciteBoite) {
            case 7:
                if (document.getElementById('coffret7').selected) {
                    surcout = 4.50; // Surcoût pour le coffret 7 macarons
                }
                break;
            case 12:
                if (document.getElementById('coffret12').selected) {
                    surcout = 5.00; // Surcoût pour le coffret 12 macarons
                }
                break;
            case 16:
                if (document.getElementById('coffret16').selected) {
                    surcout = 5.00; // Surcoût pour le coffret 16 macarons
                }
                break;
            case 20:
                if (document.getElementById('coffret20').selected) {
                    surcout = 5.00; // Surcoût pour le coffret 20 macarons
                }
                break;
            default:
                // Pour les boîtes qui ne sont pas des coffrets, pas de surcoût
                break;
        }

        // Calculer le prix total en ajoutant le surcoût uniquement pour les coffrets
        if (surcout > 0) {
            totalPrix += prixTotalMacarons + surcout;
        } else {
            totalPrix += prixTotalMacarons; // Pour les boîtes ou pyramides sans surcoût
        }
    });

    totalDiv.textContent = `Total: ${totalPrix.toFixed(2)} €`;
}


function initDateTimeSelectors() {
    const dateSelect = document.getElementById('dateSelect');

    flatpickr(dateSelect, {
        enableTime: false,
        dateFormat: "Y-m-d",
        minDate: "today",
        disable: [
            function(date) {
                // Disable Sundays
                return (date.getDay() === 0);
            }
        ],
        onChange: function(selectedDates, dateStr, instance) {
            validateTime(); // Validate time whenever date changes
            const selectedDate = selectedDates[0];
            const currentDate = new Date();

            // If selected date is today, disable past times
            if (selectedDate.getDate() === currentDate.getDate() &&
                selectedDate.getMonth() === currentDate.getMonth() &&
                selectedDate.getFullYear() === currentDate.getFullYear()) {
                updateAvailableTimes();
            } else {
                resetTimeOptions();
            }
        }
    });

    dateSelect.addEventListener('change', function() {
        validateTime(); // Validate time whenever date changes
    });
}

function updateAvailableTimes() {
    const timeSelect = document.getElementById('timeSelect');
    const currentTime = new Date();
    const options = timeSelect.querySelectorAll('option');

    options.forEach(option => {
        const time = option.value.split(':');
        const optionTime = new Date();
        optionTime.setHours(time[0]);
        optionTime.setMinutes(time[1]);

        if (optionTime <= currentTime) {
            option.disabled = true;
        } else {
            option.disabled = false;
        }
    });
}

function resetTimeOptions() {
    const timeSelect = document.getElementById('timeSelect');
    const options = timeSelect.querySelectorAll('option');

    options.forEach(option => {
        option.disabled = false;
    });
}

function validateTime() {
    const timeSelect = document.getElementById('timeSelect');
    if (timeSelect.value === '') {
        document.getElementById('timeError').textContent = 'Veuillez sélectionner une heure.';
    } else {
        document.getElementById('timeError').textContent = '';
    }
}

function initPaymentSelector() {
    const paymentOptions = document.querySelectorAll('input[name="paymentOption"]');

    paymentOptions.forEach(option => {
        option.addEventListener('change', function() {
            document.getElementById('paymentError').textContent = '';
        });
    });
}

function validerCommande() {
    const dateSelect = document.getElementById('dateSelect');
    const timeSelect = document.getElementById('timeSelect');
    const paymentOptions = document.querySelectorAll('input[name="paymentOption"]');
    const selectedPaymentOption = Array.from(paymentOptions).find(option => option.checked);

    const nomInput = document.getElementById('nom');
    const prenomInput = document.getElementById('prenom');
    const emailInput = document.getElementById('email');
    const telInput = document.getElementById('telephone');

    let isValid = true;

    // Validation de la date
    if (!dateSelect || dateSelect.value.trim() === '') {
        document.getElementById('dateError').textContent = 'Veuillez sélectionner une date.';
        isValid = false;
    } else {
        document.getElementById('dateError').textContent = '';

        // Validate if selected date is today and time is not in the past
        const selectedDate = new Date(dateSelect.value);
        const currentDate = new Date();
        const selectedTime = timeSelect.value.split(':');
        const currentHour = currentDate.getHours();
        const currentMinute = currentDate.getMinutes();

        if (selectedDate.toDateString() === currentDate.toDateString()) {
            const selectedHour = parseInt(selectedTime[0]);
            const selectedMinute = parseInt(selectedTime[1]);

            if (selectedHour < currentHour || (selectedHour === currentHour && selectedMinute < currentMinute)) {
                document.getElementById('timeError').textContent = 'Impossible de choisir un horaire passé aujourd\'hui.';
                isValid = false;
            } else {
                document.getElementById('timeError').textContent = '';
            }
        }
    }

    // Validation du mode de paiement
    if (!selectedPaymentOption) {
        document.getElementById('paymentError').textContent = 'Veuillez sélectionner une option de paiement.';
        isValid = false;
    } else {
        document.getElementById('paymentError').textContent = '';
    }

    // Validation du nom
    if (!nomInput || nomInput.value.trim() === '') {
        document.getElementById('nomError').textContent = 'Veuillez entrer votre nom.';
        isValid = false;
    } else {
        document.getElementById('nomError').textContent = '';
    }

    // Validation du prénom
    if (!prenomInput || prenomInput.value.trim() === '') {
        document.getElementById('prenomError').textContent = 'Veuillez entrer votre prénom.';
        isValid = false;
    } else {
        document.getElementById('prenomError').textContent = '';
    }

    // Validation de l'email
    if (!emailInput || emailInput.value.trim() === '' || !validateEmail(emailInput.value.trim())) {
        document.getElementById('emailError').textContent = 'Veuillez entrer une adresse e-mail valide.';
        isValid = false;
    } else {
        document.getElementById('emailError').textContent = '';
    }

    // Validation du numéro de téléphone
    if (!telInput || telInput.value.trim() === '' || !validatePhoneNumber(telInput.value.trim())) {
        document.getElementById('telError').textContent = 'Veuillez entrer un numéro de téléphone valide.';
        isValid = false;
    } else {
        document.getElementById('telError').textContent = '';
    }

    if (isValid) {
        // Redirection vers la page de remerciement
        window.location.href = "merci.html";
    }
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\.,;:\s@"]+(\.[^<>()\[\]\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
}

function validatePhoneNumber(phone) {
    const re = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    return re.test(phone);
}


function envoyerCommande(event) {
    event.preventDefault();

    const nom = document.getElementById("nom").value;
    const prenom = document.getElementById("prenom").value;
    const email = document.getElementById("email").value;
    const telephone = document.getElementById("telephone").value;
    const boite = document.getElementById("boiteSelect").value;
    const parfums = Array.from(document.getElementById("parfums").selectedOptions).map(option => option.value);
    const date = document.getElementById("dateSelect").value;
    const time = document.getElementById("timeSelect").value;
    const paymentOption = document.querySelector('input[name="paymentOption"]:checked').value;
    const deliveryMethod = document.querySelector('input[name="deliveryMethod"]:checked').value;

    const commande = {
        nom,
        prenom,
        email,
        telephone,
        boite,
        parfums,
        date,
        time,
        paymentOption,
        deliveryMethod
    };

    fetch("/envoyer-commande", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(commande)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("Commande envoyée avec succès !");
        } else {
            alert("Une erreur est survenue lors de l'envoi de la commande.");
        }
    })
    .catch(error => {
        console.error("Erreur:", error);
        alert("Une erreur est survenue lors de l'envoi de la commande.");
    });
}
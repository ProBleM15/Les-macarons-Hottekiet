document.addEventListener('DOMContentLoaded', function() {
    // Fonction de fermeture du menu de navigation mobile
    function closeMobileNav() {
        const CSnavbarMenu = document.querySelector('#cs-navigation');
        const CSbody = document.body;
        CSnavbarMenu.classList.remove('cs-active');
        CSbody.classList.remove('cs-open');
    }

    // Ajouter un récepteur d'événements au bouton du menu hamburger
    const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');
    if (CShamburgerMenu) {
        CShamburgerMenu.addEventListener('click', function(event) {
            const CSnavbarMenu = document.querySelector('#cs-navigation');
            const CSbody = document.body;
            CSnavbarMenu.classList.toggle('cs-active');
            CSbody.classList.toggle('cs-open');
            event.stopPropagation();
        });
    }

    // Fermer la navigation mobile lorsqu'on clique sur un lien de navigation
    const navLinks = document.querySelectorAll('#cs-navigation .cs-li-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            closeMobileNav();
            event.stopPropagation();
        });
    });

    // Fermer la navigation mobile en cliquant n'importe où sur la page après qu'elle a été ouverte
    document.addEventListener('click', function() {
        const CSbody = document.body;
        if (CSbody.classList.contains('cs-open')) {
            closeMobileNav();
        }
    });

    // Fermer la navigation mobile en appuyant sur la touche "Echap".
    document.addEventListener('keydown', function(event) {
        const CSbody = document.body;
        if (event.key === 'Escape' && CSbody.classList.contains('cs-open')) {
            closeMobileNav();
        }
    });
});

// NOTRE GAMME DE MACARONS
document.addEventListener('DOMContentLoaded', function() {
    // Tableaux contenant les chemins des images au survol pour chaque produit
    var hoverImages = [
        ['./images/pyramide100.png'], 
        ['./images/pyramide100.png'], 
        ['./images/pyramide100.png'], 
        ['./images/menu1.png'],
        ['./images/menu1.png'], 
        ['./images/menu1.png'],
        ['./images/menu1.png'], 
        ['./images/menu1.png'],
        ['./images/menu1.png'],
        ['./images/menu1.png'],
        ['./images/menu1.png'], 
        ['./images/menu1.png'],
        ['./images/pyramide100.png'],
        ['./images/pyramide100.png'],
        ['./images/pyramide100.png'], 
        ['./images/pyramide100.png'],
        ['./images/pyramide100.png'], 
        ['./images/pyramide100.png']  
    ];
    // Sélection de tous les éléments .product-card
    var productCards = document.querySelectorAll('.product-card');
    // Parcourir tous les éléments .product-card
    productCards.forEach(function(card, index) {
        // Création de l'élément img pour l'image au survol
        var hoverImage = document.createElement('img');
        hoverImage.classList.add('hover-image');

        // Sélection aléatoire d'une image au survol pour ce produit
        var randomIndex = Math.floor(Math.random() * hoverImages[index].length);
        hoverImage.src = hoverImages[index][randomIndex];
        hoverImage.alt = 'Image au survol';

        // Ajout de l'image au survol à la figure de la carte du produit
        var cardBanner = card.querySelector('.card-banner');
        cardBanner.appendChild(hoverImage);
    });
});

// CARTE GOOGLE MAP QUAND NE S'AFFICHE PAS 
function mapError() {
    document.getElementById('map-error').style.display = 'block';
}
document.addEventListener('DOMContentLoaded', function() {
    // Function to close mobile navigation menu
    function closeMobileNav() {
        const CSnavbarMenu = document.querySelector('#cs-navigation');
        const CSbody = document.body;
        CSnavbarMenu.classList.remove('cs-active');
        CSbody.classList.remove('cs-open');
    }

    // Add event listener to the hamburger menu button
    const CShamburgerMenu = document.querySelector('#cs-navigation .cs-toggle');
    if (CShamburgerMenu) {
        CShamburgerMenu.addEventListener('click', function(event) {
            const CSnavbarMenu = document.querySelector('#cs-navigation');
            const CSbody = document.body;
            CSnavbarMenu.classList.toggle('cs-active');
            CSbody.classList.toggle('cs-open');
            // Stop event propagation to avoid closing navigation when clicking the toggle button
            event.stopPropagation();
        });
    }

    // Close mobile navigation when clicking on a navigation link
    const navLinks = document.querySelectorAll('#cs-navigation .cs-li-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Close mobile navigation
            closeMobileNav();
            // Stop event propagation
            event.stopPropagation();
        });
    });

    // Close mobile navigation when clicking anywhere on the page after it has been opened
    document.addEventListener('click', function() {
        const CSbody = document.body;
        if (CSbody.classList.contains('cs-open')) {
            closeMobileNav();
        }
    });

    // Close mobile navigation when pressing the 'Escape' key
    document.addEventListener('keydown', function(event) {
        const CSbody = document.body;
        if (event.key === 'Escape' && CSbody.classList.contains('cs-open')) {
            closeMobileNav();
        }
    });
});












// SLIDER

document.addEventListener('DOMContentLoaded', function() {
    // Tableaux contenant les chemins des images au survol pour chaque produit
    var hoverImages = [
        ['./images/1.png'], 
        ['./images/1.png'], 
        ['./images/1.png'], 
        ['./images/1.png'],
        ['./images/1.png'], 
        ['./images/1.png'],
        ['./images/1.png'], 
        ['./images/1.png'],
        ['./images/1.png'], 
        ['./images/1.png'],
        ['./images/1.png'], 
        ['./images/1.png'],
        ['./images/1.png'], 
        ['./images/1.png'],
        ['./images/1.png'], 
        ['./images/1.png'],
        ['./images/1.png'], 
        ['./images/1.png']
       
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


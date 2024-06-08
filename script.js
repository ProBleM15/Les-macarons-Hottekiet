// INDEX.HTML : BARRE DE NAVIGATION
document.addEventListener('DOMContentLoaded', function() {
    function closeMobileNav() {
        const CSnavbarMenu = document.querySelector('#cs-navigation');
        const CSbody = document.body;
        CSnavbarMenu.classList.remove('cs-active');
        CSbody.classList.remove('cs-open');
    }

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

    const navLinks = document.querySelectorAll('#cs-navigation .cs-li-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            closeMobileNav();
            event.stopPropagation();
        });
    });

    document.addEventListener('click', function() {
        const CSbody = document.body;
        if (CSbody.classList.contains('cs-open')) {
            closeMobileNav();
        }
    });

    document.addEventListener('keydown', function(event) {
        const CSbody = document.body;
        if (event.key === 'Escape' && CSbody.classList.contains('cs-open')) {
            closeMobileNav();
        }
    });

    setupSlider('.slider-unite1', '.prev1', '.next1');
    setupSlider('.slider-unite2', '.prev2', '.next2');
});

// INDEX.HTML : CARTE GOOGLE MAP (quand ça ne marche pas)
function mapError() {
    document.getElementById('map-error').style.display = 'block';
}

// INDEX.HTML : NOTRE GAMME DE MACARONS
document.addEventListener('DOMContentLoaded', function() {
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
    var productCards = document.querySelectorAll('.product-card');
    productCards.forEach(function(card, index) {
        var hoverImage = document.createElement('img');
        hoverImage.classList.add('hover-image');
        var randomIndex = Math.floor(Math.random() * hoverImages[index].length);
        hoverImage.src = hoverImages[index][randomIndex];
        hoverImage.alt = 'Image au survol';
        var cardBanner = card.querySelector('.card-banner');
        cardBanner.appendChild(hoverImage);
    });
});

// INDEX.HTML : SLIDE MACARONS UNITES
function setupSlider(sliderSelector, prevBtnSelector, nextBtnSelector) {
    const slider = document.querySelector(sliderSelector);
    if (!slider) return;

    const slides = document.querySelectorAll(`${sliderSelector} .slide-unite`);
    const prevBtn = document.querySelector(prevBtnSelector);
    const nextBtn = document.querySelector(nextBtnSelector);
    let currentIndex = 0;
    let interval;
    let touchStartX = 0;
    let touchEndX = 0;
    function showSlide(index) {
        const slideWidth = slides[0].offsetWidth + 10;
        slider.style.transition = 'transform 0.5s ease';
        slider.style.transform = `translateX(-${slideWidth * index}px)`;
        currentIndex = index;
    }
    function nextSlide() {
        if (currentIndex < slides.length - 3) {
            showSlide(currentIndex + 1);
        } else {
            showSlide(0);
        }
    }
    function prevSlide() {
        if (currentIndex > 0) {
            showSlide(currentIndex - 1);
        } else {
            showSlide(slides.length - 3);
        }
    }
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    function startAutoSlide() {
        interval = setInterval(nextSlide, 2500);
    }
    function stopAutoSlide() {
        clearInterval(interval);
    }
    slider.addEventListener('mouseover', stopAutoSlide);
    slider.addEventListener('mouseout', startAutoSlide);
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });
    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleGesture();
    });
    function handleGesture() {
        const gestureThreshold = 50;
        const gestureDistance = touchStartX - touchEndX;

        if (gestureDistance > gestureThreshold) {
            nextSlide();
        } else if (gestureDistance < -gestureThreshold) {
            prevSlide();
        }
    }
    startAutoSlide();
}

// INDEX.HTML : FORMULAIRE DE CONTACT
(function () {
    emailjs.init("CWjD-bBgvT0VEO-5JAzjl");
})();

const contactForm = document.querySelector('.cs-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const messageInput = document.getElementById('message');
const messageContainer = document.getElementById('mail_envoye');

function validateForm(event) {
    event.preventDefault();
    if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || phoneInput.value.trim() === '' || messageInput.value.trim() === '') {
        showMessage('Veuillez remplir tous les champs.');
        return;
    }
    if (!isValidEmail(emailInput.value)) {
        showMessage('Veuillez saisir une adresse e-mail valide.');
        return;
    }
    sendMail();
}
function showMessage(message) {
    messageContainer.textContent = message;
    messageContainer.classList.add('mail-envoye');
    messageContainer.style.display = 'block';
    setTimeout(() => {
        messageContainer.style.display = 'none';
    }, 10000);
}
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
if (contactForm) {
    contactForm.addEventListener('submit', validateForm);
}
function sendMail() {
    const userID = 'T_xDrTWQ0nkvJxOTD';
    const serviceID = 'mail';
    const templateID = 'template_i3gqnou';
    const params = {
        from_name: nameInput.value,
        from_email: emailInput.value,
        phone: phoneInput.value,
        message: messageInput.value,
        sender_email: emailInput.value,
        sender_phone: phoneInput.value
    };
    emailjs.send(serviceID, templateID, params, userID)
        .then((response) => {
            console.log('Mail envoyé avec succès !', response);
            nameInput.value = '';
            emailInput.value = '';
            phoneInput.value = '';
            messageInput.value = '';
            showMessage('Votre message a été envoyé avec succès.');
        })
        .catch((error) => {
            console.error('Error sending email:', error);
            showMessage('Une erreur s\'est produite lors de l\'envoi du message. Veuillez réessayer.');
        });
}

// ./PAGES-EXT/PARFUMS.HTML (RECHERCHE UNITE MACARON)
$(document).ready(function() {
    if ($('#searchInput').length > 0) {
        $('#searchInput').autocomplete({
            source: function(request, response) {
                var searchTerm = request.term.toLowerCase();
                var suggestions = [];

                $('.cs-item').each(function() {
                    var name = $(this).find('.cs-name').text().trim().toLowerCase();
                    var image = $(this).find('.cs-picture img').attr('src');
                    var id = $(this).attr('id');

                    if (name.startsWith(searchTerm)) {
                        suggestions.push({
                            label: '<div class="suggestion-item" data-page="#' + id + '"><img src="' + image + '" alt="' + name + '"><span>' + name + '</span></div>',
                            value: name,
                            page: '#' + id
                        });
                    }
                });
                response(suggestions);
            },
            select: function(event, ui) {
                var selectedPage = ui.item.page;
                if (selectedPage) {
                    if (!event.isDefaultPrevented()) {
                        window.location.href = selectedPage;
                        $('#searchInput').val('');
                    }
                    return false;
                }
            }
        });

        if ($.ui && $.ui.autocomplete) {
            $('#searchInput').autocomplete('instance')._renderItem = function(ul, item) {
                return $('<li>')
                    .append(item.label)
                    .appendTo(ul);
            };
        }

        $(document).on('click touchstart', '.suggestion-item', function(event) {
            var selectedPage = $(this).data('page');
            if (selectedPage) {
                if (!event.isDefaultPrevented()) {
                    window.location.href = selectedPage;
                    $('#searchInput').val('');
                }
            }
        });

        $('#searchInput').on('touchmove', function(event) {
            event.preventDefault();
        });
    }
});







document.addEventListener("DOMContentLoaded", function() {
    const changeLanguageBtn = document.getElementById('changeLanguageBtn');
    const flagIcon = document.getElementById('flagIcon');
    let currentLanguage = 'fr';

    // Vérification du localStorage pour la langue sauvegardée
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        currentLanguage = savedLanguage;
    }

    // Initialisation de la langue et du drapeau au chargement de la page
    changeLanguage(currentLanguage);
    updateFlagIcon(currentLanguage);

    // Gestion du changement de langue au clic sur le bouton
    changeLanguageBtn.addEventListener('click', function() {
        currentLanguage = (currentLanguage === 'en') ? 'fr' : 'en';
        changeLanguage(currentLanguage);
        updateFlagIcon(currentLanguage);

        // Sauvegarde de la langue sélectionnée dans le localStorage
        localStorage.setItem('language', currentLanguage);
    });

    function changeLanguage(language) {
        const elements = document.querySelectorAll('[data-en]');
        elements.forEach(element => {
            element.textContent = element.getAttribute(`data-${language}`);
        });
    }

    function updateFlagIcon(language) {
        let imagePath;
        switch (language) {
            case 'en':
                imagePath = (window.location.pathname.includes('about.html')) ? '../images/flag-angleterre.png' : './images/flag-angleterre.png';
                break;
            case 'fr':
            default:
                imagePath = (window.location.pathname.includes('about.html')) ? '../images/flag-france.png' : './images/flag-france.png';
                break;
        }
        flagIcon.src = imagePath;

        if (language === 'en') {
            flagIcon.alt = 'English Flag';
        } else {
            flagIcon.alt = 'French Flag';
        }
    }
});

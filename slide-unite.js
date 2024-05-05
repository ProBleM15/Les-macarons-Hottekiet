function setupSlider(sliderSelector, prevBtnSelector, nextBtnSelector) {
    const slider = document.querySelector(sliderSelector);
    const slides = document.querySelectorAll(`${sliderSelector} .slide-unite`);
    const prevBtn = document.querySelector(prevBtnSelector);
    const nextBtn = document.querySelector(nextBtnSelector);
    let currentIndex = 0;
    let interval;
    let touchStartX = 0;
    let touchEndX = 0;

    function showSlide(index) {
        const slideWidth = slides[0].offsetWidth + 10; // Marge de 10px entre les images
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
        interval = setInterval(nextSlide, 2500); // Défilement automatique toutes les 3 secondes
    }

    function stopAutoSlide() {
        clearInterval(interval);
    }

    slider.addEventListener('mouseover', stopAutoSlide);
    slider.addEventListener('mouseout', startAutoSlide);

    // Gestionnaires d'événements tactiles
    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].clientX;
    });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].clientX;
        handleGesture();
    });

    // Gestion du mouvement tactile
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

setupSlider('.slider-unite1', '.prev1', '.next1');

setupSlider('.slider-unite2', '.prev2', '.next2');
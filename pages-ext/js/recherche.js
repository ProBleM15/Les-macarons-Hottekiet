$(document).ready(function() {
    // Configuration de l'autocomplétion
    $('#searchInput').autocomplete({
        source: function(request, response) {
            var searchTerm = request.term.toLowerCase();
            var suggestions = [];

            // Parcourir chaque élément de la liste
            $('.cs-item').each(function() {
                var name = $(this).find('.cs-name').text().trim().toLowerCase();
                var image = $(this).find('.cs-picture img').attr('src');
                var id = $(this).attr('id');

                // Vérifier si le nom du produit commence par le terme de recherche
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
                // Redirection vers la page du produit seulement si l'événement de clic n'est pas annulé
                if (!event.defaultPrevented) {
                    window.location.href = selectedPage;
                    $('#searchInput').val(''); // Vider la barre de recherche
                }

                return false; // Empêcher le comportement par défaut du navigateur
            }
        }
    }).autocomplete('instance')._renderItem = function(ul, item) {
        return $('<li>')
            .append(item.label)
            .appendTo(ul);
    };

    // Gestionnaire d'événements pour le clic sur les suggestions sur les appareils mobiles
    $(document).on('click touchstart', '.suggestion-item', function(event) {
        var selectedPage = $(this).data('page');
        if (selectedPage) {
            // Redirection vers la page du produit seulement si l'événement de clic n'est pas annulé
            if (!event.defaultPrevented) {
                window.location.href = selectedPage;
                $('#searchInput').val(''); // Vider la barre de recherche
            }
        }
    });

    // Empêcher le défilement des suggestions lorsqu'un utilisateur interagit avec la liste de suggestions sur un appareil mobile
    $('#searchInput').on('touchmove', function(event) {
        event.preventDefault();
    });
});

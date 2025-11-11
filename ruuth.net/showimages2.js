function escapeHtml(s) {
    if (s == null) return '';
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function showImages(heading, images) {
    var h2 = document.getElementById("h2");
    h2.textContent = heading;

    var maindiv = document.getElementById("mainDiv");
    maindiv.innerHTML = '';

    // Use a stable gallery id per heading so GLightbox groups correctly
    var galleryId = heading.toLowerCase().replace(/\s+/g, '-');

    // Build DOM efficiently
    var frag = document.createDocumentFragment();

    for (var i = 0; i < images.length; i++) {
        var file = images[i][0];
        var title = images[i][1] || '';
        var subtitle = images[i][2] || '';

        var newdiv = document.createElement("div");

        // Note: no duplicate id on <img>; use a class if you need styling.
        newdiv.innerHTML =
            '<a href="images/' + encodeURI(file) + '" ' +
                'class="glightbox" ' +
                'data-gallery="' + escapeHtml(galleryId) + '" ' +
                'data-title="' + escapeHtml(title) + '" ' +
                'data-description="' + escapeHtml(subtitle) + '">' +
                '<img class="thumb" src="images/small/small_' + encodeURI(file) + '" ' +
                    'alt="' + escapeHtml(title || file) + '">' +
            '</a>' +
            '<br>' +
            '<small>' + escapeHtml(title) + '<br>' + escapeHtml(subtitle) + '</small>';

        frag.appendChild(newdiv);
    }

    maindiv.appendChild(frag);

    // (Re)initialize GLightbox after injecting new content
    if (window._glightboxInstance) {
        window._glightboxInstance.destroy();
    }
    window._glightboxInstance = GLightbox({
        selector: 'a.glightbox',
        touchNavigation: true,
        loop: true
    });

    sessionStorage.setItem('heading', heading);
}

// Preserve scroll and restore last view as before
window.addEventListener('pageshow', function(event) {
    restoreState();
    var x = sessionStorage.getItem('x');
    var y = sessionStorage.getItem('y');
    if (x && y) {
        window.scrollBy(Number(x), Number(y));
    }
});

window.addEventListener('pagehide', function(event) {
    sessionStorage.setItem('x', String(window.pageXOffset));
    sessionStorage.setItem('y', String(window.pageYOffset));
});

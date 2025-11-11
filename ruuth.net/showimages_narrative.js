function escapeHtml(s) {
    if (s == null) return '';
    return String(s)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

function escapeHtml2(s) {
    return s;
}

function showImages(heading, images) {
    var h2 = document.getElementById("h2");
    h2.textContent = heading;

    var maindiv = document.getElementById("mainDiv");
    maindiv.innerHTML = '';

    var galleryId = heading.toLowerCase().replace(/\s+/g, '-');
    var frag = document.createDocumentFragment();

    for (var i = 0; i < images.length; i++) {
        var file = images[i][0];
        var title = images[i][1] || '';
        var subtitle = images[i][2] || '';
        var data = astroData[file] || {};

        // Build narrative HTML if available
        var narrativeHtml = '';
        if (data.story || data.whatToLook || data.scale || data.constellation || data.nameOrigin) {
            narrativeHtml = `
            <div class="astro-info">
                ${data.story ? `<div class="astro-block"><h4>Story</h4><p>${escapeHtml(data.story)}</p></div>` : ''}
                ${data.nameOrigin ? `<div class="astro-block"><h4>Name Origin</h4><p>${escapeHtml(data.nameOrigin)}</p></div>` : ''}
                ${data.whatToLook ? `<div class="astro-block"><h4>What to Look For</h4><p>${escapeHtml(data.whatToLook)}</p></div>` : ''}
                ${data.scale ? `<div class="astro-block"><h4>Scale</h4><p>${escapeHtml(data.scale)}</p></div>` : ''}
                ${data.constellation ? `<div class="astro-block"><h4>Constellation</h4><p>${escapeHtml(data.constellation)}</p></div>` : ''}
                ${data.discovered ? `<div class="astro-block"><h4>Discovered</h4><p>${escapeHtml(data.discovered)}</p></div>` : ''}
            </div>
            `;
        } else {
            // No data, add item to nodata list
            console.log('No data for file:[', images[i].join(', '), '],');
        }

        var newdiv = document.createElement("div");

        newdiv.innerHTML =
            '<a href="images/' + encodeURI(file) + '" ' +
                'class="glightbox" ' +
                'data-gallery="' + escapeHtml(galleryId) + '" ' +
                'data-title="' + escapeHtml(title) + ' (' + escapeHtml(subtitle) + ')" ' +
                'data-description="' + escapeHtml(narrativeHtml) + '">' +
                '<img class="thumb" src="images/small/small_' + encodeURI(file) + '" ' +
                    'alt="' + escapeHtml(title || file) + '">' +
            '</a>' +
            '<br>' +
            '<small>' + escapeHtml(title) + '<br>' + escapeHtml(subtitle) + '</small>';

        frag.appendChild(newdiv);
    }

    maindiv.appendChild(frag);

    if (window._glightboxInstance) {
        window._glightboxInstance.destroy();
    }
    window._glightboxInstance = GLightbox({
        selector: 'a.glightbox',
        touchNavigation: true,
        loop: true,
        moreText: 'Read more',
        slideExtraAttributes: {
            title: true,
            description: true
        }
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

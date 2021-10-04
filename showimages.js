function showImages(heading, images)
{
    var h2 = document.getElementById("h2");
    h2.innerHTML = heading;

    var maindiv = document.getElementById("mainDiv");
    maindiv.innerHTML = '';

    for (var i = 0; i < images.length; i++) {
        var newdiv = document.createElement("DIV");
        newdiv.innerHTML = '<a href="images/' + images[i][0] + '"> ' +
                            '<img id="small" src="images/small/small_' + images[i][0] + '" ' +
                            'alt="' + images[i][0] + '" >' +
                            '</a>' +
                            '<br>' +
                            '<small>' + images[i][1] + '<br>' + images[i][2] + '</small>';
        maindiv.appendChild(newdiv);
    }
    sessionStorage.setItem('heading', heading);
}

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

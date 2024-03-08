function upDate(previewPic) {
    var imageUrl = previewPic.src;
    document.getElementById('image').style.backgroundImage = "url('" + imageUrl + "')";
    var altText = previewPic.alt;
    document.getElementById('image').innerHTML = altText;
}

function unDo() {
    document.getElementById('image').style.backgroundImage = "url('')";
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}

function addTabFocus() {
    console.log("Tab focus event triggered.");
    var images = document.querySelectorAll('.preview');
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute('tabindex', '0');
    }
}

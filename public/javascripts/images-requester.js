var btnsContainer = document.getElementById('btn-container');
var btns = btnsContainer.getElementsByTagName('a');
var container = document.getElementById('content');

[].forEach.call(btns, function (btn) {
    btn.addEventListener('click', function () {
        $.ajax({
            url: 'api/components',
            type: 'GET',
            /*data : {
                type: 'graphic-cards'
            },*/
            success: function (components) {
                console.log(components);
                deleteImages(container);
                displayImages(components, container);
            },
            error: function (request, error) {
                console.log("Request: " + JSON.stringify(request));
            }
        });
    })
});

function displayImages(images, container) {
    images.forEach(function(img) {
        var tag = document.createElement('IMG');
        tag.setAttribute('src', img.src);
        tag.className = 'image';
        //tag.style.width = '200px';
        container.appendChild(tag);
    });   
}

function deleteImages(container) {
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
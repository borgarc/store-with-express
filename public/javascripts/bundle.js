var btnsContainer = document.getElementById('btn-container');
var container = document.getElementById('content');
var components = [];

$.ajax({
    url: 'api/componenttypes',
    type: 'GET',
    success: function (types) {
        types.forEach(function (type) {
            var tag = document.createElement('A');
            tag.setAttribute('data-type', type.type_id);
            tag.addEventListener('click', function(event){
                var typeID = Number(event.target.dataset.type);
                var r = function(c) { return c.type_id === typeID; };
                renderImages(r);
            });
            tag.href = '#';
            tag.innerHTML = type.type;
            btnsContainer.appendChild(tag);
        });
    },
    error: function (request, error) {
        console.log('Request: ' + JSON.stringify(request));
    }
});

$.ajax({
    url: 'api/components',
    type: 'GET',
    success: function (comps) {
        components = comps;
        var r = function(c) { return true; };
        renderImages(r);
    },
    error: function (request, error) {
        console.log("Request: " + JSON.stringify(request));
    }
});

function renderImages(reducer) {
    var renderComps = components.filter(reducer);
    deleteImages(container);
    displayImages(renderComps, container);
}

function displayImages(images, container) {
    images.forEach(function (img) {
        var tag = document.createElement('IMG');
        tag.setAttribute('src', img.src);
        tag.className = 'image';
        container.appendChild(tag);
    });
}

function deleteImages(container) {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}
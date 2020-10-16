//create map
const map = L.map('mapid').setView([41.3429628,-8.4741817], 15);

//create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',)
.addTo(map);


//create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29,68],
    popAnchor: [170, 2]
})

let marker;

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;
    // remove icon
    marker && map.removeLayer(marker);
    // add icon layer
    marker = L.marker([lat, lng], {icon}).addTo(map);
});

function  addPhotoField () {
    //get photo container with images id
    const container = document.querySelector('#images');
    //get container to duplicate with class new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');
    //clone last added photo
    const clonedFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
    //check if field is empty
    const input = clonedFieldContainer.children[0];
    if(input.value == ""){
        return;
    }
    //clean field
    input.value = ""
    //add clone to photo container
    container.appendChild(clonedFieldContainer);
}

function deletePhoto(event){
    const span = event.currentTarget;
    const fieldsContainer = document.querySelectorAll('.new-upload');

    if (fieldsContainer.length <= 1) {
        //clear span value
        span.parentNode.children[0].value = "";
        return;
    }

    //delete span
    span.parentNode.remove();
}

//Yes or No switch
function toggleSelect(event) {
    //remove active class from the buttons
    document.querySelectorAll('.button-select button').forEach(button => button.classList.remove('active'));
    //get clicked buttons
    const button = event.currentTarget;
    button.classList.add('active');
    //update input hidden with value
    const input = document.querySelector('[name="open_on_weekends"]');
    input.value = button.dataset.value;
    
}
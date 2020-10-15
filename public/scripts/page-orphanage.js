//create map
const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}


const map = L.map('mapid', options).setView([41.3429628,-8.4741817], 15);

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

//create and add marker
L
.marker([41.3429628,-8.4741817], { icon })
.addTo(map)

//Image galary

function selectImage(event) {
    const selectedButton = event.currentTarget;
    // remove all active classes
    const buttons = document.querySelectorAll(".images button")
    buttons.forEach(button => button.classList.remove("active"));
    // select the clicked image
    const image = selectedButton.children[0];
    const imageContainer = document.querySelector(".orphanage-details > img ");
    // refresh container of image
    imageContainer.src = image.src;
    // add class active to the clicked button
    button.classList.add('active');
}
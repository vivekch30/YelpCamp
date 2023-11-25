// One bug that this is not showing map on the show page
mapboxgl.accessToken = 'pk.eyJ1Ijoidml2ZWs3Mjc3IiwiYSI6ImNsbWk3a28yeDAyZzMzZW56cGdxMnF1MzYifQ.Krfs9a-kWPjffrpMenvdrg';
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v12',
        center: campground.geometry.coordinates,
        zoom: 10,
    });

new mapboxgl.Maker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${campground.title}</h3><p>${campground.location}</p>`
            )
    )
    .addTo(map)
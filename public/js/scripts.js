
$(document).ready(function(){

$.each(hotels, function(index, value){
    $('#hotel-choices').append('<option>' + value.name + '</option>')
})

$.each(restaurants, function(index, value){
    $('#restaurant-choices').append('<option>' + value.name + '</option>')
})

$.each(activities, function(index, value){
    $('#activity-choices').append('<option>' + value.name + '</option>')
})

/// EVENT HANDLERS

$('#hotelButton').click(function(){
    let hotelChoice = $('#hotel-choices option:selected').text()

    $('#hotel-group').append('<div class="itinerary-item"><span class="title" id="hotelsSelected">' + hotelChoice + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>')

    let index = hotels.findIndex(function(elem) {
        if (elem.name === hotelChoice) {
            return true;
        }
    })

    drawMarker('hotel', hotels[index].place.location);
    console.log(index)
    console.log(hotels[index].place.location)
})

$('#restaurantButton').click(function(){
    let restaurantChoice = $('#restaurant-choices option:selected').text()

    $('#restaurant-group').append('<div class="itinerary-item"><span class="title" id="restaurantSelected">' + restaurantChoice + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>')
})

$('#activityButton').click(function(){
    let activityChoice = $('#activity-choices option:selected').text()

    $('#activity-group').append('<div class="itinerary-item"><span class="title" id="activitySelected">' + activityChoice + '</span><button class="btn btn-xs btn-danger remove btn-circle">x</button></div>')
})


});


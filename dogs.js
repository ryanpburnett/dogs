var dogs = $('#dogs')
var doggoButton = $('#button')

var url = 'https://dog.ceo/api/breed/doberman/images'

doggoButton.click(function() {
    $.ajax({
        url: url,
        method: 'GET'
    }).then(function(res) {
        var random = Math.floor(Math.random() * res.message.length)
        var dogImage = $('<img>')
        // attr can be done one at a time, comma separated, or as an object (key: value)
        .attr({
            'src': res.message[random], 
            'width': '600px'})
        dogImage.prependTo(dogs)
    })
    console.log('success')
})
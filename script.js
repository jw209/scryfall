function getRandomCardData(id) {
  var request = new XMLHttpRequest()
  request.open('GET', 'https://api.scryfall.com/cards/random', true)
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {   
      var imageValue = data.image_uris.normal
      document.getElementById(id).src=imageValue
      console.log(data)
    } else {
      console.log('error')
    }
  }
  request.send()
}
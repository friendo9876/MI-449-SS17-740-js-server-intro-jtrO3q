var http = require('http')
// Create a new server that just says "Hi!!" at every route
var server = http.createServer(function (request, response) {
  if (request.url === '/') {
    response.end(
      '<html><body><h1>Welcome TO My Website!</h1>' +
      '<img src="https://i.imgur.com/jKhQJVH.jpg" alt="Waving hi">' +
      '<p><a href="./cuteness">cuteness Page</a></p><p><a href="./joke-random">Random Joke Page</a></p></body></html>'
    )
  } else if (request.url === '/cuteness') {
    response.end('<html><body><h1>Welcome to the cuteness Page</h1>' + getDogImages() + '<p><a href="./">Home</a></p><p><a href="./random-joke">Random Joke Page</a></p></body></html>')
  } else if (request.url === '/random-joke') {
    var randomJokeId = Math.floor(Math.random() * 3) + 1
    response.end('<html><body><h1>Welcome To The Random Joke Page!</h1>' + randomJoke(randomJokeId) + '<p><a href="./">Home</a></p><p><a href="./cuteness">cuteness Page</a></p></body></html>')
  } else {
    var errorPath = request.url
    response.end('<html><body><h1>Page Not Found</h1><p>The path ' + errorPath + ' was not found or does not exist.</p><p><a href="./">Home</a></p></body></html>')
  }
})

// Listen on port 8080, so that we can reach the app at
// localhost:8080
var port = process.env.PORT || 8080
server.listen(port)

// Output a friendly message to the terminal
console.log('Server running at http://localhost:' + port + '/')

function randomJoke (JokeId) {
  if (JokeId === 1) {
    return '<p>Knock, knock. <br><br> Who\'s there? <br><br> No-one. <br><br>  No-one who? <br><br> (Remain silent)</p>'
  } else if (JokeId === 2) {
    return '<p>Knock. Knock. <br<br> Who\'s there? <br><br> Yoda Lady. <br><br> Yoda lady who? <br><br> Good job yodeling!</p>'
  } else {
    return '<p>Knock, knock. <br><br> Who\'s there? <br><br> Winnie the Pooh <br><br> Winnie the Pooh who? <br><br> No seriously, Winnie the Pooh right now, let us in or it lands on your doormat!</p>'
  }
}
var imageURLs = [
  'https://i.redditmedia.com/Zh83EcoKv7NXjJpnTrX7DJM0qzFiHzV5wnD5pkhEoPs.jpg?w=720&s=d8826e9710dd9283b7f1bfcd0da5fe62',
  'https://i.redditmedia.com/PfxW7CTMCKatnmgmQ-JKZ8IgBQnjyaPwqGGDrUls3CM.jpg?w=576&s=4a07d37dd75af17bf9a5a4e1384431af',
  'https://i.redditmedia.com/JsHxVuSIQGYb6Ch1yXv53YZWom4aOeCwWk6IekklKQk.jpg?w=525&s=9d09b4d03e27646125253477527abc16',
  'https://i.redditmedia.com/pLcUoetOSuzvgmg1Ak8GGYcT31fnykGc3-sVn5FiUfw.jpg?w=576&s=b3a35c8248591aef6868cf56c6e7e9b6',
  'https://i.redditmedia.com/RZAICSyIEr8-oJpd9BCc5XhPFTDYIALyifwIJfcs2BY.jpg?w=768&s=5f9dfbfe42f2e85d5cea4dec9496290b'
]
function getDogImages () {
  var img = '<img src="'
  var randomIndex = Math.floor(Math.random() * imageURLs.length)
  img += imageURLs[randomIndex]
  img += '" alt="Some pictures of dogs"/>'
  return img
}

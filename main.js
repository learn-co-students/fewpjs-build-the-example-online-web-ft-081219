// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const modal = document.getElementById('modal')
const likes = document.querySelectorAll('.like-glyph')

let color = {
  "red" : "",
  "" : "red"
}
let glyphs = {
  "♡" : "♥",
  "♥" : "♡"
}


for (let heart of likes) {
  heart.addEventListener('click', e => {
    e.target.style.color = color[e.target.style.color]
    heart.innerText = glyphs[heart.innerText];
  })
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

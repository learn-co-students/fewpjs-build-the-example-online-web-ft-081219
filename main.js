// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const modal = document.getElementById('modal');
modal.classList.add('hidden');

const likeButtons = document.querySelectorAll('.like-glyph');
for (const node of likeButtons) {
  node.addEventListener('click', () => {
    mimicServerCall()
    .then(() => {
      toggleHeart(node);
    })
    .catch((error) => {
      modal.classList.remove('hidden');
      modal.querySelector('p#modal-message').innerText = error;
      setTimeout(() => {
        modal.classList.add('hidden');
      }, 5000)
    })
  })
}

function toggleHeart(node) {
  if (node.className.includes('activated-heart')) {
    node.classList.remove('activated-heart');
    node.innerText = EMPTY_HEART;
  } else {
    node.classList.add('activated-heart');
    node.innerText = FULL_HEART;
  }
}

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
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

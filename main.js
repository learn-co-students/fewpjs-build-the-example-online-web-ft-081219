// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const error = document.querySelector("div#modal")
const error_paragraph = document.querySelector("p#modal-message")

// Your JavaScript code goes here!




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

document.addEventListener("DOMContentLoaded",()=>{
  
  const like_buttons = document.querySelectorAll("span.like-glyph")
like_buttons.forEach(e =>{
  e.addEventListener("click",()=>{
    mimicServerCall(url="http://mimicServer.example.com")
    .then(resp => { if(resp !== "Pretend remote server notified of action!" ){
      throw resp};
         if ( e.innerHTML !== FULL_HEART){

          e.innerHTML = FULL_HEART
          e.classList.toggle("activated-heart")
         }else{
            e.innerHTML = EMPTY_HEART
            e.classList.toggle("activated-heart")
         }
       })
    .catch(e =>{error.classList.toggle("hidden"); error_paragraph.innerHTML = `${e}`; setTimeout(() => { error.classList.toggle("hidden") }, 5000)})
  })
})
 

})

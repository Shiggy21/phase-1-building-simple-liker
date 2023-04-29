// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let heartState = document.querySelector(`.like`)
let mod = document.querySelector(`#modal`)
let heartGlyph = heartState.querySelector(`.like-glyph`)
heartState.addEventListener("click", () => {
  mimicServerCall()
  .then((response) => {
    if (heartState.classList.contains(`activated-heart`)){
      heartState.classList.remove(`activated-heart`)
      heartGlyph.textContent = EMPTY_HEART
    }
    else{
      heartState.classList.add(`activated-heart`)
      heartGlyph.textContent = FULL_HEART
    }
  })
  .catch((error) => {
    mod.classList.remove(`hidden`)
    const errDisplay = mod.querySelector(`p`)
    errDisplay.textContent = error
    setTimeout(() => {
      mod.classList.add(`hidden`)
    }, 3000)
  })
})
mod.classList.add(`hidden`)



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

const giphyRandomEndpoint = `https://api.giphy.com/v1/gifs/random?api_key=2041494ca782403cb6055682a7943c75&tag=&rating=G`;

// GRAB THE BUTTON ELEMENT FROM THE DOM
const randomButton = document.querySelector('#getRandomGiphyButton')

// ADD A CLICK EVENT LISTENER
randomButton.addEventListener('click', () => {
    console.log('random button clicked')
})

// INSIDE THE EVENT HANDLER, MAKE A FETCH GET REQUEST TO THE
// giphyRandomApiUrl ENDPOINT

// IN THE .THEN METHOD, PARSE THE JSON RESPONSE OBJECT AND FIND
// THE image_url key

// CHANGE THE SRC ATTRIBUTE ON THE IMG TAG TO THE image_url KEY

// CHANGE THE INNER TEXT OF THE giphyTitleDiv TO  THE title KEY

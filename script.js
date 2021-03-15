const apiKey = '2041494ca782403cb6055682a7943c75'
const giphyRandomEndpoint = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=G`;

// GRAB THE BUTTON ELEMENT FROM THE DOM
const randomButton = document.querySelector('#getRandomGiphyButton')
const titleDiv = document.querySelector('#giphyTitleDiv')
const imageTag = document.querySelector('#giphyImageTag')

// ADD A CLICK EVENT LISTENER
randomButton.addEventListener('click', () => {
    console.log('random button clicked')
    fetch(giphyRandomEndpoint)
        .then(response => response.json())
        .then(json => {
            let title = json.data.title
            let giphyUrl = json.data.fixed_width_downsampled_url
            imageTag.setAttribute('src', giphyUrl)
            titleDiv.innerText = `${title}`
        })
        .catch(err => console.log(err))
})

// INSIDE THE EVENT HANDLER, MAKE A FETCH GET REQUEST TO THE
// giphyRandomApiUrl ENDPOINT

// IN THE .THEN METHOD, PARSE THE JSON RESPONSE OBJECT AND FIND
// THE image_url key

// CHANGE THE SRC ATTRIBUTE ON THE IMG TAG TO THE image_url KEY

// CHANGE THE INNER TEXT OF THE giphyTitleDiv TO  THE title KEY

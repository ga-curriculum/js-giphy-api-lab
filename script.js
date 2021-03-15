const apiKey = '2041494ca782403cb6055682a7943c75'
const giphyRandomEndpoint = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=G`;
const giphyTrendingEndpoint = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&rating=g`

// GRAB THE BUTTON ELEMENT FROM THE DOM
const randomButton = document.querySelector('#getRandomGiphyButton')
const titleDiv = document.querySelector('#giphyTitleDiv')
const imageTag = document.querySelector('#giphyImageTag')
const searchGifs = document.querySelector('#searchGifs')
const getSearchButton = document.querySelector('#getSearchGiphyButton')
const getTrendingGiphyButton = document.querySelector('#getTrendingGiphyButton')

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

getTrendingGiphyButton.addEventListener('click', () => {
    searchGifs.innerHTML = ''
    console.log('trending clicked', giphyTrendingEndpoint)
    fetch(giphyTrendingEndpoint)
        .then(response => response.json())
        .then(json => {
            json.data.forEach(gif => {
                console.log(gif)
                let newImageLink = document.createElement('a')
                newImageLink.setAttribute('href', gif.embed_url)
                newImageLink.setAttribute('target', '_blank' )
                let newImageEl = document.createElement('img')
                newImageEl.setAttribute('src', gif.images.fixed_width_downsampled.url)
                newImageLink.append(newImageEl)
                searchGifs.append(newImageLink)
            })

            console.log(json)
        })
})




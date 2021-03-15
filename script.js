(() => {
    const apiKey = '2041494ca782403cb6055682a7943c75'

    const titleDiv = document.querySelector('#giphyTitleDiv')
    const imageTag = document.querySelector('#giphyImageTag')
    const searchGifs = document.querySelector('#searchGifs')

    const randomButton = document.querySelector('#getRandomGiphyButton')
    const getTrendingGiphyButton = document.querySelector('#getTrendingGiphyButton')
    const getSearchButton = document.querySelector('#getSearchGiphyButton')
    const userInput = document.querySelector("[name='user-input']")

    const newGifsLoop = (array) => {
        searchGifs.innerHTML = ''
        imageTag.style.display = "none"
        titleDiv.style.display = "none"
        array.forEach(gif => {
            console.log(gif)
            let newImageLink = document.createElement('a')
            newImageLink.setAttribute('href', gif.embed_url)
            newImageLink.setAttribute('target', '_blank')
            let newImageEl = document.createElement('img')
            newImageEl.setAttribute('src', gif.images.fixed_width_downsampled.url)
            newImageLink.append(newImageEl)
            searchGifs.append(newImageLink)
        })
    }

    randomButton.addEventListener('click', () => {
        searchGifs.innerHTML = ''
        const giphyRandomEndpoint = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=G`;
        fetch(giphyRandomEndpoint)
            .then(response => response.json())
            .then(json => {
                let title = json.data.title
                let giphyUrl = json.data.fixed_width_downsampled_url
                imageTag.style.display = "block"
                titleDiv.style.display = "block"
                imageTag.setAttribute('src', giphyUrl)
                titleDiv.innerText = `${title}`
            })
            .catch(err => console.log(err))
    })

    getTrendingGiphyButton.addEventListener('click', () => {
        const giphyTrendingEndpoint = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&rating=g`
        fetch(giphyTrendingEndpoint)
            .then(response => response.json())
            .then(json => {
                newGifsLoop(json.data)
            })
    })

    getSearchButton.addEventListener('click', () => {
        let userSearch = userInput.value
        const giphySearchEndpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${userSearch}&limit=25&offset=0&rating=g&lang=en`
        fetch(giphySearchEndpoint)
            .then(response => response.json())
            .then(json => {
                newGifsLoop(json.data)
            })
    })

})()




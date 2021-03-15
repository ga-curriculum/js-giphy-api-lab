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

    const trendingOrSearchFetch = async(giphyEndpoint) => {
        try {
            let response = await fetch(giphyEndpoint)
            let json = await response.json()
            newGifsLoop(json.data)
        } catch(err) { console.log(err)}
    }

    randomButton.addEventListener('click', async() => {
        const giphyRandomEndpoint = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=&rating=G`;
        try {
            let response = await fetch(giphyRandomEndpoint)
            let json = await response.json()
            imageTag.setAttribute('src', json.data.fixed_width_downsampled_url)
            titleDiv.innerText = `${json.data.title}`
        }
        catch(err){ console.log(err) }
    })

    getTrendingGiphyButton.addEventListener('click', () => {
        return trendingOrSearchFetch(`https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=25&rating=g`)
    })

    getSearchButton.addEventListener('click', () => {
        let userSearch = userInput.value
        return trendingOrSearchFetch(`https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${userSearch}&limit=25&offset=0&rating=g&lang=en`)
    })
})()




export const getGifs = async (category) => {
    try {
        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=5&api_key=1DtRVCRUoYfXUjrcnn0oUf3PdRW092Yv`
        const resp = await fetch(url)
        const {data} = await resp.json()

        const gifs = data.map( ({id, title, images}) => {
            return {
                id: id,
                title: title,
                url: images?.downsized_medium.url
            }
        })

        return gifs // Retorna una promesa que puede o no ser cumplida
    } catch (error) {
        console.warn(error)
    }
}
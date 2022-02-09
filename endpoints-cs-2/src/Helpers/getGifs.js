export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=YhX0MRx9ZIadjHw9UFbzD662kMpNnAVQ`
    const resp = await fetch(url)
    const {data} = await resp.json() //Destructuring to oonly get the data fom the object

    const gifs = data.map( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs
}
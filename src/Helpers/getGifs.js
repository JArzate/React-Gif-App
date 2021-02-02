export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=VF3mP2KTWgl5u9uzxglkpi8lEcYIJJuy`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map((img) => ({
        id: img.id,
        url: img.images?.downsized_medium.url,
        title: img.title
    }));
    return gifs;
}
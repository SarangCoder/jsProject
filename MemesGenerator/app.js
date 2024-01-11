let memesTitle = document.querySelector(".memes-title");
let memesImg = document.querySelector("img");
let memesAuthor = document.querySelector(".memes-author");

let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    let result = await memesGenerator();
    memesTitle.innerHTML = result.title;
    memesImg.setAttribute("src",result.url);
    memesAuthor.innerHTML = result.author;
})

let apiUrl = "https://meme-api.com/gimme/wholesomememes";

let memesGenerator = async () => {
    try {
        let res = await axios.get(apiUrl);
        return res.data;
    } catch (e) {
        console.log("Error", e);
        console.log("Memes is not found");
    }
}
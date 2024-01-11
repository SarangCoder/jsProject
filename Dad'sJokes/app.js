let btn = document.querySelector("button");
let joke = document.querySelector("#jokes");


btn.addEventListener("click", async() =>{
    let result = await getJokes();
    joke.innerHTML = result;
    
})



let url = "https://icanhazdadjoke.com/"

async function getJokes() {
    try{

        let res = await axios.get(url);
        return res.data.joke;
    }catch(e){
        console.log("Error : ",e);
        console.log("No joke found");
    }
}
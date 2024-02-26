let btnE1 = document.querySelector('button')
let quote = document.querySelector(".result")
let author = document.querySelector(".author")

btnE1.addEventListener('click', getquote)

async function getquote(){
    const url = `https://api.quotable.io/random`
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);

    quote.innerHTML = `''${data.content},,`;
    author.innerHTML = `Written By -${data.author}`;
}
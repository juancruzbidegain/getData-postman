

const obtenerData =  ()  => {

    const url = "https://dog.ceo/api/breeds/image/random"
    fetch(url)
        .then( res => res.json())
        .then(data => imprimirData(data))    

}

const imprimirData = ({ message }) => {
    const contenido = document.querySelector(".results")
    contenido.innerHTML = `
    <img src="${message}"></img>
    `
}


const btn = document.querySelector('#btn')

btn.addEventListener('click', obtenerData)
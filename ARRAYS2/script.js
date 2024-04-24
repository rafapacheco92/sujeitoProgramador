/// inclues, startsWith, endsWith


// let names = ["Rafa", "Duda", "Rodrigo"];

// console.log(names.includes("Rafa")); // return boolean

// console.log(names.startsWith("R")); // return boolean

// console.log(names.endsWith("a")); // return boolean


let listElement = document.querySelector('#app')

let posts = []

function nutriApp() {
    fetch("https://sujeitoprogramador.com/rn-api/?api=posts")
    .then((r) => r.json())
    .then((json) => {
        posts = json;

        posts.map((post) =>{
            let liElement = document.createElement('li');
            let title = document.createElement('strong');
            let imgElement = document.createElement('img');
            let descElement = document.createElement('p');

            let titleText = document.createTextNode(post.titulo);
            title.appendChild(titleText);

            imgElement.setAttribute('src', post.capa)

            let descText = document.createTextNode(post.subtitulo)
            descElement.appendChild(descText)

            liElement.appendChild(title);
            liElement.appendChild(imgElement);
            liElement.appendChild(descElement);
            listElement.appendChild(liElement);
        })
    })
    .catch(() => {
        console.log("Deu ruim")
    })
}

nutriApp()
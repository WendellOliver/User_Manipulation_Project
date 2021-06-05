const authors = JSON.parse(localStorage.getItem("authors"));
const cards = document.querySelector('.card');
let totalF = 0;
let totalM = 0;

for (let author of authors){
      
    if (author.gender == "female"){
        totalF +=1; 
    }else 
    totalM +=1;

} 

const html = `

<p> female: ${totalF}</p>


`; // pegamos aqui a única opção que está sendo retornada - posição do array 0
const div = document.createElement('strong');
div.innerHTML = html;
cards.appendChild(div);
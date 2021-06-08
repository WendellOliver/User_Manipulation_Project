const authors = JSON.parse(localStorage.getItem("authors"));
const cards = document.querySelector('.card');
let totalF = 0;
let totalM = 0;
let sum = 0;
let pessoas = 0;
let media = 0;


for (let author of authors){
      
    if (author.gender == "female"){
        totalF +=1; 
    }else 
    totalM +=1;

    sum+= author.dob.age;
    console.log(sum);

} 


const html = `

<p> female: ${totalF}</p>
<p> male: ${totalM}</p>
<p> sum of ages: ${sum}</p>
<p> average of ages: ${sum /= totalF + totalM}

`; // pegamos aqui a única opção que está sendo retornada - posição do array 0
const div = document.createElement('strong');
div.innerHTML = html;
cards.appendChild(div);
const users = document.querySelector('.user');
var data = null;

var request = new XMLHttpRequest();
request.open("GET", 'https://randomuser.me/api/?seed=javascript&results=1&nat=BR&noinfo', true);

request.onload = function () {
    data=json.parse(this.response)

}

const p=document.createElement("p");
const html=` 
<p> ${data.results.name.first}</p>

`;

p.innerHTML=html;

users.appendChild=p;
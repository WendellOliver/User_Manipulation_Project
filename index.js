const cards = document.querySelector('.card');

url = 'https://randomuser.me/api/?seed=javascript&results=10&nat=BR&noinfo';

async function authors() {
    try {
        const data = await fetch(url).then((resp) => resp.json()) //retorna uma promessa contendo a resposta (um Responseobjeto). 
        let authors = data.results; // data.results contem o array de objetos retornado pela API
        authors.forEach(element => {


            const html = `
                        <img src="${element.picture.thumbnail}">
                        <p>${element.name.first} ${element.name.last}</p> 
                        <strong>${element.dob.age}</strong>
                        <p>${element.gender}</p>

                    `; // pegamos aqui a única opção que está sendo retornada - posição do array 0
            const div = document.createElement('li');
            div.innerHTML = html;
            cards.appendChild(div);
        });

        localStorage.setItem("authors", JSON.stringify(authors) );

    } catch (error) { // caso a API retorne erro, capturamos com o catch
        console.log(error);
    };

    
}
authors();


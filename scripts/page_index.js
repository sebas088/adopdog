// SCRIPT INDEX

class Section {
    constructor (nombre, imagen, link){
        this.nombre = nombre;
        this.imagen = imagen;
        this.link = link;
    }
}

const section_1 = new Section ("Dogs", "perros-icon.png", "dogs.html");
const section_2 = new Section ("Cats", "gatos-icon.png", "cats.html");
const section_3 = new Section ("Food", "comida-icon.png", "food.html");
const section_4 = new Section ("Toys and Accessories", "accesorios-icon.png", "toys.html");
const section_5 = new Section ("Medicine", "medicina-icon.png", "medicine.html")

const sections = [];
sections.push(section_1, section_2, section_3, section_4, section_5);

let mainDiv = document.getElementById("Section--main");

function seeMain(array){
    for(let section of array){
        let divMain = document.createElement("figure");
        divMain.innerHTML = `
        <figure class="Section-figure">
            <a href="./pages/${section.link}"><img src="./sources/images/${section.imagen}" class="Section-imgMain card" alt="section dogs"></a>
            <figcaption class="Section-figcaptionMain card">
                ${section.nombre}
            </figcaption>
        </figure>
        `
        mainDiv.appendChild(divMain);
    }
}

seeMain(sections);



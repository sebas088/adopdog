// SCRIPT INDEX

class section {
    constructor (nombre, imagen, link){
        this.nombre = nombre;
        this.imagen = imagen;
        this.link = link;
    }
}

const section_1 = new section ("Dogs", "perros-icon.png", "dogs.html");
const section_2 = new section ("Cats", "gatos-icon.png", "cats.html");
const section_3 = new section ("Food", "comida-icon.png", "food.html");
const section_4 = new section ("Toys and Accessories", "accesorios-icon.png", "toys.html");
const section_5 = new section ("Medicine", "medicina-icon.png", "medicine.html")

const sections = [];
sections.push(section_1, section_2, section_3, section_4, section_5);

let sections_div = document.getElementById("seccion_principal");

function ver_sections(array){
    for(let section of array){
        let div_sections = document.createElement("figure");
        div_sections.innerHTML = `
        <figure class="article_sections" id="article-mouse">
            <a href="./pages/${section.link}"><img src="./sources/images/${section.imagen}" class="img-sections card" alt="section dogs"></a>
            <figcaption class="figcaption_principal card">
                ${section.nombre}
            </figcaption>
        </figure>
        `
        sections_div.appendChild(div_sections);
    }
}

ver_sections(sections);



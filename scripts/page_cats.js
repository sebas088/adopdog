// SCRIPT CATS

class cat {
    constructor (id, nombre, sexo, raza, edad, imagen, link){
        this.id = id;
        this.nombre = nombre;
        this.sexo = sexo;
        this.raza = raza;
        this.edad = edad;
        this.imagen = imagen;
        this.link = link;
    }
}

const cat_1 = new cat(1, "Catallica", "Hembra", "Negra", 1, "cat_01.jpeg", "adoptar.html");
const cat_2 = new cat(2, "Medusa", "Hembra", "Blanca", 3, "cat_02.jpeg", "adoptar.html");
const cat_3 = new cat(3, "Nebula", "Hembra", "Negra", 1, "cat_03.jpeg", "adoptar.html");
const cat_4 = new cat(4, "Pepa", "Hembra", "Blanca con gris", 4, "cat_04.jpeg", "adoptar.html");
const cat_5 = new cat(5, "Josefa", "Hembra", "Cafe con rayas", 2, "cat_05.jpeg", "adoptar.html");
const cat_6 = new cat(6, "Raul", "Macho", "Blanco con negro", 3, "cat_06.jpeg", "adoptar.html");
const cat_7 = new cat(7, "Blanquita", "Hembra", "Negra con blanco", 6, "cat_07.jpeg", "adoptar.html");
const cat_8 = new cat(8, "Ignacio", "Macho", "Amarillo con blanco", 5, "cat_08.jpeg", "adoptar.html");
const cat_9 = new cat(9, "Zeus", "Macho", "Blanco con amarillo", 1, "cat_09.jpeg", "adoptar.html");
const cat_10 = new cat (10, "Princesa", "Hembra", "Negra", 7, "cat_10.jpeg", "adoptar.html");
const cat_11 = new cat (11, "Afrodita", "Hembra", "Negra con blanco", 1, "cat_11.jpeg", "adoptar.html");
const cat_12 = new cat (12, "Pancracia", "Hembra", "Amarilla con blanco", 1, "cat_12.jpeg", "adoptar.htmal");
const cat_13 = new cat (13, "Socrates", "Macho", "Gris con rayas", 1, "cat_13.jpeg", "adoptar.html");
const cat_14 = new cat (14, "Kratos", "Macho", "Gris con cafe", 4, "cat_14.jpeg", "adoptar.html");

const cats = [];
cats.push(cat_1, cat_2, cat_3, cat_4, cat_5, cat_6, cat_7, cat_8, cat_9, cat_10, cat_11, cat_12, cat_13, cat_14);

let cats_div = document.getElementById("seccion_gatos");

function ver_cats(array){
    for(let cat of array){
        let div_cats = document.createElement("figure");
        div_cats.innerHTML = `
        <figure class="article_section_dogs">
            <a href="./${cat.link}"><img src="../sources/images/${cat.imagen}" class="img_section_dogs" alt="${cat.id}"></a>
            <figcaption class="figcaption_sections">
                <a href="./${cat.link}" class="enlaces_dogs">${cat.nombre}</a><br>
                <a>ID: ${cat.id}</a>
            </figcaption>
        </figure>
        `
        cats_div.appendChild(div_cats);
    }
}

ver_cats(cats);

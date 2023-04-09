// SCRIPT CATS

class Cat {
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

const cat_1 = new Cat(16, "Catallica", "Hembra", "Negra", 1, "cat_01.jpeg", "adoptar.html");
const cat_2 = new Cat(17, "Medusa", "Hembra", "Blanca", 3, "cat_02.jpeg", "adoptar.html");
const cat_3 = new Cat(18, "Nebula", "Hembra", "Negra", 1, "cat_03.jpeg", "adoptar.html");
const cat_4 = new Cat(19, "Pepa", "Hembra", "Blanca con gris", 4, "cat_04.jpeg", "adoptar.html");
const cat_5 = new Cat(20, "Josefa", "Hembra", "Cafe con rayas", 2, "cat_05.jpeg", "adoptar.html");
const cat_6 = new Cat(21, "Raul", "Macho", "Blanco con negro", 3, "cat_06.jpeg", "adoptar.html");
const cat_7 = new Cat(22, "Blanquita", "Hembra", "Negra con blanco", 6, "cat_07.jpeg", "adoptar.html");
const cat_8 = new Cat(23, "Ignacio", "Macho", "Amarillo con blanco", 5, "cat_08.jpeg", "adoptar.html");
const cat_9 = new Cat(24, "Zeus", "Macho", "Blanco con amarillo", 1, "cat_09.jpeg", "adoptar.html");
const cat_10 = new Cat (25, "Princesa", "Hembra", "Negra", 7, "cat_10.jpeg", "adoptar.html");
const cat_11 = new Cat (26, "Afrodita", "Hembra", "Negra con blanco", 1, "cat_11.jpeg", "adoptar.html");
const cat_12 = new Cat (27, "Pancracia", "Hembra", "Amarilla con blanco", 1, "cat_12.jpeg", "adoptar.htmal");
const cat_13 = new Cat (28, "Socrates", "Macho", "Gris con rayas", 1, "cat_13.jpeg", "adoptar.html");
const cat_14 = new Cat (29, "Kratos", "Macho", "Gris con cafe", 4, "cat_14.jpeg", "adoptar.html");

const cats = [];
cats.push(cat_1, cat_2, cat_3, cat_4, cat_5, cat_6, cat_7, cat_8, cat_9, cat_10, cat_11, cat_12, cat_13, cat_14);

let catsDiv = document.getElementById("Section-article--cat");

function seeCats(array){
    for(let cat of array){
        let divCats = document.createElement("figure");
        divCats.innerHTML = `
        <figure class="Section-figure">
            <a href="./${cat.link}"><img src="../sources/images/${cat.imagen}" class="Section-imgSections" alt="${cat.id}"></a>
            <figcaption>
                <a href="./${cat.link}" class="Section-a">${cat.nombre}</a><br>
                <a>ID: ${cat.id}</a>
            </figcaption>
        </figure>
        `
        catsDiv.appendChild(divCats);
    }
}

seeCats(cats);

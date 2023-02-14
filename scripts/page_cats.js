// SCRIPT DOGS

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
const cat_4 = new cat(4, "Pepa", "Hembra", "Mediana", 4, "dog_04.jpeg", "adoptar.html");
const cat_5 = new cat(5, "Josefa", "Hembra", "Mediana", 2, "dog_05.jpeg", "adoptar.html");
const cat_6 = new cat(6, "Raul", "Macho", "Mediana", 3, "dog_06.jpeg", "adoptar.html");
const cat_7 = new cat(7, "Blanquita", "Hembra", "Pequeña", 6, "dog_07.jpeg", "adoptar.html");
const cat_8 = new cat(8, "Ignacio", "Macho", "Mediana", 5, "dog_08.jpeg", "adoptar.html");
const cat_9 = new cat(9, "Zeus", "Macho", "Mediana", 1, "dog_09.jpeg", "adoptar.html");
const cat_10 = new cat (10, "Princesa", "Hembra", "Mediana", 7, "dog_10.jpeg", "adoptar.html");
const cat_11 = new cat (11, "Afrodita", "Hembra", "Pequeña", 1, "dog_11.jpeg", "adoptar.html");
const cat_12 = new cat (12, "Pancracia", "Hembra", "Pequeña", 1, "dog_12.jpeg", "adoptar.htmal");
const cat_13 = new cat (13, "Socrates", "Macho", "Pequeña", 1, "dog_13.jpeg", "adoptar.html");
const cat_14 = new cat (14, "Kratos", "Macho", "Mediana", 4, "dog_14.jpeg", "adoptar.html");

const dogs = []
dogs.push(dog_1, dog_2, dog_3, dog_4, dog_5, dog_6, dog_7, dog_8, dog_9, dog_10, dog_11, dog_12, dog_13, dog_14);

let dogs_div = document.getElementById("seccion_perros");

function ver_dogs(array){
    for(let dog of array){
        let div_dogs = document.createElement("figure");
        div_dogs.innerHTML = `
        <figure class="article_section_dogs">
            <a href="./${dog.link}"><img src="../sources/images/${dog.imagen}" id="img_section_dogs" alt="${dog.id}"></a>
            <figcaption>
                <a href="./${dog.link}" id="enlaces_dogs">${dog.nombre}</a>
            </figcaption>
        </figure>
        `
        dogs_div.appendChild(div_dogs);
    }
}

ver_dogs(dogs);
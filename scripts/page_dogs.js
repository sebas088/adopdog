// SCRIPT DOGS

class dog {
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

const dog_1 = new dog (1, "Arya", "Hembra", "Mediana", 2, "dog_01.jpeg", "adoptar.html");
const dog_2 = new dog (2, "Bob", "Macho", "Pequeña", 1, "dog_02.jpeg", "adoptar.html");
const dog_3 = new dog (3, "Pancho", "Macho", "Pequeña", 3, "dog_03.jpeg", "adoptar.html");
const dog_4 = new dog (4, "Pepa", "Hembra", "Mediana", 4, "dog_04.jpeg", "adoptar.html");
const dog_5 = new dog (5, "Josefa", "Hembra", "Mediana", 2, "dog_05.jpeg", "adoptar.html");
const dog_6 = new dog (6, "Dollar", "Macho", "Mediana", 3, "dog_06.jpeg", "adoptar.html");
const dog_7 = new dog (7, "Cati", "Hembra", "Pequeña", 6, "dog_07.jpeg", "adoptar.html");
const dog_8 = new dog (8, "Ignacio", "Macho", "Mediana", 5, "dog_08.jpeg", "adoptar.html");
const dog_9 = new dog (9, "Peter", "Macho", "Mediana", 1, "dog_09.jpeg", "adoptar.html");
const dog_10 = new dog (10, "Princesa", "Hembra", "Mediana", 7, "dog_10.jpeg", "adoptar.html");
const dog_11 = new dog (11, "Nala", "Hembra", "Pequeña", 1, "dog_11.jpeg", "adoptar.html");
const dog_12 = new dog (12, "Pancracia", "Hembra", "Pequeña", 1, "dog_12.jpeg", "adoptar.htmal");
const dog_13 = new dog (13, "Socrates", "Macho", "Pequeña", 1, "dog_13.jpeg", "adoptar.html");
const dog_14 = new dog (14, "Kratos", "Macho", "Mediana", 4, "dog_14.jpeg", "adoptar.html");
const dog_15 = new dog (15, "Diosa", "Hembra", "Grande", 9, "dog_15.jpeg", "adoptar.html");

const dogs = []
dogs.push(dog_1, dog_2, dog_3, dog_4, dog_5, dog_6, dog_7, dog_8, dog_9, dog_10, dog_11, dog_12, dog_13, dog_14, dog_15);

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

/*
<figure class="article_section_dogs">
    <a href="./adoptar.html"><img src="../sources/images/dog_06.jpeg" id="img_section_dogs" alt="dog 06"></a>
    <figcaption>
        <a href="./adoptar.html" id="enlaces_dogs"> Adoptar</a>
    </figcaption>
</figure>
*/
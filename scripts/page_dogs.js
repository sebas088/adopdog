// SCRIPT DOGS

class Dog {
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

const dog_01 = new Dog (01, "Arya", "Hembra", "Mediana", 2, "dog_01.jpeg", "adoptar.html");
const dog_02 = new Dog (02, "Bob", "Macho", "Pequeña", 1, "dog_02.jpeg", "adoptar.html");
const dog_03 = new Dog (03, "Pancho", "Macho", "Pequeña", 3, "dog_03.jpeg", "adoptar.html");
const dog_04 = new Dog (04, "Pepa", "Hembra", "Mediana", 4, "dog_04.jpeg", "adoptar.html");
const dog_05 = new Dog (05, "Josefa", "Hembra", "Mediana", 2, "dog_05.jpeg", "adoptar.html");
const dog_06 = new Dog (06, "Dollar", "Macho", "Mediana", 3, "dog_06.jpeg", "adoptar.html");
const dog_07 = new Dog (07, "Cati", "Hembra", "Pequeña", 6, "dog_07.jpeg", "adoptar.html");
const dog_08 = new Dog (08, "Ignacio", "Macho", "Mediana", 5, "dog_08.jpeg", "adoptar.html");
const dog_09 = new Dog (09, "Peter", "Macho", "Mediana", 1, "dog_09.jpeg", "adoptar.html");
const dog_10 = new Dog (10, "Princesa", "Hembra", "Mediana", 7, "dog_10.jpeg", "adoptar.html");
const dog_11 = new Dog (11, "Nala", "Hembra", "Pequeña", 1, "dog_11.jpeg", "adoptar.html");
const dog_12 = new Dog (12, "Pancracia", "Hembra", "Pequeña", 1, "dog_12.jpeg", "adoptar.htmal");
const dog_13 = new Dog (13, "Socrates", "Macho", "Pequeña", 1, "dog_13.jpeg", "adoptar.html");
const dog_14 = new Dog (14, "Kratos", "Macho", "Mediana", 4, "dog_14.jpeg", "adoptar.html");
const dog_15 = new Dog (15, "Diosa", "Hembra", "Grande", 9, "dog_15.jpeg", "adoptar.html");

const dogs = [];
dogs.push(dog_01, dog_02, dog_03, dog_04, dog_05, dog_06, dog_07, dog_08, dog_09, dog_10, dog_11, dog_12, dog_13, dog_14, dog_15);

let dogsDiv = document.getElementById("Section-article--dogs");

function seeDogs(array){
    for(let dog of array){
        let divDogs = document.createElement("figure");
        divDogs.innerHTML = `
        <figure class="Section-figure">
            <a href="./${dog.link}"><img src="../sources/images/${dog.imagen}" class="Section-imgSections" alt="${dog.id}"></a>
            <figcaption>
                <a href="./${dog.link}" class="Section-a">${dog.nombre}</a><br>
                <a>ID: ${dog.id}</a>
            </figcaption>    
        </figure>
        `
        dogsDiv.appendChild(divDogs);
    }
}

seeDogs(dogs);

console.log(dogs);






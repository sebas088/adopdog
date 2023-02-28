//SCRIPT ADOPTAR

class info_adoptar {
    constructor (id, nombre, apellido, correo, tel, id_peludito){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.tel = tel;
        this.id_peludito = id_peludito;
    }
}

let info_adoptantes = [];

if(localStorage.getItem("info_adoptantes")){
    info_adoptantes = JSON.parse(localStorage.getItem("info_adoptantes"));
}else{
    localStorage.setItem("info_adoptantes", JSON.stringify(info_adoptantes));
}

// localStorage.setItem("info_adoptantes", JSON.stringify(info_adoptantes));

function guardar_info(array){
    let input_id = document.getElementById("id_peludito");
    let input_nombre = document.getElementById("nombre");
    let input_apellido = document.getElementById("apellido");
    let input_correo = document.getElementById("correo");
    let input_tel = document.getElementById("telefono");

    

    const nueva_info = new info_adoptar(array.length+1, input_nombre.value, input_apellido.value, input_correo.value, input_tel.value, input_id.value);
    
    array.push(nueva_info);

    localStorage.setItem("info_adoptantes", JSON.stringify(array));
    console.log(info_adoptantes);
}

let btn_registrar = document.getElementById("enviar");

btn_registrar.addEventListener("click", ()=>{
    guardar_info(info_adoptantes);
})

console.log(info_adoptantes);
















// class dog {
//     constructor (id, nombre, sexo, raza, edad, imagen, link){
//         this.id = id;
//         this.nombre = nombre;
//         this.sexo = sexo;
//         this.raza = raza;
//         this.edad = edad;
//         this.imagen = imagen;
//         this.link = link;
//     }
// }

// const dog_1 = new dog (1, "Arya", "Hembra", "Mediana", 2, "dog_01.jpeg", "adoptar.html");
// const dog_2 = new dog (2, "Bob", "Macho", "Pequeña", 1, "dog_02.jpeg", "adoptar.html");
// const dog_3 = new dog (3, "Pancho", "Macho", "Pequeña", 3, "dog_03.jpeg", "adoptar.html");
// const dog_4 = new dog (4, "Pepa", "Hembra", "Mediana", 4, "dog_04.jpeg", "adoptar.html");
// const dog_5 = new dog (5, "Josefa", "Hembra", "Mediana", 2, "dog_05.jpeg", "adoptar.html");
// const dog_6 = new dog (6, "Raul", "Macho", "Mediana", 3, "dog_06.jpeg", "adoptar.html");
// const dog_7 = new dog (7, "Blanquita", "Hembra", "Pequeña", 6, "dog_07.jpeg", "adoptar.html");
// const dog_8 = new dog (8, "Ignacio", "Macho", "Mediana", 5, "dog_08.jpeg", "adoptar.html");
// const dog_9 = new dog (9, "Zeus", "Macho", "Mediana", 1, "dog_09.jpeg", "adoptar.html");
// const dog_10 = new dog (10, "Princesa", "Hembra", "Mediana", 7, "dog_10.jpeg", "adoptar.html");
// const dog_11 = new dog (11, "Nala", "Hembra", "Pequeña", 1, "dog_11.jpeg", "adoptar.html");
// const dog_12 = new dog (12, "Pancracia", "Hembra", "Pequeña", 1, "dog_12.jpeg", "adoptar.htmal");
// const dog_13 = new dog (13, "Socrates", "Macho", "Pequeña", 1, "dog_13.jpeg", "adoptar.html");
// const dog_14 = new dog (14, "Kratos", "Macho", "Mediana", 4, "dog_14.jpeg", "adoptar.html");

// const dogs = []
// dogs.push(dog_1, dog_2, dog_3, dog_4, dog_5, dog_6, dog_7, dog_8, dog_9, dog_10, dog_11, dog_12, dog_13, dog_14);


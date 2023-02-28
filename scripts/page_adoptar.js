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

    let form = document.getElementById("form_adoptar");
    form.reset();
}

let btn_registrar = document.getElementById("enviar");

btn_registrar.addEventListener("click", ()=>{
    guardar_info(info_adoptantes);
})

console.log(info_adoptantes);



//SCRIPT ADOPTAR

class InfoAdopt {
    constructor (id, nombre, apellido, correo, tel, id_peludito){
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.correo = correo;
        this.tel = tel;
        this.id_peludito = id_peludito;
    }
}

let infoAdopters = [];

if(localStorage.getItem("infoAdopters")){
    infoAdopters = JSON.parse(localStorage.getItem("infoAdopters"));
}else{
    localStorage.setItem("infoAdopters", JSON.stringify(infoAdopters));
}

// localStorage.setItem("info_adoptantes", JSON.stringify(info_adoptantes));

function saveInfo(array){
    let inputId = document.getElementById("id_peludito");
    let inputName = document.getElementById("nombre");
    let inputLastName = document.getElementById("apellido");
    let inputMail = document.getElementById("correo");
    let inputPhone = document.getElementById("telefono");

    

    const newInfo = new InfoAdopt (array.length+1, inputName.value, inputLastName.value, inputMail.value, inputPhone.value, inputId.value);
    
    array.push(newInfo);

    localStorage.setItem("infoAdopters", JSON.stringify(array));
    console.log(infoAdopters);

    let form = document.getElementById("formAdopt");
    form.reset();
}

let btnRegister = document.getElementById("send");

btnRegister.addEventListener("click", ()=>{
    saveInfo(infoAdopters);
})

console.log(infoAdopters);



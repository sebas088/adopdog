// SCRIPT MEDICINE

class medicine {
    constructor (id, nombre, precio, imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const medicine_01 = new medicine(1, "Colotrin Perros", 30, "medicine_01.jpeg");
const medicine_02 = new medicine(2, "Tusivet Jarabe Perros", 24, "medicine_02.jpeg");
const medicine_03 = new medicine(3, "Artrin Brouwer Perros", 53, "medicine_03.webp");
const medicine_04 = new medicine(4, "Proventis 10 Perros", 21, "medicine_04.jpeg");
const medicine_05 = new medicine(5, "Bravecto Perros", 43, "medicine_05.jpeg");
const medicine_06 = new medicine(6, "Inadrim Perros y Gatos", 60, "medicine_06.png");
const medicine_07 = new medicine(7, "Omeprazol Perros y Gatos", 20, "medicine_07.jpeg");
const medicine_08 = new medicine(8, "Phenoleptil Perros", 74, "medicine_08.jpeg");
const medicine_09 = new medicine(9, "KimiMove Rapid Perros", 15, "medicine_09.jpeg");
const medicine_10 = new medicine(10, "Broadline Gatos", 17, "medicine_10.webp");
const medicine_11 = new medicine(11, "Frontline Gatos", 17, "medicine_11.jpeg");
const medicine_12 = new medicine(12, "Adventage Antipulgas Gatos", 25, "medicine_12.jpeg");
const medicine_13 = new medicine(13, "Pretab Perros y Gatos", 80, "medicine_13.jpeg");
const medicine_14 = new medicine(14, "Cosequin Perros", 13, "medicine_14.jpeg");


const medicines = [];
medicines.push(medicine_01, medicine_02, medicine_03, medicine_04, medicine_05, medicine_06, medicine_07, medicine_08, medicine_09, medicine_10, medicine_11, medicine_12, medicine_13, medicine_14);

let medicine_div = document.getElementById("seccion_medicinas");

function ver_medicine(array){
    for(let medicine of array){
        let div_medicine = document.createElement("figure");
        div_medicine.innerHTML = `
        <figure class="article_section_dogs">
            <a href="./comprar.html"><img src="../sources/images/${medicine.imagen}"  class="img_section_dogs"></a>
            <figcaption class="figcaption_sections">
                <a href="./comprar.html" class
                ="enlaces_dogs"> ${medicine.nombre} </a>
            </figcaption>
            <figcaption class="figcaption_precio">
                <a href="./comprar.html" class="precio_container enlaces_dogs"> ${medicine.precio}€ </a>                
            </figcaption>
        </figure>
        `

        medicine_div.appendChild(div_medicine);
    }
}

ver_medicine(medicines);
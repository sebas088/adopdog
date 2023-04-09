// SCRIPT MEDICINE

class Medicine {
    constructor (id, nombre, precio, imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const medicine_01 = new Medicine(58, "Colotrin Perros", 30, "medicine_01.jpeg");
const medicine_02 = new Medicine(59, "Tusivet Jarabe Perros", 24, "medicine_02.jpeg");
const medicine_03 = new Medicine(60, "Artrin Brouwer Perros", 53, "medicine_03.webp");
const medicine_04 = new Medicine(61, "Proventis 10 Perros", 21, "medicine_04.jpeg");
const medicine_05 = new Medicine(62, "Bravecto Perros", 43, "medicine_05.jpeg");
const medicine_06 = new Medicine(63, "Inadrim Perros y Gatos", 60, "medicine_06.png");
const medicine_07 = new Medicine(64, "Omeprazol Perros y Gatos", 20, "medicine_07.jpeg");
const medicine_08 = new Medicine(65, "Phenoleptil Perros", 74, "medicine_08.jpeg");
const medicine_09 = new Medicine(66, "KimiMove Rapid Perros", 15, "medicine_09.jpeg");
const medicine_10 = new Medicine(67, "Broadline Gatos", 17, "medicine_10.webp");
const medicine_11 = new Medicine(68, "Frontline Gatos", 17, "medicine_11.jpeg");
const medicine_12 = new Medicine(69, "Adventage Antipulgas Gatos", 25, "medicine_12.jpeg");
const medicine_13 = new Medicine(70, "Pretab Perros y Gatos", 80, "medicine_13.jpeg");
const medicine_14 = new Medicine(71, "Cosequin Perros", 13, "medicine_14.jpeg");


const medicines = [];
medicines.push(medicine_01, medicine_02, medicine_03, medicine_04, medicine_05, medicine_06, medicine_07, medicine_08, medicine_09, medicine_10, medicine_11, medicine_12, medicine_13, medicine_14);

let medicineDiv = document.getElementById("Section-article--medicine");

function seeMedicine(array){
    for(let medicine of array){
        let divMedicine = document.createElement("figure");
        divMedicine.innerHTML = `
        <figure class="Section-figure">
            <a href=""><img src="../sources/images/${medicine.imagen}" class="Section-imgSections"></a>
            <figcaption>
                <a href="" class="Section-a"> ${medicine.nombre}</a>
            </figcaption>
            <figcaption class="Section-figcaptionPrecio">
                <a href="" class="Section-a"> ${medicine.precio}€ </a>                
            </figcaption>
        </figure>
        `

        medicineDiv.appendChild(divMedicine);
    }
}

seeMedicine(medicines);
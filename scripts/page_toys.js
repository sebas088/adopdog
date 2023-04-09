//SCRIPT TOYS

class Toy {
    constructor (id, nombre, precio, imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const toys_01 = new Toy(44, "Pelota de caucho para limpieza de dientes", 30, "toys_01.jpeg");
const toys_02 = new Toy(45, "Pack x12 juguetes para perros", 35, "toys_02.png");
const toys_03 = new Toy(46, "Feeko Juguetes masticables para perros", 13, "toys_03.png");
const toys_04 = new Toy(47, "Hipopotamo de peluche para perros", 16, "toys_04.jpeg");
const toys_05 = new Toy(48, "Pack x8 juguetes para morder para perros", 40, "toys_05.jpeg");
const toys_06 = new Toy(49, "Juguete para perro cuerda y goma swings", 20, "toys_06.jpeg");
const toys_07 = new Toy(50, "Dispensador de chuches para perros", 33, "toys_07.jpeg");
const toys_08 = new Toy(51, "Juguete indestructible para perros", 15, "toys_08.png");
const toys_09 = new Toy(52, "Peluche de pato para quitar estres de perros", 9, "toys_09.jpeg");
const toys_10 = new Toy(53, "Pack x4 juguetes para morder para perros", 28, "toys_10.jpeg");
const toys_11 = new Toy(54, "Juguete Kong dispensador de chuches", 38, "toys_11.jpeg");
const toys_12 = new Toy(55, "Hueso indestructible Kong", 19, "toys_12.jpeg");
const toys_13 = new Toy(56, "Juguetes por unidad para moder perros", 9, "toys_13.jpeg");
const toys_14 = new Toy(57, "Arnes de batman para perros de todas las tallas", 25, "toys_14.jpeg");


const toys = [];
toys.push(toys_01, toys_02, toys_03, toys_04, toys_05, toys_06, toys_07, toys_08, toys_09, toys_10, toys_11, toys_12, toys_13, toys_14);

let toysDiv = document.getElementById("Section-article--toys");

function seeToys(array){
    for(let toys of array){
        let divToys = document.createElement("figure");
        divToys.innerHTML = `
        <figure class="Section-figure">
            <a href="./comprar.html"><img src="../sources/images/${toys.imagen}"  class="Section-imgSections"></a>
            <figcaption>
                <a href="" class="Section-a"> ${toys.nombre} </a>
            </figcaption>
            <figcaption class="Section-figcaptionPrecio">
                <a href="" class="Section-a"> ${toys.precio}€ </a>                
            </figcaption>
        </figure>
        `

        toysDiv.appendChild(divToys);
    }
}

seeToys(toys);
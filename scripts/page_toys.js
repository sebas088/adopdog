//SCRIPT TOYS

class toy {
    constructor (id, nombre, precio, imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const toys_01 = new toy(1, "Pelota de caucho para limpieza de dientes", 30, "toys_01.jpeg");
const toys_02 = new toy(2, "Pack x12 juguetes para perros", 35, "toys_02.png");
const toys_03 = new toy(3, "Feeko Juguetes masticables para perros", 13, "toys_03.png");
const toys_04 = new toy(4, "Hipopotamo de peluche para perros", 16, "toys_04.jpeg");
const toys_05 = new toy(5, "Pack x8 juguetes para morder para perros", 40, "toys_05.jpeg");
const toys_06 = new toy(6, "Juguete para perro cuerda y goma swings", 20, "toys_06.jpeg");
const toys_07 = new toy(7, "Dispensador de chuches para perros", 33, "toys_07.jpeg");
const toys_08 = new toy(8, "Juguete indestructible para perros", 15, "toys_08.png");
const toys_09 = new toy(9, "Peluche de pato para quitar estres de perros", 9, "toys_09.jpeg");
const toys_10 = new toy(10, "Pack x4 juguetes para morder para perros", 28, "toys_10.jpeg");
const toys_11 = new toy(11, "Juguete Kong dispensador de chuches", 38, "toys_11.jpeg");
const toys_12 = new toy(12, "Hueso indestructible Kong", 19, "toys_12.jpeg");
const toys_13 = new toy(13, "Juguetes por unidad para moder perros", 9, "toys_13.jpeg");
const toys_14 = new toy(14, "Arnes de batman para perros de todas las tallas", 25, "toys_14.jpeg");


const toys = [];
toys.push(toys_01, toys_02, toys_03, toys_04, toys_05, toys_06, toys_07, toys_08, toys_09, toys_10, toys_11, toys_12, toys_13, toys_14);

let toys_div = document.getElementById("seccion_juguetes");

function ver_toys(array){
    for(let toys of array){
        let div_toys = document.createElement("figure");
        div_toys.innerHTML = `
        <figure class="article_section_dogs">
            <a href="./comprar.html"><img src="../sources/images/${toys.imagen}"  class="img_section_dogs"></a>
            <figcaption class="figcaption_sections">
                <a href="./comprar.html" class
                ="enlaces_dogs"> ${toys.nombre} </a>
            </figcaption>
            <figcaption class="figcaption_precio">
                <a href="./comprar.html" class="precio_container enlaces_dogs"> ${toys.precio}€ </a>                
            </figcaption>
        </figure>
        `

        toys_div.appendChild(div_toys);
    }
}

ver_toys(toys);
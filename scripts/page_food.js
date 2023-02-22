// SCRIPT FOOD

class food {
    constructor (id, nombre, precio, imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const food_01 = new food(1, "Felix Fantastic Duo", 30, "food_01.jpeg");
const food_02 = new food(2, "Dog Chow Purina Carne Adultos", 24, "food_02.jpeg");
const food_03 = new food(3, "Royal Canin Adult Jack Rusell", 53, "food_03.png");
const food_04 = new food(4, "Cebican Daily Care", 21, "food_04.png");
const food_05 = new food(5, "Fresh Chicken With Rice", 43, "food_05.png");
const food_06 = new food(6, "Ultima Dog Mini Adult", 60, "food_06.png");
const food_07 = new food(7, "Cebican High Energy", 20, "food_07.png");
const food_08 = new food(8, "Ultima Cat Adult", 74, "food_08.png");
const food_09 = new food(9, "Comida Animales Buey Y Pollo", 15, "food_09.jpeg");
const food_10 = new food(10, "Comida Animales Supermix", 17, "food_10.jpeg");
const food_11 = new food(11, "Comida Animales Atun Y Salmon", 17, "food_11.jpeg");
const food_12 = new food(12, "CoviCat Pate Con Salmon", 25, "food_12.jpeg");
const food_13 = new food(13, "Advance Active Defense", 80, "food_13.png");
const food_14 = new food(14, "Cookie Gatos", 13, "food_14.png");


const foods = [];
foods.push(food_01, food_02, food_03, food_04, food_05, food_06, food_07, food_08, food_09, food_10, food_11, food_12, food_13, food_14);

let food_div = document.getElementById("seccion_food");

function ver_food(array){
    for(let food of array){
        let div_food = document.createElement("figure");
        div_food.innerHTML = `
        <figure class="article_section_dogs" id="article_mouse_dogs">
            <a href="./comprar.html"><img src="../sources/images/${food.imagen}"  id="img_section_dogs"></a>
            <figcaption>
                <a href="./comprar.html" id="enlaces_dogs"> ${food.nombre} </a>
            </figcaption>
            <figcaption>
                <p class="precio_container" id="enlaces_dogs"> ${food.precio}€ </p>                
            </figcaption>
        </figure>
        `

        food_div.appendChild(div_food);
    }
}

ver_food(foods);
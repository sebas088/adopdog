// SCRIPT FOOD

class Food {
    constructor (id, nombre, precio, imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const food_01 = new Food(30, "Felix Fantastic Duo", 30, "food_01.jpeg");
const food_02 = new Food(31, "Dog Chow Purina Carne Adultos", 24, "food_02.jpeg");
const food_03 = new Food(32, "Royal Canin Adult Jack Rusell", 53, "food_03.png");
const food_04 = new Food(33, "Cebican Daily Care", 21, "food_04.png");
const food_05 = new Food(34, "Fresh Chicken With Rice", 43, "food_05.png");
const food_06 = new Food(35, "Ultima Dog Mini Adult", 60, "food_06.png");
const food_07 = new Food(36, "Cebican High Energy", 20, "food_07.png");
const food_08 = new Food(37, "Ultima Cat Adult", 74, "food_08.png");
const food_09 = new Food(38, "Comida Animales Buey Y Pollo", 15, "food_09.jpeg");
const food_10 = new Food(39, "Comida Animales Supermix", 17, "food_10.jpeg");
const food_11 = new Food(40, "Comida Animales Atun Y Salmon", 17, "food_11.jpeg");
const food_12 = new Food(41, "CoviCat Pate Con Salmon", 25, "food_12.jpeg");
const food_13 = new Food(42, "Advance Active Defense", 80, "food_13.png");
const food_14 = new Food(43, "Cookie Gatos", 13, "food_14.png");


const foods = [];
foods.push(food_01, food_02, food_03, food_04, food_05, food_06, food_07, food_08, food_09, food_10, food_11, food_12, food_13, food_14);

let foodDiv = document.getElementById("Section-article--food");

function seeFood(array){
    for(let food of array){
        let divFood = document.createElement("figure");
        divFood.innerHTML = `
        <figure class="Section-figure">
            <a href=""><img src="../sources/images/${food.imagen}"  class="Section-imgSections"></a>
            <figcaption>
                <a href="" class="Section-a"> ${food.nombre}</a>
            </figcaption>
            <figcaption class="Section-figcaptionPrecio" id="${food.id}">
                <a href="" class="Section-a"> ${food.precio}€ </a>                
            </figcaption>
        </figure>
        `

        foodDiv.appendChild(divFood);
    }
}

seeFood(foods);
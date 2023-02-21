// SCRIPT FOOD

class food {
    constructor (id, nombre, precio, imagen){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.imagen = imagen;
    }
}

const food_1 = new food(1, "Felix Fantastic Duo", 30, "food_01.jpeg");
const food_2 = new food(2, "Dog Chow Purina Carne Adultos", 24, "food_02.jpeg");
const food_3 = new food(3, "Royal Canin Adult Jack Rusell", 53, "food_03.png");


const foods = [];
foods.push(food_1, food_2, food_3);

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
        </figure>
        `

        food_div.appendChild(div_food);
    }
}

ver_food(foods);
// CARRITO DE COMPRA
let divShopping = document.getElementById("divShopping");
function displayCart(){
    divShopping.style.display = "none";
}
displayCart();
function showShopping() {
    
    if (divShopping.style.display === "none") {
        divShopping.style.display = "block";
    } else {
        divShopping.style.display = "none";
    }
}

let btnCart = document.getElementById("btnCart");
btnCart.addEventListener("click", ()=>{
    showShopping();
})

let cart = [];

const addCart = (prodId) => {
    const item = seeFood.find ((prod) => prod.id === prodId);
    cart.push(item);
    console.log(cart);
}





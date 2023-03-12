// CARRITO DE COMPRA

function mostrar_compra() {
    let div = document.getElementById("div_compra");
    if (div.style.display === "none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}

let buttom = document.getElementById("buttom_compra");
buttom.addEventListener("click", ()=>{
    mostrar_compra();
})
/* <button onclick="myFunction()">Clickeame</button>

<div id="myDIV" style="border:1px solid black;">
  Este elemento aparece y desaparece con el botón
</div> */
// function myFunction() {
//     var x = document.getElementById("myDIV");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }

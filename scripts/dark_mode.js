let btn_dark_mode = document.getElementById("btn_dark_mode");
let btn_white_mode = document.getElementById("btn_white_mode");
let color_grupo_2_dark = document.getElementById("color_footer");
let color_body = document.getElementById("color_body");

let modo_oscuro = localStorage.getItem("modo_oscuro");

if(modo_oscuro == "true"){
    header_dark.classList.add("dark_mode");
    section_dark.classList.add("dark_mode");
    footer_dark.classList.add("dark_mode");
    color_body.classList.add("color_body_dark");
    color_grupo_2_dark.classList.add("color_grupo-2_dark");
}
// HEADER
btn_dark_mode.addEventListener("click", ()=>{
    let header_dark = document.getElementById("header_dark");
    
    

    header_dark.classList.remove("white_mode");
    header_dark.classList.add("dark_mode");
    color_body.classList.add("color_body_dark");
    color_grupo_2_dark.classList.add("color_grupo-2_dark");

    localStorage.setItem("modo_oscuro", true);
})

btn_white_mode.addEventListener("click", ()=>{
    let header_light = document.getElementById("header_dark");

    header_light.classList.remove("dark_mode");
    header_light.classList.add("white_mode");
    color_body.classList.remove("color_body_dark");
    color_grupo_2_dark.classList.remove("color_grupo-2_dark");

    localStorage.setItem("modo_oscuro", false);
})

// SECTION

btn_dark_mode.addEventListener("click", ()=>{
    let section_dark = document.getElementById("section_dark");
    section_dark.classList.remove("white_mode");
    section_dark.classList.add("dark_mode");
})

btn_white_mode.addEventListener("click", ()=>{
    let section_light = document.getElementById("section_dark");
    section_light.classList.remove("dark_mode");
    section_light.classList.add("white_mode");
})

// FOOTER

btn_dark_mode.addEventListener("click", ()=>{
    let footer_dark = document.getElementById("footer_dark");
    footer_dark.classList.remove("white_mode");
    footer_dark.classList.add("dark_mode");
})

btn_white_mode.addEventListener("click", ()=>{
    let footer_light = document.getElementById("footer_dark");
    footer_light.classList.remove("dark_mode");
    footer_light.classList.add("white_mode");
})

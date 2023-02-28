let btn_dark_mode = document.getElementById("btn_dark_mode");
let btn_white_mode = document.getElementById("btn_white_mode");

btn_dark_mode.addEventListener("click", ()=>{
    let header_dark = document.getElementById("header_dark");
    let color_body = document.getElementById("color_body");
    let color_grupo_2_dark = document.getElementById("color_footer");

    header_dark.classList.remove("white_mode");
    header_dark.classList.add("dark_mode");
    color_body.classList.add("color_body_dark");
    color_grupo_2_dark.classList.add("color_grupo-2_dark");
})

btn_white_mode.addEventListener("click", ()=>{
    let header_light = document.getElementById("header_dark");
    let color_body = document.getElementById("color_body");
    header_light.classList.remove("dark_mode");
    header_light.classList.add("white_mode");
    color_body.classList.remove("color_body_dark");
})

btn_dark_mode.addEventListener("click", ()=>{
    let header_dark = document.getElementById("section_dark");
    header_dark.classList.remove("white_mode");
    header_dark.classList.add("dark_mode");
})

btn_white_mode.addEventListener("click", ()=>{
    let header_light = document.getElementById("section_dark");
    header_light.classList.remove("dark_mode");
    header_light.classList.add("white_mode");
})

btn_dark_mode.addEventListener("click", ()=>{
    let header_dark = document.getElementById("footer_dark");
    header_dark.classList.remove("white_mode");
    header_dark.classList.add("dark_mode");
})

btn_white_mode.addEventListener("click", ()=>{
    let header_light = document.getElementById("footer_dark");
    header_light.classList.remove("dark_mode");
    header_light.classList.add("white_mode");
})

let btnDarkMode = document.getElementById("Header-divBtnMode--dark");
let btnLightMode = document.getElementById("Header-divBtnMode--light");
let rightsThemes = document.getElementById("Footer-divRights--themes");
let bodyColor = document.getElementById("Body--color");
let headerThemes = document.getElementById("Header--themes");
let sectionThemes = document.getElementById("Section--themes");
let footerThemes = document.getElementById("Footer--themes");

let modo_oscuro = localStorage.getItem("modo_oscuro");

if(modo_oscuro == "true"){
    headerThemes.classList.add("dark_mode");
    sectionThemes.classList.add("dark_mode");
    footerThemes.classList.add("dark_mode");
    bodyColor.classList.add("Body--darkMode");
    rightsThemes.classList.add("Footer-divRights--themes");
}
// HEADER
btnDarkMode.addEventListener("click", ()=>{    
    headerThemes.classList.remove("white_mode");
    headerThemes.classList.add("dark_mode");
    bodyColor.classList.add("Body--darkMode");
    rightsThemes.classList.add("Footer-divRights--themes");

    localStorage.setItem("modo_oscuro", true);
})

btnLightMode.addEventListener("click", ()=>{
    headerThemes.classList.remove("dark_mode");
    headerThemes.classList.add("white_mode");
    bodyColor.classList.remove("Body--darkMode");
    rightsThemes.classList.remove("Footer-divRights--themes");

    localStorage.setItem("modo_oscuro", false);
})

// SECTION

btnDarkMode.addEventListener("click", ()=>{
    sectionThemes.classList.remove("white_mode");
    sectionThemes.classList.add("dark_mode");
})

btnLightMode.addEventListener("click", ()=>{
    sectionThemes.classList.remove("dark_mode");
    sectionThemes.classList.add("white_mode");
})

// FOOTER

btnDarkMode.addEventListener("click", ()=>{
    footerThemes.classList.remove("white_mode");
    footerThemes.classList.add("dark_mode");
})

btnLightMode.addEventListener("click", ()=>{
    footerThemes.classList.remove("dark_mode");
    footerThemes.classList.add("white_mode");
})

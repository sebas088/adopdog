const slider = document.querySelector("#slider");
let slider_section = document.querySelectorAll(".slider__section");
let slider_section_last = slider_section[slider_section.length -1];

const btn_left = document.querySelector("#btn-left");
const btn_right = document.querySelector("#btn-right");

slider.insertAdjacentElement('afterbegin' , slider_section_last);

function move_next(){
    let slider_section_first = document.querySelectorAll(".slider__section")[0];
    slider.style.margin_left = "-200%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', slider_section_first);
        slider.style.margin_left = "-100%";
    }, 500);
}

function move_prev(){
    let slider_section = document.querySelectorAll(".slider__section");
    let slider_section_last = slider_section[slider_section.length -1];
    slider.style.margin_left = "0";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', slider_section_last);
        slider.style.margin_left = "-100%";
    }, 500);
}

btn_right.addEventListener('click', function(){
    move_next();
});

btn_left.addEventListener('click', function(){
    move_prev();
});

setInterval(function(){
    move_next();
},2500)
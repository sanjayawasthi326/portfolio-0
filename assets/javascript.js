
//preloaderloader------------------
var load = document.getElementById('preloader')

window.addEventListener('load', function(){
    load.style.display = 'none';
})

//icon scroll=======
function clickFun(){
window.scrollTo(0,700);
}

// header=========================
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.padding = "10px 0px 10px 0px";
        document.getElementById("header").style.backgroundColor = "black";

    } else {
        document.getElementById("header").style.padding = "20px 0px 20px 0px";
        document.getElementById("header").style.backgroundColor = "#000000c7";

    }
}


// cross icon function-------------------------------------------------------
document.getElementById('navbar-toggler').addEventListener('click', cross_);
function cross_(){
    document.getElementById('cross_one').classList.toggle('crose_line1');
    document.getElementById('cross_two').classList.toggle('crose_opacity');
    document.getElementById('cross_three').classList.toggle('crose_line2');
    document.getElementById('mobile_nav').classList.toggle('mobile_left');
}

//===================================================================================

//dropdown toggle click button-----------------------------------------------------
var sanj = document.getElementById('remove_drowdown');
sanj.addEventListener('click' , remove);
function remove(){
var iconBox = document.getElementById('main');
iconBox.classList.toggle('remove_');

document.getElementById('icon').classList.toggle('icon_add');
document.getElementById('remove_drowdown').classList.toggle('icon_color');
}

//===================================================================================
var sanj = document.getElementById('mobil_menu-inner');
sanj.addEventListener('click' , innerIcon);
function innerIcon(){
var iconBox = document.getElementById('inner_menu');
iconBox.classList.toggle('remove_');

document.getElementById('mobil_inner-icon').classList.toggle('icon_add');
document.getElementById('mobil_menu-inner').classList.toggle('icon_color');
}



/* counttown timer------------------------------------start */
const endDate = "1 January 2024 12:00 Pm";
document.getElementById('end-date').innerText = endDate;
const inputs = document.querySelectorAll("input");

function clock() {
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if (diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24);
    //covert in days---------
    inputs[1].value = Math.floor(diff / 3600) % 24;
    // covert in minutes---------
    inputs[2].value = Math.floor(diff / 60) % 60;
    // covert in seconds---------
    inputs[3].value = Math.floor(diff) % 60;
}
clock()

setInterval(() => {
    clock()
}, 1000
)
/* counttown timer------------------------------------end */


/*footer gallery */
var fullImgBox = document.getElementById('fullImgBox');
var fullImg = document.getElementById('fullImg');

function openFullImg(pic){
    fullImgBox.style.display ="flex"
    fullImg.src = pic;
}

function closeFullImg(){
    fullImgBox.style.display ="none"
}
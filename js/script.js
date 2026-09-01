
function modeSwitch(){
    const darkBG = "black";
    const lightBG = "rgb(126,42,136)";
    const darkText = "white";
    const lightText = "black";
    const darkNav = "black";
    const lightNav = "white";
    if (document.body.style.backgroundColor != darkBG) {
    document.body.style.backgroundColor = darkBG;
    document.body.style.color = darkText;
    document.getElementById("main").style.backgroundColor = "rgb(86,0,90)";
    localStorage.setItem('backgroundColor', darkBG);
    localStorage.setItem('color', darkText);
    localStorage.setItem('main', "rgb(86,0,90)");
    document.getElementsByClassName('nav')[0].style.backgroundColor = "black";
    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName('nav-link')[i].style.color = "white";
    }
    } else {
        document.body.style.backgroundColor = lightBG;
        document.body.style.color = lightText;
        document.getElementById("main").style.backgroundColor = "rgb(183, 0, 255)";
        localStorage.setItem('backgroundColor', lightBG);
        localStorage.setItem('color', lightText);
        localStorage.setItem('main', "rgb(183, 0, 255)");
        document.getElementsByClassName('nav')[0].style.backgroundColor = "white";
        for (let i = 0; i < 4; i++) {
            document.getElementsByClassName('nav-link')[i].style.color = "black";
        }
    }
}
window.addEventListener('DOMContentLoaded', () => {
    document.body.style.backgroundColor = localStorage.getItem('backgroundColor');
    document.body.style.color = localStorage.getItem('color');
    document.getElementById("main").style.backgroundColor = localStorage.getItem('main');
    if (localStorage.getItem('color') == "white") {
    document.getElementsByClassName('nav')[0].style.backgroundColor = "black";
    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName('nav-link')[i].style.color = "white";
    }
    } else {
        document.getElementsByClassName('nav')[0].style.backgroundColor = "white";
        for (let i = 0; i < 4; i++) {
            document.getElementsByClassName('nav-link')[i].style.color = "black";
        }
    }
})
function filterProjects(type) {
    if (document.getElementById(type) == 'jsc') {

    } else if (document.getElementById(type) == 'other') {

    } else if (document.getElementById(type) == 'web') {

    } else {
            
    }
}
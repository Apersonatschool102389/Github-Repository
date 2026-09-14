
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
    if (document.getElementById("main") != undefined) {
    document.getElementById("main").style.backgroundColor = localStorage.getItem('main');
    }
    if (localStorage.getItem('backgroundColor') == "black") {
    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName('nav')[0].style.backgroundColor = "black";
        document.getElementsByClassName('nav-link')[i].style.color = "white";
        if (document.getElementsByClassName('filter')[0] != undefined) {
            document.getElementsByClassName('filter')[0].style.backgroundColor = "black";
            document.getElementsByClassName('filter-button')[i].style.color = "white";
        }
    }
    } else {
        for (let i = 0; i < 4; i++) {
            document.getElementsByClassName('nav-link')[i].style.color = "black";
            document.getElementsByClassName('nav')[0].style.backgroundColor = "white";
            if (document.getElementsByClassName('filter')[0] != undefined) {
                document.getElementsByClassName('filter-button')[i].style.color = "black";
                document.getElementsByClassName('filter')[0].style.backgroundColor = "white";
        }
    }
}})
function filterProjects(type) {
    const hiddenProjects = document.getElementsByClassName('hidden');
    const javascriptProjects = document.getElementsByClassName('jsc');
    const otherProjects = document.getElementsByClassName('other');
    const webProjects = document.getElementsByClassName('web');
    if (type == 'jsc') {
        for (const element of javascriptProjects) {
            element.classList.remove('hidden');
        }
        for (const element of otherProjects) {
            element.classList.add('hidden');
        }
        for (const element of webProjects) {
            element.classList.add('hidden');
        }
    } else if (type == 'other') {
        for (const element of otherProjects) {
            element.classList.remove('hidden');
        }
        for (const element of javascriptProjects) {
            element.classList.add('hidden');
        }
        for (const element of webProjects) {
            element.classList.add('hidden');
        }
    } else if (type == 'web') {
        for (const element of webProjects) {
            element.classList.remove('hidden');
        }
        for (const element of javascriptProjects) {
            element.classList.add('hidden');
        }
        for (const element of otherProjects) {
            element.classList.add('hidden');
        }
    } else {
        for (const element of hiddenProjects) {
            element.classList.remove('hidden');
        }
    }
}
function extend(id) {
    const project = document.getElementById(id);
    if (project) {
        project.classList.toggle('extended');
    }
}
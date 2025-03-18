function redirigir() {
    window.location.href = "https://youtu.be/MwymbuznQH0?si=1OhbGr_cx8ZBKgMz";
}

function cambiarIdioma() {
    let idioma = document.getElementById("idioma").value;
    let titulo = document.getElementById("titulo");
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");

    if (idioma === "es") {
        titulo.innerText = "¿Usted tiene ganas de joder?";
        btn1.innerText = "Sí";
        btn2.innerText = "Siempre";
    } else if (idioma === "pt") {
        titulo.innerText = "Você está com vontade de encher o saco?";
        btn1.innerText = "Sim";
        btn2.innerText = "Sempre";
    }
}

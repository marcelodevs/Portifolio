//SCROLL SUAVE EM JS

const menuItens=document.querySelectorAll('.menu a');

menuItens.forEach(item=>{
    item.addEventListener('click', scrollToIdOnclick);
});

function scrollToIdOnclick(event){
    event.preventDefault();
    
    const element=event.target;
    const id=element.getAttribute('href');
    const to=document.querySelector(id).offsetTop;

    window.scroll({
        top: to-100,
        behavior: "smooth"
    });
}

/* FIM DO SCROLL SUAVE */

/* REDES SOCIAIS */

function yt()
{
    window.location.href="https://www.youtube.com/channel/UCpik59PbDDVv78b4aO6SdNA/videos";
}

function insta()
{
    window.location.href="https://www.instagram.com/luck_mg16/";
}

function face()
{
    window.location.href="https://facebook.comfef/";
}

function git()
{
    window.location.href = "https://github.com/marcelodevs";
}

/* FIM DE REDES SOCIAIS */

/* APARECER LETRAS */

function typeWrite(elemento)
{
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 30 * i)
    });
}

const texto = document.querySelector('p');
typeWrite(texto);

/* DARK MODE */

const btn = document.querySelector('.btn');
const body = document.querySelector('body');
const all = document.getElementById('all');
const alll = document.getElementById('alll');
const allll = document.getElementById('allll');
const projeto = document.getElementById('projetos');

btn.onclick = () => {
    body.classList.toggle('active');
    all.classList.toggle('active');
    alll.classList.toggle('active');
    allll.classList.toggle('active');
    projeto.classList.toggle('active');
}

/* CURSOS */

const Web = document.getElementById('web');
const Python = document.getElementById('py');
const Java = document.getElementById('java');
const Redes = document.getElementById('RC');
const logica = document.getElementById('lg');
const SQL = document.getElementById('sql');

Web.addEventListener('click', () => {
    location.href = 'Cursos/Web/index.html';
});
SQL.addEventListener('click', () => {
    location.href = 'Cursos/SQL/index.html';
});
Python.addEventListener('click', () => {
    location.href = 'Cursos/Python/index.html';
});
logica.addEventListener('click', () => {
    location.href = 'Cursos/Lógica/index.html';
});
Java.addEventListener('click', () => {
    location.href = 'Cursos/Java/index.html';
});
Redes.addEventListener('click', () => {
    location.href = 'Cursos/RedesComputadores/index.html';
});

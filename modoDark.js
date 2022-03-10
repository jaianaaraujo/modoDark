/* EXECUÇÃO DO CÓDIGO */


const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const li = document.querySelectorAll('li'); // querySelector All porque eu quero que altere todas as Lis
const label = document.querySelector('.label');
const input = document.getElementById('check');




const modoDark = () => {
body.classList.toggle('dark');
h1.classList.toggle('dark');
label.classList.toggle('dark');

li.forEach(elemento =>{
    elemento.classList.toggle('dark');
})
}

input.addEventListener('change', modoDark); // Caso o inpute mude eu ativo o mododark (que é uma função)

/* EXPORTANDO */

/* export default modoDark;
 */


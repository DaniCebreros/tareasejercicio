// Array = listaTareas
const inputTarea = document.getElementById('inputTarea')
const selectPrioridad = document.getElementById('selectPrioridad');
const btnEnviar = document.getElementById('btnEnviar');
const form = document.querySelector('form');
const tareas = document.getElementById('tareas')

pintarLista();

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nuevaTarea = {
        titulo: inputTarea.value,
        prioridad: selectPrioridad.value,
    }

    listaTareas.push(nuevaTarea);

    pintarLista()
})


function pintarLista() {
    listaTareas.innerHTML = '';


    for (let tarea of listaTareas) {
        const article = document.createElement('article');

        const pId = document.createElement('p');
        pId.innerText = `Id: ${tarea.id}`;

        const h2Titulo = document.createElement('h2');
        h2Titulo.innerText = `${tarea.titulo}`;

        const pPrioridad = document.createElement('p');
        pPrioridad.innerText = `Prioridad: ${tarea.prioridad}`;

        const btnBorrar = document.createElement('button');
        btnBorrar.innerText = 'Borrar';
        btnBorrar.addEventListener('click', (event) => {
            event.target.parentNode.remove();
            listaTareas = listaTareas.filter((borrar) => {
                return borrar.titulo !== tarea.titulo;
            })
        })

        article.append(h2Titulo, pPrioridad, pId, btnBorrar)

        tareas.append(article)

    }
}
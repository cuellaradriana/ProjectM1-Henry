// const { Repository } = require("./index.js");

import { Repository } from "./index.js";

//Nueva Instancia de Repository
const repositoryActFav = new Repository();
console.log(repositoryActFav);

// Función que tomará UNA instancia de Activity y la convertirá en elemento HTML.

// Recibir por parámetro un objeto instancia de Activity.
const createCardActivities = (activity) => {
    // Extraer sus propiedades en variables utilizando destructuring.
    const { id, title, description, imgUrl } = activity;

    // Crear los elementos HTML que formarán parte de la tarjeta.
    const titleElement = document.createElement("h3");
    const imgElement = document.createElement("img");
    const descripciónElement = document.createElement("p");
    const deleteElement = document.createElement("button");

    // Asignar los valores a las propiedades correspondientes a cada uno de los elementos.
    titleElement.innerHTML = title;
    imgElement.setAttribute("src", imgUrl);
    descripciónElement.innerHTML = description;
    deleteElement.innerText = "Borrar";

    // Agregar a los elementos las clases CSS correspondientes que hayas implementado para darles estilos.
    titleElement.classList.add("titleCard");
    imgElement.classList.add("imgCard");
    descripciónElement.classList.add("descCard");
    deleteElement.classList.add("deleteCard");

    //Implementar la funcionalidad de eliminar tarjetas del contenedor al hacer click sobre el nuevo botón que podamos agregar a las mismas.
    deleteElement.addEventListener("click", () => {
        repositoryActFav.deleteActivity(id);
        renderActivities();
    });

    // Crear un elemento <div> que será la tarjeta donde incluiremos todos los demás elementos.
    const cardContainer = document.createElement("div");
    cardContainer.id = id;

    // “Appendear” al nuevo <div> los elementos creados anteriormente .
    cardContainer.appendChild(titleElement);
    cardContainer.appendChild(imgElement);
    cardContainer.appendChild(descripciónElement);
    cardContainer.appendChild(deleteElement);

    // Asignar al <div> la clase CSS que tengas implementada para darle estilos.
    cardContainer.classList.add("cardContainer");

    // Retornar el <div> finalizado con todos los elementos correspondientes dentro.
    return cardContainer;
};

//Función que se encargará de “convertir” TODAS las instancias de Activity en elementos HTML y agregarlos al contenedor.
const renderActivities = () => {
    // Seleccionar el contenedor donde queremos agregar las actividades.
    const cardsActContainer = document.querySelector("#cardsActContainer");

    // Vaciar el contenido actual del contenedor.
    cardsActContainer.innerHTML = "";

    // Obtener el listado completo de actividades.
    const activitiesList = repositoryActFav.getAllActivities();

    // “Mapear” el listado de actividades para convertirlos todos en elementos HTML.
    const myActivities = activitiesList.map((act) => createCardActivities(act));

    // “Appendear” todos los elementos HTML del nuevo array dentro del contenedor seleccionado.
    myActivities.forEach((actCard) => cardsActContainer.appendChild(actCard));
};

// Función handler que se ejecutará al disparar el evento del botón.
const handlerClick = () => {
    // Seleccionar los inputs.
    const name = document.getElementById("nameAct");
    const description = document.getElementById("descriptionAct");
    const img = document.getElementById("urlImg");

    // Tomar los valores ingresados en los inputs y guardarlos en variables.
    const valueName = name.value;
    const valueDescription = description.value;
    const valueImg = img.value;

    // Validar que estos valores estén completos.
    if (!valueName || !valueDescription || !valueImg) {
        alert("Hay campos vacíos, por favor ingresar todos los campos");
        return;
    }

    // Llamar al método correspondiente de la instancia de Repository para crear una nueva actividad.
    repositoryActFav.createActivity(valueName, valueDescription, valueImg);

    // Invocar la función para “refrescar” el contenedor de actividades.
    renderActivities();

    //limpiar inputs
    name.value = "";
    description.value = "";
    img.value = "";
};

//Seleccionar el botón que disparará el evento de agregar actividad y agregar un Event Listener.
const addActivity = document.getElementById("submitAct");

//Agregar el escuchador del evento
addActivity.addEventListener("click", (event) => {
    event.preventDefault();
    handlerClick();
});

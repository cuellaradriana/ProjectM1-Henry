//Clase Activity, para poder crear instancias (actividades) a partir de ella
export class Activity {
    constructor(id, title, description, imgUrl) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.imgUrl = imgUrl;
    }
}

//Clase Repository (clase hija) que heredará las propiedades de Activity para poder generar nuevas actividades y almacenarlas en un Repositorio temporal
export class Repository {
    constructor() {
        //Propiedad activities que almacena en un arreglo con las actividades creadas con el método createActivity
        this.activities = [];
        //Propiedad id, para generar un contador que me de un ID creciente en cada actividad creada
        this.id = 1;
    }

    //MÉTODOS DEL REPOSITORY
    //Método para retornar el arreglo de actividades creado en el constructor
    getAllActivities() {
        return this.activities;
    }

    //Método para crear nuevas actividades y pushearlas al array activities
    createActivity(title, description, imgUrl) {
        const newAct = new Activity(this.id, title, description, imgUrl); // creación de una nueva instancia (actividad) por medio de la clase Activity
        this.activities.push(newAct); //Pusheo esa actividad en mi array activities
        this.id++; //Aumento mi contador para que vaya incrementando a medida que se agregan actividades
    }

    //Método para filtrar y eliminar la actividad mediante su ID
    deleteActivity(id) {
        this.activities = this.activities.filter((act) => act.id != id); //filtro generando un array nuevo con todas las actividades menos la actividad cuyo id coincida con el que se envíe por parámetro en el método
    }
}

// const miRepositorio = new Repository();
// console.log(miRepositorio);
// miRepositorio.createActivity("yoga", "mente y cuerpo", "www.yoga.com");
// console.log(miRepositorio);
// miRepositorio.createActivity("cantar", "desestreza", "www.canto.com");
// console.log(miRepositorio);

// console.log(miRepositorio.getAllActivities());

// module.exports = {
//     Repository,
//     Activity,
// };

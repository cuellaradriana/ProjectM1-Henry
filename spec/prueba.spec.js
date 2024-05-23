// const { Activity, Repository } = require("../scripts/index.js");

import { Activity, Repository } from "../scripts/index.js";

describe("demo", function () {
    it("Este test debe pasar siempre", function () {
        expect(4 + 2).toBe(6);
    });
});

//HOMEWORK 4

let myActivity;
describe("Test a clase Activity", () => {
    beforeEach(() => {
        myActivity = new Activity(
            1,
            "Yoga",
            "Bueno para la salud",
            "www.bancoimg.com/img"
        );
    });
    it("Activity debería ser una clase", () => {
        expect(typeof Activity.prototype.constructor).toBe("function");
    });
    it("Debería tener la propiedad id", () => {
        expect(myActivity.id).toBeDefined();
    });
    it("Debería tener la propiedad title", () => {
        expect(myActivity.title).toBeDefined();
    });
    it("Debería tener la propiedad description", () => {
        expect(myActivity.description).toBeDefined();
    });
    it("Debería tener la propiedad imgUrl", () => {
        expect(myActivity.imgUrl).toBeDefined();
    });
});

let myRepository;
describe("Test de la clase Repository", () => {
    beforeEach(() => {
        myRepository = new Repository();
    });
    it("Repository debería ser una clase", () => {
        expect(typeof Repository.prototype.constructor).toBe("function");
    });
    it("myRepository debería ser una instancia de la clase", () => {
        expect(myRepository instanceof Repository).toBeTrue();
    });
    it("Repository debería tener la propiedad id", () => {
        expect(myRepository.id).toBeDefined();
    });
    it("Debería tener definido un método getAllActivities() para devolver todos las actividades", () => {
        expect(myRepository.getAllActivities).toBeDefined();
    });
    it("El método getAllActivities() debería ser una función", () => {
        expect(typeof myRepository.getAllActivities).toBe("function");
    });
    it("El método getAllActivities() debería retornar un array", () => {
        expect(Array.isArray(myRepository.getAllActivities())).toBeTrue();
    });
    it("Debería tener definido un método createActivity() para agregar una nueva actividad", () => {
        expect(myRepository.createActivity).toBeDefined();
    });
    it("El método createActivity() debería ser una función", () => {
        expect(typeof myRepository.createActivity).toBe("function");
    });
    it("Debería tener definido un método deleteActivity() para eliminar una actividad", () => {
        expect(myRepository.deleteActivity).toBeDefined();
    });
    it("El método deleteActivity() debería ser una función", () => {
        expect(typeof myRepository.deleteActivity).toBe("function");
    });
    it("El método createActivity() debería agregar una nueva actividad al repositorio", () => {
        // simular la creación una actividad con sus propiedades para luego poder usar sus propiedades en los parámetros requeridos en createActivity y en la nueva instancia de Actividad con la que vamos a comparar en el test
        const testActivity = {
            title: "yoga",
            description: "Entrenamiento de cuerpo y mente",
            imgUrl: "www.hola.com",
        };
        //hago uso del método para ver su funcionamiento
        myRepository.createActivity(
            testActivity.title,
            testActivity.description,
            testActivity.imgUrl
        );
        // simular la creación de una nueva instancia de actividad para poder hacer la comparación en el expect
        const newActivity = new Activity(
            1,
            testActivity.title,
            testActivity.description,
            testActivity.imgUrl
        );

        expect(myRepository.activities).toEqual([newActivity]);
    });
    it("El método deleteActivity() debería eliminar una actividad del repositorio", () => {
        // simular la creación una actividad con sus propiedades para luego poder usar sus propiedades en los parámetros requeridos en createActivity y en la nueva instancia de Actividad con la que vamos a comparar en el test
        const testActivity = {
            title: "yoga",
            description: "Entrenamiento de cuerpo y mente",
            imgUrl: "www.hola.com",
        };
        //hago uso del método para ver su funcionamiento
        myRepository.createActivity(
            testActivity.title,
            testActivity.description,
            testActivity.imgUrl
        );
        // simular la creación de una nueva instancia de actividad para poder hacer la comparación en el expect
        const newActivity = new Activity(
            1,
            testActivity.title,
            testActivity.description,
            testActivity.imgUrl
        );
        myRepository.deleteActivity(newActivity.id);

        expect(myRepository.activities).not.toContain([newActivity]);
        expect(myRepository.activities).toEqual([]);
    });
    it("El método getAllActivities() debería retornar todas las actividades", () => {
        const testActivity1 = {
            title: "yoga",
            description: "Entrenamiento de cuerpo y mente",
            imgUrl: "www.hola.com",
        };
        const testActivity2 = {
            title: "canto",
            description: "libera y divierte",
            imgUrl: "www.canto.com",
        };
        const testActivity3 = {
            title: "baile",
            description: "se siente bien",
            imgUrl: "www.baile.com",
        };
        myRepository.createActivity(
            testActivity1.title,
            testActivity1.description,
            testActivity1.imgUrl
        );
        myRepository.createActivity(
            testActivity2.title,
            testActivity2.description,
            testActivity2.imgUrl
        );
        myRepository.createActivity(
            testActivity3.title,
            testActivity3.description,
            testActivity3.imgUrl
        );

        const allActivities = myRepository.getAllActivities();
        expect(allActivities).toEqual(myRepository.activities);
    });
});

import fs from "fs";
import readline from "readline-sync";
import Task from "./class/Tarea.class.js";
import pc from "picocolors"

const Tasks = new Task();

function mostrarMenu() {
  console.log(pc.bgBlack("\n--- Gestor de Tareas ---"));
  console.log("1. Añadir tarea");
  console.log("2. Eliminar tarea");
  console.log("3. Marcar tarea como completada");
  console.log("4. Listar tareas pendientes");
  console.log("5. Salir");
}

function iniciar() {
  let opcion;
  do {
    mostrarMenu();
    opcion = readline.question("Selecciona una opción: ");

    switch (opcion) {
      case "1":
        Tasks.addTask();
        break;
      case "2":
        Tasks.deleteTask();
        break;
      case "3":
        Tasks.completedTask();
        break;
      case "4":
        Tasks.showPendsTask();
        break;
      case "5":
        console.log("Saliendo...");
        break;
      default:
        console.log("Opción no válida.");
    }
  } while (opcion !== "5");
}

iniciar();

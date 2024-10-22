import fs from "fs";
import readline from "readline-sync";
import pc from "picocolors";

export default class Tarea {
  constructor() {
    this.tareas = [];
    if (fs.existsSync("tareas.txt")) {
      const data = fs.readFileSync("tareas.txt", "utf8");
      this.tareas = JSON.parse(data);
    }
  }

  addTask() {
    const tarea = readline.question("Introduce la tarea: ");
    this.tareas.push({ tarea, completada: false });
    console.log("Tarea añadida correctamente.");
    this.saveTasks();
  }

  deleteTask() {
    this.showPendsTask();
    const indice =
      readline.questionInt("Introduce el número de la tarea a eliminar: ") - 1;

    if (indice >= 0 && indice < this.tareas.length) {
      this.tareas.splice(indice, 1);
      console.log(pc.bgRed("Tarea eliminada."));
      this.showPendsTask();
      this.saveTasks();
    } else {
      console.log("Índice inválido.");
    }
  }

  completedTask() {
    this.showPendsTask();
    const indice =
      readline.questionInt("Introduce el número de la tarea a completar: ") - 1;

    if (indice >= 0 && indice < this.tareas.length) {
      this.tareas[indice].completada = true;
      console.log("Tarea marcada como completada.");
      this.saveTasks();
    } else {
      console.log("Índice inválido.");
    }
  }

  showPendsTask() {
    console.log("\n--- Tareas Pendientes ---");
    this.tareas.forEach((tarea, index) => {
      if (!tarea.completada)
        console.log(pc.red(`${index + 1}. ${tarea.tarea}`));
      if (tarea.completada)
        console.log(
          pc.green(`${index + 1}. ${tarea.tarea} -- completada 👌`) + ""
        );
    });
  }

  saveTasks() {
    fs.writeFileSync("tareas.txt", JSON.stringify(this.tareas, null, 2));
  }
}

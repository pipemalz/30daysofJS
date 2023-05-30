// En este desafío tendrás que construir un organizador de tareas para planificar tus actividades diarias junto con sus correspondientes etiquetas.

// Debes crear un closure que use Maps y Sets para devolver 2 funciones:

// addTask(task, tags): esta función te ayudará a agregar tareas al Map. Es importante que conviertas todas las letras de la tarea en minúsculas usando toLowerCase para verificar si la tarea existe. En caso de que exista, solo se agregarán las nuevas etiquetas como un Set, en caso contrario, se crearán desde cero.

// printTasks(): esta función te devolverá todas las tareas creadas con sus etiquetas.

function taskManager() {
    const tasks = new Map();
    return {
      addTask: (task, tags) => {
        task = task.toLowerCase();
        if (tasks.has(task)) {
          tags.forEach(tag => tasks.get(task).add(tag))
        } else {
          tasks.set(task, new Set(tags));
        }
      },
      printTasks: () => {
        return tasks;
      }
    }
  }

const myTaskManager = taskManager()
myTaskManager.addTask("Comprar leche", ["compras", "urgente"]);
myTaskManager.addTask("Sacar al perro", ["mascotas"]);
myTaskManager.addTask("Hacer ejercicio", ["salud"]);
myTaskManager.addTask("Comprar leche", ["lácteos"]);
console.log(myTaskManager.printTasks())


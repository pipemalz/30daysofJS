class Task {
   constructor(id, description) {
      this.id = id;
      this.description = description;
      this.completed = false;
      this.users = [];
   }

   assignUser(user) {
      if (user instanceof User) {
         this.users.push(user);
      } else {
         throw new Error("El usuario no es una instancia valida")
      }
   }

   completeTask() {
      this.completed = true;
      this.notifyUsers();
   }

   notifyUsers() {
      this.users.forEach(user=>{
         user.notify(this);
      })
   }
}

class User {
   constructor(name) {
      this.name = name;
   }
 
   notify(task) {
      console.log(`Se le notifica al usuario ${this.name} que se ha completado la tarea ${task.description}`);
   }
 }

 class Authorization {
   checkAuthorization(user, task) {
      if(task.users.includes(user)){
         return true;
      }else{
         throw new Error("No autorizado")
      }
   }
 }

 class TaskDecorator {
   constructor(task, options) {
      this.task = task;
      this.deadline = options.deadline;
      this.priority = options.priority;
   }
 
   assignUser(user) {
      this.task.assignUser(user);
   }
 
   completeTask() {
      const maxDate = new Date(this.deadline);
      const now = new Date();

      if(maxDate > now){
         this.task.completeTask();
      }else{
         throw new Error("Ya paso la fecha limite para completar esta tarea");
      }
   }
 
   notifyUsers() {
      this.task.notifyUsers();
   }
 }

class TaskBuilder {
   constructor() {
      this.id = null;
      this.description = null;
      this.completed = null;
      this.users = [];
      this.deadline = null;
      this.priority = null;
   }
 
   setId(id) {
      this.id = id;
      return this;
   }
 
   setDescription(description) {
      this.description = description;
      return this;
   }
 
   setCompleted(completed) {
      this.completed = completed;
      return this;
   }
 
   setUsers(users) {
      if(Array.isArray(users)){
         this.users.push(...users);
      }else{
         this.users.push(users);
      }
      
      return this;
   }
 
   setDeadline(deadline) {
      this.deadline = deadline;
      return this;
   }
 
   setPriority(priority) {
      this.priority = priority;
      return this;
   }
 
   build() {
      const task = new Task(this.id, this.description);

      if(this.completed){
         task.completeTask();
      }

      if(this.users.length > 0){
         this.users.forEach(user=>{
            task.assignUser(user);
         })
      }

      if (this.deadline && this.priority) {
         task.priority = this.priority;
         task.deadline = this.deadline;
      } 

      return task;
   }
 }


 class TaskManager {
   constructor() {
      this.tasks = [];
      if(!TaskManager.instance){
         TaskManager.instance = Object.freeze(this);
      }
      return TaskManager.instance;
   }
 
   static getInstance() {
      return new TaskManager();
   }
 
   addTask(task){
      if(task instanceof Task){
         this.tasks.push(task)
      }else{
         throw new Error("No se una instancia valida")
      }
   }
 
   getTasks(){
      return this.tasks;
   }
 
   getTaskById(id){
      return this.tasks.find(task=>task.id === id) || null;
   }
 }

 const task = new Task('5', 'Pasear al perro')
 const taskDecorator = new TaskDecorator(task, { deadline: '2023-03-31', priority: 'alta' })
 
 console.log(taskDecorator)
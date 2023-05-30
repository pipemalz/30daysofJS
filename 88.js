class Node {
    constructor(name, age, bedNumber) {
        this.name = name;
        this.age = age;
        this.bedNumber = bedNumber;
        this.next = null;
    }
}

class PatientList {
  constructor(beds) {
    this.beds = [];
    this.head = null;
    this.tail = null;
    this.length = 0;
    for(let i = 0; i < beds; i++){
      this.beds.push({
         bedNumber : i + 1,
         available : true
      });
    }
  }

  addPatient(name, age) {
    if(this.getAvailableBeds() === 0) throw new Error("No hay camas disponibles");

    const availableBed = this.beds.find(bed=>bed.available).bedNumber;
    const patient = new Node(name, age, availableBed);
    this.beds[availableBed-1].available = false;

    if(!this.head){
        this.head = patient;
        this.tail = patient;
        return;
    }

    this.tail.next = patient;
    this.tail = patient;
  }

  removePatient(name) {
    if(this.head.name === name){
        this.beds[this.head.bedNumber - 1].available = true;
        this.head = this.head.next;
        this.length--;
        return;
    }

    let count = 0;
    let currentNode = this.head;

    while(currentNode){
        if(currentNode.name === name){
            const patientBefore = this.get(count-1, false);
            if(currentNode === this.tail){
                this.tail = patientBefore;
                this.tail.next = null;
                this.length--;
                this.beds[currentNode.bedNumber - 1].available = true;
                return;
            }
            patientBefore.next = currentNode.next;
            this.length--;
            this.beds[currentNode.bedNumber - 1].available = true;
            return;
        }
        count++;
        currentNode = currentNode.next;
    }
    throw new Error("Paciente no encontrado")
  }

  getPatient(name) {
    let currentNode = this.head;

    while(currentNode){
        if(currentNode.name === name){
            return {
                name: currentNode.name,
                age: currentNode.age, 
                bedNumber: currentNode.bedNumber
            };
        }
        currentNode = currentNode.next;
    }
    throw new Error('Paciente no encontrado')
  }

  getPatientList() {
    let currentNode = this.head;
    const list = [];
    while(currentNode){
      list.push({
        name: currentNode.name,
        age: currentNode.age, 
        bedNumber: currentNode.bedNumber
      });
      if(currentNode !== this.tail){
        currentNode = currentNode.next;
      }else{
        currentNode = null;
      }
    }
    return list;
  }

  getAvailableBeds() {
    let availableBeds = 0;
    for(let bed in this.beds){
      if(this.beds[bed].available){
        availableBeds++;
      }
    }
    return availableBeds;
  }

  get(index) {
    let currentIndex = this.head;
    let count = 0;

    while(currentIndex && (count<=index)){
        if(count === index){
            return currentIndex;
        }
        count++;
        currentIndex = currentIndex.next;
    }
    return null;
  }
}

const list = new PatientList(6)
list.addPatient("Paciente 1", 20)
list.addPatient("Paciente 2", 30)
list.addPatient("Paciente 3", 50)
list.addPatient("Paciente 4", 26)
list.addPatient("Paciente 5", 10)
list.addPatient("Paciente 6", 40)

list.removePatient("Paciente 1");

console.log(list.beds)

console.log(list.getAvailableBeds())
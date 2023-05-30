class Flight {
    constructor(origin, destination, date, capacity, price) {
      this.origin = origin;
      this.destination = destination;
      this.date = date;
      this.capacity = capacity;
      this.price = price;
      this.passengers = [];
    }
  
    sellTicket(passenger) {
        if(this.capacity > 0){
            this.passengers.push({
                fullName: `${passenger.name} ${passenger.lastName}`,
                age: passenger.age
            });

            const flight = {
                origin: this.origin,
                destination: this.destination,
                date: this.date,
                price: this.price
            };

            passenger.flights.push(flight)

            this.capacity -= 1;

            return new Reservation(flight, passenger)
        }
    }
}

class Passenger{
    constructor(name, lastName, age){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.flights = [];
    }
}

class Reservation{
    constructor(flight, passenger){
        this.flight = flight;
        this.passenger = passenger;
    }
    reservationDetails(){
        return {
            origin: this.flight.origin,
            destination: this.flight.destination,
            date: this.flight.date,
            reservedBy: `${this.passenger.name} ${this.passenger.lastName}`
        }
    }
}

class PremiumFlight extends Flight{
    constructor(origin, destination, date, capacity, price, specialService){
        super(origin, destination, date, capacity, price);
        this.specialService = specialService;
    }
    sellTicket(passenger){
        if(this.capacity > 0){
            this.passengers.push({
                fullName: `${passenger.name} ${passenger.lastName}`,
                age: passenger.age
            });
    
            const flight = {
                origin: this.origin,
                destination: this.destination,
                date: this.date,
                price: this.price + this.specialService
            }
            passenger.flights.push(flight);

            this.capacity -= 1;

            return new Reservation(flight, passenger)
        }
    }
}

class EconomicFlight extends Flight{
    constructor(origin, destination, date, capacity, price){
        super(origin, destination, date, capacity, price);
        this.discount = 0;
    }
    sellTicket(passenger){
        if(this.capacity > 0){
            this.passengers.push({
                fullName: `${passenger.name} ${passenger.lastName}`,
                age: passenger.age
            });

            if(passenger.age < 18 || passenger.age > 65){
                this.discount += (this.price * 0.20);
            }
            console.log(`descuento = ${this.discount}`)
            const flight = {
                origin: this.origin,
                destination: this.destination,
                date: this.date,
                price: this.price - this.discount
            }

            passenger.flights.push(flight);

            this.capacity -= 1;

            return new Reservation(flight, passenger);
        }
    }
}

const flight = new EconomicFlight(
    "New York",
    "Paris",
    "2023-12-25",
    100,
    200
  );
  
  const passenger = new Passenger("Pedro", "Gutierrez", 17);
  
  const reservation = flight.sellTicket(passenger);
  
  console.log(reservation.flight.price)
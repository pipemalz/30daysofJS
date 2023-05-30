// En este desafío deberás crear un sistema de administración para un hotel.
// El objetivo de este ejercicio es utilizar closures para implementar la lógica de una función (hotelSystem) que administre un hotel. La función recibirá un parámetro rooms, definirá el número total de habitaciones.
// El closure debe retornar las siguientes funciones:
// searchReservation(id): esta función permitirá buscar una reservación por su ID. En caso de no encontrarla, se retornará un error con el mensaje "La reservación no fue encontrada".
// getSortReservations(): esta función nos devolverá una copia de las reservaciones sin modificar el array original ordenando las reservaciones por fecha de check-in de manera ascendente.
// addReservation(reservation): esta función se usará para agregar una nueva reservación. Debe asegurarse de que la habitación solicitada esté disponible para las fechas de check-in y check-out. En caso de que esté reservada, se retornará un error con el mensaje "La habitación no está disponible".
// removeReservation(id): esta función eliminará la reservación correspondiente al ID recibido y la retornará. En caso de que la reservación no exista, se retornará un error con el mensaje "La reservación que se busca remover no existe".
// getReservations(): esta función nos devolverá todas las reservaciones.
// getAvailableRooms(checkIn, checkOut): esta función recibirá dos parámetros, checkIn y checkOut con formato "dd/mm". La función debe devolver las habitaciones disponibles para las fechas dadas.

function hotelSystem(rooms) {
    let reservations = [];
  
    function dateToNumber(dateString) {
      return parseInt(dateString.split("/").reverse().join(""));
    }
  
    function getBookedRooms(checkIn, checkOut, roomNumber) {
      const checkInInt = dateToNumber(checkIn);
      const checkOutInt = dateToNumber(checkOut);
  
      return reservations.find(res => {
        const resCheckIn = dateToNumber(res.checkIn);
        const resCheckOut = dateToNumber(res.checkOut);
        return res.roomNumber == roomNumber &&
          ((resCheckIn <= checkInInt && checkInInt <= resCheckOut) ||
            (resCheckOut <= checkOutInt && checkOutInt <= resCheckOut))
      })
    }
  
    return {
      searchReservation: id => {
        const result = reservations.find(reservation => reservation.id == id);
        if (result) {
          return result;
        } else{
          throw new Error("La reservación no fue encontrada.")
        }
      },
      getSortReservations: () => {
        return reservations.sort((a, b) => dateToNumber(a.checkIn) - dateToNumber(b.checkIn));
      },
      addReservation: ({ id, name, checkIn, checkOut, roomNumber }) => {
        if (getBookedRooms(checkIn, checkOut, roomNumber)) {
          throw new Error("La habitación no está disponible");
        }
  
        if (roomNumber > rooms) {
          return "La habitación no existe.";
        }
  
        if (reservations.find(res => res.id === id)) {
          return "Ya existe una habitacion con el id: " + id;
        }
  
        reservations.push({
          id,
          name,
          checkIn,
          checkOut,
          roomNumber
        })
  
        return "La habitación fue reservada con éxito.";
      },
      removeReservation: id => {
        const index = reservations.findIndex(res => res.id === id);
        if (index >= 0) {
          return reservations.splice(index, 1)[0];
        } else {
          throw new Error("No existe una habitacion con el id: " + id);
        }
      },
      getReservations: () => {
        return reservations;
      },
      getAvailableRooms: (checkIn, checkOut) => {
        const availableRooms = [];
        for (let i = 1; i <= rooms; i++) {
          if (!getBookedRooms(checkIn, checkOut, i)) {
            availableRooms.push(i);
          }
        }
        return availableRooms;
      }
    }
  }
  
  
const hotel = hotelSystem(10);

// Agregar una nueva reservación
hotel.addReservation({
    id: 1,
    name: "John Doe",
    checkIn: "01/02",
    checkOut: "02/02",
    roomNumber: 1,
});

hotel.addReservation({
    id: 2,
    name: "Pepe Doe",
    checkIn: "03/02",
    checkOut: "04/02",
    roomNumber: 7,
});

hotel.addReservation({
    id: 3,
    name: "Meme banderas",
    checkIn: "05/02",
    checkOut: "06/02",
    roomNumber: 7,
});

hotel.addReservation({
    id: 4,
    name: "Ka ga nao",
    checkIn: "02/01",
    checkOut: "06/02",
    roomNumber: 6,
});
  
console.log(hotel.getAvailableRooms("02/01", "06/02"))

// En este ejercicio, el objetivo es implementar una playlist de un servicio de música utilizando un stack.

// Deberás implementar la lógica de la clase Playlist la cual deberá tener las siguientes 3 propiedades top, bottom y length para poder desarrollar el stack.

// addSong(song): este método debe permitir agregar una canción al stack.

// playSong(): este método debe permitir reproducir la canción que está en el tope del stack y luego eliminarla. Si el stack está vacío, deberá lanzar un error con el mensaje "No hay canciones en la lista".

// getPlaylist() transforma el stack a un array con todas las canciones que están en el, en orden de reproducción (de la última agregada a la primera).

export class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

export class Playlist {
    constructor() {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    }
  
    addSong(song) {
      const newNode = new Node(song);
      if (this.length === 0) {
        this.top = newNode;
        this.bottom = newNode;
      } else {
        newNode.next = this.top;
        this.top = newNode; 
      }
      this.length++;
      return this;
    }
  
    playSong() {
      if (!this.top) {
        throw new Error("No hay canciones en la lista");
      }
      if (this.length === 1) {
        this.bottom = null;
      }
      const value = this.top.value;
      this.top = this.top.next;
      this.length--;
      return value;
    }
  
    getPlaylist() { 
      let currentNode = this.top;
      const playlist = [];
  
      while (currentNode) {
        playlist.push(currentNode.value)
        currentNode = currentNode.next ? currentNode.next : null;
      }
  
      return playlist;
    }
  }
  
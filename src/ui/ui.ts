import { Juego } from "../motor/motor";

import { Cartas, contadores } from "../modelo/modelo";

const pintarCarta = (urlCarta: string) => {
const elementoImagen = document.getElementById("imgCarta");
  if (
      elementoImagen !== null &&
      elementoImagen !== undefined &&
      elementoImagen instanceof HTMLImageElement) {
          elementoImagen.src = urlCarta;
  }
};

const pintarPuntuacion = (puntuacion: number) => {
    const elementoPuntuacion = document.getElementById("puntuacion");
    if (
        elementoPuntuacion !== null &&
        elementoPuntuacion !== undefined &&
        elementoPuntuacion instanceof HTMLSpanElement) {
            elementoPuntuacion.innerText = `${puntuacion}`;
    }
};

const pintarMejorPuntuacion = (mejorPuntuacion: number) => {
    const elementoMejorPuntuacion = document.getElementById("mejorPuntuacion")
    if (
        elementoMejorPuntuacion !== null &&
        elementoMejorPuntuacion !== undefined &&
        elementoMejorPuntuacion instanceof HTMLSpanElement) {
            elementoMejorPuntuacion.innerText = `${mejorPuntuacion}`;
    }
};

const pintarMensajeFinal = (mensajeFinal: string) => {
    const elementoMensajeFinal = document.getElementById("mensajeFinal")
    if (
        elementoMensajeFinal !== null &&
        elementoMensajeFinal !== undefined &&
        elementoMensajeFinal instanceof HTMLSpanElement) {
            elementoMensajeFinal.innerText = `${mensajeFinal}`;
    }
};

const pintarRestantes = (mensajeRestantes: string) => {
    const elementoMensajeRestantes = document.getElementById("restantes")
    if (
        elementoMensajeRestantes !== null &&
        elementoMensajeRestantes !== undefined &&
        elementoMensajeRestantes instanceof HTMLSpanElement) {
            elementoMensajeRestantes.innerText = `${mensajeRestantes}`;
    }
};

const pintarComentarios = (puntosSumados: number) => {
  const elementoComentarios = document.getElementById("mensajeComentarios")
  if (
      elementoComentarios !== null &&
      elementoComentarios !== undefined &&
      elementoComentarios instanceof HTMLSpanElement){
        if (puntosSumados === 0) {
            elementoComentarios.textContent = "";
        }
        if (puntosSumados <= 4) {
            elementoComentarios.textContent = "Has sido muy conservador";
        }
        if (puntosSumados > 4 && puntosSumados < 6) {
            elementoComentarios.textContent = "Te ha entrado el canguelo eh?";
        }
        if (puntosSumados >= 6 && puntosSumados <= 7){
            elementoComentarios.textContent = "Casi casi..."
        }
        if (puntosSumados	=== 7.5) {
            elementoComentarios.textContent = "Lo has clavado! Enhorabuena!"
        }
  }
};

export const dameCarta = () => {
  const numeroAleatorio = Juego.obtenerNumeroAleatorio();
  const carta = Juego.obtenerNumeroCarta(numeroAleatorio);
  contadores.cambiarContador(carta.toString());
  Juego.actualizarContTotal();
  const urlCarta = Cartas.obtenerUrlCarta(carta);
  pintarCarta(urlCarta);
  const puntosCarta = Juego.obtenerPuntosCarta(carta);
  contadores.puntosSumados = Juego.sumarPuntos(puntosCarta);
  Juego.actualizarPuntuacion(contadores.puntosSumados);
  pintarPuntuacion(contadores.puntosTotales);
  pintarRestantes(contadores.contTotal.toString());
  comprobarPartida();
};

const comprobarPartida = () => {
  if (contadores.puntosTotales === 7.5 || contadores.puntosTotales > 7.5) {
    if (botonDameCarta !== null && 
      botonDameCarta !== undefined && 
      botonDameCarta instanceof HTMLButtonElement) {
        botonDameCarta.disabled = true;
      }
    if (
      botonMePlanto !== null && 
      botonMePlanto !== undefined && 
      botonMePlanto instanceof HTMLButtonElement) {
        botonMePlanto.disabled = true;
    }
  }
  
  if (contadores.puntosTotales === 7.5) {
    pintarMejorPuntuacion(7.5);
    pintarMensajeFinal("Lo has clavado! Enhorabuena!");
  }
  if (contadores.puntosTotales > 7.5) {
    pintarMensajeFinal("Has perdido... Prueba otra vez!");
  }
};

const botonDameCarta = document.getElementById("dameCarta");

export const reinicio = () => {
  pintarCarta(Cartas.cartaBack);
    contadores.puntosTotales = 0;
    Juego.actualizarPuntuacion(0);
    pintarPuntuacion(0);
    pintarMejorPuntuacion(0);
    pintarMensajeFinal("");
    pintarRestantes("40");
    contadores.reiniciarContadores();

    const elementoComentarios = document.getElementById("mensajeComentarios");
    if (elementoComentarios !== null && elementoComentarios instanceof HTMLSpanElement) {
        elementoComentarios.textContent = "";  // Limpia el mensaje de comentarios
    }

    if (botonDameCarta !== null && 
      botonDameCarta !== undefined && 
      botonDameCarta instanceof HTMLButtonElement) {
      botonDameCarta.disabled = false;

    }
    if (botonMePlanto !== null && 
      botonMePlanto !== undefined && 
      botonMePlanto instanceof HTMLButtonElement) {
      botonMePlanto.disabled = false;
    }
    if (botonQueHabriaPasado !== null && 
      botonQueHabriaPasado !== undefined && 
      botonQueHabriaPasado instanceof HTMLButtonElement) {
      botonQueHabriaPasado.disabled = true;
    }
   };

const comprobarBotonMePlanto = () => {
    if (
        botonMePlanto !== null &&
        botonMePlanto !== undefined &&
        botonMePlanto instanceof HTMLButtonElement
      ) {
        botonMePlanto.addEventListener("click", () => {
          botonMePlanto.disabled = true;
          if (
          botonDameCarta !== null &&
          botonDameCarta !== undefined &&
          botonDameCarta instanceof HTMLButtonElement) {
            botonDameCarta.disabled = true;
          }
          if (
            botonQueHabriaPasado !== null &&
            botonQueHabriaPasado !== undefined &&
            botonQueHabriaPasado instanceof HTMLButtonElement) {
              botonQueHabriaPasado.disabled = false;
            }
        }
    )}
};

const botonMePlanto = document.getElementById("mePlanto");
export const funcionBotonMePlanto = () => {
  comprobarBotonMePlanto();
  pintarMejorPuntuacion(contadores.puntosTotales);
  Juego.actualizarPuntuacion(0);
  pintarPuntuacion(0);
  pintarComentarios(contadores.puntosSumados);
  contadores.puntosSumados = 0;
  comprobarPartida();
};

const botonQueHabriaPasado = document.getElementById("queHabriaPasado");
const comprobarBotonQueHabriaPasado = () => {
  if (
    botonQueHabriaPasado !== null &&
    botonQueHabriaPasado !== undefined &&
    botonQueHabriaPasado instanceof HTMLButtonElement) {
      botonQueHabriaPasado.addEventListener("click", () => {
        funcQueHabriaPasado();
      });
  }
};

export const funcQueHabriaPasado = () => {
  comprobarBotonQueHabriaPasado();
  const numeroAleatorio = Juego.obtenerNumeroAleatorio();
  const carta = Juego.obtenerNumeroCarta(numeroAleatorio);
  contadores.cambiarContador(carta.toString());
  Juego.actualizarContTotal()
  const urlCarta = Cartas.obtenerUrlCarta(carta);
  pintarCarta(urlCarta);
};
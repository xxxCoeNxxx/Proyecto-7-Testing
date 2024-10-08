import {contadores} from "../modelo/modelo";

export const Juego = {
    obtenerNumeroAleatorio: () => {
        return Math.floor(Math.random() * 10) + 1;
    },

    obtenerNumeroCarta: (numeroAleatorio: number) => {
        if (numeroAleatorio > 7) {
            return numeroAleatorio + 2;
        }
        return numeroAleatorio;
    },

    obtenerPuntosCarta: (carta: number) => {
        if (carta > 7) {
            return 0.5;
        }
        return carta;
    },

    sumarPuntos: (puntos: number) => {
        return contadores.puntosTotales + puntos;
    },

    actualizarPuntuacion: ( puntosActuales: number) => {
        if (puntosActuales > contadores.puntosTotales) {
        contadores.puntosTotales = puntosActuales;
        }
    },

    actualizarContTotal: () => {
        contadores.contTotal = contadores.contAs + contadores.contDos + contadores.contTres + contadores.contCuatro + contadores.contCinco 
        + contadores.contSeis + contadores.contSiete + contadores.contSota + contadores.contCaballo + contadores.contRey;
    },
};
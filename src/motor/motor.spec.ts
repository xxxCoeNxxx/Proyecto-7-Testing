import { describe, it, expect, vi} from "vitest"
import { gestionarEstadoPartida, Juego } from "./motor";
import { Cartas, partida } from "../modelo/modelo";


describe ("testsComprobarEstadoJuego", () => {
    it ("Debería seguir jugando si los puntos son 6", () => {
        //Arrange
        vi.spyOn(partida, "puntosTotales", "get").mockReturnValue(6);

        //Act
        const resultado = gestionarEstadoPartida();

        //Assert
        expect(resultado).toBe("SeguirJugando");
    });

    it ("Debería ganar si los puntos son 7.5", () => {
        //Arrange
        vi.spyOn(partida, "puntosTotales", "get").mockReturnValue(7.5);

        //Act
        const resultado = gestionarEstadoPartida();

        //Assert
        expect(resultado).toBe("Ganar");
    });

    it ("Debería perder si los puntos son 8", () => {
        //Arrange
        vi.spyOn(partida, "puntosTotales", "get").mockReturnValue(8);

        //Act
        const resultado = gestionarEstadoPartida();

        //Assert
        expect(resultado).toBe("Perder");
    })
});

describe ("testsDeCartas", () => {
    it("Debería devolver la carta asociada al número 3", () => {
        //Arrange
        const numeroCarta = 3;
        //Act
        const urlEsperada = Cartas.obtenerUrlCarta(numeroCarta);

        //Assert
        expect(urlEsperada).toBe(
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg");
    });
});


describe ("testDePuntos", () => {
    it("Debería devolver 0.5 al salir un 10", () => {
        //Arrange
        const cartaNueva = 10;

        //Act
        const puntosEsperados: number = Juego.obtenerPuntosCarta(cartaNueva);

        //Asert
        expect(puntosEsperados).toBe(0.5);
    });

    it("Debería devolver un 3", () => {
        //Arrange
        const cartaNueva = 3;

        //Act
        const puntosEsperados: number = Juego.obtenerPuntosCarta(cartaNueva);

        //Asert
        expect(puntosEsperados).toBe(3);
    });
});

describe("TestParaComprobarNumAleatorio", () => {
    it("Debería devolver un 6 si el número aleatorio es 0.5", () => {
        //Arrange
        vi.spyOn(Math, "random").mockReturnValue(0.5);  //El valor debe ser 1 menos

        //Act
        const resultado = Juego.obtenerNumeroAleatorio();

        //Assert
        expect(resultado).toBe(6);
    });

    it("Debería devolver un 10 si el número aleatorio es 0.9", () => {
        //Arrange
        vi.spyOn(Math, "random").mockReturnValue(0.9);

        //Act
        const resultado = Juego.obtenerNumeroAleatorio();

        //Arrange
        expect(resultado).toBe(10);
    });
});
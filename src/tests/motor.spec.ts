import { describe, it, expect, vi } from "vitest"
import { Juego } from "../motor/motor";
import { Cartas } from "../modelo/modelo";

describe ("obtenerNumeroCarta", () => {
    it("Debería devolver la carta asociada al número obtenido", () => {
        //Arrange
        vi.spyOn(Juego, "obtenerNumeroAleatorio").mockReturnValue(3);
        const numeroAleatorio: number = Juego.obtenerNumeroAleatorio();
        const cartaEsperada: number = Juego.obtenerNumeroCarta(numeroAleatorio);
        
        //Act
        const urlEsperada = Cartas.obtenerUrlCarta(cartaEsperada);

        //Assert
        expect(urlEsperada).toBe(
            "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg");

    });

    it("Debería devolver los puntos adecuados", () => {
        //Arrange
        vi.spyOn(Juego, "obtenerNumeroAleatorio").mockReturnValue(10);
        const numeroAleatorio: number = Juego.obtenerNumeroAleatorio();
        const cartaEsperada: number = Juego.obtenerNumeroCarta(numeroAleatorio);
        const puntosEsperados: number = Juego.obtenerPuntosCarta(cartaEsperada);

        //Asert
        expect(puntosEsperados).toBe(0.5);

    });
});
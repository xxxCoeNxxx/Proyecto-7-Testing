import {obtenerNumeroCarta} from "../motor/motor";

describe ("obtenerNumeroCarta", () => {
    it("Debería devolver un número del 1 al 12, pero no 8 o 9", () => {
        //Arrange
        const obtenerNumeroAleatorio: number = Math.floor(Math.random() * 10) + 1;

        //Act
        const numeroGenerado = obtenerNumeroCarta(obtenerNumeroAleatorio);

        //Assert
        expect(
            numeroGenerado === 1 ||
            numeroGenerado === 2 ||
            numeroGenerado === 3 ||
            numeroGenerado === 3 ||
            numeroGenerado === 4 ||
            numeroGenerado === 5 ||
            numeroGenerado === 6 ||
            numeroGenerado === 7 ||
            numeroGenerado === 10 ||
            numeroGenerado === 11 ||
            numeroGenerado === 12
        ).toBe(true);
    });
});
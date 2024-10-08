export const Cartas = {
  cartaBack: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg",

  obtenerUrlCarta: (carta: number) => {
    switch (carta) {
      case 1:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      case 2:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      case 3:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      case 4:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      case 5:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      case 6:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      case 7:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      case 10:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      case 11:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      case 12:
        return "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      default:
        return Cartas.cartaBack;
    }
  }
};

// BORRAR SI DA FALLOS EN testing

export const CONTMAX: number = 4;
export const CONTTOTALMAX: number = 40;

export const contadores = {
  puntosTotales: 0,
  puntosSumados: 0,
  contAs: CONTMAX,
  contDos: CONTMAX,
  contTres: CONTMAX,
  contCuatro: CONTMAX,
  contCinco: CONTMAX,
  contSeis: CONTMAX,
  contSiete: CONTMAX,
  contSota: CONTMAX,
  contCaballo: CONTMAX,
  contRey: CONTMAX,
  contTotal: CONTTOTALMAX,

  reiniciarContadores() {
    this.contAs = this.contDos = this.contTres = this.contCuatro = this.contCinco =
    this.contSeis = this.contSiete = this.contSota = this.contCaballo = this.contRey = CONTMAX;
    this.contTotal = CONTTOTALMAX;
  },

  cambiarContador(nombreCont: string) {
    switch (nombreCont) {
      case "1":
        this.contAs--;
        break;
      case "2":
        this.contDos--;
        break;
      case "3":
        this.contTres--;
        break;
      case "4":
        this.contCuatro--;
        break;
      case "5":
        this.contCinco--;
        break;
      case "6":
        this.contSeis--;
        break;
      case "7":
        this.contSiete--;
        break;
      case "10":
        this.contSota--;
        break;
      case "11":
        this.contCaballo--;
        break;
      case "12":
        this.contRey--;
        break;
      default:
        console.error("Ha habido un error, por favor reinicia la página");
        break;
    }
  }
};
import pokes from "../json/pokes.json";
import kanto from "../json/kanto.json";
import johto from "../json/johto.json";
import hoenn from "../json/hoenn.json";
import sinnoh from "../json/sinnoh.json";
import unova from "../json/unova.json";
import kalos from "../json/kalos.json";
import galar from "../json/galar.json";

export const getJSON = (url) => {
    switch (url) {
        case "/":
            return pokes;
        case "/kanto":
            return kanto;
        case "/johto":
            return johto;
        case "/hoenn":
            return hoenn;
        case "/sinnoh":
            return sinnoh;
        case "/unova":
            return unova;
        case "/kalos":
            return kalos;
        case "/galar":
            return galar;
        default:
            return pokes;
  }
};

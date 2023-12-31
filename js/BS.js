// Defino el constructor de objetos para los algoritmos
function Algoritmo(nombre, dificultad, recompensaBlock, hashred, nblocksxh, min, max) {
    this.nombre = nombre;
    this.dificultad = dificultad;
    this.recompensaBlock = recompensaBlock;
    this.hashred = hashred;
    this.nblocksxh = nblocksxh;
    this.min = min;
    this.max = max;
    this.actualizarPrecios();
}

Algoritmo.prototype.actualizarPrecios = function () {
    this.precio = Algoritmo.generarPrecio();
    this.xnaPrecio = Algoritmo.generarPrecio();
    this.rvnPrecio = Algoritmo.generarPrecio();
    this.neoxaPrecio = Algoritmo.generarPrecio();
};
Algoritmo.actualizarPreciosGlobales = function (algoritmos) {
    algoritmos.forEach(algo => {
        algo.precio = Algoritmo.generarPrecio();
        algo.xnaPrecio = Algoritmo.generarPrecio();
        algo.rvnPrecio = Algoritmo.generarPrecio();
        algo.neoxaPrecio = Algoritmo.generarPrecio();
    });
};
Algoritmo.generarPrecio = function () {
    return Math.random() * (this.max - this.min) + this.min;
};

// Creo objetos usando el constructor
const algo1 = new Algoritmo('XNA', 72759, 16176, 5510000, 1464, 0.004, 0.1);
const algo2 = new Algoritmo('RVN', 69776, 2500, 5290000, 1440, 0.01, 0.4);
const algo3 = new Algoritmo('NEOX',8124, 2250, 581000, 1440, 0.0374, 0.05)

// Almaceno los objetos en un array llamado algoritmos
const algoritmos = [algo1, algo2, algo3];

// Array de nombres de algoritmos
const nombresAlgoritmos = ['RVN', 'XNA', 'NEOX', 'CLORE', 'NEURAI', 'SATOX'];

// Filtro el array de algoritmos para incluir solo los definidos en nombresAlgoritmos
const algoritmosFiltrados = algoritmos.filter(algo => nombresAlgoritmos.includes(algo.nombre));


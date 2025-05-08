const obtenerElementos = () => ({
    filaEl: document.getElementById('idFila'),
    columnaEl: document.getElementById('idColumna'),
    mensajeEl: document.getElementById('idMensaje'),

    el1x1: document.getElementById('id1x1'),
    el1x2: document.getElementById('id1x2'),
    el1x3: document.getElementById('id1x3'),
    el2x1: document.getElementById('id2x1'),
    el2x2: document.getElementById('id2x2'),
    el2x3: document.getElementById('id2x3'),
    el3x1: document.getElementById('id3x1'),
    el3x2: document.getElementById('id3x2'),
    el3x3: document.getElementById('id3x3'),

})

let historialRespuestas = [];
const cambiarLabelAButton = () => {

    console.log(historialRespuestas);

    // const tresValores = historialRespuestas.limit(3)
    const { filaEl, columnaEl, mensajeEl, el1x1, el1x2, el1x3, el2x1, el2x2, el2x3, el3x1, el3x2, el3x3 } = obtenerElementos();

 


    const [numFila, numCol] = [filaEl.value, columnaEl.value]

    const elementoACambiar = `${numFila}x${numCol}`;


    let botonNuevo = ``;

    let suma = parseInt(numFila) + parseInt(numCol);
    console.log(suma);

    if ((suma % 2) === 0) { //PAR
        botonNuevo = `
        <button>O</button>
        `;
        historialRespuestas.push('O')
    } else {
        botonNuevo = `
        <button>X</button>
        `;
        historialRespuestas.push('X')
    }


    if (elementoACambiar === '1x1') {
        el1x1.innerHTML = botonNuevo;
    } else if (elementoACambiar === '1x2') {
        el1x2.innerHTML = botonNuevo;
    } else if (elementoACambiar === '1x3') {
        el1x3.innerHTML = botonNuevo;
    } else if (elementoACambiar === '2x1') {
        el2x1.innerHTML = botonNuevo;
    } else if (elementoACambiar === '2x2') {
        el2x2.innerHTML = botonNuevo;
    } else if (elementoACambiar === '2x3') {
        el2x3.innerHTML = botonNuevo;
    } else if (elementoACambiar === '3x1') {
        el3x1.innerHTML = botonNuevo;
    } else if (elementoACambiar === '3x2') {
        el3x2.innerHTML = botonNuevo;
    } else if (elementoACambiar === '3x3') {
        el3x3.innerHTML = botonNuevo;
    }

    const res1 = historialRespuestas[0];
    const res2 = historialRespuestas[1];
    const res3 = historialRespuestas[2];

    if (res1 === 'X' && res2 === 'X' && res3 === 'X') {
        mensajeEl.innerText = 'Felicitaciones';
    } else if (res1 === 'O' && res2 === 'O' && res3 === 'O') {
        mensajeEl.innerText = 'Felicitaciones';
    }



}

let KoishCounterActual;
let FreetemCounterActual;

const DOM = { 
    Koish: document.getElementById('koishCounter'),
    Freetem: document.getElementById('freetemCounter'),
}

cookies.initialize();

DOM.Koish.innerHTML = KoishCounterActual;
DOM.Freetem.innerHTML = FreetemCounterActual;



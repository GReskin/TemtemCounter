let KoishCounterActual;
let FreetemCounterActual;

const DOM = { 
    Koish: document.getElementById('koishCounter'),
    Freetem: document.getElementById('freetemCounter'),
    KoishPlusBtn: document.getElementById('koishPlusBtn'),
    KoishMinusBtn: document.getElementById('koishMinusBtn'),
    FreetemPlusBtn: document.getElementById('freetemPlusBtn'),
    FreetemMinusBtn: document.getElementById('freetemMinusBtn'),
    ResetBtn: document.getElementById('resetBtn')
}

cookies.initialize();

DOM.Koish.innerHTML = KoishCounterActual;
DOM.Freetem.innerHTML = FreetemCounterActual;

DOM.KoishPlusBtn.onclick = koishPlus;
DOM.KoishMinusBtn.onclick = koishMinus;
DOM.FreetemPlusBtn.onclick = freetemPlus;
DOM.FreetemMinusBtn.onclick = freetemMinus;
DOM.ResetBtn.onclick = reset;



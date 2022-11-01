function koishPlus (){
    KoishCounterActual++
    DOM.Koish.innerHTML = KoishCounterActual;
    cookies.setKoish()
}

function koishMinus (){
    if(KoishCounterActual > 0){
        KoishCounterActual--;
        DOM.Koish.innerHTML = KoishCounterActual;
        cookies.setKoish()
    }
}

function freetemPlus (){
    FreetemCounterActual++;
    DOM.Freetem.innerHTML = FreetemCounterActual;
    cookies.setFreetem()
}

function freetemMinus(){
    if(FreetemCounterActual > 0){
        FreetemCounterActual--;
        DOM.Freetem.innerHTML = FreetemCounterActual;
        cookies.setFreetem()
    }
}

function reset(){
    FreetemCounterActual = 0;
    KoishCounterActual = 0;
    DOM.Freetem.innerHTML = FreetemCounterActual;
    DOM.Koish.innerHTML = KoishCounterActual;
    cookies.setKoish()
    cookies.setFreetem()
}
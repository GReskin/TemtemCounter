function koishPlus (){
    KoishCounterActual++
    KoishCounterDom.innerHTML = KoishCounterActual;
    cookies.setKoish()
}

function koishMinus (){
    if(KoishCounterActual > 0){
        KoishCounterActual--;
        KoishCounterDom.innerHTML = KoishCounterActual;
        cookies.setKoish()
    }
}

function freetemPlus (){
    FreetemCounterActual++;
    FreetemCounterDom.innerHTML = FreetemCounterActual;
    cookies.setFreetem()
}

function freetemMinus(){
    if(FreetemCounterActual > 0){
        FreetemCounterActual--;
        FreetemCounterDom.innerHTML = FreetemCounterActual;
        cookies.setFreetem()
    }
}

function reset(){
    FreetemCounterActual = 0;
    KoishCounterActual = 0;
    FreetemCounterDom.innerHTML = FreetemCounterActual;
    KoishCounterDom.innerHTML = KoishCounterActual;
    cookies.setKoish()
    cookies.setFreetem()
}
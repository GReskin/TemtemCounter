
let KoishCounterActual;
let FreetemCounterActual;

const KoishCounterDom = document.getElementById('koishCounter')
const FreetemCounterDom = document.getElementById('freetemCounter')

if(cookies.getKoish() == ""){
    KoishCounterActual = 0;
    cookies.setKoish()
} else {
    KoishCounterActual = cookies.getKoish();
}
if(cookies.getFreetem == ""){
    FreetemCounterActual = 0;
    cookies.setFreetem();
} else {
    FreetemCounterActual = cookies.getFreetem();
}

KoishCounterDom.innerHTML = KoishCounterActual;
FreetemCounterDom.innerHTML = FreetemCounterActual;



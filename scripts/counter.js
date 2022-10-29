let KoishCounterActual;
let FreetemCounterActual;

if(getCookie('koish') == ""){
    KoishCounterActual = 0;
    updateKoishCookie();
} else {
    KoishCounterActual = getCookie('koish');
}
if(getCookie('freetem') == ""){
    FreetemCounterActual = 0;
    updateFreetemCookie();
} else {
    FreetemCounterActual = getCookie('freetem');
}

document.getElementById('koishCounter').innerHTML = KoishCounterActual;
document.getElementById('freetemCounter').innerHTML = FreetemCounterActual;

function koishPlus (){
    KoishCounterActual++
    document.getElementById('koishCounter').innerHTML = KoishCounterActual;
    updateKoishCookie();
}

function koishMinus (){
    if(KoishCounterActual > 0){
        KoishCounterActual--;
        document.getElementById('koishCounter').innerHTML = KoishCounterActual;
        updateKoishCookie();
    }
}

function freetemPlus (){
    FreetemCounterActual++;
    document.getElementById('freetemCounter').innerHTML = FreetemCounterActual;
    updateFreetemCookie()
}

function freetemMinus(){
    if(FreetemCounterActual > 0){
        FreetemCounterActual--;
        document.getElementById('freetemCounter').innerHTML = FreetemCounterActual;
        updateFreetemCookie()
    }
}

function reset(){
    FreetemCounterActual = 0;
    KoishCounterActual = 0;
    document.getElementById('freetemCounter').innerHTML = FreetemCounterActual;
    document.getElementById('koishCounter').innerHTML = KoishCounterActual;
    updateKoishCookie();
    updateFreetemCookie()
}

function sendData(){
    let freetemCounter = document.getElementById('freetemCounter').innerHTML
    let koishCounter = document.getElementById('koishCounter').innerHTML
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function updateKoishCookie(){
    setCookie('koish', KoishCounterActual, 7);
}

function updateFreetemCookie(){
    setCookie('freetem', FreetemCounterActual, 7);
}
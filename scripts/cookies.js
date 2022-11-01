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

function initialize(){
    if(cookies.getKoish() == ""){
        KoishCounterActual = 0;
        cookies.setKoish()
    } else {
        KoishCounterActual = cookies.getKoish();
    }
    if(cookies.getFreetem() == ""){
        FreetemCounterActual = 0;
        cookies.setFreetem();
    } else {
        FreetemCounterActual = cookies.getFreetem();
    }
}

const cookies = {
    getKoish: () => (getCookie('koish')),
    getFreetem: () => (getCookie('freetem')),
    setKoish: () => (setCookie('koish', KoishCounterActual, 7)),
    setFreetem: () => (setCookie('freetem', FreetemCounterActual, 7)),
    initialize: () => (initialize())
}
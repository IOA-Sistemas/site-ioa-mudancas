// Inï¿½cio Acessibilidade
const colors = {
    background: ""
};
var acessibilidade_count;
var acessibilidade_validar;
var acessibilidade_elementos;

let contagem_aumento_tamanho_fonte = 0;

function aces_aumentarFonte(obj) {
    if (typeof back_up != "object")
        aces_inicializarFonte();

    if (obj.getAttribute("disabled") == "disabled") {
        return;
    }

    var elementos = acessibilidade_elementos;

    for (var i = 0; i < elementos.length; i++) {
        var tam = aces_getStyle(elementos[i], "fontSize");
        tam = parseFloat(tam) + .5;
        elementos[i].style.fontSize = tam + "px";
    }

    aces_contarMaisClicks();
}

function aces_diminuirFonte(obj) {
    if (typeof back_up != "object")
        aces_inicializarFonte();

    if (obj.getAttribute("disabled") == "disabled") {
        return;
    }

    var elementos = acessibilidade_elementos;

    for (var i = 0; i < elementos.length; i++) {

        var tam = aces_getStyle(elementos[i], "fontSize");
        tam = parseFloat(tam) - .5;
        elementos[i].style.fontSize = tam + "px";
    }

    aces_contarMenosClicks();
}

function aces_inicializarFonte() {

    acessibilidade_elementos = document.querySelectorAll("*");
    var elementos = acessibilidade_elementos;

    back_up = new Array();

    for (var i = 0; i < elementos.length; i++) {
        var tam = aces_getStyle(elementos[i], "fontSize");
        tam = parseFloat(tam);
        back_up[i] = tam;

    }

}

function aces_normalizarFonte() {

    if (typeof back_up != "object")
        return;

    var elementos = acessibilidade_elementos;

    for (var i = 0; i < elementos.length; i++) {
        elementos[i].style.fontSize = back_up[i] + "px";

    }

    aces_normalizarBotao();

}


    (function () {
    var Contrast = {
        storage: 'contrastState',
        cssClass: 'contrast',
        currentState: null,
        check: checkContrast,
        getState: getContrastState,
        setState: setContrastState,
        toogle: toogleContrast,
        updateView: updateViewContrast
    };

    window.toggleContrast = function () { Contrast.toogle(); };

    Contrast.check();

    function checkContrast() {
        this.updateView();
    }

    function getContrastState() {
        return localStorage.getItem(this.storage) === 'true';
    }

    function setContrastState(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }

    function updateViewContrast() {
        var body = document.body;

        if (this.currentState === null)
            this.currentState = this.getState();

        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }

    function toogleContrast() {
        this.setState(!this.currentState);
    }
})();

































function aces_get_default_colors() {
    colors.background = document.body.style.backgroundColor
}


function aces_getcookies_values(cookieRawText) {
    const cookies = {};
    cookieRawText.split(";").forEach(item => {
        const key = item.split("=")[0].trim()
        cookies[key] = item.split("=")[1].trim()
    });
    return cookies;
}

function aces_getmycookie(myname) {
    let cookies = aces_getcookies_values(document.cookie);
    const contraste = (cookies.contraste) ? parseInt(cookies.contraste) : 0;
    return contraste;
}

function aces_contarMaisClicks() {

    contagem_aumento_tamanho_fonte++;

    if (contagem_aumento_tamanho_fonte > 2) {
        var botaomais = document.querySelectorAll('.accessibility .botaomais');
        [].forEach.call(botaomais, function (obj) {
            obj.setAttribute("disabled", "disabled");
        });

    }

    var botaomenos = document.querySelectorAll('.accessibility .botaomenos');
    [].forEach.call(botaomenos, function (obj) {
        obj.removeAttribute("disabled");
    });

}

function aces_contarMenosClicks() {

    contagem_aumento_tamanho_fonte--;

    if (contagem_aumento_tamanho_fonte < -2) {
        var botaomenos = document.querySelectorAll('.accessibility .botaomenos');
        [].forEach.call(botaomenos, function (obj) {
            obj.setAttribute("disabled", "disabled");
        });
    }

    var botaomais = document.querySelectorAll('.accessibility .botaomais');
    [].forEach.call(botaomais, function (obj) {
        obj.removeAttribute("disabled");
    });
}

function aces_normalizarBotao() {
    contagem_aumento_tamanho_fonte = 0;
    var botaomais = document.querySelectorAll('.accessibility .botaomais');
    [].forEach.call(botaomais, function (obj) {
        obj.removeAttribute("disabled");
    });

    var botaomenos = document.querySelectorAll('.accessibility .botaomenos');
    [].forEach.call(botaomenos, function (obj) {
        obj.removeAttribute("disabled");
    });
}


function aces_getStyle(el, styleProp) {
    var value, defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
        // sanitize property name to css notation
        // (hypen separated words eg. font-Size)
        styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
        return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    } else if (el.currentStyle) { // IE
        // sanitize property name to camelCase
        styleProp = styleProp.replace(/\-(\w)/g, function (str, letter) {
            return letter.toUpperCase();
        });
        value = el.currentStyle[styleProp];
        // convert other units to pixels on IE
        if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
            return (function (value) {
                var oldLeft = el.style.left, oldRsLeft = el.runtimeStyle.left;
                el.runtimeStyle.left = el.currentStyle.left;
                el.style.left = value || 0;
                value = el.style.pixelLeft + "px";
                el.style.left = oldLeft;
                el.runtimeStyle.left = oldRsLeft;
                return value;
            })(value);
        }
        return value;
    }
}

//  Fim Acessibilidade



document.addEventListener("DOMContentLoaded", aces_normalizarBotao);
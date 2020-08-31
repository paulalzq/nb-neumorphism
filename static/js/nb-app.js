function establecerTema(nb) {
    localStorage.setItem('tema', themeName);
    document.documentElement.className = themeName;
}

function cambiarTema() {
    if (localStorage.getItem('tema') === 'tema-oscuro'){
        setTheme('tema-claro');
    } else {
        setTheme('tema-oscuro');
    }
}

( function() {
    if (localStorage.getItem('tema') === 'tema-oscuro') {
        setTheme('tema-oscuro');
    } else {
        setTheme('tema-claro');
    }
})();
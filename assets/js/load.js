const _load = (display) => {
    if(display === true) {
        _nav.innerHTML = __nav;
        _main.innerHTML = __main;
    } else {
        alert('Sayt hazırda aktiv deyil :(')
    }
}
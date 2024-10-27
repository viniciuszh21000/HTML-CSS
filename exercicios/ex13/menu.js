function mudouTamanho() {
    if (window.innerWidth >= 768) {
        opcao.style.display = 'block'
    } else {
        opcao.style.display = 'none'
    }
}



function clickMenu() {
    if (opcao.style.display == 'block') {
        opcao.style.display = 'none'
    } else {
        opcao.style.display = 'block'
    }
}
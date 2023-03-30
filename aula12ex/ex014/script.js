function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 12
    msg.innerHTML = `Agora são <strong>${hora}</strong> horas`
    if (hora >= 0 && hora < 12){
        img.src = 'pexels-martin-damboldt-814490.jpg'
        document.body.style.background = 'lightgreen'
    } else if(hora >= 12 && hora < 18){
        img.src = 'pexels-nihat-69224.jpg'
        document.body.style.background = 'lightblue'
    } else {
        img.src = 'pexels-pixabay-355465.jpg'
        document.body.style.background = 'darkblue'
    }
}

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res =  document.getElementById('res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os valores e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'criançaF.jpg')
            }else if(idade >= 10 && idade < 18){
                //adolescente
                img.setAttribute('src', 'adolescenteM.jpg')
            }else if(idade >=18 && idade < 60){
                //adulto
                img.setAttribute('src', 'homem.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }

        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'criançaM.jpg')
            }else if(idade >= 10 && idade < 18){
                //adolescente
                img.setAttribute('src', 'adolecenteF.jpg')
            }else if(idade >=18 && idade < 60){
                //adulto
                img.setAttribute('src', 'mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é um ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
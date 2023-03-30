var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas`)
if(hora < 12){
    console.log(`Estamos na manhã, ${hora} horas, bom dia`)
} else if (hora >= 12 && hora < 18){
    console.log(`Estamos na tarde, ${hora} horas, boa tarde`)
} else if(hora >= 18 && hora < 24){
    console.log(`Estamos na noite, ${hora} horas, Boa noite`)
} else {
    console.log(`Estamos na madrugada, ${hora} horas, boa madrugada`)
}
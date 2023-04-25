let VALOR_PADRA0=0

function add(v){
    valor+=v
}

let valor = 0
console.log(valor)

add(10)
console.log(valor)

add(5)
console.log(valor)

function soma(n1=VALOR_PADRA0, n2=VALOR_PADRA0){
    let res
    res=n1+n2
    return res
}

let resulta_soma = soma(5, 6)
//console.log(resulta_soma)
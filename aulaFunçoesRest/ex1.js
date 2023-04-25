function soma(...valores){
    let tam = valores.length
    let res=0
    for(let i of valores){
        res+=i
    }
    return res
}

console.log(soma(10,5,5,40))
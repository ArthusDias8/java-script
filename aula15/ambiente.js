let num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(`Nosso vetor tem ${num.length} posições`)
console.log(`A ordem crescente do vetor é ${num}`)
/*
for(let i = 0; i<num.length; i++){
    console.log(`a posição ${i} tem o valor ${num[i]}`)
} */
let pos = num.indexOf(8)
if(pos == -1){
    console.log('O valor não foi encontrado')
} else{
    console.log(`O valor está na posição ${pos}`)
}
for(let i in num){
    console.log(`a posição ${i} tem o valor ${num[i]}`)
}
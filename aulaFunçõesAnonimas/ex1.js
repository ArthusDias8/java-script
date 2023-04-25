let g= function(...valores){
    let res=0
    for(let v of valores){
        res+=v
    }
    return res
}

console.log(g(10,15))

let f=new Function("v1","v2","return v1+v2")
    
console.log(f(10,5))
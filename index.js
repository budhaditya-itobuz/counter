const display =document.getElementById('display')

const color=()=>{
    if(parseInt(display.innerText)>0)
    display.style.color="#00FF79"
    else if(parseInt(display.innerText)<0)
    display.style.color="#E1341E"
    else display.style.color="#000000"
}

const increament=()=>{
    display.innerText=parseInt(display.innerText)+1
    color()
}
const decreament=()=>{
    display.innerText=parseInt(display.innerText)-1
    color()
}
const reset=()=>{
    display.innerText=0
    color()
}
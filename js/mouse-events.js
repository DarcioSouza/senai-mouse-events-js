// number e btn

var num = 0
document.getElementById("number").innerText = num


var Btn = document.getElementById("btn")
Btn.addEventListener('click', somaUm)
    // Btn.addEventListener('mousemove', somaUm)   
    // Btn.addEventListener('mouseup', somaUm)
    // Btn.addEventListener('mouseleave', somaUm)
    // Btn.addEventListener('mouseenter', somaUm)

var Subt = document.getElementById("minus")
Subt.addEventListener('click', subtraiUm)


function somaUm() {
    num++;
    document.getElementById("number").innerText = num

}

function subtraiUm() {
    num--;
    document.getElementById("number").innerText = num

}
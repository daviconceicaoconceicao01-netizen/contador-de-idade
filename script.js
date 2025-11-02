function verificar () {

let agora = new Date()
let ano = agora.getFullYear()
let usu = document.getElementById('txtn1')
let res = document.getElementById('res')

    if (usu.value <= 0 || usu.value > ano) {
        alert('numero invalido!')
    }else {
        let idade = ano - Number(usu.value)
        res.innerHTML = `voce tem ${idade} anos. `
    }
}


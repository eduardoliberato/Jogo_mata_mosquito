var altura = 0
var largura = 0
var vidas = 1
var tempo = 15
var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?' , '')

if(nivel === 'normal'){
    var criaMosquitoTempo = 1500
} else if(nivel === 'dificil'){
    var criaMosquitoTempo = 1000
} else if (nivel === 'impossivel'){
    var criaMosquitoTempo = 750
}

function ajustaTamanhoPalcoJogo(){

altura  = window.innerHeight //recupera a altura da pagina
largura  = window.innerWidth // recupera a largura da pagina

console.log(altura, largura)

}

ajustaTamanhoPalcoJogo() // diz o tamanho atual da pagina

/* para dar uma posição aleatoria para a figura do mosquito
Math chama funções matematicas
.floor = arredonda o valor para baixo
.random = gera um valor aleatorio */

var cronometro = setInterval ( function(){
    tempo -= 1

    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    } else {
    document.getElementById('cronometro').innerHTML = tempo
    } }, 1000)
    

function posicaoRandomica() {

//remover o mosquito anterior antes de criar um novo (caso exista)
if(document.getElementById('mosquito')){
    document.getElementById('mosquito').remove()

    if(vidas >3){
        //fim de jogo
        window.location.href = 'fim_de_jogo.html'
    } else {
    document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"

    vidas++ 
            }
}

var posicaoX = Math.floor(Math.random() * largura) - 90  //menos 90 pra impedir que a imagem saia pra fora
var posicaoY = Math.floor(Math.random() * altura) - 90  // numeros randomicos vão de 0 a 1 , por isso a multiplicação

posicaoX = posicaoX < 0 ? 0 : posicaoX // se posição x menos que 0 então ela recebe o valor 0, se não ela recebe o valor dela mesmo
posicaoY = posicaoY < 0 ? 0 : posicaoY // pra evitar que o -90 dê um valor negativo

console.log (posicaoX , posicaoY)

//criar elemento html
var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosquito.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio() //se não concatenar o espaço lê se tudo junto e executa errado
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute' 
mosquito.id = 'mosquito'
mosquito.onclick = function (){
    this.remove() // o this se refere ao elemento que ele está atrelado, no caso o mosquito
}



document.body.appendChild(mosquito)
}

// fazer os mosquitos terem tamanhos diferentes 

function tamanhoAleatorio(){
    var classe = Math.floor(Math.random() * 3)

    switch(classe){
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

console.log (tamanhoAleatorio())

function ladoAleatorio(){
    var classe = Math.floor(Math.random() * 2)

    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
        
    }
}
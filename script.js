let escolha = ''
let computador = ['pedra', 'papel', 'tesoura']
 
let pontosJogador = 0;
let pontosComputador = 0;
 
document.querySelector('#pedra').addEventListener('mouseover', (tag) => {
    const obj = tag.currentTarget
    obj.setAttribute('class', 'a-jello-horizontal')
})
 
document.querySelector('#pedra').addEventListener('mouseout', (tag) => {
    const obj = tag.currentTarget
    obj.setAttribute('class', '')
})
 
document.querySelector('#papel').addEventListener('mouseover', (tag) => {
    const obj = tag.currentTarget
    obj.setAttribute('class', 'a-jello-horizontal')
})
 
document.querySelector('#papel').addEventListener('mouseout', (tag) => {
    const obj = tag.currentTarget
    obj.setAttribute('class', '')
})
 
document.querySelector('#tesoura').addEventListener('mouseover', (tag) => {
    const obj = tag.currentTarget
    obj.setAttribute('class', 'a-jello-horizontal')
})
 
document.querySelector('#tesoura').addEventListener('mouseout', (tag) => {
    const obj = tag.currentTarget
    obj.setAttribute('class', '')
})
 
document.querySelector('#pedra').addEventListener('click', (tag) => {
    tag.currentTarget.style.filter = 'brightness(50%)'
    document.querySelector('#papel').style.filter = 'brightness(100%)'
    document.querySelector('#tesoura').style.filter = 'brightness(100%)'
    escolha = 'pedra'
    console.log('Jogador escolheu ' + escolha)
})
 
document.querySelector('#papel').addEventListener('click', (tag) => {
    tag.currentTarget.style.filter = 'brightness(50%)'
    document.querySelector('#pedra').style.filter = 'brightness(100%)'
    document.querySelector('#tesoura').style.filter = 'brightness(100%)'
    escolha = 'papel'
    console.log('Jogador escolheu ' + escolha)
})
 
document.querySelector('#tesoura').addEventListener('click', (tag) => {
    tag.currentTarget.style.filter = 'brightness(50%)'
    document.querySelector('#papel').style.filter = 'brightness(100%)'
    document.querySelector('#pedra').style.filter = 'brightness(100%)'
    escolha = 'tesoura'
    console.log('Jogador escolheu ' + escolha)
})
 

function gerarNumero() {
    return Math.floor(Math.random() * 3)
}
 
document.querySelector('button').addEventListener('click', () => {
    
    if (!escolha) {
        alert('Escolha uma opção: Pedra, Papel ou Tesoura');
        return;
    }
 
    let aleatorio = gerarNumero()
    console.log('O computador escolheu: ' + computador[aleatorio])
 
    
    let obj2 = document.querySelector(`#${computador[aleatorio]}-pc`)
    obj2.style.filter = 'brightness(100%)'
    obj2.setAttribute('class', 'a-jello-horizontal')
 
    if (escolha === computador[aleatorio]) {
        console.log('EMPATE')
    } else if (escolha === 'pedra' && computador[aleatorio] === 'tesoura') {
        console.log('VC VENCEU')
        pontosJogador++;
    } else if (escolha === 'tesoura' && computador[aleatorio] === 'papel') {
        console.log('VC VENCEU')
        pontosJogador++;
    } else if (escolha === 'papel' && computador[aleatorio] === 'pedra') {
        console.log('VC VENCEU')
        pontosJogador++;
    } else {
        console.log('PERDEU... TENTE NOVAMENTE!')
        pontosComputador++;
    }
 
    
    document.querySelector('#pontos-jogador').textContent = pontosJogador;
    document.querySelector('#pontos-maquinas').textContent = pontosComputador;
 
    setTimeout(() => {
        document.querySelector('#pedra').style.filter = 'brightness(100%)'
        document.querySelector('#papel').style.filter = 'brightness(100%)'
        document.querySelector('#tesoura').style.filter = 'brightness(100%)'
        document.querySelector('#pedra-pc').style.filter = 'brightness(0%)'
        document.querySelector('#papel-pc').style.filter = 'brightness(0%)'
        document.querySelector('#tesoura-pc').style.filter = 'brightness(0%)'
 
        
        document.querySelector('#pedra').setAttribute('class', '')
        document.querySelector('#papel').setAttribute('class', '')
        document.querySelector('#tesoura').setAttribute('class', '')
        document.querySelector('#pedra-pc').setAttribute('class', '')
        document.querySelector('#papel-pc').setAttribute('class', '')
        document.querySelector('#tesoura-pc').setAttribute('class', '')
 
    
        escolha = ''
    }, 2000); 
})

window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');

    // Inicia o áudio no mudo para evitar bloqueios
    audio.volume = 0;
    audio.play().then(() => {
        // Aumenta o volume gradualmente após o autoplay funcionar
        setTimeout(() => {
            audio.volume = 0.5; // Volume normal
        }, 1000);
    }).catch(error => console.log("Autoplay bloqueado, esperando interação do usuário."));
});
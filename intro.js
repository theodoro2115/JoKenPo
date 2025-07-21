function redirectToIndex() {
    window.location.href = 'index.html'; }


document.addEventListener('keydown', redirectToIndex);


document.addEventListener('click', redirectToIndex);

window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('background-music');


    audio.volume = 0;
    audio.play().then(() => {
        setTimeout(() => {
            audio.volume = 0.5; 
        }, 1000);
    }).catch(error => console.log("Autoplay bloqueado, esperando interação do usuário."));
});
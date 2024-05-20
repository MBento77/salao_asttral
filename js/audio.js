document.addEventListener('DOMContentLoaded', (event) => {
    const audio = document.getElementById('background-audio');

    // Adiciona um evento de click ao documento para iniciar o áudio após interação do usuário
    const enableAudio = () => {
        audio.play().then(() => {
            // Autoplay iniciado
            console.log('Autoplay iniciado após interação do usuário.');
        }).catch(error => {
            // Erro ao tentar iniciar o autoplay
            console.log('Erro ao iniciar o autoplay:', error);
        });

        // Remove o evento de click após a primeira interação para evitar múltiplas chamadas
        document.removeEventListener('click', enableAudio);
    };

    // Adiciona o listener para iniciar o áudio após a interação do usuário
    document.addEventListener('click', enableAudio);
});
function initAnimarScroll() {
    const sections = document.querySelectorAll(".js-scroll");
    if(sections.length) {
        const windowMetade = window.innerHeight * 0.6;
        function animarScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if(isSectionVisible) {
                    section.classList.add('ativo');
                }
            })
        }
        animarScroll();
        window.addEventListener('scroll', animarScroll);
    }
}
initAnimarScroll();

function initModal() {
    const projetos = document.querySelectorAll('.js-projetos picture')
    const modalImagens = document.querySelectorAll('.modal')
    const fechar = document.querySelectorAll('.botao-modal');
    if(projetos.length) {
        function activeModal(index) {
            modalImagens.forEach((imagem) => {
                imagem.classList.remove('ativo');
            })
            modalImagens[index].classList.add('ativo');
        }
        
        function fecharModal() {
            modalImagens.forEach((imagem) => {
                imagem.classList.remove('ativo')
            })
        }
        
        fechar.forEach((close) => {
            close.addEventListener('click', fecharModal);
        })
        
        projetos.forEach((item, index) => {
            item.addEventListener('click', () => {
                activeModal(index);
            })
        })
    }
}
initModal();

// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Efeito de Revelação (Fade-in) ao carregar
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(20px)';
        heroContent.style.transition = 'opacity 1s ease, transform 1s ease';

        setTimeout(() => {
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 200);
    }

    // 2. Mudança no Header ao rolar a página
    const header = document.querySelector('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.backgroundColor = 'rgba(0, 0, 0, 0.95)';
                header.style.padding = '1rem 0';
                header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.5)';
            } else {
                header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
                header.style.padding = '1.5rem 0';
                header.style.boxShadow = 'none';
            }
        });
    }

    const modal = document.querySelector('#demo-modal');
    const modalTitle = document.querySelector('#demo-modal-title');
    const demoEmail = document.querySelector('#demo-email');
    const demoPassword = document.querySelector('#demo-password');
    const demoLink = document.querySelector('#demo-link');
    const copyButton = document.querySelector('[data-copy-credentials]');

    const closeModal = () => {
        if (!modal) {
            return;
        }

        modal.classList.remove('is-open');
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    };

    const openModal = (trigger) => {
        if (!modal || !modalTitle || !demoEmail || !demoPassword || !demoLink) {
            return;
        }

        const title = trigger.dataset.demoTitle || 'Demo do sistema';
        const email = trigger.dataset.demoEmail || 'teste@auryxtech.com.br';
        const password = trigger.dataset.demoPassword || 'Defina a senha de demonstração';
        const url = trigger.dataset.demoUrl || '';

        modalTitle.textContent = title;
        demoEmail.textContent = email;
        demoPassword.textContent = password;

        if (url) {
            demoLink.textContent = 'Abrir demo guiada';
            demoLink.href = url;
            demoLink.classList.remove('is-disabled');
            demoLink.removeAttribute('aria-disabled');
            demoLink.setAttribute('target', '_blank');
            demoLink.setAttribute('rel', 'noopener noreferrer');
        } else {
            demoLink.textContent = 'Link da demo em configuração';
            demoLink.href = '#';
            demoLink.classList.add('is-disabled');
            demoLink.setAttribute('aria-disabled', 'true');
            demoLink.removeAttribute('target');
            demoLink.removeAttribute('rel');
        }

        modal.classList.add('is-open');
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    };

    document.querySelectorAll('[data-modal-open]').forEach((button) => {
        button.addEventListener('click', () => openModal(button));
    });

    document.querySelectorAll('[data-modal-close]').forEach((button) => {
        button.addEventListener('click', closeModal);
    });

    if (modal) {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    if (copyButton) {
        copyButton.addEventListener('click', async () => {
            const credentials = [
                `E-mail: ${demoEmail ? demoEmail.textContent : ''}`,
                `Senha: ${demoPassword ? demoPassword.textContent : ''}`
            ].join('\n');

            try {
                await navigator.clipboard.writeText(credentials);
                copyButton.textContent = 'Acesso manual copiado';

                setTimeout(() => {
                    copyButton.textContent = 'Copiar acesso manual';
                }, 1800);
            } catch (error) {
                alert('Não foi possível copiar automaticamente.');
            }
        });
    }

    console.log("AuryxTech: identidade carregada com sucesso.");
});
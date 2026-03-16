function enviarWhatsApp() {
    const ramo = document.getElementById('ramo').value;
    // Pega o valor da opção amigável selecionada
    const objetivo = document.querySelector('input[name="tipo"]:checked')?.value;
    const cores = document.getElementById('cores').value;
    
    if (!ramo || !objetivo) {
        alert("Por favor, escolha o seu ramo e o objetivo do projeto.");
        return;
    }

    const mensagem = window.encodeURIComponent(
        `*NOVO ORÇAMENTO - S.P. TECH SOLUTIONS*\n\n` +
        `🏪 *Negócio:* ${ramo}\n` +
        `🎯 *Objetivo:* ${objetivo}\n` +
        `🎨 *Preferência de Cores:* ${cores || 'A definir'}\n\n` +
        `Gostaria de agendar uma consultoria para entender os próximos passos.`
    );

    window.open(`https://wa.me/5511980177729?text=${mensagem}`, '_blank');
}

let modoCelular = false;

function alternarDispositivo() {
    const img = document.getElementById('img-dispositivo'); // Verifica se o ID no HTML é este
    const tela = document.getElementById('tela-interna');
    
    modoCelular = !modoCelular;

    if (modoCelular) {
        img.src = "../../assets/img/celular_fundoB.png";
        tela.className = "modo-celular";
    } else {
        img.src = "../../assets/img/monitor_fundoB.png";
        tela.className = "modo-monitor";
    }
}

function atualizarTipo(tipo) {
    const label = document.getElementById('preview-label');
    const visual = document.querySelector('.skeleton-visual');
    const circulo = document.querySelector('.ske-circle');

    label.innerText = tipo;
    
    if (tipo === 'Sistema de Vendas') {
        // Layout para sistema (mais complexo, dashboard)
        visual.style.flexDirection = 'row';
        circulo.style.display = 'block';
    } else {
        // Layout para site vitrine (mais simples)
        visual.style.flexDirection = 'column';
        circulo.style.display = 'block';
    }
}

function atualizarPreviewRamo() {
    const ramo = document.getElementById('ramo').value;
    const label = document.getElementById('preview-label');
    
    if (ramo === "Petshop") {
        label.innerText = "Meu Petshop Online 🐾";
    } else if (ramo === "Mercadinho") {
        label.innerText = "Mercado Digital 🛒";
    } else if (ramo === "Roupas") {
        label.innerText = "Minha Loja de Roupas 👕";
    } else {
        label.innerText = "Seu Sucesso Digital";
    }
}

function mudarCorPreview() {
    const textoCor = document.getElementById('cores').value.toLowerCase();
    const circulo = document.querySelector('.ske-circle');
    
    // Mapeamento simples de cores comuns
    const cores = {
        'azul': '#0047ab',
        'verde': '#2e8b57',
        'vermelho': '#b22222',
        'preto': '#1a1a1a',
        'dourado': '#d4af37' // Cor padrão S.P. Tech
    };

    // Aplica a cor se encontrar a palavra-chave
    circulo.style.backgroundColor = cores['dourado']; // Padrão
    for (let cor in cores) {
        if (textoCor.includes(cor)) {
            circulo.style.backgroundColor = cores[cor];
            // Opcional: mudar a cor do label também
            document.getElementById('preview-label').style.color = cores[cor];
        }
    }
}

// 1. Função para atualizar as funcionalidades (Checkboxes)
function atualizarFuncionalidades() {
    const login = document.getElementById('f-login').checked;
    const pag = document.getElementById('f-pag').checked;
    const chat = document.getElementById('f-chat').checked;

    // Mostra ou esconde as linhas no preview conforme o check
    document.getElementById('ske-login').style.display = login ? 'block' : 'none';
    document.getElementById('ske-pagamento').style.display = pag ? 'block' : 'none';
    document.getElementById('ske-chat').style.display = chat ? 'block' : 'none';
}

// 2. Função para atualizar as cores (Melhorada)
function mudarCorPreview() {
    const corInput = document.getElementById('cores').value.toLowerCase();
    const elementoCor = document.getElementById('ske-main-color');
    const label = document.getElementById('preview-label');

    const mapaCores = {
        'azul': '#007bff',
        'preto': '#1a1a1a',
        'verde': '#28a745',
        'vermelho': '#dc3545',
        'amarelo': '#ffc107',
        'dourado': '#d4af37'
    };

    // Aplica a cor detectada
    for (const [nome, hex] of Object.entries(mapaCores)) {
        if (corInput.includes(nome)) {
            elementoCor.style.backgroundColor = hex;
            label.style.color = hex;
            break;
        }
    }
}

// 3. Adicione os ouvintes de evento no seu init ou no final do arquivo
document.querySelectorAll('input[type="checkbox"]').forEach(check => {
    check.addEventListener('change', atualizarFuncionalidades);
});

document.getElementById('cores').addEventListener('input', mudarCorPreview);
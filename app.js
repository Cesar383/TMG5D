// Dados iniciais dos terapeutas
let terapeutas = [
    { nome: "Terapeuta 1", atendimentos: 15, horas: 120, nivel: 1 },
    { nome: "Terapeuta 2", atendimentos: 25, horas: 180, nivel: 2 },
    { nome: "Terapeuta 3", atendimentos: 30, horas: 250, nivel: 3 }
];

// Função para renderizar o dashboard
function renderDashboard() {
    let dashboard = document.getElementById('dashboard');
    dashboard.innerHTML = ''; // Limpa o dashboard antes de renderizar

    terapeutas.forEach(terapeuta => {
        let div = document.createElement('div');
        div.classList.add('dashboard-item');

        div.innerHTML = `
            <h3>${terapeuta.nome}</h3>
            <p>Atendimentos: ${terapeuta.atendimentos}</p>
            <p>Horas: ${terapeuta.horas}</p>
            <p>Nível: ${terapeuta.nivel}</p>
        `;
        
        dashboard.appendChild(div);
    });
}

// Função para adicionar um novo terapeuta
function adicionarTerapeuta(nome, atendimentos, horas, nivel) {
    terapeutas.push({ nome, atendimentos, horas, nivel });
    renderDashboard(); // Atualiza o dashboard
}

// Ação ao clicar no botão
document.getElementById('adicionar-terapeuta').addEventListener('click', () => {
    let nome = prompt("Nome do terapeuta:");
    let atendimentos = parseInt(prompt("Número de atendimentos:"));
    let horas = parseInt(prompt("Horas atendidas:"));
    let nivel = parseInt(prompt("Nível do terapeuta:"));

    adicionarTerapeuta(nome, atendimentos, horas, nivel);
});

// Inicializar o dashboard ao carregar a página
window.onload = function() {
    renderDashboard();
};

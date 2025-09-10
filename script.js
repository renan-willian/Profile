// Rolagem suave ao clicar no menu
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Lógica para alternar tema (modo escuro)
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Por padrão, o tema é escuro. Verifica se o usuário salvou o tema claro.
if (localStorage.getItem('theme') === 'light') {
  body.classList.remove('dark-mode');
  themeToggle.innerHTML = '🌙';
} else {
  body.classList.add('dark-mode'); // Garante que o modo escuro seja aplicado
  // Garante que o ícone esteja correto no carregamento inicial do modo escuro
  themeToggle.innerHTML = '☀️'; 
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.innerHTML = '☀️'; // Ícone de sol para ir para o modo claro
  } else {
    localStorage.setItem('theme', 'light');
    themeToggle.innerHTML = '🌙'; // Ícone de lua para ir para o modo escuro
  }
});

// Exemplo de mensagem no console
console.log("Portfólio de Renan carregado com sucesso!");

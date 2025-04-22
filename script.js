function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("show");
  }
  
  document.addEventListener('DOMContentLoaded', () => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('service-worker.js');
    }
  
    const form = document.getElementById('form-agendamento');
    const whatsappBtn = document.getElementById('whatsappBtn');
  
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      const nome = form.elements[0].value;
      const dataHora = form.elements[1].value;
      const servico = form.elements[2].value;
  
      alert(`✅ Agendamento registrado:\nNome: ${nome}\nData/Hora: ${dataHora}\nServiço: ${servico}`);
  
      const msg = `Olá, Tessy! Gostaria de confirmar meu agendamento:%0ANome: ${nome}%0AServiço: ${servico}%0AData/Hora: ${dataHora}`;
      const whatsappURL = `https://wa.me/556681499177?text=${msg}`;
      whatsappBtn.style.display = 'block';
      whatsappBtn.onclick = () => window.open(whatsappURL, '_blank');
    });
  });
  
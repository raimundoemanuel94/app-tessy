<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Admin - Agenda Tessy</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: Arial, sans-serif;
      background: #f5f5f5;
      display: flex;
      height: 100vh;
    }

    .sidebar {
      width: 220px;
      background: #c94f7c;
      color: white;
      display: flex;
      flex-direction: column;
      padding: 20px;
    }

    .sidebar h2 {
      font-size: 20px;
      margin-bottom: 30px;
    }

    .sidebar a {
      color: white;
      text-decoration: none;
      margin-bottom: 15px;
      font-weight: bold;
      transition: opacity 0.3s;
    }

    .sidebar a:hover {
      opacity: 0.8;
    }

    .content {
      flex: 1;
      padding: 30px;
      background: white;
      overflow-y: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 20px;
    }

    th, td {
      padding: 12px;
      text-align: center;
      border: 1px solid #ddd;
    }

    th {
      background-color: #f9dbe4;
    }

    button {
      margin-top: 10px;
      padding: 10px 20px;
      background-color: #c94f7c;
      color: white;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      font-weight: bold;
    }

    button:hover {
      background-color: #b03e6c;
    }
  </style>
</head>
<body>
  <div class="sidebar">
    <h2>Tessy Admin</h2>
    <a href="#agenda">📋 Agenda</a>
    <a href="#config">⚙️ Configurações</a>
    <a href="#sair">🚪 Sair</a>
  </div>
  <div class="content">
    <h2>Painel de Agendamentos 📋</h2>
    <button onclick="carregarAgenda()">🔄 Atualizar Agenda</button>
    <table id="tabela-agenda">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Data/Hora</th>
          <th>Serviço</th>
          <th>Data de Envio</th>
        </tr>
      </thead>
      <tbody></tbody>
    </table>
  </div>

  <script>
    function carregarAgenda() {
      const url = 'https://opensheet.elk.sh/13DOG0PR-amOiFyLiGRMBqQOGSKDOQh116fNhvdbA0iE/Página1';
      fetch(url)
        .then(res => res.json())
        .then(data => {
          const tbody = document.querySelector("#tabela-agenda tbody");
          tbody.innerHTML = "";
          data.slice(1).reverse().forEach(row => {
            const tr = document.createElement("tr");
            tr.innerHTML = `
              <td>${row.Nome}</td>
              <td>${row.DataHora}</td>
              <td>${row.Serviço}</td>
              <td>${row['Data de Envio'] || '-'}</td>
            `;
            tbody.appendChild(tr);
          });
        })
        .catch(err => {
          alert("Erro ao carregar agendamentos.");
          console.error(err);
        });
    }

    window.onload = carregarAgenda;
  </script>
</body>
</html>

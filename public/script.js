const { response } = require("express");

// public/script.js
document.addEventListener('DOMContentLoaded', () => {
  // Lógica para interagir com o backend será adicionada aqui
  const apiUrl = 'http://localhost:8008/tasks'; // Atualize com a URL correta do seu servidor

  // Função para obter a lista de tarefas
  function getTasks() {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        console.log(data); // Exibir os dados no console (para fins de teste)
        // Implemente a lógica para exibir as tarefas na interface
        
      })
      .catch(error => console.log('Erro ao obter tarefas: ', error));
  }

  function addTask(task) {
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data); // Exibir os dados no console (para fins de teste)
        // Implemente a lógica para atualizar a interface
      })
      .catch(error => console.error('Erro ao adicionar tarefa:', error));
  }

  // Adapte e crie funções para atualizar e excluir tarefas

  // Manipule o formulário de adição de tarefas
  document.getElementById('addTaskForm').addEventListener('submit', event => {
    event.preventDefault();
    const task = document.getElementById('task').value;
    addTask(task);
  });

   // Chame a função para obter tarefas quando a página carregar
   getTasks();




});

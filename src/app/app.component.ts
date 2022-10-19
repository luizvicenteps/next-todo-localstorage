import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'aula-final';
  constructor() { }

  ngOnInit(): void {
    this.startTasks();
  }

  private startTasks() {
    // const tasks = {
    //   "tasks": [
    //     { "id": "1", "title": "Comprar ração", "done": true },
    //     { "id": "2", "title": "Pintar a casa", "done": false },
    //     { "id": "3", "title": "Verificar torneira vazando", "done": true },
    //     { "id": "4", "title": "Terminar o curso", "done": false },
    //     { "id": "5", "title": "Visitar os amigos", "done": true },
    //     { "id": "6", "title": "Trocar a lâmpada", "done": false },
    //     { "id": "7", "title": "Alimentar o tubarão", "done": true },
    //     { "id": "8", "title": "Comprar passagens", "done": true },
    //     { "id": "9", "title": "Passeio com a família", "done": true },
    //     { "id": "10", "title": "Comprar blusa nova", "done": false },
    //     { "id": "11", "title": "Pegar roupas na lavanderia", "done": true },
    //     { "id": "12", "title": "Arrumar o carro", "done": false },
    //     { "id": "13", "title": "Comprar vitaminas", "done": true }
    //   ]
    // }
    const tasks = {
      "tasks": []
    }
    const haveTask = localStorage.getItem('tasks');
    if (!haveTask) {
      localStorage.setItem("tasks", JSON.stringify(tasks))
    }
  }
}

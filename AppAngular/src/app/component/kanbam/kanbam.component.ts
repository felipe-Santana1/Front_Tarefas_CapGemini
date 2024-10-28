import { Component } from '@angular/core';
import { Tarefa } from '../tarefas/model/tarefa';

@Component({
  selector: 'app-kanbam',
  templateUrl: './kanbam.component.html',
  styleUrls: ['./kanbam.component.css']
})
export class KanbamComponent {

  tarefas: Tarefa[] = [];
}

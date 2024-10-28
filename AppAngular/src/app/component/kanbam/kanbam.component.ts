import { Component, OnInit } from '@angular/core';
import { Tarefa } from '../tarefas/model/tarefa';
import { TarefaService } from '../tarefas/tarefa.service';

@Component({
  selector: 'app-kanbam',
  templateUrl: './kanbam.component.html',
  styleUrls: ['./kanbam.component.css']
})
export class KanbamComponent implements OnInit {


  constructor(private service: TarefaService) {}

  tarefas: Tarefa[] = [];


  ngOnInit(): void {
    this.listarTarefas();
  }
  
  listarTarefas(){
    this.service.getAllTarefa().subscribe(
      result => {
        this.tarefas = result;
        console.log(result)
      }
    )
  }
}
